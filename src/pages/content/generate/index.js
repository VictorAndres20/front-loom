import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GenerateForm from "./generate_form";

export default function GeneratePage(){
    return(
        <Container>
            <Row>
                <Col lg={12}>
                    <div style={{ fontWeight: 'bold', fontSize: '1.1em', marginTop: '20px' }}>Crear solicitud</div>
                    <hr />
                    <GenerateForm />
                </Col>
            </Row>
        </Container>
    );
}