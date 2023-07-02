import request from '~/utils/requestUtils';

const controller = 'review';

export const getReviewsByMovieIdAndPaginationNumber = async (movieId, paginationNumber, sortBy) => {
    try {
        const load = await request.get(`/${controller}/get?movieId=${movieId}&currentPage=${paginationNumber}&sortBy=${sortBy}`, {
            headers: {},
        });
        return load;
    } catch (error) {
        return Promise.reject(error?.response?.data);
    }
};

export const saveNewReview = async (rating, reviewText) => {
    const newReview = {
        rating: rating,
        reviewText: reviewText,
        movieId: 1
    }
    try {
        const load = await request.post(`/${controller}/add`, newReview ,{
            headers: {},
        });
        return load;
    } catch (error) {
        return Promise.reject(error?.response?.data);
    }
};
