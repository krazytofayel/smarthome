const Single_FAQ_Accordion = ({
  title,
  content,
  index,
  openIndex,
  setOpenIndex,
}) => {
  const isOpen = openIndex === index;

  const toggleAccordion = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <div className="border-none border-gray-200 rounded-t-lg mb-5 rounded-b-lg my-8">
      <div
        className={`w-full py-4 px-6 text-left font-semibold flex justify-between items-center align-middle ${
          isOpen
            ? "text-white bg-[#00ABE4]"
            : "text-black bg-[#ffffff] shadow-xl"
        } focus:outline-none rounded-t-lg text-[18px]`}
        onClick={toggleAccordion}
      >
        {title}
        <span
          className={`float-right  transition-transform duration-300 transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          &#129175;
        </span>
      </div>
      <div
        className={`overflow-hidden transition-height  ${
          isOpen ? "h-auto " : "h-0 "
        }`}
      >
        <div className="p-5 bg-[#00ABE4] rounded-b-lg  border-black border-t-2 ">
          <p className=" text-[#fff] text-[16px]">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Single_FAQ_Accordion;
