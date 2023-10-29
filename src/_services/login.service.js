import { handleFetch, POST_OPTIONS } from './base.service.js';


const BASE_PATH = '/users';


export const login = async (body) => {
    return await handleFetch(`${BASE_PATH}/login`, POST_OPTIONS, body);
}