import {
    findAllErrorDetail,
    findErrorDetailById,
    findAllErrorDetailPaged,
    findAllErrorDetailByType,
} from '../../_services/error_detail.service';

export const findAllErrorDetailEvent = async () => {
    return await findAllErrorDetail();
}

export const findErrorDetailByIdEvent = async (id) => {
    return await findErrorDetailById(id);
}

export const findAllErrorDetailByTypeEvent = async (type) => {
    return await findAllErrorDetailByType(type);
}

export const findAllErrorDetailPagedEvent = async (page, limit = 8) => {
    return await findAllErrorDetailPaged(page, limit);
}



/** Generated by https://github.com/VictorAndres20 code generator for database, NestJS, React */