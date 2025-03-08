"use cleint";
import { useUserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useRedirect = (redirect: string) => {

  const {user} = useUserContext();
  const router  = useRouter();
  // const { userLoginStatus } = useUserContext();
  // const router = useRouter();

  useEffect(() => {
    // const redirectUser = async () => {
      // try {
      //   const isLoggedUser = await userLoginStatus();

      //   if (!isLoggedUser) {
      //     router.push(redirect);
      if(!user || user.email){
        router.push(redirect);
      }
        },[user, redirect, router]);
      };
export default useRedirect;
      

 