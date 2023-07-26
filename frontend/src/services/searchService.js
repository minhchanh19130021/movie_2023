import axios from "axios";

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
