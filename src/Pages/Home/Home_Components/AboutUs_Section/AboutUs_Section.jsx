import aboutimg from "../../../../../public/images/Home_Page_Images/Aboutus_Page_Images/aboutus-img.png";

import Secoundary_Title_Section from "../../../../Components/Shareable_Components/Secondary_Title_Section/Secondary_Title_Section";
import Main_Title_Section from "../../../../Components/Shareable_Components/Main_Title_Section/Main_Title_Section";
import Text_Content_Section from "../../../../Components/Shareable_Components/Text_Content_Section/Text_Content_Section";

import AboutUs_Card from "./AboutUs_Component/AboutUs_Card/AboutUs_Card";

const AboutUs_Section = () => {
  return (
    <>
      <section className="text-gray-600">
        <div className="container mx-auto flex gap-10 px-5 py-24 md:flex-row flex-col justify-center items-center md:items-start  ">
          <div>
            <div className="bg-[#EBEBEB] rounded-[45px] shadow-lg  ">
              <div className="p-7  ">
                <img
                  className="object-cover object-center rounded-lg ml-10  "
                  alt="hero"
                  src={aboutimg}
                />
              </div>
            </div>

            {/* https://dummyimage.com/720x600 */}
          </div>
          <div className="lg:flex-grow md:w-1/2  py-9   ">
            <Secoundary_Title_Section secondary_title={"About Us"} active={'active'} />

            <div className="mt-5 mb-5">
              <Main_Title_Section
                main_title={"The core mission behind all our work"}
              />
            </div>

            <div className="text-lg font-semibold ">
              <Text_Content_Section
                text_content={
                  "With 8 years of excellence in the tech industry, Smart Home People is dedicated to delivering cutting-edge solutions and unparalleled customer service. Our team excels in home automation, ensuring easy integration and innovation. Let embrace the future of home automation together."
                }
              />
            </div>
            <div>
              {" "}
              <AboutUs_Card />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs_Section;
