const Button = ({ text }) => {
  return (
    <div>
      <button className="w-[200px] h-[50px] border-[3px] border-[#8D4343] font-['TTLaundryGothicB'] bg-[#FAA8A8] rounded-[15px] text-[20px]">
        {text}
      </button>
    </div>
  );
};

export default Button;
