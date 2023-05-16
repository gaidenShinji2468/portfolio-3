import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactMeForm from "./ContactMeForm";
import "/src/assets/styles/ContactMe.css";

function ContactMe() {

  return (
    <Container id="contact-me" className="mb-3" fluid>
      <hr/>
      <h2>Contáctame</h2>
      <Row>
	<Col>
	  <ContactMeForm/>
	</Col>
      </Row>
    </Container>
  );
}

export default ContactMe;
