import {
    login
} from '../../_services/login.service';
import { validateLogin } from './model';

export const loginUser = async (body) => {
    validateLogin(body);
    return await login(body);
}