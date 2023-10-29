import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function ChangePassModal(){

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    };

    return(
        <>
            <Button onClick={handleShow} size="sm" style={{ margin: '0 10px' }} variant="success">Contraseña</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Cambiar contraseña</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Guardar
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}