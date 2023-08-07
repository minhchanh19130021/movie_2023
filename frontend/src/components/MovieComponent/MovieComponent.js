import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './MovieComponent.module.scss';
import { addFavoriteMovie } from '~/services/favoriteService';
import {  useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function MovieComponent(props) {
    const user = useSelector((state) => state?.authentication?.login?.currentUser);
    function addFavoriteMovieHandler(){
        addFavoriteMovie(user.id, props.movie.id);
    }

    return (
        <div className='w-1/4 mb-3 flex flex-col justify-items-center relative '>
            <Link to={`/xem-video/${props.movie.slug}`} >
                    <div className="rounded-xl"
                   >
                        <img
                       
                            src={props.movie.poster}
                            alt=""
                            className="cursor-pointer rounded-xl px-2"
                            style={{ width: '100%' }}
                        />
                        <div className='text-center mt-2'>
                            <div>
                            <b className='text-blue-600/75'> {props.movie.name}</b>
                            <p className='text-sm'>{props.movie.type}</p>
                            </div>
                           
                        </div>
                    </div>
             </Link>
             <div className="flex items-center justify-center mt-2 absolute top-0 right-4">
             <svg xmlns="http://www.w3.org/2000/svg" onClick={addFavoriteMovieHandler} viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 ${isFavorite ? 'text-white' : 'text-red-500'}">
                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
        {/* <button onClick={addFavoriteMovieHandler} className=' hover:bg-orange-500 border-2 text-white py-2 px-2 rounded '>Thích Phim</button> */}
    </div>
         </div>
    );
}
export default MovieComponent;
