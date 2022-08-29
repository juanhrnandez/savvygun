import Navbar from "@/components/Navbar";
import { useId } from "react";
import Image from "next/future/image";

import { useEffect } from "react";

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
        <p className="absolute top-[17rem] right-1/2">+</p>
      </div>
    </div>
  );
}

export default function Hero() {
  useEffect(() => {
    const slider = document.querySelector(".hideScroll");
    let mouseDown = false;
    let startX, scrollLeft;

    let startDragging = function (e) {
      mouseDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };
    let stopDragging = function (event) {
      mouseDown = false;
    };

    slider.addEventListener("mousemove", (e) => {
      e.preventDefault();
      if (!mouseDown) {
        return;
      }
      const x = e.pageX - slider.offsetLeft;
      const scroll = x - startX;
      slider.scrollLeft = scrollLeft - scroll;
    });

    // Add the event listeners
    slider.addEventListener("mousedown", startDragging, false);
    slider.addEventListener("mouseup", stopDragging, false);
    slider.addEventListener("mouseleave", stopDragging, false);
  }, []);

  return (
    <header className="w-11/12 mx-auto relative">
      <Navbar />
      <article className="w-11/12 mx-auto overflow-hidden">
        <h1 className="text-36xl font-bold text-negro leading-[7rem] mt-20 ">
          Shooting to <br />
          <span className="text-amarillo ">Success</span>
        </h1>
        <div>
          <BackgroundIllustration className="absolute w-[35rem] h-[35rem] top-44 right-20 " />
        </div>

        <div class=" w-4/12 mt-20 scroll- relative overflow-hidden ">
          <div class="relative overflow-auto ">
            <div class="relative">
              <div class="relative w-full flex gap-6  overflow-x-auto pb-14 hideScroll px-5">
                <div class=" shrink-0">
                  <div className="flex justify-end mb-2">
                    <button className="text-white font-medium p-2 bg-amarillo">
                      Conocer más
                    </button>
                  </div>
                  <Image
                    src="/images/marketing-y-estrategias-digitales-en-puebla-6.jpg"
                    width="500"
                    height="500"
                    className="pointer-events-none"
                  />
                  <p className="mt-3 text-lg font-medium">
                    Proident cupidatat duis velit consequat ex veniam in.
                  </p>
                </div>
                <div class=" shrink-0">
                  <div className="flex justify-end mb-2">
                    <button className="text-white font-medium p-2 bg-amarillo">
                      Conocer más
                    </button>
                  </div>
                  <Image
                    src="/images/marketing-y-estrategias-digitales-en-puebla-6.jpg"
                    width="500"
                    height="500"
                    className="pointer-events-none"
                  />
                  <p className="mt-3 text-lg font-medium">
                    Proident cupidatat duis velit consequat ex veniam in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </header>
  );
}
