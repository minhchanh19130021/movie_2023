import { useEffect, useState } from 'react';
import { saveNewReview } from '~/services/reviewServices';
import { useNavigate } from 'react-router-dom';

const { Rating } = require('../Rating');

const ReviewForm = ({ author, rating, content, reviewList, setReviewList, setIsShowReviewForm }) => {
    const [ratingValue, setRatingValue] = useState(0)
    const [reviewText, setReviewText] = useState('');
    const navigate = useNavigate();

    const handleReviewTextChange = event => {
        setReviewText(event.target.value);
    };

    function submitForm() {     
        if (reviewText==='' || ratingValue===0) {
            return;
        }   

        const load = saveNewReview(ratingValue, reviewText)
        load.then(e => {
            if(e.status === 200) {        
                setReviewList([e?.data, ...reviewList])
                setRatingValue(0)
                setReviewText('')
                setIsShowReviewForm(false)
            }
            else {
                navigate("/server-error");  
            }
        }).catch(e => {
            navigate("/server-error");
        })
    }

    return (
        <div className="my-3 rounded-lg p-4 shadow border">
            <h3 className="text-lg font-semibold">{author}</h3>
            <Rating rating={ratingValue} totalStars={5} onRatingChange={setRatingValue}/>
            <p className="mt-2 text-gray-700">{content}</p>
            <textarea value={reviewText} onChange={handleReviewTextChange} rows="4" className="my-3 outline-0 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Đánh giá của bạn">
            </textarea>
            <div >
                <button onClick={submitForm} type="button" 
                className={
                    `${reviewText==='' || ratingValue===0 ? 'cursor-not-allowed' : null} text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}>Thêm</button>
            </div>  
        </div>
    );
};
export default ReviewForm;
