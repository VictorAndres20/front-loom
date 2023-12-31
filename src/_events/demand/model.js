import { isBlank } from "../../_utils/is_blank";
import { getUserId } from "../../_utils/storage_handler";

export const validateDemand = (body) => {
    const { error_detail, loom } = body;
    if(isBlank(error_detail)) throw new Error(`Detalle del error vacío`);
    if(isBlank(loom)) throw new Error(`Número de telar vacío`);
}

export const transformEntityDemand = (entity) => {
    let newEnt = {...entity}
    newEnt.user_create = newEnt.user_create?.uuid;
    newEnt.user_close = newEnt.user_close?.uuid;
    newEnt.demand_state = newEnt.demand_state?.cod;
    newEnt.error_detail = newEnt.error_detail?.cod;
    newEnt.loom = newEnt.loom?.uuid;
    return newEnt;
}

export const buildEmptyDemand = () => {
    return {
        uuid: '',
        warp: '',
        weft_quantity: 0,
        error_detail: '',
        loom: '',
        user_create: getUserId(),
        user_close: getUserId(),
        demand_state: 'PENDI',
    };
}