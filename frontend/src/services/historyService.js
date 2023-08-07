import request from '~/utils/requestUtils';
import axios from 'axios';

const controller = 'history';

export const getWatchHistory = async (userId) => {
    try {
        const load = await axios.get(`/api/${controller}/all?userId=`+userId, {
            headers: {},
        });
        return load;
    } catch (error) {
        return Promise.reject(error?.response?.data);
    }
};

export const addWatchHistory = async (user_id, movie_id) => {
    try {
        const res = await axios.post('/api/history/add', {
            user_id,
            movie_id,
        });
       
        return res?.data;
    } catch (error) {
        console.log(error?.response?.data);
    }
};