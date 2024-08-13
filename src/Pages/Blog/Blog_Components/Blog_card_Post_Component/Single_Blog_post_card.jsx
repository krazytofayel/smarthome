import { Link } from "react-router-dom";
import Global_Button_Section from "../../../../Components/Shareable_Components/Global_Buton_Section/Global_Button_Section";

const Single_Blog_post_card = ({
  imageUrl,
  title,
  description,
  buttonText,
  tag,
  date,
  postId,
}) => {

  // convert date formate
  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };
  return (
    <div className="max-w-full bg-[#fcfbfb] rounded-xl shadow flex flex-col ">
      <Link
        to={`/blog/${postId}`}
        className="flex flex-col h-full">
        <div className="h-[14rem] overflow-hidden rounded-t-xl">
          <img
            src={imageUrl}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            alt={title}
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <div className="mt-2 flex justify-between text-sm">
            <div className="text-[#00ABE4]">{tag}</div>
            <div className="text-gray-600 text-xs">{formatDate(date)}</div>
          </div>
          <h4 className="font-bold text-xl mt-2 line-clamp-2">{title}</h4>
          <p className="mt-2 text-gray-600 line-clamp-3 flex-grow">{description}</p>
          <div className="mt-auto pt-4">
            <Global_Button_Section button_text={buttonText} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Single_Blog_post_card;
