import axios from 'axios'
import { ENV } from '../utils/constants/env.constant'

const apiClient = axios.create({
    baseURL: ENV.apiUrl,
    // withCredentials: true
})

export const fetchSierpinskiTriangleSVG = async (depth: number): Promise<string> => {
    try {
        const response = await apiClient.get('sierpinski', {
            params: { iterations: depth }
        });
        return response.data;
    } catch (err) {
        console.error('Error fetching Sierpinski Triangle data:', err)
        throw err
    }
}