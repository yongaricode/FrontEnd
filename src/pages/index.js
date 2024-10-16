// 아래의 import문으로 next/image의 Image 컴포넌트를 사용할 수 있습니다.
// import Image from "next/image"

import MessageBox from "@/components/MessageBox";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const router = useRouter();

  async function getMessageData() {
    try {
      const response = await fetch("/data/Message.json");
      const data = await response.json();
      setMessages(data.Message);
    } catch (error) {
      console.error("메세지를 가져오지 못했습니다.");
    }
  }

  useEffect(() => {
    getMessageData();
  }, []);

  return (
    <main className="flex flex-col w-screen h-screen bg-back items-center">
      <h1 className="text-[70px] font-['TTLaundryGothicB'] text-black pt-[60px]">
        연말 편지 우체통
      </h1>
      <h3 className="mt-[30px] font-bold text-[20px] font-['TTLaundryGothicB']">
        💌 강다형님의 연말 편지 우체통으로 {messages.length}건의 편지가
        도착했어요!
      </h3>
      <button
        className="px-[110px] py-[8px] mt-[25px] text-[20px] bg-strong rounded-[5px] font-semibold text-white font-['TTLaundryGothicB']"
        onClick={() => {
          router.push("/writeLetter");
        }}
      >
        편지 쓰러 가기
      </button>
      <div className="grid grid-cols-4 gap-8 mt-[60px]">
        {messages.map((message, index) => (
          <MessageBox
            key={index}
            user={message.user}
            content={message.content}
          />
        ))}
      </div>
    </main>
  );
}
