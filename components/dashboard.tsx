"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <>
          <h1>Welcome back</h1>
          <button
            onClick={() => {
              signOut();
            }}
          >
            Signout
          </button>
        </>
      ) : (
        <>
          <h1 className="text-3xl text-red-500 font-semibold">
            You are not logged in
          </h1>
          <button
            onClick={() => signIn("google")}
            className="border border-black rounded-lg"
          >
            Sign in with Google
          </button>
          <button
            onClick={() => signIn("github")}
            className="border border-black rounded-lg"
          >
            Sign in with Github
          </button>
        </>
      )}
    </>
  );
};
export default Dashboard;
