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

export const addComment = async (newComment, user) => {
    try {
        const response = await request.post(`/api/${controller}/add`, newComment, {
            headers: {
                Authorization: `Bearer ${user.accessToken}`
            },
        });
        return response.data;
    } catch (error) {
        return Promise.reject(error?.response?.data);
    }
};