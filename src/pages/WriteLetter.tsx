import Button from "../components/Button";
import Letter from "../components/Letter";
import instance from "../api/instance";
import { useState } from "react";
import { useUserName } from "@/hooks/useUserInfo";

export default function WriteLetter() {
  const [content, setContent] = useState<string>("");
  const toName = "용가리";
  const name = useUserName();

  const [wordCount, setWordCount] = useState<number>(0);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    setWordCount(e.target.value.length);
  };

  const handleSumbit = async () => {
    if (!content) {
      alert("편지를 입력해주세요!");
      return;
    }

    const postData = {
      toName: toName,
      fromName: name,
      message: content,
      type: "뭐를 써야되지...?",
    };

    try {
      const response = await instance.post("/messages", postData);
      if (response.status === 200) {
        console.log("편지 작성 성공:", response.data);

        alert(`${toName}님께 편지가 전송되었어요!`);
        setContent("");
        setWordCount(0);
      }
    } catch (error) {
      console.error("편지 작성 오류:", error);
      alert("편지 작성에 실패했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <div className="bg-back h-screen w-screen flex items-center flex-col">
      <h3 className="mt-[80px] font-['TTLaundryGothicB'] text-[30px]">
        💌<span className="text-[#c44f6f] px-2">{toName}</span>님께 편지를
        써주세요!
      </h3>
      <section className="mt-[50px]">
        <Letter
          value={content}
          onChange={handleInput}
          placeholderText={"편지를 작성해주세요!"}
        />
        <section className="flex justify-between">
          <span className="text-gray-500">{wordCount}/100</span>
          <span className="font-['TTLaundryGothicB'] text-[25px] mt-3">
            From. {name}
          </span>
        </section>
      </section>
      <section className="mt-[60px]">
        <Button text="우체통에 넣기" onClick={handleSumbit} />
      </section>
    </div>
  );
}
