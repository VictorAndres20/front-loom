export default function SelectionDetail({ demand }) {
    return(
        <div className="flex-col flex-center">
            <div style={{ fontWeight: 'bold' }}>DETALLE</div>
            <div>{demand?.error_detail?.name}</div>
        </div>
    );
}