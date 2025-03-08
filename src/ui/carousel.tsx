"use client";

import { useState } from "react";
import Image from "next/image";

interface CarouselProps {
  images: string[];
  title: string;
}

export default function Carousel({ images, title }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <div className="flex items-center justify-center px-10">
      <button onClick={handlePrevious}>
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
            />
          </svg>
        </button>
        <Image
          src={images[currentIndex]}
          alt="Carousel Image"
          width={600}
          height={600}
          className="rounded-2xl"
        />
        
        <button onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center justify-center px-10">
        <h1 className="text-pretty text-xl text-center tracking-tight text-primary py-4">{title}</h1>
      </div>
    </>
  );
}
