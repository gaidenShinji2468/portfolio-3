import {useState} from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import MenuNav from "./MenuNav";
import "/src/assets/styles/MainNavbar.css";

function MainNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <Navbar id="main-navbar" expand="md">
      <Container fluid>
        <Navbar.Toggle
	  aria-controls="offcanvas-navbar-md"
	  onClick={handleShow}
	/>
	<Navbar.Offcanvas
          id="offcanvas-navbar-md"
	  aria-labelledby="offcanvas-navbar-label-md"
	  palcement="start"
	  show={show}
	  onHide={handleClose}
	>
	  <Offcanvas.Body><MenuNav action={handleClose}/></Offcanvas.Body>
	</Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
