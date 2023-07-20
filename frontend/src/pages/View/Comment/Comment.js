import { NavLink } from 'react-router-dom';
import CommentItem from './CommentItem';
import { useNavigate } from 'react-router-dom';
import { getCommentsByMovieIdAndPaginationNumber } from '~/services/commentServices';
import { useEffect, useState } from 'react';

function Comment(props) {
    const [commentList, setCommentList] = useState([]);
    const [orderBy, setOrderBy] = useState('insertedDateDESC');
    const [offsetPage, setOffsetPage] = useState(0);
    const [showLoadMoreCommentButton, setShowLoadMoreCommentButton] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        loadCommentList(offsetPage, orderBy);
    }, [props?.movieId]);

    function loadCommentList(offsetPage, orderBy) {
        if (props?.movieId) {
            const load = getCommentsByMovieIdAndPaginationNumber(props?.movieId, offsetPage, orderBy);
            load.then((e) => {
                setCommentList(e?.data);
            }).catch((e) => {
                navigate('/server-error');
            });
        }
    }
    function loadCommentListAgainBySelectOrder(event) {
        loadCommentList(0, event.target.value);
        setOffsetPage(0);
        setOrderBy(event.target.value);
        setShowLoadMoreCommentButton(true);
    }

    function loadMoreComment() {
        const load = getCommentsByMovieIdAndPaginationNumber(props?.movieId, offsetPage + 1, orderBy);
        load.then((e) => {
            if (e?.data.length === 0) {
                setShowLoadMoreCommentButton(false);
                return;
            }
            setCommentList([...commentList, ...e?.data]);
            setOffsetPage(offsetPage + 1);
        }).catch((e) => {
            navigate('/server-error');
        });
    }

    return (
        <div>
            <div className="grid grid-cols-3">
                <div className="col-span-2 mb-6 flex items-center">
                    <h3 className="text-2xl font-medium">Bình luận ({props?.commentNumber})</h3>
                </div>
                <select
                    onChange={loadCommentListAgainBySelectOrder}
                    className="w-1/2 cursor-pointer border border-black bg-black font-medium text-white outline-none"
                >
                    <option className="cursor-pointer text-right" value="insertedDateDESC">
                        Mới nhất
                    </option>
                    <option className="cursor-pointer text-right" value="insertedDateASC">
                        Cũ nhất
                    </option>
                    <option className="cursor-pointer text-right" value="likeDESC">
                        Nhiều like nhất
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
                {commentList?.map((e, i) => {
                    return (
                        <CommentItem
                            key={i}
                            rating={e?.rating}
                            userName={`${e?.user?.userName}`}
                            time={`${e?.insertedDate} ngày`}
                            commentText={e?.reviewText}
                            likes={e?.likes}
                        />
                    );
                })}
                {showLoadMoreCommentButton ? (
                    <button
                        onClick={() => loadMoreComment()}
                        className="text-sm font-medium text-[#b8b8b8] transition-colors hover:text-orange-600"
                    >
                        Tải thêm bình luận
                    </button>
                ) : null}
            </div>
        </div>
    );
}

export default Comment;
