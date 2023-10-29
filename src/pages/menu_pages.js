// Template
/*
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { facturabot_menu } from "./menu_pages";

const FacturabotTemplate = () => {

    return(
        <>
            <ul>
            {
                Object.entries(facturabot_menu).map((module, key) => {
                    if(module[1].children){
                        return(
                            <div key={`nav_key_${module[1].path}_${key}`} >
                                {module[1].label}
                                <ul>
                                    {
                                        Object.entries(module[1].children).map((m, key) => (
                                            <li key={`nav_key_${m[1].path}_${key}`} >
                                                <Link to={`${m[1].fullPath}`}>
                                                    {m[1].label}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        );
                    }
                    return(
                        <li key={`nav_key_${module[1].path}_${key}`} >
                            <Link to={`${module[1].fullPath}`}>
                                {module[1].label}
                            </Link>
                        </li>
                    );
                })
            }
            </ul>
            <Outlet />
        </>
    );
};

export default FacturabotTemplate;
*/
import {
    generate_path, 
    inbox_path,
    users_path 
} from "./path_pages";

export const content_menu = {
    generate: { 
        label: 'Crear solicitud',
        path: `${generate_path.path}`,
        fullPath: `${generate_path.full_path}`,
    },
    inbox: { 
        label: 'Bandeja',
        path: `${inbox_path.path}`,
        fullPath: `${inbox_path.full_path}`,
    },
    users: { 
        label: 'Usuarios',
        path: `${users_path.path}`,
        fullPath: `${users_path.full_path}`,
    },
}