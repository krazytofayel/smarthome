import { useState } from "react";
import NavBar from "../../Components/Shareable_Components/NavBar/NavBar";
import Blog_Section_Upper_Part from "./Blog_Components/Blog_Section_Upper_Part/Blog_Section_Upper_Part"
import Blog_Popular_Post from "./Blog_Components/Blog_Popular_Post/Blog_Popular_Post";
import Blog_Recent_Post_Part from "./Blog_Components/Blog_Recent_Post_Part/Blog_Recent_Post_Part";
import Footer from "../../Components/Shareable_Components/Footer/Footer";



const Blog = () => {
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
      <div>
        <Blog_Section_Upper_Part />
      
          <Blog_Popular_Post />
          <Blog_Recent_Post_Part/>
        <Footer/>
      </div>
    </>
  );
}

export default Blog
