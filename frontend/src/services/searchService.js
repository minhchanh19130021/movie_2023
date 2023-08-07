import axios from 'axios';

export const getMovieByKeyword = async (keyword, page, size, sortBy, sortOrder) => {
    try {
        const res = await axios.get(
            `/api/movies/search?keyword=${keyword}&page=${page}&size=${size}&sortBy=${sortBy}&sortOrder=${sortOrder}'`,
        );
        return res?.data;
    } catch (error) {
        console.log(error?.response?.data);
    }
};

export const execute = async (countries, directors, page, size) => {
    try {
        const response = await axios({
            method: 'get',
            url: `/api/movies/filter2?countries=${countries}&directors=${directors}&page=${page}&size=${size}`,
            headers: { 'Content-Type': 'application/json' },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
};
