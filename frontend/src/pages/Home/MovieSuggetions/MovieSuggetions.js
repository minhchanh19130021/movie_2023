import { useEffect, useRef, useState} from 'react';
import Slider from 'react-slick';
import {suggestMovie} from '~/services/movieService';
import { Link } from 'react-router-dom';

function MovieSuggetions(props) {
    const slider = useRef(null);
    const [movies, setMovies] = useState([]);

    const settingsHot = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    };

    useEffect(() => {
        const fetchPost = async () => {
            const data = await suggestMovie();
            setMovies(data);
            console.log(data);
        };
        fetchPost();
    }, []);

    return (
        <div>
            <div className="relative">
                <h2 className="mb-4 text-2xl font-medium"> {props.name} </h2>
                <button
                    className="absolute left-0 top-1/2 z-20 h-11 w-11 text-[#4c4d50] transition-colors hover:text-white"
                    onClick={() => slider?.current?.slickPrev()}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-11 w-11"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <Slider ref={slider} {...settingsHot}>
                {movies.map((movie) => (
                    <Link to={`/xem-video/${movie.slug}`} key={movie.id}>
                    <div className="rounded-xl">
                        <img
                            src={movie.poster}
                            alt=""
                            className="cursor-pointer rounded-xl px-2"
                        />
                        <div className='text-center mt-2'>
                            <b className='text-blue-600/75'> {movie.name}</b>
                            <p className='text-sm'>{movie.type}</p>
                        </div>
                    </div>
                    </Link>
                    ))}
                </Slider>
                <button
                    className="absolute right-0 top-1/2 z-20 h-11 w-11 text-[#4c4d50] transition-colors hover:text-white"
                    onClick={() => slider?.current?.slickNext()}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-11 w-11"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default MovieSuggetions;
