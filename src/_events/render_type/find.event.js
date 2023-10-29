import {
    findAllRenderType,
    findRenderTypeById,
    findAllRenderTypePaged,
} from '../../_services/render_type.service';

export const findAllRenderTypeEvent = async () => {
    return await findAllRenderType();
}

export const findRenderTypeByIdEvent = async (id) => {
    return await findRenderTypeById(id);
}

export const findAllRenderTypePagedEvent = async (page, limit = 8) => {
    return await findAllRenderTypePaged(page, limit);
}



/** Generated by https://github.com/VictorAndres20 code generator for database, NestJS, React */