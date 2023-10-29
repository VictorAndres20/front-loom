import {
    findAllUser,
    findUserById,
    findAllUserPaged,
} from '../../_services/users.service';

export const findAllUserEvent = async () => {
    return await findAllUser();
}

export const findUserByIdEvent = async (id) => {
    return await findUserById(id);
}

export const findAllUserPagedEvent = async (page, limit = 8) => {
    return await findAllUserPaged(page, limit);
}



/** Generated by https://github.com/VictorAndres20 code generator for database, NestJS, React */