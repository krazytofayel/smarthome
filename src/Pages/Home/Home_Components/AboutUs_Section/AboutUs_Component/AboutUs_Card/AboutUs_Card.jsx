

function AboutUs_Card({ icon,  text }) {
  return (
    <div className="p-2 w-full bg-gradient-to-t from-[#cdffdb] to-transparent rounded-lg">
      <div className="border-2 border-gray-600 px-4 py-6 rounded-lg text-center transform transition duration-500 hover:scale-110">
        <div className="h-14 w-14 mx-auto border rounded-full flex items-center justify-center">
          {icon && (
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="text-indigo-500 w-8 h-8 inline-block"
              viewBox="0 0 24 24"
            >
              {icon}
            </svg>
          )}
        </div>

        <h2 className="title-font font-medium text-lg text-[#616161]">
          {text}
        </h2>
      </div>
    </div>
  );
}

export default AboutUs_Card;
