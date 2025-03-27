import { Validate, Refresh, ITokenResponse } from './lib/token';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { v4 as uuidv4 } from 'uuid'
import { SetTokenCookies, SetCookie, DeleteCookie } from './lib/cookie';

export async function middleware(request: NextRequest) {
    const response = NextResponse.next()

    console.log('Middleware is running for:', request.url);
    console.log('Cookies:', request.cookies.getAll());
    // every request should delete the user id
    await DeleteCookie('crowemi-user-id');
    // Get the existing session ID from cookies, if no session ID exists, create one
    // maybe we should do this a different way ?
    const sessionId = request.cookies.get('crowemi-session-id')?.value || uuidv4();
    // If no session ID exists, create one
    if (!request.cookies.get('crowemi-session-id')?.value) {
        await SetCookie('crowemi-session-id', sessionId, 0);
    }

    const access_token = request.cookies.get('crowemi-access-token')?.value;
    const refresh_token = request.cookies.get('crowemi-refresh-token')?.value;
    const skip_validation = request.cookies.get('crowemi-skip-validation')?.value;

    if (skip_validation) {
        await DeleteCookie('crowemi-skip-validation');
        return response;
    }

    if (access_token || refresh_token) {
        // TODO: add logging
        if (access_token) {
            const valid = await Validate(access_token, sessionId) as ITokenResponse;
            if (valid.success) {
                // TODO: add logging
                if (valid.token) {
                    SetTokenCookies(valid.token);
                    console.log('Access token is valid');
                }
            }
        } else if (refresh_token) {
            // TODO: add logging
            const refresh = await Refresh(refresh_token, sessionId) as ITokenResponse;
            if(refresh.success){
                if(refresh.token){
                    SetTokenCookies(refresh.token);
                    console.log('Refresh token is valid, refreshing...');
                }
            }
        }
    }

    // Clone the response to modify it
    return response;

}

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public files (e.g. /images/, /assets/, etc.)
         * - auth-related routes
         */
        '/((?!api|_next/static|_next/image|favicon.ico|images|assets|login|auth|.*\\..*$).*)'
    ]
} 