import { useEffect, useRef, useState} from 'react';
import Slider from 'react-slick';
import {suggestMovie} from '~/services/movieService';
import MovieComponent from '~/components/MovieComponent/MovieComponent';
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
              <h2 className="mb-4 text-2xl font-medium"> {props.name} </h2>
            <div className="relative flex flex-row flex-wrap ">
              
                
                {movies.map((movie) => (
                    <MovieComponent movie={movie} key={movie.id} className="w-1/4 "/>
                   
                ))}
            </div>
        </div>
    );
}

export default MovieSuggetions;
