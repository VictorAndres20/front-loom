import React from "react";
import { Container, Navbar } from "react-bootstrap";

export default function BasicNavbar(){
    return(
        <Navbar style={{ background: '#2542ff' }} >
            <Container>
                <div style={{ height: '50px', fontSize: '1.7em', color: 'white' }}>Telares</div>
            </Container>
        </Navbar>
    );
}