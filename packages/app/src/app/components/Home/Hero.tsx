import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 flex justify-end">
          <div className="relative w-full md:w-1/2 h-96">
            <Image
              src="/assets/self-portrait.png"
              alt="Self Portrait"
              fill
              className="rounded-lg select-none"
              draggable="false"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-right mt-8 md:mt-0 md:ml-8">
          <h1 className="w-full md:w-3/4 text-3xl md:text-5xl font-bold !leading-tight text-center md:text-right">
            להשקיע בעצמך זאת{" "}
            <span className="bg-emerald-600 dark:bg-emerald-800 rounded px-2">
              ההשקעה
            </span>{" "}
            הכי טובה שתעשה בחיים
          </h1>
          <button className="mt-6 bg-emerald-600 dark:bg-emerald-800 py-3 px-6 rounded-lg shadow-md hover:bg-emerald-700 dark:hover:bg-emerald-900">
            יצירת קשר
          </button>
        </div>
      </div>
    </section>
  );
}
