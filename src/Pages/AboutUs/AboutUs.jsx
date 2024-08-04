import DynamicHeading from "../../Components/Shareable_Components/Breadcrumb_Section/Breadcrumb_Components/DynamicHeading";
import Breadcrumb_Section from "../../Components/Shareable_Components/Breadcrumb_Section/Breadcrumb_Section";
import Footer from "../../Components/Shareable_Components/Footer/Footer";
import AboutUs_Mission_Vission from "./AboutUs_Components/AboutUs_Mission_Vission_Section/AboutUs_Mission_Vission";
import AboutUs_ProfileCard from "./AboutUs_Components/AboutUs_ProfileCard/AboutUs_ProfileCard";
import AboutUs_Section from "./AboutUs_Components/AboutUs_Section/AboutUs_Section";
import HowIt_Work_Section from "./AboutUs_Components/HowIt_Work_Section/HowIt_Work_Section";
import { useState } from "react";
import NavBar from "../../Components/Shareable_Components/NavBar/NavBar";
import Global_Button_Section from "../../Components/Shareable_Components/Global_Buton_Section/Global_Button_Section";
const AboutUs = () => {
  const breadcrumbItems = [
    { text: "Home", href: "#", icon: "home" },
    {
      text: "About Us",
      href: "#",
      linkClasses:
        "text-sm font-medium text-white hover:text-blue-600 md:ms-2 ",
      icon: "arrow",
    },
  ];

  const [navfix, setNavfix] = useState(false);

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
      <div className="mt-20">
        <div className="bg-cover bg-center bg-no-repeat bg-contact-us-img  bg-blend-multiply h-[25rem] mt-20 mb-1 p-2 md:p-0">
          <div className="container mx-auto ">
            <div className=" flex flex-col justify-start ">
              <DynamicHeading />
              <Breadcrumb_Section items={breadcrumbItems} />
            </div>
          </div>
        </div>

        <div>
          <AboutUs_Section />
          <AboutUs_Mission_Vission />
          <HowIt_Work_Section />
          <div className=" flex justify-center  items-center  ">
            <AboutUs_ProfileCard />
          </div>

          <div>
            <div className="container mx-auto bg-teal-400 text-center rounded-xl p-6 mt-20 mb-20">
              <h2 className="text-4xl font-medium  mb-6 text-white">
                Find what's write for your home.
              </h2>

              {/* <a
                href="#"
                className=" bg-white  text-blue-500 rounded-lg px-4 py-2 font-medium hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Contact us
              </a> */}

              <Global_Button_Section button_text={'Contact Us'} />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
