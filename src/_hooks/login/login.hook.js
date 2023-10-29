import React from "react"
import { buildEmptyLogin } from "../../_events/login/model";
import { loginUser } from "../../_events/login/create.event";
import { putRol, putToken, putUserId } from "../../_utils/storage_handler";

export const useLogin = () => {

    const [ entity, setEntity ] = React.useState(buildEmptyLogin());
    const [ loading, setLoading ] = React.useState(false);

    const login = () => {
        setLoading(true);
        loginUser(entity)
        .then(json => {
            setLoading(false);
            putToken(json.data.token);
            putRol(json.data.rol);
            putUserId(json.data.uuid);
            console.log(json);
        })
        .catch(err => {
            setLoading(false);
            alert(err.message);
        });
    }

    return {
        loading, entity, setEntity, login,
    }

}