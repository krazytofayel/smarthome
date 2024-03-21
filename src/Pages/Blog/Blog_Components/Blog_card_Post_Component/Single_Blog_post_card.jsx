

const Single_Blog_post_card = ({
  imageUrl,
  title,
  description,
  buttonText,
  tag, date
}) => {
  return (
    <>
      <div>
        <a
          className="p-4 max-w-full border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col "
          href="#"
        >
          <img
            src={imageUrl}
            className="shadow rounded-lg overflow-hidden border w-full h-full transition-transform duration-300 hover:scale-105"
            alt={title}
          />
          <div className="mt-8">
            <div className="flex justify-between">
              <div>{tag}</div>
              <div>{date}</div>
            </div>
            <h4 className="font-bold text-xl">{title}</h4>
            <p className="mt-2 text-gray-600">{description}</p>
            <div className="mt-5">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
              >
                {buttonText}
              </button>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Single_Blog_post_card
