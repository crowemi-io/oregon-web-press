import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-20">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-pretty text-5xl tracking-tight text-tertiary sm:text-7xl">
                expanding your reach with <span className="font-bold text-primary">print</span> for over 30 years
                </h1>
                <p className="mt-6 text-lg/8 text-gray-600">
                For over 30 years, Oregon Web Press has printed high-quality products for our communities on the West Coast. Our skilled and dedicated employees make every printed product to the highest level of quality.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="/services"
                    className="rounded-md bg-primary hover:bg-tertiary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
                  >
                    services
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Image src="/assets/print-products.png" alt="" width={1024} height={676} />
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
    </>
  )
}
