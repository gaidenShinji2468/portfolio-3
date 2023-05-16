import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image"; 
import Badge from "react-bootstrap/Badge";
import "/src/assets/styles/ImageHover.css"; 

function ImageHover({data}) {
  return (
    <Col className="image-hover">
      <Image
	src={data.thumbnail}
	alt={`This is a ${data.title} image`}
      />
      <div className="middle">
        <Badge
	  as="a"
	  href={data.demo.url}
	  target="blank_"
	  pill
        >{data.demo.icon}</Badge>
        <Badge
	  as="a"
	  href={data.repository.url}
	  target="blank_"
	  pill
        >{data.repository.icon}</Badge>
      </div>
    </Col>
  );
}

export default ImageHover;
