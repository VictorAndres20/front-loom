import { solveDemandByIdEvent } from "../../_events/demand/create.event"

export const useSolveDemand = () => {
    const solve = (id, reload = () => {}) => {
        solveDemandByIdEvent(id)
        .then(json => {
            reload();
        })
        .catch(err => {
            alert(err.message);
        });
    }
    
    return {
        solve,
    }
}