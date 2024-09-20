import Form from "react-bootstrap/Form";

const OutputForm = () => {
  return (
    <Form id="output-form">
      <Form.Group className="mb-3 h-100" controlId="todayLesson">
        <Form.Label>Report</Form.Label>
        <Form.Control className="output-form__textarea" as="textarea" />
      </Form.Group>
    </Form>
  );
};

export default OutputForm;
