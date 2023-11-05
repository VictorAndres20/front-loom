import { Col, Container, Form, Row } from "react-bootstrap";

export default function Weft({ creationHook, }){
    return(
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="flex-row">
                        <span style={{ marginRight: '8px', fontSize: '0.9em', fontWeight: 'bold' }}>Cantidad</span>
                        <Form.Select
                            onChange={(e) =>{
                                let ent = { ...creationHook.entity };
                                ent.weft_quantity = e.target.value;
                                creationHook.setEntity(ent);
                            }}
                            value={ creationHook.entity.weft_quantity }
                        >
                            <option value={0}>...</option>
                            {
                                Array.from({ length: 12 }).map((_, key) => (
                                    <option key={`option_${key}`} value={key + 1}>{key + 1}</option>
                                ))
                            }
                        </Form.Select>
                    </div>
                </Col>
                <Col lg={12}>
                    <div style={{ fontSize: '0.9em', fontStyle: 'italic' }}>{creationHook.entity.weft_quantity}</div>
                </Col>
            </Row>
        </Container>
    );
}