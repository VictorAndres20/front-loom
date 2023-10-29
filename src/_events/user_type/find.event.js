import {
    findAllUserType,
    findUserTypeById,
    findAllUserTypePaged,
} from '../../_services/user_type.service';

export const findAllUserTypeEvent = async () => {
    return await findAllUserType();
}

export const findUserTypeByIdEvent = async (id) => {
    return await findUserTypeById(id);
}

export const findAllUserTypePagedEvent = async (page, limit = 8) => {
    return await findAllUserTypePaged(page, limit);
}



/** Generated by https://github.com/VictorAndres20 code generator for database, NestJS, React */