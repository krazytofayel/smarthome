import AboutUs_Single_Card from "./AboutUs_Single_Card";
import icon1 from '../../../../../../../public/images/Home_Page_Images/Aboutus_Page_Images/Icon.png'
import icon2 from "../../../../../../../public/images/Home_Page_Images/Aboutus_Page_Images/Icon2.png";
import icon3 from "../../../../../../../public/images/Home_Page_Images/Aboutus_Page_Images/Icon3.png";
function AboutUs_Card() {
  return (
    <div className="border-2 border-dashed p-2 rounded mt-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-2 p-1 mb-4 mt-5 w-full">
        <AboutUs_Single_Card icon={icon1} text="managed Centrally" />
        <AboutUs_Single_Card
          icon={
           icon2
          }
          text="Wireless connects"
        />
        <AboutUs_Single_Card
          icon={
           icon3
          }
          text="Smart application"
        />
      </div>
    </div>
  );
}

export default AboutUs_Card;
