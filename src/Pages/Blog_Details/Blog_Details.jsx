import Secondary_Title_Section from "../../Components/Shareable_Components/Secondary_Title_Section/Secondary_Title_Section";
import service_img from "../../../public/images/Service_Page_Images/Service_Feature_Image.png";
import Popular_Blog_Single_Card from "./Blog_Details_Components/Popular_Blog_Single_Card/Popular_Blog_Single_Card";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../Components/Shareable_Components/NavBar/NavBar";
import Footer from "../../Components/Shareable_Components/Footer/Footer";
const Blog_Details = () => {
  const [navfix, setNavfix] = useState(false);

  const { postId } = useParams();
  const [post, setPost] = useState(null); // State to store the blog post data
  useEffect(() => {
    // Fetch the data of the specific blog post
    // Example: fetch(`your-api-url/posts/${postId}`)
    // .then(response => response.json())
    // .then(data => setPost(data))
    // .catch(error => console.error('Error fetching data:', error));

    // For test, set a dummy post
    setPost({
      id: postId,
      author: "Jese Leos",
      joinedDate: "August 2014",
      readTime: "2min",
      imageUrl: "/docs/images/people/profile-picture-5.jpg",
      title: "Example Title",
      content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
        sit amet sapien fringilla, mattis ligula consectetur,
        ultrices mauris. Maecenas vitae mattis tellus. Nullam quis
        imperdiet augue. Vestibulum auctor ornare leo, non
        suscipit magna interdum eu. Curabitur pellentesque nibh
        nibh, at maximus ante fermentum sit amet. Pellentesque
        commodo lacus at sodales sodales. Quisque sagittis orci ut
        diam condimentum, vel euismod erat placerat. In iaculis
        arcu eros, eget tempus orci facilisis id.
      `,
    });
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  function setFixed() {
    if (window.scrollY >= 70) {
      setNavfix(true);
      //console.log(scrollY)
    } else {
      setNavfix(false);
    }
  }
  window.addEventListener("scroll", setFixed);
  return (
    <>
      <div
        className={`z-20 fixed top-0 bg-white w-full transition-all duration-300 ease-in-out ${
          navfix ? "shadow-lg bg-white" : ""
        }`}
      >
        <NavBar />
      </div>
      <section>
        <div className="container mx-auto mt-24 mb-24">
          <div>
            <Secondary_Title_Section
              secondary_title={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              }
            />{" "}
          </div>

          <div>
            <div>
              <div className="flex items-center gap-4  p-2 md:p-0 ml-5 mb-3">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://i.ibb.co/SsMbkHJ/persion.jpg"
                  alt="Author Profile"
                />

                <div className="font-medium ">
                  <div className="text-lg font-bold">{post.author}</div>
                  <div className="text-sm text-gray-500 ">
                    Joined in {post.joinedDate} ({post.readTime} read)
                  </div>
                </div>
              </div>
              <div>
                {/* <div>
              <img src={post.imageUrl} alt="Blog Post" className="w-full h-[40rem]" />
            </div> */}
                <div>
                  <div>
                    <img
                      src={service_img}
                      alt=""
                      className="w-full h-[30rem]"
                    />
                  </div>

                  <div>
                    <div className="grid grid-cols-12 gap-5 lg:gap-12  p-2">
                      <div className="col-span-12 lg:col-span-8 mb-6 lg:mb-0">
                        <p>{post.content}</p>
                      </div>
                      <div className="col-span-12 lg:col-span-4 mb-6 lg:mb-0">
                        <div className=" w-auto bg-white border border-gray-200 rounded-lg shadow pb-8 p-2">
                          <h5 className="mb-3 p-2 text-base font-semibold bg-[#00ABE4] text-white text-center  rounded-t-lg  border-b-2 w-full md:text-xl ">
                            popular post
                          </h5>
                          <Popular_Blog_Single_Card
                            // title={"kljhjklhk"}
                            description={
                              "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            }
                            date={"2-2-24"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-10">
                      <p className="border-t p-5">
                        Good or bad, we’d love to hear your thoughts. Find us on
                        Twitter (@twitter)
                      </p>

                      <Secondary_Title_Section
                        secondary_title={
                          "Here are some related articles you may find interesting:"
                        }
                      />
                    </div>
                    <div className="flex flex-col justify-start items-start gap-5">
                      <Popular_Blog_Single_Card
                        // title={"kljhjklhk"}
                        description={
                          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        }
                        date={"2-2-24"}
                      />
                      <Popular_Blog_Single_Card
                        // title={"kljhjklhk"}
                        description={
                          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        }
                        date={"2-2-24"}
                      />
                      <Popular_Blog_Single_Card
                        // title={"kljhjklhk"}
                        description={
                          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        }
                        date={"2-2-24"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog_Details;
