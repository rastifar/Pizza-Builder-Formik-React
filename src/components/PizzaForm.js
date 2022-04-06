import React from "react";

import { Card, Col, Container, Form, Row } from "react-bootstrap";
import Summary from "./Summary"
import Order from "./Order";
import { useFormik } from "formik";

const validate = (values) => {
    const errors = {};
  
    if (!values.size) {
      errors.size = "Required size";
    }
    if (!values.crust) {
      errors.crust = "Required crust";
    }
    return errors;
  };

const PizzaForm = () => {

    const formik = useFormik({
        initialValues: {
            size: "",
            crust: "",
            cheese: {
                includes: false,
                value:""
            },
            sauce: {
                includes: false,
                value:""
            },
            toppingMeat: [],
            toppingNonMeat: [],
            specialInstruction:""
            
        },
        onSubmit:(value) => {
            alert(JSON.stringify(value,null,2))
        },
        validate,
    })

  return (
    <Container className="my-4">
      <Card className="shadow-lg p-4">
        <Form onSubmit={formik.handleSubmit}>
          <Row>
            <Col md={8}>
              <Order formik={formik} />
            </Col>
            <Col md={4}>
                          <Summary formik={formik}/>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default PizzaForm;
