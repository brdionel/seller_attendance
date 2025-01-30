const PasswordAttendance = ({
  isPasswordValid,
  inputs,
  handleChange,
  handleButtonClick,
}) => {
  const renderAsterisks = () => {
    return "✱";
  };

  return (
    <div className="">
      <div className="flex min-h-[54px] items-center justify-start rounded-t-[16px] border-b border-[#F0F0F0] bg-white px-4">
        <p className="text-[24px] font-bold uppercase text-[#666767]">
          To start, please enter your password
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 py-6">
        <div className="flex gap-4">
          {inputs.map((input, index) => (
            <div
              key={index}
              className={`flex h-[74px] w-[74px] items-center justify-center rounded-t-[8px] border-b-[2px] ${
                isPasswordValid ? "border-[#6193AF]" : "border-[#D93644]"
              } relative bg-[#E8EFF3] text-center outline-none`}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => handleChange(index, e.target.value)}
                maxLength="1"
                disabled
                className={`opacity-0 outline-none`}
              />
              <div
                className="absolute left-0 top-0 flex h-full w-full items-center justify-center "
                aria-hidden="true"
              >
                <span
                  className={`text-[22px] font-bold leading-[22px] ${
                    isPasswordValid ? "text-[#6193AF]" : "text-[#D93644]"
                  }`}
                >
                  {input !== "" && renderAsterisks()}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 justify-center gap-6">
          {Array.from({ length: 10 }, (_, i) => (i + 1) % 10).map((num) => (
            <button
              className={`flex h-[54px] w-[74px] items-center justify-center rounded-[8px] border border-[#666666] ${
                num === 0 && "col-start-2"
              }`}
              key={num}
              onClick={() => handleButtonClick(num)}
            >
              <span className="text-[44px] font-bold text-[#6193AF]">
                {num}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PasswordAttendance;
