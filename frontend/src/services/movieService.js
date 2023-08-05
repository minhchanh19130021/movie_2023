import request from '~/utils/requestUtils';
import axios from 'axios';

const controller = 'movies';

export const increaseNumberOfViewsInMovie = async (movieId) => {
    try {
        const load = await request.put(`/api/${controller}/increaseViewNumberInAMovie?movieId=${movieId}`, {
            headers: {},
        });
        return load;
    } catch (error) {
        return Promise.reject(error?.response?.data);
    }
};

export const getMovieBySlug = async (slug) => {
    try {
        const load = await request.get(`/api/${controller}/getMovieBySlug/${slug}`, {
            headers: {},
        });
        return load;
    } catch (error) {
        return Promise.reject(error?.response?.data);
    }
};

// suggest movie at home page
export const suggestMovie = async (byField) => {
    try {
        console.log({})
        const res = await axios.get(`/api/movies/suggestions/${byField}`,{
            headers: {},
        });
        return res?.data;
    } catch (error) {
        console.log(error?.response?.data);
    }
};
