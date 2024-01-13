"use client";

import React from "react";
import { signIn, signOut } from "next-auth/react";

export default function () {

  return (
    <div>
      {data && data.user ? (
        <button
          onClick={() => signOut("google")}
          className="p-3 bg-gradient-to-l from-orange-500 to-blue-300 rounded-md hover:scale-110 transition-all ease-in-out duration-150">
          Logout
        </button>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="p-3 bg-gradient-to-l from-orange-500 to-blue-300 rounded-md hover:scale-110 transition-all ease-in-out duration-150">
          Login with google
        </button>
      )}
    </div>
  );
}
