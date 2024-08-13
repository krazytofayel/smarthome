
import useConvertAndCompressImages from "../../../../Components/CustomHooks/ConvertAndCompressImages/useConvertAndCompressImages";
import Secondary_Title_Section from "../../../../Components/Shareable_Components/Secondary_Title_Section/Secondary_Title_Section";
import Single_Blog_post_card from "../Blog_card_Post_Component/Single_Blog_post_card";

import card1 from "/public/images/blog_Page_Images/Popular_Post_Images/popularpost_img-1.png";
import card2 from "/public/images/blog_Page_Images/Popular_Post_Images/popularpost_img-2.png";
const Blog_Popular_Post = () => {
  const imageUrls = [card1, card2];
  const convertedImages = useConvertAndCompressImages(imageUrls);
  return (
    <>
      <section>
        <div>
          <div className=" container mx-auto mb-5 mt-20">
            <div className="flex justify-between items-center align-middle mb-5 mt-5  p-2 md:p-0">
              <div>
                <Secondary_Title_Section secondary_title={"Popular Post"} active={'active'}/>
              </div>
              <div>
                <p className="underline text-[#00ABE4] transition-transform duration-100 hover:scale-105">
                  read more
                </p>
              </div>
            </div>
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center p-2 md:p-0 gap-5">
            <div className="w-full">
              <Single_Blog_post_card
                imageUrl={convertedImages[0] || card1}
                title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuriesLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
                buttonText="Start Reading"
                tag="Technology"
                date="22-2-24"
                postId="123"
              />
            </div>
            <div className="w-full">
              <Single_Blog_post_card
                imageUrl={convertedImages[1] || card2}
                title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuriesLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
                buttonText="Start Reading"
                tag="Technology"
                date="22-7-24"
                postId="124"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog_Popular_Post;
