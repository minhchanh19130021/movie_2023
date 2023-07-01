import { NavLink } from 'react-router-dom';
import CommentItem from './CommentItem';

function Comment() {
    const renderElements = () => {
        const elements = [];

        for (let i = 1; i < 100; i++) {
            elements.push(
                <CommentItem
                    key={i}
                    userName={`Người dùng ${i}`}
                    time={`${i} ngày`}
                    commentText={`Lee Yeon là hồ ly mang nhiệm vụ như một người giám sát, có quyền trừng trị những kẻ hại cuộc sống của loài người. Trong khi đó, người em cùng cha khác mẹ của anh là Lee Rang, mang hai dòng máu nửa người nửa yêu, thì chuyên đi gây họa. Cuộc sống vốn dĩ sẽ bình yên, nếu Lee Yeon không phải lòng Nam Ji Ah - người thực hiện những chương trình tìm hiểu về thế lực siêu nhiên. Bạn, trai, tôi, là, hồ, ly, The, Tale, of, a, Gumiho, Tale, of, the, Nine-Tailed, Bạn trai tôi là hồ ly, phim Bạn trai tôi là hồ ly, xem phim Bạn trai tôi là hồ ly tập 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16, Bạn trai tôi là hồ ly vietsub, tình cảm, Tale of the Nine-Tailed, Bạn trai tôi là hồ ly online, xem Tale of the Nine-Tailed, Bạn trai tôi là hồ ly FPT Play, phim Tale of the Nine-Tailed, Tale of the Nine-Tailed phụ đề, xem phim Tale of the Nine-Tailed tập 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16, Tale of the Nine-Tailed fptplay, FPT, The Tale of a Gumiho, xem The Tale of a Gumiho, phim The Tale of a Gumiho, The Tale of a Gumiho phụ đề, xem phim The Tale of a Gumiho tập 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16, The Tale of a Gumiho fptplay, tail, tails`}
                />,
            );
        }

        return elements;
    };
    return (
        <div>
            <div className="grid grid-cols-3">
                <div className="col-span-2 mb-6 flex items-center">
                    <h3 className="text-2xl font-medium">Bình luận (41783)</h3>
                </div>
                <select className="w-1/2 border border-black bg-black font-medium text-white outline-none">
                    <option className="text-right" value="1">
                        Mới nhất
                    </option>
                    <option className="text-right" value="2">
                        Nhiều like nhất
                    </option>
                    <option className="text-right" value="3">
                        Cũ nhất
                    </option>
                </select>
            </div>
            <div className="pb-4 pt-2">
                <p className="text-sm">
                    Vui lòng
                    <NavLink to="/dang-nhap">
                        <strong className="mx-1 text-orange-500">Đăng nhập</strong>
                    </NavLink>
                    tài khoản FPT Play để sử dụng Bình luận
                </p>
            </div>
            <div className="">
                {renderElements()}
                <button className="text-sm font-medium text-[#b8b8b8] transition-colors hover:text-orange-600">
                    Tải thêm bình luận
                </button>
            </div>
        </div>
    );
}

export default Comment;
