const Service_Single_Card = ({ title, body_text, src_link }) => {
  return (
    <>
      <div className="max-w-sm bg-transparent rounded-lg ">
        <a href="#">
          <img className="rounded-md" src={src_link} alt="404" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 ">
            {body_text}
          </p>
        </div>
      </div>
    </>
  );
};

export default Service_Single_Card;
