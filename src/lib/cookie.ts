import { cookies } from 'next/headers'
import { IToken } from './token';

export async function SetTokenCookies(token: IToken | null) {
    if (token) {
        await SetCookie('crowemi-user-id', token.uuid, token.access_token_expires);
        await SetCookie('crowemi-access-token', token.access_token, token.access_token_expires);
        await SetCookie('crowemi-refresh-token', token.refresh_token, token.refresh_token_expires);
    }
}

export async function GetCookie(name: string) : Promise<string | null> {
    const cookieStore = await cookies();
    return cookieStore.get(name)?.value || null;
}
export async function SetCookie(name: string, value: string, exp: number) {
    const cookieStore = await cookies();
    cookieStore.set(name, value, {
        httpOnly: true,
        sameSite: 'strict',
        secure: true,
        expires: exp * 1000,
        path: '/',
    });
}
export async function DeleteCookie(name: string | null) {
    if (name) {
        // TODO: add logging
        (await cookies()).delete(name);
    } else {
        // TODO: add logging
        ((await cookies()).getAll()).forEach(async cookie => {
            (await cookies()).delete(cookie.name);
        });
    }
}