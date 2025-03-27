'use server';

import { GetCookie, SetTokenCookies } from "./cookie";
import { Authenticate, ITokenResponse } from "./token";
import { z } from "zod";

import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";


export async function doRegister(formData: FormData) {}

type LoginState = {
    errors?: {
        message?: string[];
        username?: string[];
        password?: string[];
    };
}
const LoginFormSchema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(1, "Password is required"),
});

export async function doLogin(
    state: LoginState | undefined,
    formData: FormData
): Promise<LoginState | undefined> {
    const sessionID = await GetCookie('crowemi-session-id');
    const validate = LoginFormSchema.safeParse({
        username: formData.get("username"),
        password: formData.get("password")
    });
    if(!validate.success){
        return {
            errors: validate.error.flatten().fieldErrors,
        }
    }

    const tokenResponse = await Authenticate(validate.data.username, validate.data.password, sessionID ?? "no session id") as ITokenResponse;
    if(tokenResponse.success){
        if(tokenResponse.token){
            const token = tokenResponse.token;
            await SetTokenCookies(token);
            (await cookies()).set('crowemi-skip-validation', 'true');
            redirect('/', RedirectType.replace);
        }
        redirect('/', RedirectType.replace);
    } else {
        return { errors: { message: [tokenResponse.message] } };
    }
}

export async function isLogin(): Promise<{ success: boolean, userID: string | null }> {
    const userID = await GetCookie("crowemi-user-id");
    if (userID) {
        return {success: true, userID: userID};
    }
    return {success: false, userID: null};
}