import request from '~/utils/requestUtils';

const controller = 'movies';

export const increaseNumberOfViewsInMovie = async (movieId) => {
    console.log(movieId);
    try {
        const load = await request.put(`/${controller}/increaseViewNumberInAMovie?movieId=${movieId}`, {
            headers: {},
        });
        return load;
    } catch (error) {
        return Promise.reject(error?.response?.data);
    }
};

export const getMovieBySlug = async (slug) => {
    try {
        const load = await request.get(`/${controller}/getMovieBySlug/${slug}`, {
            headers: {},
        });
        return load;
    } catch (error) {
        return Promise.reject(error?.response?.data);
    }
};
