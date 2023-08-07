import { NavLink } from 'react-router-dom';
import { MovieFavorite } from '~/components/MovieFavorite';
import {  useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import { getAllFavoriteMovie } from '~/services/favoriteService';

function FavorateMovie() {
    const user = useSelector((state) => state?.authentication?.login?.currentUser);
    const [favoriteMovieList, setFavoriteMovieList]= useState([]);
    useEffect(()=>{
        const fetchPost = async () => {
            // console.log(user.id);
            const data = await getAllFavoriteMovie(user.id);
            setFavoriteMovieList(data.data)
            console.log(data.data);
        };
        fetchPost();
    },[])

    
    return (
        <div className="max-w-full">
            <div className="mx-auto grid max-w-[1200px] grid-cols-4 gap-4">
                <div className="flex flex-col">
                    <NavLink to="/tai-khoan/thong-tin-ca-nhan" className="px-4 py-2 text-sm text-[#a6a6a6]">
                        Thông tin cá nhân
                    </NavLink>
                    <NavLink to="/tai-khoan/lich-su-da-xem" className="px-4 py-2 text-sm text-[#a6a6a6]">
                        Lịch sử xem
                    </NavLink>
                    <NavLink to="/tai-khoan/danh-sach-yeu-thich" className="px-4 py-2 text-sm border-l-2 border-white font-medium">
                        Danh sách yêu thích
                    </NavLink>
                    <NavLink to="" className="px-4 py-2 text-sm text-[#a6a6a6]">
                        Đăng xuất
                    </NavLink>
                </div>
                <div className="col-span-3">
                {favoriteMovieList.length > 0 ? (
        favoriteMovieList.map((item) => (
            <MovieFavorite
                key={item.id}
                movieId={item.id}
                image={item.poster}
                title={item.name}
                duration={item.episodes.length}
                category={item.type}
                viewNumber={item.viewNumber}
                to={`/xem-video/${item.slug}`}
            />
        ))
    ) : (
        <p>Bạn chưa yêu thích bộ phim nào!</p>
    )}
                    
                </div>
            </div>
        </div>
    );
}

export default FavorateMovie;
