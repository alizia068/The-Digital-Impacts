// import logo from './logo.svg';
import "./App.css";
import NavBar from "./Navbar/Navbar";
import Home from "./MainContent/BodyContent";
import Services from "./Services/Services";
import ContactUs from "./Contact Us/ContactUs";
import AboutUs from "./About Us/AboutUs";
import Portfolio from "./Portfolio.js/Portfolio";

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Home />
        <Services />
        <ContactUs />
        <AboutUs />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
