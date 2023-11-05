import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { usePdfDemandById } from "../../../_hooks/demand/usePdfDemandById.hook";

export default function ModalPrint({ demand }) {

    const demandPdfHook = usePdfDemandById();
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        demandPdfHook.loadBytes(demand.uuid);
    };
    
    return(
        <>
        <Button style={{ width: '90%' }} size="sm" variant="primary" onClick={handleShow}>
            Imprimir
        </Button>

        <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>PDF</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    demandPdfHook.loading ?
                    <div className="vp-spinner"></div>
                    :
                    demandPdfHook.bytes ?
                    <div>
                        <object width="100%" height="600px" 
                            data={`data:application/pdf;base64,${demandPdfHook.bytes}`} 
                            type="application/pdf" className="internal"
                        >
                            <embed 
                                src={`data:application/pdf;base64,${demandPdfHook.bytes}`}
                                type="application/pdf"
                            />
                        </object>
                    </div>
                    :
                    <>Sin datos</>
                }
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}