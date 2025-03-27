'use server';

import GetConfig from "./config";

const config = GetConfig();

export interface IToken {
    uuid: string,
    access_token: string,
    access_token_expires: number,
    refresh_token: string,
    refresh_token_expires: number
}
export interface ITokenResponse {
    token: IToken | null,
    success: boolean,
    message: string
}

export async function Authenticate(username: string, password: string, sessionId: string): Promise<ITokenResponse> {
    const body = {
        username: username,
        password: password,
    }
    // TODO: we need to fix the auth_uri to include the http/https protocol
    const response = await fetch(`http://${config.auth_uri}token/${config.app}/authenticate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'crowemi-client-id': config.crowemi_client_id,
            'crowemi-client-secret-key': config.crowemi_client_secret,
            'crowemi-session-id': sessionId,
        },
        body: JSON.stringify(body)
    });

    // Log response details for debugging
    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));
    
    // Check if response is ok before parsing
    if (!response.ok) {
        const errorText = await response.json();
        console.error('Response error:', errorText);
        return {
            token: null,
            success: false,
            message: errorText["detail"]
        }
    }

    try {
        const token = await response.json() as IToken;
        return {
            token: token,
            success: true,
            message: 'Authentication successful'
        }
    } catch (error) {
        // TODO: log error
        console.error('JSON parsing error:', error);
        const responseText = await response.text();
        console.error('Raw response:', responseText);
        return {
            token: null,
            success: false,
            message: 'Failed to parse response as JSON'
        }
    }
}
export async function Refresh(token: string, sessionId: string): Promise<ITokenResponse> {
    const response = await fetch(`http://${config.auth_uri}token/${config.app}/refresh`, {
        method: 'POST',
        headers: {
            'crowemi-client-id': config.crowemi_client_id,
            'crowemi-client-secret-key': config.crowemi_client_secret,
            'crowemi-session-id': sessionId,
            'Authorization': `Bearer ${token}`,
        },
    });
    // Check if response is ok before parsing
    if (!response.ok) {
        const errorText = await response.text();
        console.error('Response error:', errorText);
        return {
            token: null,
            success: false,
            message: 'Failed to refresh token'
        }
    }

    try {
        const token = await response.json() as IToken;
        return {
            token: token,
            success: true,
            message: 'Refresh successful'
        }
    } catch (error) {
        // TODO: log error
        console.error('JSON parsing error:', error);
        const responseText = await response.text();
        console.error('Raw response:', responseText);
        return {
            token: null,
            success: false,
            message: 'Failed to parse response as JSON'
        }
    }
}
export async function Validate(token: string, sessionId: string): Promise<ITokenResponse> {
    const response = await fetch(`http://${config.auth_uri}token/${config.app}/validate`, {
        method: 'POST',
        headers: {
            'crowemi-client-id': config.crowemi_client_id,
            'crowemi-client-secret-key': config.crowemi_client_secret,
            'crowemi-session-id': sessionId,
            'Authorization': `Bearer ${token}`,
        },
    });
    // Check if response is ok before parsing
    if (!response.ok) {
        const errorText = await response.text();
        console.error('Response error:', errorText);
        return {
            token: null,
            success: false,
            message: 'Failed to validate token'
            }
    }

    try {
        const token = await response.json() as IToken;
        return {
            token: token,
            success: true,
            message: 'Token validated'
        }
    } catch (error) {
        // TODO: log error
        console.error('JSON parsing error:', error);
        const responseText = await response.text();
        console.error('Raw response:', responseText);
        return {
            token: null,
            success: false,
            message: 'Failed to parse response as JSON'
        }
    }
}