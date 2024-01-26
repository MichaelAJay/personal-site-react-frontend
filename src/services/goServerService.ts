import axios from 'axios'
import { ENV } from '../utils/constants/env.constant'
import { LoginForm } from './api/goServer/request/login-form';
import { PostContactForm } from './api/goServer/request/post-contact-form';
import { SignupForm } from './api/goServer/request/signup-form';

const apiClient = axios.create({
    baseURL: ENV.apiUrl,
    // withCredentials: true
})

export const fetchSierpinskiTriangleSVG = async (depth: number, color: string): Promise<string> => {
    try {
        console.log('color', color);
        const response = await apiClient.get('sierpinski', {
            params: { iterations: depth, color }
        });
        return response.data;
    } catch (err) {
        console.error('Error fetching Sierpinski Triangle data:', err)
        throw err
    }
}

export const postContactForm = async (form: PostContactForm): Promise<any> => {
    try {
        const response = await apiClient.post('contact', form);
        return response.data;
    } catch (err) {
        console.error('Error posting contact form', err);
        throw err;
    }
}

export const signUp = async (form: SignupForm): Promise<any> => {
    try {
        const response = await apiClient.post('sign-up', form);
        return response.data
    } catch (err) {
        console.error('Error posting signup form', err);
        throw err;
    }
}

export const login = async (form: LoginForm): Promise<any> => {
    try {
        const response = await apiClient.post('sign-in', form);
        return response.data
    } catch (err) {
        console.error('Error posting login form', err);
        throw err;
    }
}

type GetMessagesQueryParams = {
    pg?: number;
    order?: "created_at_asc" | "created_at_desc"
    read?: boolean
}
export const getMessages = async (params: GetMessagesQueryParams): Promise<any> => {
    try {
        const response = await apiClient.get('contact/list', { params });
        return response.data;
    } catch (err) {
        console.error('Error getting messages', err);
        throw err;
    }
}

type GetMessageQueryParams = {
    id: number
}
export const getMessage = async (params: GetMessageQueryParams): Promise<any> => {
    try {
        const response = await apiClient.get('contact', { params });
        return response.data;
    } catch (err) {
        console.error('Error getting messages', err);
        throw err;
    }
}

