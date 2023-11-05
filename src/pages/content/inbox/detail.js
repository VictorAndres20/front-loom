import { Button, Col, Container, Row } from "react-bootstrap";
import GeneralDetail from "./general_detail";
import SelectionDetail from "./selection_detail";
import WarpDetail from "./warp";
import WeftDetail from "./weft";
import ModalPrint from "./modal_print";
import { useSolveDemand } from "../../../_hooks/demand/useSolveDemand.hook";

export default function Detail({ demand, reload = () => {} }) {

    const solveHook = useSolveDemand();

    const panels = {
        'MECHA': () => <SelectionDetail demand={demand} />,
        'WARP': () => <WarpDetail demand={demand} />,
        'WEFT': () => <WeftDetail demand={demand} />,
        'BOXES': () => <SelectionDetail demand={demand} />,
    }

    return(
        <Container fluid>
            <GeneralDetail demand={demand}>
                { demand?.error_detail?.type?.cod ? panels[demand?.error_detail?.type?.cod]() : <>No Panel</> }
            </GeneralDetail>
            <Row>
                <Col lg={12}>
                    <hr />
                </Col>
                <Col lg={6}>
                    <div className="flex-col flex-center">
                        <ModalPrint demand={demand} />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="flex-col flex-center">
                        <Button onClick={() => {
                                solveHook.solve(demand.uuid, () => {
                                    reload();
                                });
                            }} 
                            style={{ width: '90%' }} size="sm" variant="success"
                        >
                            Solucionado
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}