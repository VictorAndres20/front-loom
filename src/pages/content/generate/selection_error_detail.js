import { Button, Col, Container, Row } from "react-bootstrap";
import { useFindErrorDetailsByType } from "../../../_hooks/error_detail/useFindErrorDetailsByType.hook";

export default function SelectionErrorDetail({ type = '', createHook,  changeType = (cod) => {} }) {
    
    const findDetailsHook = useFindErrorDetailsByType(type);
    
    return(
        <Container fluid>
            <Row>
                {
                    findDetailsHook.data.map( (element, key) => (
                        <Col lg={4} xs={6} key={`col2_${key}`} style={{ margin: '10px 0' }}>
                            <Button
                                style={{ width: '95%' }}
                                onClick={() => {
                                    changeType(element.cod);
                                }}
                                variant={ createHook.entity.error_detail === element.cod ? 'primary' : 'outline-primary' }
                            >
                                {element.name}
                            </Button>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
}