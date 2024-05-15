

const AboutUs_Single_Card = ({ icon, text }) => {
  return (
    <div className="p-2 w-full bg-gradient-to-t from-[#aadaeb] to-transparent rounded-lg">
      <div className=" px-2 py-4 rounded-lg text-center transform transition duration-500 hover:scale-110">
        <div className="h-14 w-14 mx-auto border rounded-full flex items-center justify-center">
          <img src={icon} alt="" />
          {/* {icon && (
            // <svg
            //   fill="none"
            //   stroke="currentColor"
            //   strokeLinecap="round"
            //   strokeLinejoin="round"
            //   strokeWidth="2"
            //   className="text-[#00ABE4] w-8 h-8 inline-block"
            //   viewBox="0 0 24 24"
            // >
            //   {icon}
            // </svg>
           
          )} */}
        </div>

        <h2 className=" font-medium text-md lg:text-lg  text-gray-600">
          {text}
        </h2>
      </div>
    </div>
  );
};

export default AboutUs_Single_Card
