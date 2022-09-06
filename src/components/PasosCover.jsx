import { ArrowLeftIcon } from "@heroicons/react/outline";
import NextLink from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";
const Features = [
  {
    name: "Feature",
  },
  {
    name: "Feature",
  },
  {
    name: "Feature",
  },
];

export default function PasosCover() {
  return (
    <section className="overflow-hidden mt-56">
      {Features.map((item, index) => (
        <>
          <div
            className={
              "flex lg:gap-x-10 " +
              clsx(index % 2 == 0 ? "flex-row-reverse" : null)
            }
          >
            <div className="lg:p-32 flex items-center">
              <p className={"lg:text-3xl " + clsx(index % 2 == 0 ? "pl-5" : "pl-5")}>
                Nulla porta venenatis venenatis. Vivamus non mollis justo.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Quisque tincidunt velit non nibh convallis, sed pharetra est
                tempor. Donec non risus laoreet, faucibus orci non, volutpat
                leo. Quisque a mi ante. Quisque consequat risus pretium velit
                condimentum, sed aliquet orci faucibus.
              </p>
            </div>{" "}
            <motion.div
              initial={{ x: index % 2 == 0 ? -200 : 200 }}
              duration={1}
              whileHover={{ x: index % 2 == 0 ? -100 : 100 }}
              className={
                "flex items-center gap-x-5 group cursor-pointer " +
                clsx(index % 2 == 0 ? "flex-row-reverse" : null)
              }
            >
              <NextLink href="/detalles">
                <ArrowLeftIcon
                  className={
                    "w-14 h-14 text-amarillo  " +
                    clsx(index % 2 == 0 ? "rotate-180 translate-x-[11rem] md:translate-x-0" : "-translate-x-[11rem] md:translate-x-0")
                  }
                />
              </NextLink>
              <NextLink href={index % 2 == 0 ?"/detalles" : "/detalles-v"}>
                <div className={"w-[14vw] lg:w-[40vw] h-[80vh] bg-amarillo transition-all duration-200 " + clsx(index % 2 == 0 ? " translate-x-[12rem] md:translate-x-0" : "-translate-x-[12rem] md:translate-x-0")}></div>
              </NextLink>
            </motion.div>{" "}
          </div>
        </>
      ))}
    </section>
  );
}
