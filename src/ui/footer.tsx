'use client'

import { subscribe } from "@/models/newsletter";
import {Modal, ModalType} from "./modal";
import type {IModalProps} from "./modal";
import React, { useState } from "react";
import Image from "next/image";

const navigation = {
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/oregon-web-pres/",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
          <path
            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
            clipRule="evenodd"
            fillRule="evenodd"
          />
        </svg>
      ),
    }
  ],
};

export default function Footer() {
  const [modal, setModal] = useState({ message: '', title: '', type: ModalType.Success, button: true, open: false, setOpen: setOpen } as IModalProps);

  function setOpen(open: boolean) : void { setModal(modal => ({ ...modal, open: open })) }

  async function handler(formData: any) {
    const email = formData.get('email');
    const ret = await subscribe(email);

    let message: string = "";
    if (ret.success) {
      message = ret.message ? ret.message : 'You\'ve been subscribed';
      var title = 'Success';
      var type = ModalType.Success;
    } else {
      message = ret.message ? ret.message : 'Something went wrong';
      var title = 'Uh oh! Something isn\'t right';
      var type = ModalType.Error;
    }
    setModal({ message: message, title: title, type: type, button: true, open: true, setOpen: setOpen});
  }

  return (
    <>
      <footer className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="py-8 justify-center ">
            <div className="pt-6">
              <Image
                alt="Oregon Web Press"
                src="/assets/logo-owp-blue.png"
                className="h-9"
                width={100}
                height={100}
              />
            </div>
            <div className="pt-6 text-sm/6 text-gray-600">
            <p>
            <a href="tel:+15419263000">(541)-926-3000</a> | 263 29th Ave SW Albany, OR 97322
            </p>
            <p>
              <a href="mailto:contact@oregonwebpress.com">contact@oregonwebpress.com</a>
            </p>
            </div>
          </div>

          <div className="border-t border-gray-900/10 pt-8 lg:flex lg:items-center lg:justify-between">
            <div>
              <h3 className="text-sm/6 font-semibold text-gray-900">
                subscribe to our newsletter
              </h3>
              <p className="mt-2 text-sm/6 text-gray-600">
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
            </div>

            <form action={handler} className="mt-6 sm:flex sm:max-w-md lg:mt-0">
              <label htmlFor="email" className="sr-only">
                email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="enter your email"
                autoComplete="email"
                className="w-full min-w-0 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:w-56 sm:text-sm/6"
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm"
                >
                  subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="mt-8 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex gap-x-6 md:order-2">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="size-6" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-sm/6 text-gray-600 md:order-1 md:mt-0">
              &copy; { new Date().getFullYear() } Oregon Web Press. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      <Modal {...modal} />
    </>
  );
}
