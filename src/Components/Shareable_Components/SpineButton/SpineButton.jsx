import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const SpineButton = () => {
  const [rotation, setRotation] = useState(0);

  const rotateText = () => {
    // Increment rotation angle
    setRotation(rotation + 5);
  };

  return (
    <div className="relative w-full h-screen bg-gray-900 dark:bg-white">
      <a
        href="mailto:samuelabera87@gmail.com"
        id="contact_btn"
        className="absolute w-40 h-40 rounded-full flex justify-center items-center right-[50%] sm:right-[40%] md:right-[30%] top-[5%] bg-gradient-to-br from-cyan-500 to-blue-500 text-[#000e17] cursor-pointer transition-all duration-400 ease-in-out hover:shadow-2xl hover:shadow-gray-900 hover:-translate-y-4"
        onMouseMove={rotateText}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <FiArrowUpRight className="text-7xl" />
        <p className="absolute font-semibold text-[#000e17]">
          CONTACT - SEND ME AN EMAIL
        </p>
      </a>
    </div>
  );
};

export default SpineButton;
