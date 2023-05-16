import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ImageHover from "./ImageHover"; 
import apiCocktailsThumb from "/images/portfolio_thumbnails/api_cocktails_app.png";
import crudProductsThumb from "/images/portfolio_thumbnails/crud_products_app.png";
import ecommerceThumb from "/images/portfolio_thumbnails/e_commerce_app.png";
import {
  PcDisplay,
  Github
} from "react-bootstrap-icons";
import "/src/assets/styles/Portfolio.css";

function Portfolio() {
  const iconSize = 24;
  const projects = [
    /*{
      title: "workflow lacour",
      thumbnail: "workflow thumb",
      demo: {
        icon: <PcDisplay size={iconSize}/>,
	url: "#"
      },
      repository: {
        icon: <Github size={iconSize}/>,
	url: "#"
      }
    },*/
    {
      title: "E-commerce",
      thumbnail: ecommerceThumb,
      demo: {
        icon: <PcDisplay size={iconSize}/>,
	url: "https://gsh-e-commerce.netlify.app"
      },
      repository: {
        icon: <Github size={iconSize}/>,
	url: "https://github.com/gaidenShinji2468/e-commerce.git"
      }
    },
    {
      title: "API de Cockteles",
      thumbnail: apiCocktailsThumb,
      demo: {
        icon: <PcDisplay size={iconSize}/>,
	url: "https://api-cocktails.netlify.app"
      },
      repository: {
        icon: <Github size={iconSize}/>,
	url: "https://github.com/gaidenShinji2468/api_cocktails.git"
      }
    },
    {
      title: "CRUD de Productos",
      thumbnail: crudProductsThumb,
      demo: {
        icon: <PcDisplay size={iconSize}/>,
	url: "https://crud-products02.netlify.app"
      },
      repository: {
        icon: <Github size={iconSize}/>,
	url: "https://github.com/gaidenShinji2468/crud_products.git"
      }
    }
  ];

  return (
    <Container id="portfolio" className="mb-3" fluid>
      <hr/>
      <h2>Portafolio</h2>
      <Row xs={1} sm={2} md={3} lg={4}>
      {
        projects.map((project, i) => {
          return <ImageHover key={i} data={project}/>
	})
      }
      </Row>
    </Container>
  );
}

export default Portfolio;
