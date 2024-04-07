import React, { useState, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const SpineButton = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment rotation angle
      setRotation((prevRotation) => prevRotation + 1); // Adjust the speed of rotation
    }, 200); // Adjust the interval duration to control the speed of rotation

    return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
  }, []); // Empty dependency array to run the effect only once when the component mounts

  // Function to calculate position of characters around a circle
  const calculatePosition = (index, totalChars) => {
    const radius = 40; // Adjust the radius to make the circle smaller
    const angle = ((360 / totalChars) * index + rotation) % 360; // Calculate angle for each character
    const radians = (angle * Math.PI) / 180; // Convert angle to radians
    const x = Math.cos(radians) * radius; // Calculate x position
    const y = Math.sin(radians) * radius; // Calculate y position
    return { x, y };
  };

  const text = "CONTACT - SEND ME AN EMAIL";

  return (
    <div className="fixed right-0 top-[55%]">
      <div
        id="contact_btn"
        className="w-52 h-52 rounded-full flex justify-center items-center bg-gradient-to-br from-cyan-500 to-blue-500 text-[#000e17] cursor-pointer transition-all duration-400 ease-in-out hover:shadow-2xl hover:shadow-gray-900 hover:-translate-y-4"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <FiArrowUpRight className="text-7xl absolute" />
        {text.split("").map((char, index) => {
          const { x, y } = calculatePosition(index, text.length);
          return (
            <p
              key={index}
              className="absolute font-semibold text-[#000e17]"
              style={{ left: `${50 + x}%`, top: `${50 + y}%` }}
            >
              {char}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default SpineButton;
