import ListGroup from "react-bootstrap/ListGroup";
import "/src/assets/styles/ServicesList.css";

function ServicesList({services}) {
  return (
    <>
    <p>{services.description}</p>
    <ListGroup variant="flush">
    {
      services.services.map((service, i) => {
        return (
          <ListGroup.Item key={i}>
	    <img
	      type="image/png"
	      src={services.thumbnail}
	      atl="This is a service logo"
	    />{service}
	  </ListGroup.Item>
	);
      }) 
    }
    </ListGroup>
    </>
  );
}

export default ServicesList;
