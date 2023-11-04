import { useEffect, useState } from "react"
import { findAllErrorTypeEvent } from "../../_events/error_type/find.event";

export const useFindAllErrorType = () => {

    const [ data, setData ] = useState([]);

    const loadData = () => {
        findAllErrorTypeEvent()
        .then(json => {
            setData(json.list);
        })
        .catch(err => {

        });
    }

    useEffect(() => {
        loadData();
    }, []);

    return {
        data,
    }
}