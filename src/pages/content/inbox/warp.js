export default function WarpDetail({ demand }) {
    return(
        <div className="flex-col flex-center">
            <div style={{ fontWeight: 'bold' }}>DETALLE</div>
            <div>Código urdiembre</div>
            <div>{demand?.warp}</div>
        </div>
    );
}