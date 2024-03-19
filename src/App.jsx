
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Service from "./Pages/Service/Service_Components/Service";
function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/service" element={<Service/>}/>
    </Routes>
     
    </>
  )
}

export default App
