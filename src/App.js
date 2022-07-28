import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services";
import About from "./About";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Accordion from "./Accordion";
import { Routes, Route, Navigate } from "react-router-dom";
import { SliderData } from "./SliderData";
import { InfoData } from "./InfoData";
import BlogSection from "./BlogSection";
function App() {
  return (
    <>
      <Navbar />
     
      <Routes>
        <Route exact path="/" element={<Home slides={SliderData} />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/faq" element={<Accordion />} />
        <Route exact path="/blogs" element={<BlogSection {...InfoData}/>}/>
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
