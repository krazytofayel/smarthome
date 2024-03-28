

const Secondary_Title_Section = ({ secondary_title, onClick, active }) => {
  return (
    <>
      <div>
        <div
          className={`max-w-lg cursor-pointer ${active ? "text-blue-400" : ""}`}
          onClick={onClick}
        >
          <h2 className="text-2xl font-semibold">{secondary_title}</h2>
        </div>
      </div>
    </>
  );
};

export default Secondary_Title_Section
