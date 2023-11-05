import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Inbox from "./inbox";

export default function InboxPage(){
    return(
        <Container>
            <Row>
                <Col lg={12}>
                    <div style={{ fontWeight: 'bold', fontSize: '1.1em', marginTop: '20px' }}>Bandeja de solicitudes</div>
                    <hr />
                    <Inbox />
                </Col>
            </Row>
        </Container>
    );
}