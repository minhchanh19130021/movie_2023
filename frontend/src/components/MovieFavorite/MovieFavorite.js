import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { removeFavoriteMovie } from '~/services/favoriteService';
import {  useSelector } from 'react-redux';
function MovieFavorite({ image, title, duration, category, to , viewNumber, movieId}) {
    const user = useSelector((state) => state?.authentication?.login?.currentUser);
    const [isFavorite, setIsFavorite] = useState(true);

    function handleFavoriteClick() {
        removeFavoriteMovie(user.id, movieId);
        // setIsFavorite(!isFavorite);
    }
    return (
        <div className="mb-2 flex overflow-hidden rounded-lg bg-[#202020] shadow-lg">
            <img className="w-1/3 select-none" src={image} alt="card-history" />
            <div className="flex-grow p-4">
            <h2 className="mb-2 text-xl font-bold">{title}</h2>
                <p className="text-sm mb-1 text-[#616161]">{`Số tập: ${duration}`}</p>
                <p className="text-sm mb-1 text-[#616161]">{`Thể loại: ${category}`}</p>
                <p className="text-sm mb-2 text-[#616161]">{`Lượt xem: ${viewNumber}`}</p>

                <div className='flex items-center'>
                    <NavLink
                        to={to || '/'}
                        className=" rounded bg-orange-600 px-4 py-2 text-sm font-bold text-white hover:bg-orange-700"
                    >
                        Xem phim
                    </NavLink>
    
                    <div className={`flex items-center ml-2 cursor-pointer ${isFavorite ? 'text-white' : 'text-red-500'}`}
                        onClick={handleFavoriteClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-red-500">
                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieFavorite;
