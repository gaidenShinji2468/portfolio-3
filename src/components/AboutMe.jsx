import {useSelector} from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
// front technologies logos
import htmlLogo from "/images/icons/html-5.png";
import cssLogo from "/images/icons/css-3.png";
import jsLogo from "/images/icons/js.png";
import reactLogo from "/images/icons/physics.png";
import bootstrapLogo from "/images/icons/bootstrap.png";
// backend technologies logos
import nodeLogo from "/images/icons/nodejs.png";
import expressLogo from "/images/icons/expressjs.png";
import pythonLogo from "/images/icons/python.png";
import mongodbLogo from "/images/icons/mongodb.png";
import postgreLogo from "/images/icons/postgre.png";
import gitLogo from "/images/icons/git.png";
import githubLogo from "/images/icons/github.png";
import "/src/assets/styles/AboutMe.css";

function AboutMe() {
  const theme = useSelector(state => state.themeColor);
  const frontTech = [
    {
      thumbnail: htmlLogo,
      name: "HTML 5"
    },
    {
      thumbnail: cssLogo,
      name: "CSS 3"
    },
    {
      thumbnail: jsLogo,
      name: "JavaScript"
    },
    {
      thumbnail: reactLogo,
      name: "React JS"
    },
    {
      thumbnail: bootstrapLogo,
      name: "Bootstrap"
    }
  ];
  const backTech = [
    {
      thumbnail: nodeLogo,
      name: "Node JS"
    },
    {
      thumbnail: expressLogo,
      name: "Express JS"
    },
    {
      thumbnail: mongodbLogo,
      name: "Mongo DB"
    },
    {
      thumbnail: postgreLogo,
      name: "Postgre DB"
    },
    {
      thumbnail: pythonLogo,
      name: "Python"
    },
    {
      thumbnail: gitLogo,
      name: "Git"
    },
    {
      thumbnail: githubLogo,
      name: "GitHub"
    }
  ];
 
        
  return (  
    <Container id="about-me" className="mb-3" fluid>
      <hr/>
      <h2>Acerca de Mí</h2>
      <Row>
	{/* Tecnologias */}
	<Container as={Col}>
	  <Row>
	    <Col>
	      <Card className="techs">
	        <Card.Header>Tecnologías Frontend</Card.Header>
                <ListGroup variant="flush"> 
                {
                  frontTech.map((tech, i) => {
                    return (
                      <ListGroup.Item key={i}>
		        <img
			  type="image/png"
			  src={tech.thumbnail}
			  alt={`This is a ${tech.name} icon`}
			/>{tech.name}
		      </ListGroup.Item>
		    );
		  })
		}
                </ListGroup>
              </Card>
            </Col>
	    <Col>
              <Card className="techs">
	        <Card.Header>Tecnologías Backend</Card.Header>
                <ListGroup variant="flush"> 
                {
                  backTech.map((tech, i) => {
                    return (
                      <ListGroup.Item key={i}>
		        <img
			  type="image/png"
			  src={tech.thumbnail}
			  alt={`This is a ${tech.name} icon`}
			/>{tech.name}
		      </ListGroup.Item>
		    );
		  })
		}
                </ListGroup>
              </Card>
	    </Col>
	  </Row>
	</Container>
	{/* Perfil */}
	<Col>
          <Card
            bg="primary"
	    border=""
	    text="white"
	  >
            <Card.Body>
              <Card.Title>Desarrollador Full-Stack</Card.Title>
              <Card.Text>
                Desarrollador frontend con más de 1 año de experiencia; 
manejo avanzado de tecnologías base para el desarrollo web <strong style={{color: theme.palette.nodeAndLink}}>(HTML, CSS, Javascript)</strong>; empleo de la librería <strong style={{color: theme.palette.nodeAndLink}}>React</strong> para la creación de interfaces reutilizables; uso de características avanzadas de Javascript como <strong style={{color: theme.palette.nodeAndLink}}>fetch, asíncrona, clases, callbacks, constructores y generadores</strong>. Me considero alguien pro-activo, organizado, eficiente y altamente capacitado para laborar en grupos. Actualmente estoy en busca de un empleo desafiante que me permita adquirir nuevas habilidades y mejorar mis conocimientos, además de crecer como profesional en el área.
              </Card.Text>
            </Card.Body>
          </Card>
	</Col>
      </Row>
    </Container>
  );
}

/*function AboutMe() {
  
  return (
    <div id="about-me">
      <Chain
	content={aboutMeTag}
	display="left"
      />
      <div style={{
        backgroundColor: theme.palette.nodeAndLink,
	color: theme.palette.componentsAndFonts
      }}>
	<div>
	  <TechList title="Tecnologías de Frontend" techs={frontTech}/>
	  <TechList title="Tecnologías de Backend" techs={backTech}/>
	</div>
        <p style={{
	  backgroundColor: theme.palette.componentsAndFonts,
	  color: theme.palette.backgroundAndFonts
	}}>
	  
        </p>
      </div>
    </div>
  );
}*/

export default AboutMe;

