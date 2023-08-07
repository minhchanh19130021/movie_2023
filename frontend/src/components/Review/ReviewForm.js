import { useEffect, useState } from 'react';
import { saveNewReview } from '~/services/reviewServices';
import { useNavigate } from 'react-router-dom';
import { checkUserIdInOrder } from '~/services/orderServices';
import { useSelector } from 'react-redux';

const { Rating } = require('../Rating');

const ReviewForm = ({ author, rating, content, reviewList, setReviewList, setIsShowReviewForm }) => {
    const [ratingValue, setRatingValue] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const navigate = useNavigate();
    const user = useSelector((state) => state?.authentication?.login?.currentUser);

    const handleReviewTextChange = (event) => {
        setReviewText(event.target.value);
    };

    function submitForm() {
        if (!user?.accessToken) {
            alert('cần đăng nhập để thực hiện chức năng đánh giá');
            return;
        }
        if (reviewText === '' || ratingValue === 0) {
            return;
        }

        const isExist = checkUserIdInOrder(user?.accessToken);

        isExist
            .then((e) => {
                if (e?.status === 200) {
                    console.log(e);
                    if (e?.data === 'ok') {
                        const load = saveNewReview(ratingValue, reviewText, user?.accessToken);
                        load.then((e) => {
                            if (e.status === 200) {
                                setReviewList([e?.data, ...reviewList]);
                                setRatingValue(0);
                                setReviewText('');
                                setIsShowReviewForm(false);
                            } else {
                                navigate('/server-error');
                            }
                        }).catch((e) => {
                            console.log(e);
                            navigate('/server-error');
                        });
                    } else {
                        alert('cần đăng kí gói cước để thực hiện chức năng đánh giá');
                        navigate('/thanh-toan');
                    }
                } else {
                    navigate('/server-error');
                }
            })
            .catch(() => {
                navigate('/server-error');
            });
    }

    return (
        <div className="my-3 rounded-lg border p-4 shadow">
            <h3 className="text-lg font-semibold">{author}</h3>
            <Rating rating={ratingValue} totalStars={5} onRatingChange={setRatingValue} />
            <p className="mt-2 text-gray-700">{content}</p>
            <textarea
                value={reviewText}
                onChange={handleReviewTextChange}
                rows="4"
                className="my-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Đánh giá của bạn"
            ></textarea>
            <div>
                <button
                    onClick={submitForm}
                    type="button"
                    className={`${
                        reviewText === '' || ratingValue === 0 ? 'cursor-not-allowed' : null
                    } mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                >
                    Thêm
                </button>
            </div>
        </div>
    );
};
export default ReviewForm;
