import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useFindAllErrorType } from "../../../_hooks/error_type/useFindAllErrorType.hook";
import { useDemandCreate } from "../../../_hooks/demand/useGenerate.hook";
import ErrorDetail from "./errot_detail";
import { isBlank } from "../../../_utils/is_blank";

//const loom_numbers = Array.from({ length: 300 }, (_, index) => (index + 1).toString() );

export default function GenerateForm(){

    const createHook = useDemandCreate();
    const [ errorType, setErrorType ] = React.useState('');
    const errorTypeAllHook = useFindAllErrorType();

    const changeErrorType = (cod) => {
        setErrorType(cod);
        if( cod === 'WARP' ) {
            let ent = { ...createHook.entity };
            ent.error_detail = 'WA_1.';
            createHook.setEntity(ent);
        } else if(cod === 'WEFT'){
            let ent = { ...createHook.entity };
            ent.error_detail = 'WE_1.';
            createHook.setEntity(ent);
        } else {
            let ent = { ...createHook.entity };
            ent.error_detail = '';
            createHook.setEntity(ent);
        }
    }

    return(
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="flex-col flex-center" style={{ width: '100%' }}>
                        <Container fluid>
                            <Row>
                                <div className="flex-col flex-center" style={{ width: '100%', marginTop: '-25px' }}>
                                    <span className="vp-label">TIPO</span>
                                </div>
                                {
                                    errorTypeAllHook.data.map( ( element, key ) => (
                                        <Col lg={3} md={6} sm={6} xs={6} key = { `col_${key}` } style={{ margin: '10px 0' }}>
                                            <Button
                                                style={{ width: '95%' }}
                                                onClick={() => {
                                                    changeErrorType(element.cod);
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
                        <ErrorDetail errorType={errorType} 
                            createHook={createHook}
                            changeType={(cod) => {
                                let ent = { ...createHook.entity };
                                ent.error_detail = cod;
                                createHook.setEntity(ent);
                            }} 
                        />
                    </div>
                </Col>
            </Row>
            {
                ! isBlank(createHook.entity.error_detail) &&
                <Row style={{ marginBottom: '40px' }}>
                    <Col style={{ margin: '10px 0' }} lg={12}>
                        <hr />
                        <Container fluid>
                            <Row>
                                <div className="flex-col flex-center" style={{ width: '100%', marginTop: '-25px' }}>
                                    <span className="vp-label">Número de telar</span>
                                </div>
                                <Col lg={12}>
                                    <div className="flex-col flex-center" style={{ width: '100%', margin: '10px 0' }}>
                                        <Form.Control 
                                            type="number"
                                            placeholder="Escribe el número"
                                            onChange={(e) => {
                                                let ent = { ...createHook.entity };
                                                ent.loom = e.target.value;
                                                createHook.setEntity(ent);
                                            }}
                                            value={ createHook.entity.loom }
                                        />
                                    </div>
                                </Col>
                                {
                                    /*
                                    <Col lg={6}>
                                    <div className="flex-col flex-center" style={{ width: '100%', margin: '10px 0' }}>
                                        <Select
                                            value={{ label: createHook.entity.loom, value: createHook.entity.loom }}
                                            placeholder='O selecciona el número'
                                            styles={{
                                                container: (styles) => ({ ...styles, width: '100%' }),
                                                input: (styles) => ({ ...styles, width: '100%' }),
                                                control: (styles) => ({ ...styles, width: '100%' }),
                                            }}
                                            options={loom_numbers.map( l => ( { label: l, value: l } ) )}
                                            isClearable={true}
                                            isSearchable={true}
                                            onChange={(e) => {
                                                let ent = { ...createHook.entity };
                                                if(e){
                                                    ent.loom = e.value;
                                                } else {
                                                    ent.loom = "";
                                                }         
                                                createHook.setEntity(ent);
                                            }}
                                        />
                                    </div>
                                </Col>
                                    */
                                }
                            </Row>
                        </Container>
                        <hr />
                    </Col>
                    <Col lg={3}>
                    </Col>
                    <Col lg={6}>
                        <div className="flex-col flex-center" style={{ width: '100%' }}>
                            {
                                createHook.loading ?
                                <div className="vp-spinner"></div>
                                :
                                <Button
                                    onClick={() => {
                                        createHook.create();
                                    }} 
                                    style={{ width: '100%' }} size="sm" variant="success">
                                    Crear
                                </Button>
                            }
                        </div>
                    </Col>
                    <Col lg={3}>
                    </Col>
                </Row>
            }
        </Container>
    );
}