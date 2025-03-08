"use client";
import Filters from "@/components/Filters/Filters";
import { useTasks } from "@/context/taskContext";
// import { useUserContext } from "@/context/userContext";
import useRedirect from "@/hooks/useUserRedirect";
import { useTransition } from "react";
// import { useState } from "react";
// import ChangePasswordForm from "./Components/auth/ChangePasswordForm/ChangePasswordForm";
// import { useTasks } from "@/context/taskContext";

export default function Home() {
  // useRedirect("/login");

  // const {tasks} = useTasks();
  // console.log(tasks)

  const {tasks} = useTasks();
  console.log(tasks);
  
  return <main className="m-6 h-full ">
    <div className="flex justify-between">
      <h1 className="text-2xl font-bold">All Tasks</h1>
      <Filters />
    </div>
    <div className="pb-[2rem] mt-6 grid grid-cols-[repeat(auto-fill, minmax)]"></div>
  </main>

}
