import logo from "../../public/images/image.png";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useUserLogin } from "@/hooks/useUserInfo";
import { useEffect } from "react";

const Header = () => {
  const router = useRouter();
  const { isLogin, setIsLogin } = useUserLogin();

  const GOOGLE_LOGIN_PAGE =
    "https://accounts.google.com/o/oauth2/v2/auth?client_id=526903298668-in7ec446ogrb9ji9u5vendfcb433dp5d.apps.googleusercontent.com&redirect_uri=http://localhost:3000/oauth/callback/google&response_type=code&scope=email";

  const handleLogout = () => {
    setIsLogin(false);
  };

  useEffect(() => {
    if (isLogin) {
      Cookies.remove("accessToken");
      Cookies.remove("userName");
    }
  }, [isLogin]);

  return (
    <div className="flex w-full h-[70px] bg-strong justify-between items-center px-9 text-white">
      <h3
        className="flex font-medium text-[22px] font-['TTLaundryGothicB'] hover:cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
      >
        💌 연말 편지 우체통
      </h3>
      {isLogin ? (
        <button
          className="text-[16px] flex items-center gap-1 bg-back p-2 rounded-[5px] font-semibold text-black font-[Pretendard-Regular]"
          onClick={handleLogout}
        >
          로그아웃
        </button>
      ) : (
        <button
          className="text-[16px] flex items-center gap-1 bg-white p-2 rounded-[5px] font-semibold text-black font-[Pretendard-Regular]"
          onClick={() => router.push(GOOGLE_LOGIN_PAGE)}
        >
          <Image
            src={logo}
            alt="logo"
            className="w-7 h-6 font-['Pretendard-Regular']"
          />
          Google 로그인하고 쓰기
        </button>
      )}
    </div>
  );
};

export default Header;
