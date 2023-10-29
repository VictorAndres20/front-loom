import {
    createErrorType,
    editErrorType,
} from '../../_services/error_type.service';
import { validateErrorType } from './model';

export const createErrorTypeEvent = async (body) => {
    validateErrorType(body);
    return await createErrorType(body);
}

export const editErrorTypeEvent = async (id, body) => {
    validateErrorType(body);
    return await editErrorType(id, body);
}



/** Generated by https://github.com/VictorAndres20 code generator for database, NestJS, React */