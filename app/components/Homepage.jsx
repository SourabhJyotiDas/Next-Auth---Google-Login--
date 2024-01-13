import Image from "next/image";
import React from "react";

export default function Homepage() {
  return (
    <section className="text-slate-100 bg-gradient-to-b from-yellow-500 to-yellow-300 body-font min-h-[100vh]">
      <div className="container mx-auto flex px-32  md:flex-row flex-col items-center">
        <div className="mt-10 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
          <h1 className=" mb-4 font-semibold text-7xl text-white z-10 heading">
            "Explore Our
            <br className="hidden lg:inline-block" />
            Tranding Dishes"
          </h1>
        </div>
      </div>

      <div className="h-[70vh] flex px-32 w-full relative left-20 bottom-20">
        <Image
          src={
            "https://images.unsplash.com/photo-1562059390-a761a084768e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxmb29kfGVufDB8fDB8fHww"
          }
          alt="hotel"
          width={2000}
          height={2000}
          className=" w-[60%] bg-pink-500 h-large-box my-5 object-cover object-center"
        />

        <div className="w-[30%] relative bottom-40 right-10 bg-yellow-500 ">
          <Image
            src={
              "https://images.unsplash.com/photo-1646926521204-01c01eae80ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGZvb2QlMjB5ZWxsb3d8ZW58MHx8MHx8fDA%3D"
            }
            alt="hotel"
            width={2000}
            height={2000}
            className="  h-large-box object-cover object-center  "
          />
          <p className="text-center tracking-widest text-4xl heighlight">Super Sale</p>
          <h2 className="text-xl heighlight text-center">80% off on your first order</h2>
        </div>
      </div>
    </section>
  );
}
