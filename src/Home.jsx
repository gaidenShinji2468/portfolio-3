import {useSelector} from "react-redux";
import Container from "react-bootstrap/Container";
import MenuNav from "./components/MenuNav";
import MainNavbar from "./components/MainNavbar";
import Greet from "./components/Greet";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import ContactMe from "./components/ContactMe";
import "./assets/styles/Home.css";

function Home() {  
  const theme = useSelector(state => state.themeColor);

  return (
    <div id="main">
      <div id="side-menu">
        <MenuNav/>
      </div>
      <div>
        <MainNavbar/>
	<Greet/>
	<AboutMe/>
	<Services/>
	<Portfolio/>
	<Experience/>
	<ContactMe/>
      </div>
    </div>
  );
}

export default Home;
