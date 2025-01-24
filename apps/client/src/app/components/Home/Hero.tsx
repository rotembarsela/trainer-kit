export default function Hero() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full text-center mt-8 md:mt-0 md:ml-8 flex flex-col items-center">
          <h1 className="w-full md:w-1/2 text-3xl md:text-6xl font-bold !leading-tight text-center">
            להשקיע בעצמך זאת{" "}
            <span className="bg-emerald-600 dark:bg-emerald-800 rounded px-2">
              ההשקעה
            </span>{" "}
            הכי טובה שתעשה בחיים
          </h1>
        </div>
      </div>
    </section>
  );
}
