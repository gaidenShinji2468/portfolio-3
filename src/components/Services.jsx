import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import ServicesList from "./ServicesList";
import devicesLogo from "/images/icons/devices.png";
import uiLogo from "/images/icons/ui.png";
import expressApiLogo from "/images/icons/engineering.png";
import fullstackLogo from "/images/icons/fullstack-dev.png";
import "/src/assets/styles/Services.css";

function Services() {
  const RWAD = {
    thumbnail: devicesLogo,
    description: "Perfecto para páginas web no estáticas, sitios de comercio electrónico o aplicaciones.",
    services: [
      "Diseño responsivo",
      "Conexión API",
      "Aplicación web desplegable en su dominio",
      "Organización y diseño coherentes",
      "Velocidad y optimización de recursos"
    ]
  };
  const UI_UX = {
    thumbnail: uiLogo,
    description: "Creación de sistemas de interfaz sofisticados y fáciles de usar.",
    services: [
      "Diseño responsivo",
      "Gran aspecto final de los productos",
      "Componentes de interfaz de usuario totalmente funcionales",
      "Uso de tecnologías de interfaz de usuario para mejorar la experiencia"
    ]
  };
  const API = {
    thumbnail: expressApiLogo,
    description: "Diseño y desarrollo de sistemas de gestión, servicios y tratamiento de datos.",
    services: [
      "Tratamiento de datos y gestión rigurosa de la información",
      "Protección e integridad de la información",
      "Gestión de la memoria para obtener el máximo rendimiento",
      "Optimización de recursos y facilidad de uso"
    ]
  };
  const FULLSTACK = {
    thumbnail: fullstackLogo,
    description: "Combinación de sistemas de interfaz de usuario para la mejor experiencia visual y sistemas de gestión de la información y seguridad.",
    services: [
      "Excelente experiencia de interfaz de usuario respaldada por una UX ideal",
      "Diseño responsivo, multipropósito y multiplataforma",
      "Manejo y gestión de la información con la máxima seguridad e integridad",
      "Servicios contables y administrativos básicos"
    ]
  };
  const services = [
    {
      title: "Desarrollo de aplicaciones web React",
      body: <ServicesList services={RWAD}/>
    },
    {
      title: "Diseños UI/UX",
      body: <ServicesList services={UI_UX}/>
    },
    {
      title: "Desarrollo de API Express",
      body: <ServicesList services={API}/>
    },
    {
      title: "Desarrollo completo de aplicaciones",
      body: <ServicesList services={FULLSTACK}/>
    }
  ];

  return (
    <Container id="services" className="mb-3" fluid>
      <hr/>
      <h2>Mis Servicios</h2>
      <Accordion defaultActiveKey={0}>
      {
        services.map((service, i) => {
          return (
            <Accordion.Item
	      key={i}
	      eventKey={i} 
	    >
	      <Accordion.Header>{service.title}</Accordion.Header>
	      <Accordion.Body>{service.body}</Accordion.Body>
	    </Accordion.Item>
	  );
	})
      }	 
      </Accordion>
    </Container>
  );
}

export default Services;
