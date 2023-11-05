export default function WeftDetail({ demand }) {
    return(
        <div className="flex-col flex-center">
            <div style={{ fontWeight: 'bold' }}>DETALLE</div>
            <div>Cantidad</div>
            <div>{demand?.weft_quantity}</div>
        </div>
    );
}