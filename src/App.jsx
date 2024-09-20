import { useState } from "react";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import InputForm from "./components/inputForm";
import OutputForm from "./components/outputForm";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container fluid className="main-container d-flex">
      <Col>
        <h1 className="title font-bold mb-4">goFLUENT Report Builder</h1>
        <div className="d-flex">
          <Row className="me-3 w-50">
            <InputForm />
          </Row>
          <Row className="me-3 w-50">
            <OutputForm />
          </Row>
        </div>
      </Col>
    </Container>
  );
}

export default App;
