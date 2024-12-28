import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import ProtectedRoute from "@/components/ProtectedRoute";
import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";

interface UserLoginContextType {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}

export const UserNameContext = createContext<string>("");
export const UserLoginContext = createContext<UserLoginContextType>({
  isLogin: false,
  setIsLogin: () => {},
});

export default function App({ Component, pageProps, router }: AppProps) {
  const protectedRoutes = ["/writeLetter"];
  const isProtected = protectedRoutes.includes(router.pathname);

  const [name, setName] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    setIsLogin(!!accessToken);

    const userName = Cookies.get("userName");
    if (userName) setName(userName);
  }, []);

  return (
    <>
      <UserLoginContext.Provider value={{ isLogin, setIsLogin }}>
        <UserNameContext.Provider value={name}>
          <Header />
          {isProtected ? (
            <ProtectedRoute>
              <Component {...pageProps} />
            </ProtectedRoute>
          ) : (
            <Component {...pageProps} />
          )}
        </UserNameContext.Provider>
      </UserLoginContext.Provider>
    </>
  );
}
