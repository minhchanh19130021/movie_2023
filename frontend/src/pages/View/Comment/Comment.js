import { NavLink } from 'react-router-dom';
import CommentItem from './CommentItem';
import { useNavigate } from 'react-router-dom';
import { addComment, getCommentsByMovieIdAndPaginationNumber } from '~/services/commentServices';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Comment(props) {
    const [commentList, setCommentList] = useState([]);
    const [orderBy, setOrderBy] = useState('insertedDateDESC');
    const [offsetPage, setOffsetPage] = useState(0);
    const [showLoadMoreCommentButton, setShowLoadMoreCommentButton] = useState(true);
    const navigate = useNavigate();
    const [newCommentText, setNewCommentText] = useState('');
    const user = useSelector((state) => state?.authentication?.login?.currentUser);
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
    function handleAddComment() {
        // Kiểm tra nội dung comment mới không được rỗng
        if (newCommentText.trim() === '') {
            alert('Comment text must not be blank');
            return;
        }

        if (user?.accessToken) {
            const newComment = {
                movieId: props?.movieId,
                reviewText: newCommentText,
            };

            // Gọi hàm addComment và truyền thông tin user vào
            addComment(newComment, user)
                .then((response) => {
                    // Sau khi thêm thành công, cập nhật danh sách comment
                    setCommentList((prevCommentList) => [response, ...prevCommentList]);
                    // Xóa nội dung comment mới trong input
                    setNewCommentText('');
                })
                .catch((error) => {
                    console.log('Error adding comment:', error);
                });
        } else {
            navigate('/dang-nhap');
        }
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
                {!user && ( // Kiểm tra nếu chưa đăng nhập thì hiển thị thông báo
                    <p className="text-sm">
                        Vui lòng{' '}
                        <NavLink to="/dang-nhap">
                            <strong className="mx-1 text-orange-500">Đăng nhập</strong>
                        </NavLink>
                        tài khoản FPT Play để sử dụng bình luận.
                    </p>
                )}
            </div>
            <div className="">
                {commentList?.map((e, i) => {
                    return (
                        <CommentItem
                            key={i}
                            commentId={e?.id}
                            rating={e?.rating}
                            userName={`${e?.userId}`}
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
            {user && ( // Kiểm tra nếu đã đăng nhập thì hiển thị phần nhập bình luận
                <div>
                    <input
                        type="text"
                        value={newCommentText}
                        onChange={(e) => setNewCommentText(e.target.value)}
                        placeholder="Nhập nội dung bình luận..."
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 "
                    />
                    <button
                        onClick={handleAddComment}
                        className="mt-2 rounded-md bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600"
                    >
                        Thêm bình luận
                    </button>
                </div>
            )}
        </div>
    );
}

export default Comment;
