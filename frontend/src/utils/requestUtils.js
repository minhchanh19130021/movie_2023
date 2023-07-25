import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: { 'Content-Type': 'application/json' },
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};
export const importMovie = async (formData) => {
    try {
        const res = await axios({
            method: 'post',
            url: '/api/movies/import',
            data: formData,
            headers: {
                'Content-Type': `multipart/form-data`,
            },
        });
        return res?.data;
    } catch (error) {
        console.log(error?.response?.data);
    }
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
