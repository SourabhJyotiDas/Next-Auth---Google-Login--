"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Login = () => {
  const { data } = useSession();
  console.log(data && data.user);

  return (
    <div className="h-[100vh] w-full flex flex-col justify-center items-center">
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
};

export default Login;
