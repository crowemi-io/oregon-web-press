"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import {
  CheckIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export enum ModalType {
  Success,
  Error,
  Warning,
}

export interface IModalProps {
  message: string;
  title: string;
  type: ModalType;
  button: boolean;
  open: boolean;
  setOpen: (value: boolean) => void;
}

function addButton(setOpen: (value: boolean) => void) {
  return (
    <div className="mt-5 sm:mt-6">
      <button
        type="button"
        onClick={() => setOpen(false)}
        className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm"
      >
        okay
      </button>
    </div>
  );
}
function getIcon(type: ModalType) {
  switch (type) {
    case ModalType.Success:
      return (
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-green-100">
          <CheckIcon aria-hidden="true" className="size-6 text-green-600" />
        </div>
      );
    case ModalType.Error:
      return (
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-red-100">
          <ExclamationCircleIcon
            aria-hidden="true"
            className="size-6 text-red-600"
          />
        </div>
      );
    case ModalType.Warning:
      return (
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-yellow-100">
          <ExclamationTriangleIcon
            aria-hidden="true"
            className="size-6 text-yellow-600"
          />
        </div>
      );
  }
}

export default function Modal(
  props: IModalProps
) {
  return (
    <Dialog open={props.open} onClose={props.setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div>
              {getIcon(props.type)}
              <div className="mt-3 text-center sm:mt-5">
                <DialogTitle
                  as="h3"
                  className="text-base font-semibold text-gray-900"
                >
                  {props.title}
                </DialogTitle>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{props.message}</p>
                </div>
              </div>
            </div>
            {props.button ? addButton(props.setOpen) : null}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
