import Image from "next/future/image";

export default function ImageDescription() {
  return (
    <article className="bg-white dark:text-white dark:bg-negro pb-20 border-t border-dashed mt-14">
      <div className="w-full h-0 mt-4 border-t border-dashed" />
      <div className="w-full h-0 mt-4 border-t border-dashed" />
      <section className="lg:flex items-center w-11/12 lg:w-10/12 mx-auto justify-between lg:pt-32">
        <div className="lg:w-6/12 py-10">
          <p className=" text-xl lg:text-6xl lg:pl-20 leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            eget scelerisque velit. Aenean aliquam nulla in faucibus congue.{" "}
          </p>
        </div>

        <div className="lg:w-6/12 flex justify-center relative">
          <Image
            src="/images/marketing-y-estrategias-digitales-en-puebla-9.jpg"
            width={500}
            height={500}
            className="object-cover w-11/12 lg:w-5/12 h-96 z-10 rounded"
          />
          <div className="h-full w-11/12 lg:w-5/12 bg-amarillo/70 absolute z-0 left-1 lg:left-48 top-3 rounded" />
        </div>
      </section>
    </article>
  );
}
