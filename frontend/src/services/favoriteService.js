import request from '~/utils/requestUtils';
import axios from 'axios';

const controller = 'favorite';

export const getAllFavoriteMovie = async (userId) => {
    try {
        const load = await axios.get(`/api/${controller}/get-all-favorite?userId=`+userId, {
            headers: {},
        });
        return load;
    } catch (error) {
        return Promise.reject(error?.response?.data);
    }
};

export const removeFavoriteMovie = async (user_id,movie_id) => {
    try {
        const res = await axios.post('/api/favorite/remove', {
            user_id,
            movie_id,
        });
        alert(res?.data);
        return res?.data;
    } catch (error) {
        console.log(error?.response?.data);
    }
};

export const addFavoriteMovie = async (user_id,movie_id) => {
    try {
        const res = await axios.post('/api/favorite/add', {
            user_id,
            movie_id,
        });
        alert(res?.data);
        return res?.data;
    } catch (error) {
        console.log(error?.response?.data);
    }
};