import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Select from 'react-select';
import { useFindAllErrorType } from "../../../_hooks/demand/useFindAllDemandByErrorType.hook";
import { useDemandCreate } from "../../../_hooks/demand/useGenerate.hook";

const loom_numbers = Array.from({ length: 300 }, (_, index) => (index + 1).toString() );

export default function GenerateForm(){

    const createHook = useDemandCreate();
    const [ errorType, setErrorType ] = React.useState('');
    const errorTypeAllHook = useFindAllErrorType();

    return(
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="flex-col flex-center" style={{ width: '100%' }}>
                        <Container fluid>
                            <Row>
                                {
                                    errorTypeAllHook.data.map( ( element, key ) => (
                                        <Col lg={4} md={6} sm={6} xs={6} key = { `col_${key}` } style={{ margin: '10px 0' }}>
                                            <Button
                                                style={{ width: '95%' }}
                                                onClick={() => {
                                                    setErrorType(element.cod);
                                                }}
                                                variant={ errorType === element.cod ? 'primary' : 'outline-primary' }
                                            >
                                                {element.name}
                                            </Button>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Container>
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
                                        placeholder="Escribe el número"
                                    />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="flex-col flex-center" style={{ width: '100%' }}>
                                    <Select
                                        placeholder='O selecciona el número'
                                        styles={{
                                            container: (styles) => ({ ...styles, width: '100%' }),
                                            input: (styles) => ({ ...styles, width: '100%' }),
                                            control: (styles) => ({ ...styles, width: '100%' }),
                                        }}
                                        options={loom_numbers.map( l => ( { label: l, value: l } ) )}
                                        isClearable={true}
                                        isSearchable={true}
                                    />
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
                        <Button
                            onClick={() => {
                                createHook.create();
                            }} 
                            style={{ width: '100%' }} size="sm" variant="success">
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