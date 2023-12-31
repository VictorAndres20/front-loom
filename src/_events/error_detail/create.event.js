import {
    createErrorDetail,
    editErrorDetail,
} from '../../_services/error_detail.service';
import { validateErrorDetail } from './model';

export const createErrorDetailEvent = async (body) => {
    validateErrorDetail(body);
    return await createErrorDetail(body);
}

export const editErrorDetailEvent = async (id, body) => {
    validateErrorDetail(body);
    return await editErrorDetail(id, body);
}



/** Generated by https://github.com/VictorAndres20 code generator for database, NestJS, React */