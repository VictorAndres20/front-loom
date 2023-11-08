import { useEffect, useState } from "react";
import { findAllDemandByErrorTypeEvent, findAllDemandPendingEvent } from "../../_events/demand/find.event";

export const useFindAllDemandByErrorType = (type) => {

    const [ data, setData ] = useState([]);

    const loadData = (t) => {
        if(t){
            findAllDemandByErrorTypeEvent(t)
            .then(json => {
                setData(json.list);
            })
            .catch(err => {
                alert(err.message);
            });
        } else {
            findAllDemandPendingEvent()
            .then(json => {
                setData(json.list);
            })
            .catch(err => {
                alert(err.message);
            });
        }
        
    }

    useEffect(() => {
        loadData(type);
        const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
            loadData(type);
        }, 10000);
        
        return () => clearInterval(intervalId);
    }, [type]);

    return {
        data,
        loadData,
    }
}