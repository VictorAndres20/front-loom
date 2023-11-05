import { Col, Container, Form, Row } from "react-bootstrap";

export default function Warp({ creationHook, }){
    return(
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="flex-row">
                        <span style={{ marginRight: '8px', fontSize: '0.9em', fontWeight: 'bold' }}>Código urdiembre</span>
                        <Form.Control 
                            type="text"
                            placeholder="Código..."
                            onChange={(e) =>{
                                let ent = { ...creationHook.entity };
                                ent.warp = e.target.value;
                                creationHook.setEntity(ent);
                            }}
                            value={ creationHook.entity.warp }
                        />
                    </div>
                </Col>
                <Col lg={12}>
                    <div style={{ fontSize: '0.9em', fontStyle: 'italic' }}>{creationHook.entity.warp}</div>
                </Col>
            </Row>
        </Container>
    );
}