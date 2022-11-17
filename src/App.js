// import logo from './logo.svg';
import "./App.css";
import NavBar from "./Navbar/Navbar";
import Home from "./MainContent/BodyContent";
import Services from "./Services/Services";

function App() {
  return (
    <div>
      <NavBar />
      <div>
      <Home />
      <Services/>
      </div>
    </div>
  );
}

export default App;
