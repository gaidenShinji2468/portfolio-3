import {useState} from "react";
import {
  useForm,
  ValidationError
} from "@formspree/react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import "/src/assets/styles/ContactMeForm.css";

function ContactMeForm() {
  const [state, handleSubmit] = useForm("xqkowjyp");
  
  return ( 
    <Form id="contact-me-form" onSubmit={handleSubmit}>
      <FloatingLabel
	controlId="name"
	label="Nombre"
	className="mb-3"
      >
        <Form.Control
	  type="text"
	  placeholder="Introduce tu nombre"
	/>
	<ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
      </FloatingLabel>
      <FloatingLabel
	controlId="email"
	label="Email"
	className="mb-3"
      >
        <Form.Control
	  type="email"
	  placeholder="Introduce tu email"
	/>
	<ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </FloatingLabel>
      <FloatingLabel
	controlId="message"
	label="Describe tu idea o projecto"
      >
        <Form.Control
	  as="textarea"
	  placeholder="Describe tu idea o projecto"
	/>
	<ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </FloatingLabel>
      <Button
	variant="primary"
	type="submit"
	disabled={state.submitting}
      >Enviar</Button>
    </Form>
  );
}

export default ContactMeForm;
