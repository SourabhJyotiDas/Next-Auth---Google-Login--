"use client";
import axios from "axios";
import React, { useState } from "react";
import { signIn } from "next-auth/react";


const Login = () => {

  return (
    <div className=" w-full flex flex-col justify-center items-center">
      <button
          onClick={()=>{signIn("google")}}
          className="px-6 py-2 bg-gradient-to-t from-slate-500 to-purple-600 text-white">
          Signin with Google
        </button>
    </div>
  );
};

export default Login;
