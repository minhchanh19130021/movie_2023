import ReviewItem from './ReviewItem';
import { useEffect, useState } from 'react';
import { getReviewsByMovieIdAndPaginationNumber } from '~/services/reviewServices';
import ReviewForm from '~/components/Review/ReviewForm';
import { useNavigate } from 'react-router-dom';

function Review(props) {
    const [reviewList, setReviewList] = useState([]);
    const [isShowReviewForm, setIsShowReviewForm] = useState(false);
    const [orderBy, setOrderBy] = useState('insertedDateDESC');
    const [offsetPage, setOffsetPage] = useState(0);
    const [showLoadMoreReviewButton, setShowLoadMoreReviewButton] = useState(true);
    const [movieId, setMovieId] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        loadReviewList(offsetPage, orderBy);
    }, [props?.movieId]);

    function loadReviewList(offsetPage, orderBy) {
        if (props?.movieId) {
            setMovieId(props?.movieId);
            const load = getReviewsByMovieIdAndPaginationNumber(props?.movieId, offsetPage, orderBy);
            load.then((e) => {
                setReviewList(e?.data);
            }).catch((e) => {
                console.log(e);
                navigate('/server-error');
            });
        }
    }
    function loadReviewListAgainBySelectOrder(event) {
        loadReviewList(0, event.target.value);
        setOffsetPage(0);
        setOrderBy(event.target.value);
        setShowLoadMoreReviewButton(true);
    }

    function loadMoreReview() {
        const load = getReviewsByMovieIdAndPaginationNumber(props?.movieId, offsetPage + 1, orderBy);
        load.then((e) => {
            if (e?.data.length === 0) {
                setShowLoadMoreReviewButton(false);
                return;
            }
            setReviewList([...reviewList, ...e?.data]);
            setOffsetPage(offsetPage + 1);
        }).catch((e) => {
            navigate('/server-error');
        });
    }

    return (
        <div>
            <div className="grid grid-cols-3">
                <div className="col-span-2 mb-6 flex items-center">
                    <h3 className="text-2xl font-medium">Đánh giá ({props?.reviewNumber})</h3>
                </div>
                <select
                    onChange={loadReviewListAgainBySelectOrder}
                    className="w-1/2 cursor-pointer border border-black bg-black font-medium text-white outline-none"
                >
                    <option className="cursor-pointer text-right" value="insertedDateDESC">
                        Mới nhất
                    </option>
                    <option className="cursor-pointer text-right" value="ratingDESC">
                        Giảm dần
                    </option>
                    <option className="cursor-pointer text-right" value="ratingASC">
                        Tăng dần
                    </option>
                </select>
            </div>
            <div className="pb-4 pt-2">
                {/* <p className="text-sm">
                    Vui lòng
                    <NavLink to="/dang-nhap">
                        <strong className="mx-1 text-orange-500">Đăng nhập</strong>
                    </NavLink>
                    tài khoản FPT Play để sử dụng Bình luận
                </p> */}
                <div>
                    <button
                        onClick={() => setIsShowReviewForm(true)}
                        className="text-md cursor-pointer rounded-lg bg-[#ff6500] px-3 py-1 leading-tight text-white hover:bg-[#ff6520]"
                    >
                        Thêm đánh giá của bạn
                    </button>
                    {isShowReviewForm ? (
                        <ReviewForm
                            movieId={movieId}
                            setIsShowReviewForm={setIsShowReviewForm}
                            reviewList={reviewList}
                            setReviewList={setReviewList}
                        ></ReviewForm>
                    ) : null}
                </div>
            </div>
            <div className="">
                {reviewList?.map((e, i) => {
                    return (
                        <ReviewItem
                            key={i}
                            rating={e?.rating}
                            userName={`${e?.user?.userName}`}
                            time={`${e?.insertedDate} ngày`}
                            reviewText={e?.reviewText}
                        />
                    );
                })}
                {showLoadMoreReviewButton ? (
                    <button
                        onClick={() => loadMoreReview()}
                        className="text-sm font-medium text-[#b8b8b8] transition-colors hover:text-orange-600"
                    >
                        Tải thêm đánh giá
                    </button>
                ) : null}
            </div>
        </div>
    );
}

export default Review;
