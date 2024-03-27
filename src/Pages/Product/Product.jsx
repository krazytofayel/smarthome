import { useState } from "react";
import Product_Details from "./Product_Details/Product_Details";
import NavBar from "../../Components/Shareable_Components/NavBar/NavBar";


const Product = () => {
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
      <section>
        <div
          className={`z-20 fixed top-0 bg-white w-full transition-all duration-300 ease-in-out ${
            navfix ? "shadow-lg bg-white" : ""
          }`}
        >
          <NavBar />
        </div>
        <div className="mt-24">
          <Product_Details />
        </div>
      </section>
    </>
  );
}

export default Product
