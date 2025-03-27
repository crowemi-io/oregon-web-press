'use client';

import { doLogin } from "@/lib/auth";
import { useActionState } from "react";
import Alert from "./alert";

export default function Login() {
  const [state, action, pending] = useActionState(doLogin, undefined)

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-primary">
            sign in to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action={action} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm/6 font-medium text-gray-900"
              >
                username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="string"
                  required
                  autoComplete="username"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:tertiary sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-primary hover:text-tertiary"
                  >
                    forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:tertiary sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={pending}
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
              >
                sign in
              </button>
            </div>
            {state?.errors?.message && <Alert message={state.errors.message} />}
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            don't have an account?{" "}
            <a
              href="/register"
              className="font-semibold text-primary hover:text-tertiary"
            >
              register
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
