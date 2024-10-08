// MessageBox component
import Image from "next/image";
import ribbon from "../../public/images/ribbon.png";

const MessageBox = () => {
  const userName = "용가리";

  return (
    <div className="relative w-[300px] h-[200px] border-4 border-strong bg-white rounded-[25px]">
      <Image
        className="absolute left-1/2 transform -translate-x-1/2 -translate-y-[30%] w-[70px] h-[70px]"
        src={ribbon}
        alt="jingle-bell"
      />
      <div className="p-5 pt-[50px]  ">
        <h3 className="font-semibold text-[20px]">From. {userName}</h3>
        <p className="text-[17px]">좋은 하루 보내시길~</p>
      </div>
    </div>
  );
};

export default MessageBox;
