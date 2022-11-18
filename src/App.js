// import logo from './logo.svg';
import "./App.css";
import NavBar from "./Navbar/Navbar";
import Home from "./MainContent/BodyContent";
import Services from "./Services/Services";
import ContactUs from "./Contact Us/ContactUs";

function App() {
  return (
    <div>
      <NavBar />
      <div>
      <Home />
      <Services/>
      <ContactUs/>
      </div>
    </div>
  );
}

export default App;
