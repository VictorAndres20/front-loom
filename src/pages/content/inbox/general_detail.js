import { Col, Row } from "react-bootstrap";

export default function GeneralDetail({ demand, children }) {
    return(
        <Row>
            <Col lg={12}>
                <div className="flex-row flex-center">
                    <div style={{ margin: '0 5px', fontSize: '0.7em', fontWeight: 'bold' }}>{ demand?.date_created?.split("T")[0] }</div>
                    <div style={{ margin: '0 5px', fontSize: '0.7em', fontWeight: 'bold' }}>{ demand?.date_created?.split("T")[1].replace("Z", "") }</div>
                </div>
                <hr />
            </Col>
            <Col lg={4}>
                <div className="flex-col flex-center">
                    <div style={{ fontWeight: 'bold' }}>TIPO</div>
                    <div>{demand?.error_detail?.type?.name}</div>
                </div>
            </Col>
            <Col lg={4}>
                { children }
            </Col>
            <Col lg={4}>
                <div className="flex-col flex-center">
                    <div style={{ fontWeight: 'bold' }}>TELAR</div>
                    <div>{demand?.loom}</div>
                </div>
            </Col>
        </Row>
    );
}