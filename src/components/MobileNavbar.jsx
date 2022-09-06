/* This example requires Tailwind CSS v2.0+ */

import {  MenuIcon, XIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { useState } from "react";
import UpAnimation from "./animations/UpAnimation";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed w-full lg:hidden" style={{ zIndex: "999" }}>
      <div
        className={
          "transition-all duration-150" +
          clsx(
            isOpen
              ? "bg-negro fixed top-0 w-full"
              : "h-16 bg-amarillo fixed top-0 w-full"
          )
        }
        style={{ zIndex: "998" }}
      >
        <div className=" flex items-center justify-between w-11/12 mx-auto h-16">
          <img src="logo.svg" className="w-16"/>
          <MenuIcon
            className="text-negro w-10 h-10"
            onClick={(e) => setIsOpen(true)}
          />
        </div>
      </div>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className={
              " w-full bg-amarillo relative  min-h-screen"
            }
            initial={{ opacity: 0, y:-350, duration: 1 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ype: "spring", mass: 0.5,  }}

            exit={{ opacity: 0, y: -350, duration: 1, delay:2 }}
            style={{ zIndex: "999" }}
          >
            <XIcon
              className={" top-0 right-0 m-4 w-8 h-8 text-white absolute"}
              onClick={(e) => setIsOpen(false)}
            />
            <div
              className={
                "text-white font-medium w-10/12 mx-auto pt-20 text-4xl transition-all duration-150"
              }
            >
              <AnimatePresence>
                {isOpen ? (
                  <div className="space-y-5">
                    <UpAnimation delay={0.05} duration={0} Y={-300} opacity={0}>
                      <div className="border-b border-gray-600 pb-2 border-dotted">
                        ¿Quién soy?
                      </div>
                    </UpAnimation>
                    <UpAnimation delay={0.3} duration={0} Y={-300} opacity={0}>
                      <div className="border-b border-gray-600 pb-2 border-dotted">
                        Mi experiencia
                      </div>
                    </UpAnimation>
                    <UpAnimation delay={0.4} duration={0} Y={-300} opacity={0}>
                      <div className="border-b border-gray-600 pb-2 border-dotted">
                        Portafolio
                      </div>
                    </UpAnimation>
                    <UpAnimation delay={0.5} duration={0} Y={-300} opacity={0}>
                      <div className="border-b border-gray-600 pb-2 border-dotted">
                        Blog
                      </div>
                    </UpAnimation>
                  </div>
                ) : null}
              </AnimatePresence>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
