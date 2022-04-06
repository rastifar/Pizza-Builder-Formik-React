import React from "react";
import image from "../assets/pizza.jpg";
import { Card, Button } from "react-bootstrap";

const Summary = ({ formik }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Text>
          <pre>{JSON.stringify(formik.values, null, 2)}</pre>
        </Card.Text>
      </Card.Body>
      <Button variant="danger" type="Submit">
        Placed Order
      </Button>
    </Card>
  );
};

export default Summary;
