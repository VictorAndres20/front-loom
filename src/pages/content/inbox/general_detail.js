import { Col, Row } from "react-bootstrap";

export default function GeneralDetail({ demand, children }) {
    const date_created = new Date(demand?.date_created);
    return(
        <Row>
            <Col lg={12}>
                <div className="flex-row flex-center">
                    <div style={{ margin: '0 5px', fontSize: '0.7em', fontWeight: 'bold' }}>{ `${date_created?.getFullYear()}-${date_created?.getMonth()}-${date_created?.getDate()}` }</div>
                    <div style={{ margin: '0 5px', fontSize: '0.7em', fontWeight: 'bold' }}>{ `${date_created?.getHours()}:${date_created?.getMinutes()}` }</div>
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