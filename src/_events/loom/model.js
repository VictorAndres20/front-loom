export const validateLoom = (body) => {
    //const {  } = body;
}

export const transformEntityLoom = (entity) => {
    let newEnt = {...entity}
    return newEnt;
}

export const buildEmptyLoom = () => {
    return {
        uuid: '',
        number: '',
    };
}



/** Generated by https://github.com/VictorAndres20 code generator for database, NestJS, React */