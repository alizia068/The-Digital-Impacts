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
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div>
      <NavBar />
        <Home />
        <Services />
        <ContactUs />
        <AboutUs />
        <Portfolio />
        <WorkTogether/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
