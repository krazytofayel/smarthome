import Secondary_Title_Section from "../../../Components/Shareable_Components/Secondary_Title_Section/Secondary_Title_Section";
import service_img from "../../../../public/images/Service_Page_Images/servicedetails.png";

import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../../Components/Shareable_Components/NavBar/NavBar";
import Footer from "../../../Components/Shareable_Components/Footer/Footer";
import Breadcrumb_Section from "../../../Components/Shareable_Components/Breadcrumb_Section/Breadcrumb_Section";
import DynamicHeading from "../../../Components/Shareable_Components/Breadcrumb_Section/Breadcrumb_Components/DynamicHeading";
import Global_Button_Section from "../../../Components/Shareable_Components/Global_Buton_Section/Global_Button_Section";
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

  const breadcrumbItems = [
    { text: "Home", href: "#", icon: "home" },
    {
      text: "Service",
      href: "#",
      linkClasses:
        "text-sm font-medium text-white hover:text-blue-600 md:ms-2 ",
      icon: "arrow",
    },
    {
      text: "All Service",
      href: "#",
      linkClasses:
        "text-sm font-medium text-white hover:text-blue-600 md:ms-2 ",
      icon: "arrow",
    },
  ];
  return (
    <>
      <div
        className={`z-20 fixed top-0 bg-white w-full transition-all duration-300 ease-in-out md:p-1 lg:p-1 ${
          navfix ? "shadow-lg bg-white" : ""
        }`}
      >
        <NavBar />
      </div>

      <section>
        <div className="mt-20">
          <div className="bg-cover bg-center bg-no-repeat bg-contact-us-img  bg-blend-multiply h-[25rem] mt-20 mb-5">
            <div className="container mx-auto ">
              <div className=" flex flex-col justify-start p-2 md:p-0 ">
                <DynamicHeading pageTitle={"our heading"} />
                <Breadcrumb_Section items={breadcrumbItems} />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-24 mb-10 md:mb-24">
          <div></div>

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
                  {/* <div>
                    <img
                      src={service_img}
                      alt=""
                      className="w-full h-[30rem]"
                    />
                  </div> */}

                  <div>
                    <div className="grid grid-cols-12 gap-5 lg:gap-12  p-2">
                      <div className="col-span-12 lg:col-span-8 mb-6 lg:mb-0">
                        {/* <p>{post.content}</p> */}
                        <div className="bg-[#EBEBEB] rounded-[45px] shadow-lg  ">
                          <div className="p-7  ">
                            <img
                              className="object-cover object-center rounded-[35px] ml-0 md:ml-10 h-[30rem] w-full "
                              alt="hero"
                              src={service_img}
                            />
                          </div>
                        </div>

                        <div>
                          <div className=" mt-5 mb-10">
                            <p className="border-t p-5">
                              Good or bad, we’d love to hear your thoughts. Find
                              us on Twitter (@twitter)
                            </p>

                            <Secondary_Title_Section
                              secondary_title={"Smart Home Installation"}
                            />
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Ut et massa mi. Aliquam in hendrerit urna.
                              Pellentesque sit amet sapien fringilla, mattis
                              ligula consectetur, ultrices mauris. Maecenas
                              vitae mattis tellus. Nullam quis imperdiet augue.
                              Vestibulum auctor ornare leo, non suscipit magna
                              interdum eu. Curabitur pellentesque nibh nibh, at
                              maximus ante fermentum sit amet. Pellentesque
                              commodo lacus at sodales sodales.
                            </p>
                            <p className="mt-5 mb-5">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Ut et massa mi. Aliquam in hendrerit urna.
                              Pellentesque sit amet sapien fringilla, mattis
                              ligula consectetur, ultrices mauris. Maecenas
                              vitae mattis tellus. Nullam quis imperdiet augue.
                              Vestibulum auctor ornare leo, non suscipit magna
                              interdum eu. Curabitur pellentesque nibh nibh, at
                              maximus ante fermentum sit amet. Pellentesque
                              commodo lacus at sodales sodales.
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Ut et massa mi. Aliquam in hendrerit urna.
                              Pellentesque sit amet sapien fringilla, mattis
                              ligula consectetur, ultrices mauris. Maecenas
                              vitae mattis tellus. Nullam quis imperdiet augue.
                              Vestibulum auctor ornare leo, non suscipit magna
                              interdum eu. Curabitur pellentesque nibh nibh, at
                              maximus ante fermentum sit amet. Pellentesque
                              commodo lacus at sodales sodales.
                            </p>

                            <Secondary_Title_Section
                              secondary_title={"Service Benefite"}
                            />
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Ut et massa mi. Aliquam in hendrerit urna.
                              Pellentesque sit amet sapien fringilla, mattis
                              ligula consectetur, ultrices mauris. Maecenas
                              vitae mattis tellus. Nullam quis imperdiet augue.
                              Vestibulum auctor ornare leo, non suscipit magna
                              interdum eu. Curabitur pellentesque nibh nibh, at
                              maximus ante fermentum sit amet. Pellentesque
                              commodo lacus at sodales sodales.
                            </p>
                            <div>
                              <h1 className="font-bold text-xl md:text-4xl text-black mt-10">
                                Service Benefits
                              </h1>
                              <p className="text-lg font-normal">
                                Explore the advantages of our Smart Home
                                Installation service
                              </p>
                            </div>
                            <div className="flex flex-col w-full gap-10 mb-10">
                              <div>
                                <div className="flex gap-2 mt-5 mb-5">
                                  <div>
                                    <div className="border-r border-4 border-blue-600 h-full"></div>
                                  </div>

                                  <div>
                                    <div>
                                      <ul className="mt-3 flex flex-col space-y-2">
                                        <li className="flex flex-col">
                                          <h1 className="text-lg font-bold">
                                            1. Easy Control:
                                          </h1>
                                          <p className="text-base text-slate-700 sm:text-lg">
                                            Manage your home's lights,
                                            temperature, and security from one
                                            place or by just talking, making
                                            daily tasks simpler.
                                          </p>
                                        </li>
                                        <li className="flex flex-col">
                                          <h1 className="text-lg font-bold">
                                            2. Energy Efficiency:
                                          </h1>
                                          <p className="text-base text-slate-700 sm:text-lg">
                                            Use smart thermostats and lights
                                            that adjust automatically, helping
                                            you save money on energy bills and
                                            being kinder to the environment.
                                          </p>
                                        </li>
                                        <li className="flex flex-col">
                                          <h1 className="text-lg font-bold">
                                            3. Feel Secure:
                                          </h1>
                                          <p className="text-base text-slate-700 sm:text-lg">
                                            Keep your home safe with smart locks
                                            and cameras that send alerts and let
                                            you check on things when you're
                                            away, giving you peace of mind.
                                          </p>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                {" "}
                                <div className="bg-[#EBEBEB] rounded-[45px] shadow-lg  ">
                                  <div className="p-7  ">
                                    <img
                                      className="object-cover object-center rounded-[35px] ml-0 md:ml-10 h-[30rem] w-full "
                                      alt="hero"
                                      src={service_img}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <Secondary_Title_Section
                                secondary_title={"Work Process"}
                              />
                              <p className="mt-10 mb-10">
                                Discover how our expert installation can make
                                your home smarter and your life easier.
                              </p>

                              <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                                <div className="max-w-sm max-h-[22rem] p-6 bg-white border border-gray-200 rounded-lg shadow ">
                                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-lg shadow-inner lg:h-14 lg:w-14">
                                    <img
                                      className="w-14 h-14 text-white "
                                      src="https://i.ibb.co/fQ881vt/service3.png"
                                      alt=""
                                    ></img>
                                  </div>
                                  <a href="#">
                                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
                                      Project Planning
                                    </h5>
                                  </a>
                                  <p className="mb-3 font-normal text-gray-500 ">
                                    For planning, we meticulously design a
                                    tailored blueprint to ensure your smart home
                                    aligns perfectly with your preferences and
                                    requirements.
                                  </p>
                                  <a
                                    href="#"
                                    className="inline-flex font-medium items-center text-blue-600 hover:underline"
                                  >
                                    See our guideline
                                    <svg
                                      className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 18 18"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                                      />
                                    </svg>
                                  </a>
                                </div>
                                <div className="max-w-sm max-h-[22rem] p-6 bg-white border border-gray-200 rounded-lg shadow ">
                                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-lg shadow-inner lg:h-14 lg:w-14">
                                    <img
                                      className="w-14 h-14 text-white "
                                      src="https://i.ibb.co/7t4XrKD/service2.png"
                                      alt=""
                                    ></img>
                                  </div>
                                  <a href="#">
                                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
                                      Work In Progress
                                    </h5>
                                  </a>
                                  <p className="mb-3 font-normal text-gray-500 ">
                                    Our skilled team efficiently installs and
                                    integrates smart devices according to the
                                    planned design, maintaining transparent
                                    communication throughout.
                                  </p>
                                  <a
                                    href="#"
                                    className="inline-flex font-medium items-center text-blue-600 hover:underline"
                                  >
                                    See our guideline
                                    <svg
                                      className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 18 18"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                                      />
                                    </svg>
                                  </a>
                                </div>
                                <div className="max-w-sm max-h-[22rem] p-6 bg-white border border-gray-200 rounded-lg shadow ">
                                  <div className="flex items-center justify-center w-10 h-10 mb-2 rounded-lg shadow-inner lg:h-14 lg:w-14">
                                    <img
                                      className="w-14 h-14 text-white "
                                      src="https://i.ibb.co/1J0HYwH/service1.png"
                                      alt=""
                                    ></img>
                                  </div>
                                  <a href="#">
                                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
                                      Project Completion
                                    </h5>
                                  </a>
                                  <p className="mb-3 font-normal text-gray-500 ">
                                    We conduct thorough testing and provide
                                    comprehensive demonstrations to ensure your
                                    smart home functions seamlessly, backed by
                                    ongoing support for your peace of mind.
                                  </p>
                                  <a
                                    href="#"
                                    className="inline-flex font-medium items-center text-blue-600 hover:underline"
                                  >
                                    See our guideline
                                    <svg
                                      className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 18 18"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                                      />
                                    </svg>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-12 lg:col-span-4 mb-6 lg:mb-0">
                        <div className=" w-auto bg-[#00ABE4] border border-gray-200 rounded-lg shadow  p-5">
                          {/* <h5 className="mb-3 p-2 text-base font-semibold bg-[#00ABE4] text-white text-center  rounded-t-lg  border-b-2 w-full md:text-xl ">
                            popular post
                          </h5> */}

                          <form className="max-w-md mx-auto">
                            <label
                              htmlFor="default-search"
                              className="mb-2 text-sm font-medium text-gray-900 sr-only"
                            >
                              Search
                            </label>
                            <div className="relative">
                              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                  className="w-4 h-4 text-gray-500 "
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                  />
                                </svg>
                              </div>
                              <input
                                type="search"
                                id="default-search"
                                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                                placeholder="Search Mockups, Logos..."
                                required
                              />
                              <button
                                type="submit"
                                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                              >
                                Search
                              </button>
                            </div>
                          </form>
                        </div>
                        <div className="w-auto bg-[#00ABE4] border border-gray-200 rounded-lg shadow mt-5  p-5">
                          <h5 className="mb-3 p-2 text-base font-semibold bg-[#00ABE4] text-white text-center  rounded-t-lg  border-b-2 w-full md:text-xl border-loader">
                            All Service
                          </h5>

                          <div className="flex flex-col justify-center w-full">
                            <Global_Button_Section
                              button_text={"Smart Home Installation"}
                            />
                            <Global_Button_Section
                              button_text={"Smart Home Installation"}
                            />
                            <Global_Button_Section
                              button_text={"Smart Home Installation"}
                            />
                            <Global_Button_Section
                              button_text={"Smart Home Installation"}
                            />
                            <Global_Button_Section
                              button_text={"Smart Home Installation"}
                            />
                            <Global_Button_Section
                              button_text={"Smart Home Installation"}
                            />
                            <Global_Button_Section
                              button_text={"Smart Home Installation"}
                            />
                            <Global_Button_Section
                              button_text={"Smart Home Installation"}
                            />
                          </div>
                        </div>
                      </div>
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
