export const validateRenderType = (body) => {
    //const {  } = body;
}

export const transformEntityRenderType = (entity) => {
    let newEnt = {...entity}
    return newEnt;
}

export const buildEmptyRenderType = () => {
    return {
        cod: '',
        name: '',
    };
}



/** Generated by https://github.com/VictorAndres20 code generator for database, NestJS, React */