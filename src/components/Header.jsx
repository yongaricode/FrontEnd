// Header component
import logo from "../../public/images/image.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex w-full h-[70px] bg-[#0070BB] justify-between items-center px-9 text-white">
      <h3 className="flex font-medium text-[22px] font-['TTLaundryGothicB'] ">
        💌 연말 편지 우체통
      </h3>
      <button className="text-[16px] flex items-center gap-1 bg-white p-2 rounded-[5px] font-semibold text-black">
        <Image src={logo} alt="logo" className="w-7 h-6" />
        Google 로그인하고 쓰기
      </button>
    </div>
  );
};

export default Header;
