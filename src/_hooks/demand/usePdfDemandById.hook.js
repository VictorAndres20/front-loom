import { useState } from "react"
import { pdfByIdEvent } from "../../_events/demand/find.event";

export const usePdfDemandById = () => {

    const [ bytes, setBytes ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    const loadBytes = (id) => {
        setLoading(true);
        pdfByIdEvent(id)
        .then(json => {
            setLoading(false);
            setBytes(json.data.bytes);
        })
        .catch(err => {
            setLoading(false);
            alert(err.message);
        });
    }
    
    return {
        bytes,
        loading,
        loadBytes,
    }


}