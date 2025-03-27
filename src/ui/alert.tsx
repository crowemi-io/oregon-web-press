import { XCircleIcon } from "@heroicons/react/24/outline";

export default function Alert({message}: {message: string[]}) {
    return (
        <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="shrink-0">
          <XCircleIcon aria-hidden="true" className="size-5 text-red-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">{message}</h3>
          <div className="mt-2 text-sm text-red-700">
          </div>
        </div>
      </div>
    </div>
    )
}