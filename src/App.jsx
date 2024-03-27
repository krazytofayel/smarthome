
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Service from "./Pages/Service/Service";
import Privacy_policy from "./Pages/Static_Page/Privacy_Policy/Privacy_policy";
import Terms_Condition from "./Pages/Static_Page/Terms_Condition/Terms_Condition";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Blog from "./Pages/Blog/Blog";
import Blog_Details from "./Pages/Blog_Details/Blog_Details";
import Service_Details from './Pages/Service/Service_Details/Service_Details'
import Project from "./Pages/Project/Project";
import Project_Details from "./Pages/Project/Project_Details/Project_Details";
import Product from "./Pages/Product/Product";
function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service_details/:postId" element={<Service_Details />} />
        <Route path="/privacy_policy" element={<Privacy_policy />} />
        <Route path="/terms_and_condition" element={<Terms_Condition />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<Blog_Details />} />

        <Route path="/project" element={<Project />} />
        <Route path="/project_details/:postId" element={<Project_Details />} />

        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}

export default App
