
import Secondary_Title_Section from "../../../../Components/Shareable_Components/Secondary_Title_Section/Secondary_Title_Section";
import Text_Content_Section from "../../../../Components/Shareable_Components/Text_Content_Section/Text_Content_Section";
import Single_Profile_Card from "./Aboutus_ProfileCard_Components/Single_Profile_Card/Single_Profile_Card";
import profiles from '../../../../../public/mockapi/Profile.json'
const AboutUs_ProfileCard = () => {
  return (
    <>
      <section>
        <div className=" text-[35px] text-[#00ABE4] font-bold text-center my-10">Our Team</div>
        <div className="flex flex-col justify-center items-center align-middle mb-10 ">

          <Secondary_Title_Section secondary_title={'Experts in Smart Home Solutions'} />
          <Text_Content_Section text_content={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry/s standard dummy text ever since the 1500s'}/>
        </div>
        <div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center  gap-5 mb-5">
            {profiles.map((profile, index) => (
              <Single_Profile_Card
                key={index}
                imgSrc={profile.imgSrc}
                name={profile.name}
                title={profile.title}
                facebookUrl={profile.facebookUrl}
                instagramUrl={profile.instagramUrl}
                linkedinUrl={profile.linkedinUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs_ProfileCard;
