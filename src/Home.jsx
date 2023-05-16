import {useSelector} from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
    <Container id="main" fluid>
      <Row>
	<Col id="side-menu" xs={3}>
          <MenuNav/>
	</Col>
	<Col>
	  <MainNavbar/>
	  <Greet/>
	  <AboutMe/>
	  <Services/>
	  <Portfolio/>
	  <Experience/>
	  <ContactMe/>
	</Col>
      </Row>
    </Container>
  );
}

export default Home;
