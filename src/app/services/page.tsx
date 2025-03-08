import Image from "next/image";
import Carousel from "@/ui/carousel";

export default function Services() {
  return (
    <>
      <div className="bg-secondary py-12 sm:py-24">
        <div className="md:grid md:grid-cols-2">
          <Image
            src="/services/services-group.png"
            alt=""
            width={1024}
            height={676}
            loading="eager"
          />
          <div className="px-16 py-16 md:flex md:items-center">
            <h1 className="text-pretty text-3xl tracking-tight text-tertiary sm:text-5xl">
              communicate with your audience in{" "}
              <span className="font-bold text-primary">unique</span> and{" "}
              <span className="font-bold text-primary">powerful</span> ways
            </h1>
          </div>
        </div>
      </div>

      <div className="py-12 px-12 sm:py-24">
        <div className="md:grid md:grid-cols-2">
          <Image
            src="/services/services-magazine-1024x682.jpg"
            alt=""
            width={1024}
            height={676}
            loading="lazy"
          />
          <div className="px-16 py-16 md:flex md:items-center">
            <div className="max-w-lg">
              <h1 className="text-pretty text-3xl tracking-tight text-tertiary sm:text-5xl">
                expanding your reach with{" "}
                <span className="font-bold text-primary">magazines</span>
              </h1>
              <p className="mt-6 text-lg/8 text-gray-600">
                customize your magazine from a variety of paper, bindings,
                sizes, and finishes
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="/quote"
                  className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
                >
                  get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary py-12 px-12 sm:py-24">
        <div className="md:grid md:grid-cols-3">
          <div className="md:px-12">
            <Image
              src="/services/binding-icon.svg"
              alt=""
              width={125}
              height={125}
              loading="lazy"
              className="mx-auto py-6"
            />
            <div>
              <h1 className="py-6 text-pretty text-2xl text-center tracking-tight font-bold text-primary">
                binding
              </h1>
              <p className="text-center">
                choose from saddle stitch, perfect bound, plastic coil, wire-o,
                and glue on press
              </p>
            </div>
          </div>
          <div className="md:px-12">
            <Image
              src="/services/coating-icon.svg"
              alt=""
              width={125}
              height={125}
              loading="lazy"
              className="mx-auto py-6"
            />
            <div>
              <h1 className="py-6 text-pretty text-2xl text-center tracking-tight font-bold text-primary">
                uv coating
              </h1>
              <p className="text-center">
                increase the vibrancy of your piece with a protective coating
              </p>
            </div>
          </div>
          <div className="md:px-12">
            <Image
              src="/services/size-icon.svg"
              alt=""
              width={125}
              height={125}
              loading="lazy"
              className="mx-auto py-6"
            />
            <div>
              <h1 className="py-6 text-pretty text-2xl text-center tracking-tight font-bold text-primary">
                publication features
              </h1>
              <p className="text-center">
                choose from various paper types, weights, and sizes for your
                publication
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 px-12 sm:py-24">
        <div className="text-center pb-24">
          <h1 className="text-pretty text-3xl tracking-tight text-tertiary sm:text-5xl">
            expanding your reach with{" "}
            <span className="font-bold text-primary">print</span>
          </h1>
          <p className="mt-6 text-lg/8 text-gray-600">
            showcase your organization with standard and custom-sized,
            high-quality print materials that keep you visible year-round
          </p>
        </div>
        <div className="md:grid md:grid-cols-3 py-6">
          <div>
            <Carousel title="postcards" images={["/services/postcard/1.jpg", "/services/postcard/2.jpg"]} />
          </div>
          <div>
            <Carousel title="flyers | newsletters" images={["/services/flyer/1.jpg", "/services/flyer/2.jpg", "/services/flyer/3.jpg"]} />
          </div>
          <div>
            <Carousel title="calendars" images={["/services/calendar/1.jpg", "/services/calendar/2.jpg", "/services/calendar/3.jpg"]} />
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 py-6">
          <div>
            <Carousel title="catalogs | books" images={["/services/catalog/1.jpg", "/services/catalog/2.jpg", "/services/catalog/3.jpg"]} />
          </div>
          <div>
              <Carousel title="brochures | maps" images={["/services/brochure/1.jpg", "/services/brochure/2.jpg", "/services/brochure/3.jpg"]} />
          </div>
        </div>
      </div>
    </>
  );
}
