
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Service from "./Pages/Service/Service_Components/Service";
import Privacy_policy from "./Pages/Static_Page/Privacy_Policy/Privacy_policy";
import Terms_Condition from "./Pages/Static_Page/Terms_Condition/Terms_Condition";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Blog from "./Pages/Blog/Blog";
function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/privacy_policy" element={<Privacy_policy />} />
        <Route path="/terms_and_condition" element={<Terms_Condition />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </>
  );
}

export default App
