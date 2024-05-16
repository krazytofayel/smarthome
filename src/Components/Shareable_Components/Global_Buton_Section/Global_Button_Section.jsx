

const Global_Button_Section = ({ button_text }) => {
  return (
    <>
      <button className=" text-lg relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden font-medium  rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 text-black hover:text-white ">
        <span className="relative px-9 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
          {button_text}
        </span>
      </button>
    </>
  );
};

export default Global_Button_Section
