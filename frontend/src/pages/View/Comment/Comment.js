import { NavLink } from 'react-router-dom';
import CommentItem from './CommentItem';

function Comment() {
    const renderElements = () => {
        const elements = [];

        for (let i = 1; i < 5; i++) {
            elements.push(
                <CommentItem
                    key={i}
                    userName={`Người dùng ${i}`}
                    time={`${i} ngày`}
                    commentText={`Lee Yeon là hồ ly mang nhiệm vụ như một người giám sát`}
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
