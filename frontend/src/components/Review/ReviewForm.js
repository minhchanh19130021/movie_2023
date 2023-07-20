import { useEffect, useState } from 'react';
import { saveNewReview } from '~/services/reviewServices';
import { useNavigate } from 'react-router-dom';
import { checkUserIdInOrder } from '~/services/orderServices';

const { Rating } = require('../Rating');

const ReviewForm = ({ author, rating, content, reviewList, setReviewList, setIsShowReviewForm }) => {
    const [ratingValue, setRatingValue] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const navigate = useNavigate();

    const handleReviewTextChange = (event) => {
        setReviewText(event.target.value);
    };

    function submitForm() {
        if (reviewText === '' || ratingValue === 0) {
            return;
        }

        const isExist = checkUserIdInOrder(1);
        isExist
            .then((e) => {
                if (e?.status === 200) {
                    if (e?.data === true) {
                        const load = saveNewReview(ratingValue, reviewText);
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
                            navigate('/server-error');
                        });
                    } else {
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
