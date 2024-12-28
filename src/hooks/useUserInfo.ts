import { useContext } from "react";
import { UserNameContext, UserLoginContext } from "@/pages/_app";

export const useUserName = () => useContext(UserNameContext);
export const useUserLogin = () => useContext(UserLoginContext);
