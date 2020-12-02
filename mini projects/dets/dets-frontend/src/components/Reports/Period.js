import React from "react";
import * as R from "react-bootstrap";
import { Form, Button } from "react-bootstrap";

function Period(props) {
  const { override } = props;
  return (
    <R.Col xs={12} md={12} className="Manage">
      <Form>
        {override ? (
          <>
            <Form.Group controlId="fromdate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </>
        ) : (
          <>
            <Form.Group controlId="fromdate">
              <Form.Label>From Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group controlId="todate">
              <Form.Label>To Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </>
        )}
        <Button variant="primary" type="submit" className="float-right">
          Submit
        </Button>
      </Form>
    </R.Col>
  );
}

export default Period;
