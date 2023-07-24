import request from '~/utils/requestUtils';

const controller = 'review';

export const getReviewsByMovieIdAndPaginationNumber = async (movieId, paginationNumber, sortBy) => {
    try {
        const load = await request.get(
            `/api/${controller}/get?movieId=${movieId}&currentPage=${paginationNumber}&sortBy=${sortBy}`,
            {
                headers: {},
            },
        );
        return load;
    } catch (error) {
        return Promise.reject(error?.response?.data);
    }
};

export const saveNewReview = async (rating, reviewText, accessToken) => {
    const newReview = {
        rating: rating,
        reviewText: reviewText,
        movieId: 1,
    };
    try {
        const load = await request.post(`/api/${controller}/add`, newReview, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        console.log(load);
        return load;
    } catch (error) {
        return Promise.reject(error?.response?.data);
    }
};
