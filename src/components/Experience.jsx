import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {PlusCircle} from "react-bootstrap-icons";
import lacourLogo from "/images/icons/lacour.png";
import "/src/assets/styles/Experience.css";

function Experience() {
  const companies = [
    {
      office: "Líder en desarrollo",
      company: "Lacour C.A.",
      image: lacourLogo,
      from: "2022",
      until: "2023"
    }
  ];

  return (
    <Container id="experience" className="mb-3" fluid>
      <hr/>
      <h2>Experiencia</h2>
      <Row xs={1} sm={2} md={3} lg={4}>
	{
          companies.map((company, i) => {
            return (
              <Col key={i} className="mb-3">
		<Card
                  bg="secondary"
                  text="dark"
                >
                  <Card.Header>
		    <img
		      type="image/png"
		      src={lacourLogo}
		      alt={`This is a ${company.company} image`}
		    />
		    {company.company}
		  </Card.Header>
                  <Card.Body>
                    <Card.Title>{company.office}</Card.Title>
                    <Card.Text>{`${company.from} - ${company.until}`}</Card.Text>
                  </Card.Body>
                </Card>
	      </Col>
	    );
	  }) 
	}
	<Col>
          <Card
            bg="primary"
            text="white"
          >
	    <Card.Header><PlusCircle size={24}/></Card.Header>
            <Card.Body>
              <Card.Title>Tu podrías ser el siguiente</Card.Title>
              <Card.Text>
	        <a
	          href="mailto:gaidenshinji2468@gmail.com"
	          target="blank_"
	        >Contáctame</a>
	      </Card.Text>
            </Card.Body>
          </Card>
	</Col>
      </Row>
    </Container>
  );
}

export default Experience;
