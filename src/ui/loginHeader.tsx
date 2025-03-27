'use client';

import { isLogin } from "@/lib/auth";
import { useState } from "react";

async function loginCheck(){
    'use server'
    const ret = await isLogin();
    return ret.success;
}

export default function LoginHeader() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    loginCheck();

    function loggedIn() {
        return (<>
            <h4>Hello, User!</h4> 
        </>);
    }
    function notLoggedIn() {
        return (
            <>
                <a
                href="/login"
                className="text-sm/6 font-semibold text-primary hover:text-tertiary"
                >
                log in
                </a>
                <span className="text-sm/6 font-semibold px-2 text-primary"> / </span>
                <a
                href="/register"
                className="text-sm/6 font-semibold text-primary hover:text-tertiary"
                >
                register
                </a>
            </>
            );
    }

    return (
        <div className="pt-2 hidden lg:flex lg:justify-end pb-2">
        {isLoggedIn ? loggedIn() : notLoggedIn()}
        </div>
  );
}
