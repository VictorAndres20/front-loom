import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const loom_numbers = Array.from({ length: 300 }, (_, index) => (index + 1).toString() );

export default function GenerateForm(){
    return(
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="flex-col flex-center" style={{ width: '100%' }}>
                        <div>s1</div>
                    </div>
                </Col>
                <Col lg={12}>
                    <hr />
                    <div className="flex-col flex-center" style={{ width: '100%' }}>
                        <div>s2</div>
                    </div>
                </Col>
                <Col style={{ margin: '10px 0' }} lg={12}>
                    <hr />
                    <Container fluid>
                        <Row>
                            <Col lg={12}>
                                <div className="flex-col flex-center" style={{ width: '100%' }}>
                                    <Form.Label style={{ fontWeight: 'bold' }}>Número de telar</Form.Label>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="flex-col flex-center" style={{ width: '100%' }}>
                                    <Form.Control 
                                        type="text"
                                    />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="flex-col flex-center" style={{ width: '100%' }}>
                                    <Form.Select>
                                    <option value={''}>...</option>
                                    {
                                        loom_numbers.map((d, key) => (
                                            <option key={`option_${key}`} value={d}>{d}</option>
                                        ))
                                    }
                                    </Form.Select>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <hr />
                </Col>
                <Col lg={3}>
                </Col>
                <Col lg={6}>
                    <div className="flex-col flex-center" style={{ width: '100%' }}>
                        <Button style={{ width: '100%' }} size="sm" variant="success">
                            Crear
                        </Button>
                    </div>
                </Col>
                <Col lg={3}>
                </Col>
            </Row>
        </Container>
    );
}