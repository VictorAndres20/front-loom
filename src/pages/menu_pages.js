
import {
    generate_path, 
    inbox_path,
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
}