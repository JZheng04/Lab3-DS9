import React from "react"
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function Perfil(){
    return (
        <Container>
          <Row className="my-4">
        <Col>
          <h2>Perfil de Lavandería</h2>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="public/logo.png" alt="Foto Perfil Lavandería" />
            <Card.Body>
            <Card.Title>Nombre Lavandería</Card.Title>
            </Card.Body>
          </Card>   
        </Col>
        <Col md={8}>
          <Form>
            <Form.Group controlId="services">
              <Form.Label>Servicios a ofrecer</Form.Label>
              <Form.Check type="checkbox" label="Lavado y secado" />
              <Form.Check type="checkbox" label="Planchado" />
            </Form.Group>
        </Form>
        </Col>
        </Row>
        </Container>
      );
}
export default Perfil;