import {
    createUserType,
    editUserType,
} from '../../_services/user_type.service';
import { validateUserType } from './model';

export const createUserTypeEvent = async (body) => {
    validateUserType(body);
    return await createUserType(body);
}

export const editUserTypeEvent = async (id, body) => {
    validateUserType(body);
    return await editUserType(id, body);
}



/** Generated by https://github.com/VictorAndres20 code generator for database, NestJS, React */