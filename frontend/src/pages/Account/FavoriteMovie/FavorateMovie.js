import { NavLink } from 'react-router-dom';
import { MovieFavorite } from '~/components/MovieFavorite';

function FavorateMovie() {
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
                    <MovieFavorite
                        image="https://images.fptplay.net/media/OTT/VOD/2022/09/08/phi-ho-ngoai-truyen-40-tap-fpt-play-1662619769467_Landscape.jpg?w=282&mode=scale&fmt=webp"
                        title="Phi hồ ngoại truyện"
                        duration="100/100 tập"
                        category="Tình cảm, hành động"
                        to="/xem-video"
                    />
                     <MovieFavorite
                        image="https://images.fptplay.net/media/OTT/VOD/2022/09/08/phi-ho-ngoai-truyen-40-tap-fpt-play-1662619769467_Landscape.jpg?w=282&mode=scale&fmt=webp"
                        title="Phi hồ ngoại truyện"
                        duration="100/100 tập"
                        category="Tình cảm, hành động"
                        to="/xem-video"
                    />
                     <MovieFavorite
                        image="https://images.fptplay.net/media/OTT/VOD/2022/09/08/phi-ho-ngoai-truyen-40-tap-fpt-play-1662619769467_Landscape.jpg?w=282&mode=scale&fmt=webp"
                        title="Phi hồ ngoại truyện"
                        duration="100/100 tập"
                        category="Tình cảm, hành động"
                        to="/xem-video"
                    />
                     <MovieFavorite
                        image="https://images.fptplay.net/media/OTT/VOD/2022/09/08/phi-ho-ngoai-truyen-40-tap-fpt-play-1662619769467_Landscape.jpg?w=282&mode=scale&fmt=webp"
                        title="Phi hồ ngoại truyện"
                        duration="100/100 tập"
                        category="Tình cảm, hành động"
                        to="/xem-video"
                    />
                     <MovieFavorite
                        image="https://images.fptplay.net/media/OTT/VOD/2022/09/08/phi-ho-ngoai-truyen-40-tap-fpt-play-1662619769467_Landscape.jpg?w=282&mode=scale&fmt=webp"
                        title="Phi hồ ngoại truyện"
                        duration="100/100 tập"
                        category="Tình cảm, hành động"
                        to="/xem-video"
                    />
                    
                </div>
            </div>
        </div>
    );
}

export default FavorateMovie;
