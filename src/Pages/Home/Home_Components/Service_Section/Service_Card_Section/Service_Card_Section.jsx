import Service_Single_Card from "./Service_Single_Card/Service_Single_Card";
// import PCard from "../../../../../../public/images/Home_Page_Images/service_img/modern-living-card1.png";

const Service_Card_Section = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 justify-items-center lg:justify-items-start gap-4 mb-4 mt-5 w-full">
        <Service_Single_Card
          title="Smart Home Installation"
          body_text="Installation of smart devices, including thermostats, lighting systems, and entertainment systems, ensuring they are properly configured and integrated into your home network."
          src_link="../../../../../../public/images/Home_Page_Images/service_img/modern-living-card1.png" 
          // src={PCard1}
        />
        <Service_Single_Card
          title="Home Security Integration"
          body_text="Assess your property's vulnerabilities and design a customized security system tailored to your needs."
          src_link="..../../../../../../public/images/Home_Page_Images/service_img/modern-living-card2.png"
        />
        <Service_Single_Card
          title="Smart Home Consultation"
          body_text="Personalized guidance and expertise to help you make informed decisions about your smart home technology."
          src_link="../../../../../../public/images/Home_Page_Images/service_img/modern-living-card3.png"
        />
      </div>{" "}
      <div className="flex justify-center">
        <button className=" border px-9 py-2 rounded-lg bg-[#00ABE4] text-white font-bold mx-auto ">
          See more
        </button>
      </div>
    </>
  );
};

export default Service_Card_Section;
