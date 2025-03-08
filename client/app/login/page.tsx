'use client';
import React, { useEffect } from "react";
import LoginForm from "../Components/auth/LoginForm/LoginForm";
import { useUserContext } from "@/context/userContext";
import { useRouter } from "next/router";

function page() {
const {user}  = useUserContext();
const router = useRouter();

useEffect(() => {

//redirect user if user is already logged in
if(user && user._id){
  router.push('/')
}
}, [user, router]);

//return null or a loading spinner/indicator
if(user === null){
  return null;
}
  return (
    <div className="auth-page w-full h-full flex justify-center items-center">
      <LoginForm />
    </div>
  );
}

export default page;
