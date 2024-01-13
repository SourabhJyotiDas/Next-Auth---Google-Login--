import Image from "next/image";
import React from "react";

export default function SpecialOffer() {
  return (
    <div className=" p-10  flex items-center w-full">
      <div className="h-[35vh] w-[80%] bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-2xl">
        <h2 className="heighlight">Special Offer</h2>
        <h1 className="uppercase font-semibold text-5xl">good food, drinks &<br /> greate company </h1>
      </div>

      <div className="h-[35vh] w-[20%] relative right-20">
        <Image
          src={
            "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY0fHxmb29kJTIweWVsbG93fGVufDB8fDB8fHww"
          }
          alt="hotel"
          width={2000}
          height={2000}
          className="rounded-full object-cover object-center w-[250px] h-[250px]   "
        />
      </div>
    </div>
  );
}
