import React from "react";
import { Badge, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useFindAllErrorType } from "../../../_hooks/error_type/useFindAllErrorType.hook";
import { useFindAllDemandByErrorType } from "../../../_hooks/demand/useFindAllDemandByErrorType.hook";
import Detail from "./detail";

export default function Inbox() {

    const [ demandSelected, setDemandSelected ] = React.useState(null);
    const errorTypesHook = useFindAllErrorType();
    const demandsHook = useFindAllDemandByErrorType(demandSelected);

    const changeType = (cod) => {
        demandsHook.loadData(cod);
        setDemandSelected(cod);
    }

    return(
        <Container fluid>
            <Row>
                <Col lg={2} sm={2}>
                    <Form.Check
                        label="Todos"
                        name="group-types"
                        type="radio"
                        checked = { demandSelected === null }
                        onChange={(e) => {
                            changeType(null);
                        }}
                    />
                    {
                        errorTypesHook.data.map((errorType, key) => (
                            <Form.Check
                                key={`types_${key}`}
                                label={errorType.name}
                                name="group-types"
                                type="radio"
                                checked = { demandSelected === errorType.cod }
                                onChange={() => {
                                    changeType(errorType.cod);
                                }}
                            />
                        ))
                    }
                </Col>
                <Col lg={10} sm={10}>
                <div style={{ width: '100%', padding: '20px 20px', backgroundColor: '#ddd', height: window.innerHeight - 180, overflowY: 'auto' }}>
                    {
                        demandsHook.data.length === 0 ?
                        <Badge bg="success">Bandeja vacía</Badge>
                        :
                        demandsHook.data.map(( d, key ) => (
                            <Card key={`card_${key}`} style={{ margin: '8px' }}>
                                <Card.Body>
                                    <Detail demand={d} reload={() => demandsHook.loadData(demandSelected)} />
                                </Card.Body>
                            </Card>
                        ))
                    }
                </div>
                </Col>
            </Row>
        </Container>
    );
}