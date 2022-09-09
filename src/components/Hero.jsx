import Navbar from "@/components/Navbar";
import { useId } from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";
import Typewriter from "typewriter-effect";

import EmblaCarousel from "@/components/EmblaCarousel";
import Image from "next/future/image";
function BackgroundIllustration(props) {
  let id = useId();

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#000000"
          strokeOpacity="0.6"
          strokeWidth="0.3"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
          strokeWidth="5"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEB457" />
            <stop offset="1" stopColor="#DEB457" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#000000"
          strokeWidth="0.3"
          strokeOpacity="0.6"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
          strokeWidth="5"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEB457" />
            <stop offset="1" stopColor="#DEB457" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="relative">
        <div className="absolute top-[1.5rem] left-[1.4rem] ">
          <Image
            className="rounded-full object-cover"
            src="/logo.svg"
            width="500"
            height="500"
          />
        </div>
      </div>
    </div>
  );
}

const Slides = [
  {
    img: "/images/marketing-y-estrategias-digitales-en-puebla-6.jpg",
    alt: "",
    title: "",
  },
  {
    img: "/images/marketing-y-estrategias-digitales-en-puebla-6.jpg",
    alt: "",
    title: "",
  },
  {
    img: "/images/marketing-y-estrategias-digitales-en-puebla-6.jpg",
    alt: "",
    title: "",
  },
];

export default function Hero() {
  return (
    <header className="pt-20 lg:pt-0 bg-gradient-to-b from-gris to-white dark:from-neutral-700 dark:to-negro dark:dark:text-white">
      <div className="w-11/12 mx-auto relative">
        <Navbar />
        <article className="lg:w-11/12 mx-auto overflow-hidden">
          <div className="w-10 h-10 bg-amarillo rounded-full absolute animate-pulse" />
          <div className="w-10 h-10 bg-amarillo rounded-full absolute left-[50rem] top-80 animate-pulse" />
          <div className="w-10 h-10 bg-amarillo rounded-full absolute right-[30rem] top-20 animate-pulse" />
          <div className="w-10 h-10 bg-amarillo rounded-full absolute left-[70rem] bottom-16 animate-pulse" />
          <div className="w-10 h-10 bg-amarillo rounded-full absolute right-[3rem] bottom-80 animate-pulse" />
          <div className="w-10 h-10 bg-amarillo rounded-full absolute -left-[2rem] bottom-40 animate-pulse" />

          <div className="flex items-end gap-x-10">
            <h1 className="text-20xl lg:text-36xl font-bold text-negro dark:text-white leading-[4rem] lg:leading-[7rem] lg:mt-20 lg:relative">
              Shooting to <br className="hidden lg:block" />
              <span className="text-amarillo ">Success</span>
            </h1>
          </div>
          <div>
            <BackgroundIllustration className="absolute w-[35rem] h-[35rem] top-44 right-20 opacity-40 lg:opacity-100" />
          </div>
          <div className="lg:w-[36%] mt-10 ">
            <EmblaCarousel slides={Slides} />
          </div>
          <div className="lg:flex justify-end mt-10 lg:-mt-20">
            <div className="text-4xl lg:text-8xl flex items-center lg:gap-x-8">
              <Typewriter
                options={{
                  strings: [
                    "Enfocamos el objetivo",
                    "Apuntamos a la solución",
                    " Disparamos al éxito"
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <ArrowRightIcon className="w-14 h-14 text-amarillo" />{" "}
            </div>
          </div>
        </article>
      </div>
    </header>
  );
}
