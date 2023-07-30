import axios from 'axios';
import request from '~/utils/requestUtils';

export const getMoviesNonDetail = async () => {
    try {
        const res = await request.get('movies/get-movies-non-detail');
        return res?.data;
    } catch (error) {
        console.log(error?.response?.data);
    }
};

export const getMovies = async () => {
    try {
        const res = await request.get('movies/getMovies');
        return res?.data;
    } catch (error) {
        console.log(error?.response?.data);
    }
};

export const movieCreate = async (slug, poster, name, sub_name, release_date, type, status) => {
    try {
        const res = await request.post('movies/create', {
            slug,
            poster,
            name,
            subName: sub_name,
            releaseDate: release_date,
            type,
            status,
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
};

export const movieDeatailCreate = async (
    movid_id,
    summary,
    trailer_url,
    lang,
    quality,
    episode_total,
    episode_current,
    duration,
    view,
    category,
    country,
    actor,
    director,
) => {
    try {
        const res = await request.post('movies/create-movie-detail', {
            movieId: movid_id,
            summary,
            trailerUrl: trailer_url,
            lang,
            quality,
            episodeTotal: episode_total,
            episodeCurrent: episode_current,
            duration,
            view,
            category,
            country,
            actor,
            director,
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
};

export const getMoviesInAdmin = async (movieName, offsetPage, pageSize, sortBy) => {
    try {
        const load = await request.get(
            `/api/movies/getMoviesInAdmin?movieName=${movieName}&offsetPage=${offsetPage}&pageSize=${pageSize}&sortBy=${sortBy}`,
            {
                headers: {},
            },
        );
        return load;
    } catch (error) {
        return Promise.reject(error?.response?.data);
    }
};
export const importMovie = async (formData) => {
    try {
        const res = await axios({
            method: 'post',
            url: '/api/movies/import',
            data: formData,
            headers: {
                'Content-Type': `multipart/form-data`,
            },
        });
        return res?.data;
    } catch (error) {
        console.log(error?.response?.data);
    }
};
