import { useState } from "react"
import { buildEmptyDemand } from "../../_events/demand/model";
import { createDemandEvent } from "../../_events/demand/create.event";

export const useDemandCreate = () => {

    const [ entity, setEntity ] = useState(buildEmptyDemand());
    const [ loading, setLoading ] = useState(false);

    const create = () => {
        setLoading(true);
        createDemandEvent(entity)
        .then(json => {
            setLoading(false);
            setEntity(buildEmptyDemand());
            alert("Solicitud generada");
        })
        .catch(err => {
            setLoading(false);
            alert(err.emssage);
        });
    }

    return {
        entity,
        loading,
        create,
        setEntity,
    }
}