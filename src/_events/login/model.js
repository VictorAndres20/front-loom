export const validateLogin = (body) => {
    const { login, password } = body;
    if(login === null || login === '') throw new Error('Usuario vacío');
    if(password === null || password === '') throw new Error('Contraseña vacía');
}

export const buildEmptyLogin = () => {
    return {
        login: '',
        password: '',
    };
}