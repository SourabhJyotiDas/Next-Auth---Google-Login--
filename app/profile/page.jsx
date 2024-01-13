"use client";

import React, { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";


export default function Profile() {
  const { data } = useSession();

  const handleLogout = async (e) => {
    e.preventDefault();
    await signOut("google");
  };



  return (
    <div>
      {data ? (
        <div>
          {data && (
            <div className="flex flex-col items-center justify-center p-10">
              <h1>{data.user.name}</h1>
              <p>{data.user.email}</p>
              <img
                className="rounded-full p-2 bg-orange-500"
                src={data.user.image}
                alt="profile picture"
              />
            </div>
          )}
        </div>
      ) : null}

      <button
        className="px-5 py-2 bg-gray-500 text-white"
        onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
