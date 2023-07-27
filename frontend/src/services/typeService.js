import axios from 'axios';

export const getMoviesByType = async (type, page, size, sortBy, sortOrder) => {
    try {
        const res = await axios({
            method: 'get',
            url: `/api/movies/mType?type=${type}&page=${page}&size=${size}&sortBy=${sortBy}&sortOrder=${sortOrder}'`,
            headers: { 'Content-Type': 'application/json' },
        });
        return res?.data;
    } catch (error) {
        console.log(error?.response?.data);
    }
};
