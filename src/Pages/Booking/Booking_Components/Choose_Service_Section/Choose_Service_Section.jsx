import Secondary_Title_Section from "../../../../Components/Shareable_Components/Secondary_Title_Section/Secondary_Title_Section";
import Single_Service_Card from "./Choose_Service_Components/Single_Service_Card/Single_Service_Card";
import { RiHomeOfficeLine } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";
import { TbHomeStar } from "react-icons/tb";
const Choose_Service_Section = () => {
  return (
    <>
      <section>
        <div className="flex justify-center items-center mt-5 mb-10">
          <Secondary_Title_Section
            secondary_title={"Choose the Service You Need"}
          />
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-10  gap-y-10 p-2 md:p-0">
          <Single_Service_Card
            name="Smart Home Installation"
            description={
              "Simplify home automation with our Smart Home Installation service, handling voice-controlled assistants and remote controlled features."
            }
            imgSrc={
              <RiHomeOfficeLine className="size-8 text-[#00ABE4] hover:text-white" />
            }
          />
          <Single_Service_Card
            name="Home Security Integration"
            description={
              "Seamlessly incorporating smart locks, video doorbells, and surveillance cameras for comprehensive protection."
            }
            imgSrc={
              <MdOutlineSecurity className="size-8 text-[#00ABE4] hover:text-white" />
            }
          />
          <Single_Service_Card
            name="Smart Home Consultation"
            description={
              "Offering expert advice on smart technology integration tailored to your needs."
            }
            imgSrc={
              <TbHomeStar className="size-8 text-[#00ABE4] hover:text-white" />
            }
          />
          <Single_Service_Card
            name="Home Appliances Automation"
            description={
              "Enables connectivity among your home appliances, allowing them to perform daily tasks automatically, requiring no manual intervention."
            }
            imgSrc={
              <RiHomeOfficeLine className="size-8 text-[#00ABE4] hover:text-white" />
            }
          />
          <Single_Service_Card
            name="Automated Lighting Installation"
            description={
              "Customizing lighting schedules and ambiance to suit your lifestyle."
            }
            imgSrc={
              <RiHomeOfficeLine className="size-8 text-[#00ABE4] hover:text-[#fff]" />
            }
          />
          <Single_Service_Card
            name="After Sales Support"
            description={
              "Ensuring your smart home systems continue to operate smoothly with expert troubleshooting and maintenance."
            }
            imgSrc={
              <RiHomeOfficeLine className="size-8 text-[#00ABE4] hover:text-[#fff] " />
            }
          />
        </div>
      </section>
    </>
  );
};

export default Choose_Service_Section;
