import { isBlank } from "../../../_utils/is_blank";
import SelectionErrorDetail from "./selection_error_detail";
import Warp from "./warp";
import Weft from "./weft";

export default function ErrorDetail({ errorType, createHook, changeType = (type) => {} }){

    const panels = {
        'MECHA': () => <SelectionErrorDetail type={errorType} changeType={changeType} createHook={createHook} />,
        'WARP': () => <Warp creationHook={createHook} />,
        'WEFT': () => <Weft creationHook={createHook} />,
        'BOXES': () => <SelectionErrorDetail type={errorType} changeType={changeType} createHook={createHook} />,
    }

    if(isBlank(errorType)){
        return(
            <div>Seleccione un tipo...</div>
        );
    } else {
        return(
            <div className="flex-col flex-center" style={{ width: '100%', marginTop: '-25px' }}>
                <span className="vp-label">Detalle</span>
                { panels[errorType] ? panels[errorType]() : <>Tipo no soportado</> }
            </div>
        );
    }
}