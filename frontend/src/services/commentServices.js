import request from '~/utils/requestUtils';

const controller = 'comment';

export const getCommentsByMovieIdAndPaginationNumber = async (movieId, paginationNumber, sortBy) => {
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
