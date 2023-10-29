import React from "react";
import { Button, Col, Container, Form, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { content_menu } from "../menu_pages";
import ChangePassModal from "../../widgets /modals/change_pass_modal";
import { cleanValues } from "../../_utils/storage_handler";
import { login_page_path } from "../path_pages";

export default function ContentTemplate(){

    const navigate = useNavigate();

    return(
        <div>
            <Navbar style={{ background: '#2542ff' }} expand="lg">
            <Container>
                <Navbar.Brand href="#home" style={{ color:'white' }}>Telares</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {
                            Object.entries(content_menu).map((module, key) => {
                                if(module[1].children){
                                    return(
                                        <NavDropdown title={module[1].label}>
                                            {
                                                Object.entries(module[1].children).map((m, key) => (
                                                    <Link key={`nav_key_${m[1].path}_${key}`} to={`${m[1].fullPath}`}>
                                                        <NavDropdown.ItemText href="#action/3.2">
                                                            {m[1].label}
                                                        </NavDropdown.ItemText> 
                                                    </Link>
                                                ))
                                            }                                    
                                        </NavDropdown>
                                    );
                                }
                                return(                                
                                    <Nav.Item key={`nav_key_${module[1].path}_${key}`}>
                                        <Link style={{ color: 'white', textDecoration: 'none', margin: '0 20px', fontSize: '0.9em' }} to={`${module[1].fullPath}`}>
                                        {module[1].label}
                                        </Link>
                                    </Nav.Item>                                
                                );
                            })
                        }
                    </Nav>
                    <Form className="justify-content-end">
                        <ChangePassModal />      
                        <Button onClick={() => {
                            cleanValues();
                            navigate(login_page_path.full_path);
                        }} size="sm" style={{ margin: '0 10px' }} variant="danger">Salir</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}