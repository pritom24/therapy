import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.css';
import Home from './Home';
import Contact from './Contact';
import Services from './Services';
import About from './About';
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Routes, Route, Navigate} from 'react-router-dom'


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/services' element={<Services/>}/>
      <Route exact path='/about' element={<About/>}/>

      
    </Routes>

    <Footer/>
    </>
  );
}

export default App;
