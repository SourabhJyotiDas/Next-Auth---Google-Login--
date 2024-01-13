"use client";

import React, { useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { FcLike } from "react-icons/fc";

export default function Menu() {
  const [liked, setLiked] = useState(false);

  return (
    <section className="text-gray-400 body-font">
      <div className="container px-5 py-20 mx-auto">

        <h1 className="text-center font-semibold text-7xl font-mono pb-5">
          Our Menu
        </h1>

        <div className="flex items-center justify-evenly w-auto">
          <div className="lg:w-1/6 md:w-1/2 p-4 w-full flex flex-col items-center justify-center shadow-2xl hover:scale-105 ease-out duration-300 cursor-pointer">
            <a className="h-48 rounded-full overflow-hidden ">
              <img
                alt="Dishes"
                className="object-cover object-center w-[200px] h-[200px] "
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
              />
            </a>

            <div className="mt-4 flex flex-col items-center justify-between">
              <h2 className="text-black title-font text-lg font-medium">
                Maxican Sliced
              </h2>
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                with vegetables and sauces
              </h3>
              <p className="mt-1 text-gray-700">$16.00</p>
              <div className="flex items-center justify-between text-sm w-full">
                <button className="bg-gray-500 text-slate-100 py-2 px-4 rounded-full flex items-center hover:bg-gray-700 hover:text-white ease-out duration-300 cursor-pointer">
                  <span>Add to cart</span>{" "}
                  <RiShoppingCartLine className="ml-3" />
                </button>
                <button>
                  {liked ? (
                    <FcLike className="text-4xl text-gray-900 hover:text-red-500 ease-out duration-300 cursor-pointer " />
                  ) : (
                    <CiHeart className="text-4xl text-gray-900 hover:text-red-500 ease-out duration-300 cursor-pointer " />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/6 md:w-1/2 p-4 w-full flex flex-col items-center justify-center shadow-2xl hover:scale-105 ease-out duration-300 cursor-pointer">
            <a className="h-48 rounded-full overflow-hidden ">
              <img
                alt="Dishes"
                className="object-cover object-center w-[200px] h-[200px] "
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
              />
            </a>

            <div className="mt-4 flex flex-col items-center justify-between">
              <h2 className="text-black title-font text-lg font-medium">
                Maxican Sliced
              </h2>
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                with vegetables and sauces
              </h3>
              <p className="mt-1 text-gray-700">$16.00</p>
              <div className="flex items-center justify-between text-sm w-full">
                <button className="bg-gray-500 text-slate-100 py-2 px-4 rounded-full flex items-center hover:bg-gray-700 hover:text-white ease-out duration-300 cursor-pointer">
                  <span>Add to cart</span>{" "}
                  <RiShoppingCartLine className="ml-3" />
                </button>
                <button>
                  {liked ? (
                    <FcLike className="text-4xl text-gray-900 hover:text-red-500 ease-out duration-300 cursor-pointer " />
                  ) : (
                    <CiHeart className="text-4xl text-gray-900 hover:text-red-500 ease-out duration-300 cursor-pointer " />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/6 md:w-1/2 p-4 w-full flex flex-col items-center justify-center shadow-2xl hover:scale-105 ease-out duration-300 cursor-pointer">
            <a className="h-48 rounded-full overflow-hidden ">
              <img
                alt="Dishes"
                className="object-cover object-center w-[200px] h-[200px] "
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
              />
            </a>

            <div className="mt-4 flex flex-col items-center justify-between">
              <h2 className="text-black title-font text-lg font-medium">
                Maxican Sliced
              </h2>
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                with vegetables and sauces
              </h3>
              <p className="mt-1 text-gray-700">$16.00</p>
              <div className="flex items-center justify-between text-sm w-full">
                <button className="bg-gray-500 text-slate-100 py-2 px-4 rounded-full flex items-center hover:bg-gray-700 hover:text-white ease-out duration-300 cursor-pointer">
                  <span>Add to cart</span>{" "}
                  <RiShoppingCartLine className="ml-3" />
                </button>
                <button>
                  {liked ? (
                    <FcLike className="text-4xl text-gray-900 hover:text-red-500 ease-out duration-300 cursor-pointer " />
                  ) : (
                    <CiHeart className="text-4xl text-gray-900 hover:text-red-500 ease-out duration-300 cursor-pointer " />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/6 md:w-1/2 p-4 w-full flex flex-col items-center justify-center shadow-2xl hover:scale-105 ease-out duration-300 cursor-pointer">
            <a className="h-48 rounded-full overflow-hidden ">
              <img
                alt="Dishes"
                className="object-cover object-center w-[200px] h-[200px] "
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
              />
            </a>

            <div className="mt-4 flex flex-col items-center justify-between">
              <h2 className="text-black title-font text-lg font-medium">
                Maxican Sliced
              </h2>
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                with vegetables and sauces
              </h3>
              <p className="mt-1 text-gray-700">$16.00</p>
              <div className="flex items-center justify-between text-sm w-full">
                <button className="bg-gray-500 text-slate-100 py-2 px-4 rounded-full flex items-center hover:bg-gray-700 hover:text-white ease-out duration-300 cursor-pointer">
                  <span>Add to cart</span>{" "}
                  <RiShoppingCartLine className="ml-3" />
                </button>
                <button>
                  {liked ? (
                    <FcLike className="text-4xl text-gray-900 hover:text-red-500 ease-out duration-300 cursor-pointer " />
                  ) : (
                    <CiHeart className="text-4xl text-gray-900 hover:text-red-500 ease-out duration-300 cursor-pointer " />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
