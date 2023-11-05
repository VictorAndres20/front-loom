import { useEffect, useState } from "react"
import { findAllErrorDetailByTypeEvent } from "../../_events/error_detail/find.event";

export const useFindErrorDetailsByType = (type) => {
    const [ data, setData ] = useState([]);

    const loadData = (t) => {
        findAllErrorDetailByTypeEvent(t)
        .then(json => {
            setData(json.list);
        })
        .catch(err => {
            alert(err.message);
        });
    };

    useEffect(() => {
        loadData(type);
    }, [type]);

    return {
        data,
    }
}