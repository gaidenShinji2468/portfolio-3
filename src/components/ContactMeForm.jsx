import {useState} from "react";
import {
  useForm,
  ValidationError
} from "@formspree/react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "/src/assets/styles/ContactMeForm.css";

function ContactMeForm() {
  const [state, handleSubmit] = useForm("xqkoopqa");

  return (
    <Form id="contact-me-form" onSubmit={event => {
      handleSubmit(event);
      event.target.reset();
    }}>
      <FloatingLabel
	controlId="name"
	label="Nombre"
	className="mb-3"
      >
        <Form.Control
	  type="text"
	  name="name"
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
	  name="email"
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
	  name="message"
	  placeholder="Describe tu idea o projecto"
	/>
	<ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </FloatingLabel>
      <ButtonGroup>
        <Button
	  variant="primary"
	  type="submit"
	  disabled={state.submitting}
        >Enviar</Button>
        <Button
	  variant="secondary"
	  type="reset"
        >Cancelar</Button>
      </ButtonGroup>
    </Form>
  );
}

export default ContactMeForm;
