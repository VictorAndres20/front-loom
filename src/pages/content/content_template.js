import React from "react";
import { Col, Container, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { content_menu } from "../menu_pages";

export default function ContentTemplate(){
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