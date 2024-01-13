import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";

export default function Navbar() {
  return (
    <div className="container flex justify-around px-10 py-5 items-center bg-yellow-500 text-slate-50">
      <nav className=" items-center center">
        <Link href={"/"} className="mr-5 hover:">
          Home
        </Link>
        <Link href={"/menu"} className="mr-5 hover:">
          Menu
        </Link>
        <Link href={"/contact"} className="mr-5 hover:">
          Contact
        </Link>
        <Link href={"/blog"} className="mr-5 hover:">
          Blog
        </Link>
        <Link href={"/contact"} className="mr-5 hover:">
          Contact
        </Link>
      </nav>

      <nav className=" flex items-center">
        <input
          className="px-5 py-2 bg-gray-300 text-black rounded-full outline-none cursor-pointer mr-5"
          placeholder="Search new products"
          type="search"
          name=""
          id=""
        />

        <Link href={"/faviourite"} className="mr-5 hover:">
          <CiHeart className="text-3xl cursor-pointer" />
        </Link>

        <Link href={"/cart"} className="mr-5 hover:">
          <IoBagOutline className="text-2xl cursor-pointer" />
        </Link>

        <CiMenuBurger className="text-2xl cursor-pointer" />
      </nav>
    </div>
  );
}
