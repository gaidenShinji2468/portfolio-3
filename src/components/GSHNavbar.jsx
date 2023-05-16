import {useState} from "react";
import {
  useSelector,
  useDispatch
} from "react-redux";
import {setThemeColor} from "/src/store/slices/themeColor.slice";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {
  // social
  Github,
  EnvelopeAtFill,
  Whatsapp,
  Linkedin,
  // nav
  HouseDoorFill,
  PersonFill,
  PenFill,
  ArchiveFill,
  BriefcaseFill,
  PersonLinesFill,
  // theme
  MoonFill,
  SunFill,

  FileEarmarkArrowDownFill
} from "react-bootstrap-icons";
import "/src/assets/styles/Menu.css";

function GSHNavbar() {
  const expand = "md";
  const theme = useSelector(state => state.themeColor);
  const dispatch = useDispatch();
  const [themeIcon, setThemeIcon] = useState(<SunFill/>);

  const changeTheme = () => {
    let changedTheme;

    if(theme.type == "light") {
      changedTheme = {
        type: "dark",
	palette: {
          bg: "#1a1a1a",
          title: "#1f9bcf",
          subTitle: "#4bbf73",
          paragraph: "#fff",
          component: "#fff"
	}
      };
      setThemeIcon(<MoonFill/>);
    }else{
      changedTheme = {
        type: "light",
	palette: {
          bg: "#fff",
          title: "#d9534f",
          subTitle: "#f0ad4e",
          paragraph: "#1a1a1a",
          component: "#343a40"
	}
      };
      setThemeIcon(<SunFill/>);
    }
    dispatch(setThemeColor(changedTheme));
  }

  return (
    <>
      <Navbar
	id="navbar"
	expand={expand}
	className="mb-3"
	fixed="top"
	style={{
          backgroundColor: theme.palette.bg,
	  color: theme.palette.paragraph
	}}
      >
        <Container>
          <Navbar.Brand href="#home">GSH - Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{
            
	  }}/>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbar-expand-${expand}`}
            placement="start"
	    backdrop="static"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1">
	        <NavDropdown
                  title="Menu"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#about-me">
	            <PersonFill/>About Me
	          </NavDropdown.Item>
                  <NavDropdown.Item href="#services">
                    <PenFill/>My Services
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#portfolio">
                    <BriefcaseFill/>Portfolio
                  </NavDropdown.Item>
	          <NavDropdown.Item href="#experience">
	            <ArchiveFill/>Experience
	          </NavDropdown.Item>
	          <NavDropdown.Item href="#contact-me">
	            <PersonLinesFill/>Contact Me
	          </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="My Socials"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#email">
	            <EnvelopeAtFill/>E-mail
	          </NavDropdown.Item>
                  <NavDropdown.Item href="#whatsapp">
                    <Whatsapp/>Whatsapp
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#linkedin">
                    <Linkedin/>LinkedIn
                  </NavDropdown.Item>
	          <NavDropdown.Item>
	            <Github/>Github
	          </NavDropdown.Item>
                </NavDropdown>
	        <Nav.Link href="#">Download CV</Nav.Link>
	        <Nav.Link type="button" onClick={() => changeTheme()}>Theme</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default GSHNavbar;
