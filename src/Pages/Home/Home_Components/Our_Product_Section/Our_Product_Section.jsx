import Main_Title_Section from "../../../../Components/Shareable_Components/Main_Title_Section/Main_Title_Section";
import Secondary_Title_Section from "../../../../Components/Shareable_Components/Secondary_Title_Section/Secondary_Title_Section"
import Product_Single_Card from "./Our_Product_Components/Product_Single_Card/Product_Single_Card";

import productimg1 from "../../../../../public/images/Home_Page_Images/Product_Page_Images/product-1.png";
import productimg2 from "../../../../../public/images/Home_Page_Images/Product_Page_Images/product-2.png";
import productimg3 from "../../../../../public/images/Home_Page_Images/Product_Page_Images/product-3.png";
import productimg4 from "../../../../../public/images/Home_Page_Images/Product_Page_Images/product-4.png";
const Our_Product_Section = () => {
  return (
    <>
      <section className="container mx-auto  px-4 space-y-6 py-8 md:py-12 lg:py-20">
        <div className="flex flex-col justify-center items-center mb-10">
          <Secondary_Title_Section
            secondary_title={"Our Products"}
            active={"active"}
          />
          <div className="text-xl max-w-5xl text-center font-semibold">
            <Main_Title_Section
              main_title={"Elevate Your Lifestyle with Smart Home People"}
            />
          </div>
        </div>

        <div className="flex justify-center ">
          <div className="  grid grid-cols-1 md:grid-cols-2 gap-20 justify-center items-center align-middle mt-15">
            <div>
              <Product_Single_Card
                name={"SMART SECURITY CAMERA"}
                price={500}
                productimgsrc={productimg1}
              />
            </div>
            <div>
              <Product_Single_Card
                name={"SMART DOOR LOCK"}
                price={300}
                productimgsrc={productimg2}
              />
            </div>
            <div>
              <Product_Single_Card
                name={"SMART LIGHTING"}
                price={700}
                productimgsrc={productimg3}
              />
            </div>
            <div>
              <Product_Single_Card
                name={"SMART SWITCH"}
                price={900}
                productimgsrc={productimg4}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Our_Product_Section
