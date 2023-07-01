import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: { 'Content-Type': 'application/json' },
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export const post = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export const put = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export const remove = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};



export default request;
