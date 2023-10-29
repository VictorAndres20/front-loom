import React from "react"
import { buildEmptyLogin } from "../../_events/login/model";
import { loginUser } from "../../_events/login/create.event";
import { putRol, putToken, putUserId } from "../../_utils/storage_handler";
import { useNavigate } from 'react-router-dom';
import { generate_path } from "../../pages/path_pages";

export const useLogin = () => {

    const [ entity, setEntity ] = React.useState(buildEmptyLogin());
    const [ loading, setLoading ] = React.useState(false);
    const navigate = useNavigate();

    const login = () => {
        setLoading(true);
        loginUser(entity)
        .then(json => {
            setLoading(false);
            putToken(json.data.token);
            putRol(json.data.rol);
            putUserId(json.data.uuid);
            navigate(generate_path.full_path);
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