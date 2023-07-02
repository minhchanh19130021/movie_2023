import { NavLink } from 'react-router-dom';
import ReviewItem from './ReviewItem';
import { useEffect, useState } from 'react';
import { getReviewsByMovieIdAndPaginationNumber } from '~/services/reviewServices';
import ReviewForm from '~/components/Review/ReviewForm';

function Review() {
    const [reviewList, setReviewList] = useState([]);
    const [isShowReviewForm, setIsShowReviewForm] = useState(false);

    useEffect(() => {
        const load = getReviewsByMovieIdAndPaginationNumber(1, 0);
        load.then((e) => {
            setReviewList(e?.data);
        });
    }, []);

    return (
        <div>
            <div className="grid grid-cols-3">
                <div className="col-span-2 mb-6 flex items-center">
                    <h3 className="text-2xl font-medium">Đánh giá ({reviewList?.length})</h3>
                </div>               
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
                    className="cursor-pointer rounded-lg bg-[#ff6500] px-3 py-1 text-md leading-tight text-white hover:bg-[#ff6520]">
                        Thêm đánh giá của bạn
                    </button>
                    {isShowReviewForm ? <ReviewForm setIsShowReviewForm={setIsShowReviewForm} reviewList={reviewList} setReviewList={setReviewList}></ReviewForm> : null}                    
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
            </div>
        </div>
    );
}

export default Review;
