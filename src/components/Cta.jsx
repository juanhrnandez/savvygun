export default function Cta() {
  return (
    <section className="lg:flex bg-amarillo mt-44">
      <div className="w-11/12 lg:w-8/12 mx-auto py-24 lg:flex items-center gap-x-44">
        <div className="lg:w-1/2">
          <h1 className="text-3xl lg:text-5xl lg:w-120">
            Mauris ornare congue tellus, eu pulvinar neque ultrices at. Maecenas
            non fermentum erat.
          </h1>
          <button className="bg-negro px-5 py-1 text-white rounded text-2xl my-10">
            fermentum erat
          </button>
        </div>
        <div>
          <div className="rounded-full w-80 h-80 lg:w-96 lg:h-96 bg-white mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
