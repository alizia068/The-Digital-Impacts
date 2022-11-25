// import logo from './logo.svg';

import "./App.css";
import NavBar from "./Navbar/Navbar";
import Home from "./MainContent/BodyContent";
import Services from "./Services/Services";
import ContactUs from "./Contact Us/ContactUs";
import AboutUs from "./About Us/AboutUs";
import Portfolio from "./Portfolio.js/Portfolio";
import WorkTogether from "./WorkTogether/WorkTogether";
import Footer from "./Footer Component/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path="/Services" element={<Services />}></Route>
          <Route exact path="/AboutUs" element={<AboutUs />}></Route>
          <Route exact path="/Portfolio" element={<Portfolio />}></Route>
          <Route exact path="/WorkTogether" element={<WorkTogether />}></Route>
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 