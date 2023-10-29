import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import LoginForm from "./form";
import BasicNavbar from "../../widgets /navbars/basic_navbar";

export default function LoginPage() {
    return(
        <div>
            <BasicNavbar />
            <Container style={{ marginTop: '50px' }}>
                <Row>
                    <Col lg={4} md={2}>
                    </Col>
                    <Col lg={4} md={8}>
                        <Card>
                            <Card.Body>
                                <div className="flex-col flex-center" style={{ width: '100%' }}>
                                <img src={require('../../_assets/imgs/logo.png')} width={100} alt="Koala Software"/>
                                </div>
                                <LoginForm />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={2}>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}