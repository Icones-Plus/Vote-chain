import React from "react";
import {
  InputGroup,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
function ForCandidate() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={{span: 6, offset: 3}}>
            <Col>
              <label htmlFor="basic-url">Your vanity URL</label>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon3">
                    https://example.com/users/
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl id="basic-url" aria-describedby="basic-addon3" />
              </InputGroup>
              <Form>
                <Form.Group>
                  <Form.File
                    id="exampleFormControlFile1"
                    label="Example file input"
                  />
                </Form.Group>
              </Form>
              <Button variant="primary" size="lg">
                Large button
              </Button>{" "}
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default ForCandidate;
