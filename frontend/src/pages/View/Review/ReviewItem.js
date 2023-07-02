import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function ReviewItem({ userName, time, reviewText, rating }) {
    const renderRateYellow = (rating) => {
        const elements = [];
        for (let i = 1; i <= rating; i++) {
            elements.push(<FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />);
        }

        return elements;
    };
    const renderRateGray = (rating) => {
        const elements = [];
        for (let i = 1; i <= 5 - rating; i++) {
            elements.push(<FontAwesomeIcon key={i} icon={faStar} className="gray-yellow-500" />);
        }

        return elements;
    };
    return (
        <div className="comment-item flex w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10">
                <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clipRule="evenodd"
                />
            </svg>
            <div className="comment-item__info mb-6 ml-2  w-4/5 ">
                <div className="w-full rounded-lg bg-[#202020] px-4 py-3 text-sm">
                    <div className="flex w-full items-center">
                        <p className="font-bold text-white">{userName}</p>
                        <div className="mx-2 h-1 w-1 rounded-full bg-white opacity-90"></div>
                        <p className="text-sm text-[#616161]">{time?.substring(0, 10)}</p>
                    </div>
                    <div>
                        {renderRateYellow(rating)}
                        {renderRateGray(rating)}
                    </div>
                    <p className="text-[#d2d2d2]">{reviewText}</p>
                </div>
            </div>
        </div>
    );
}

export default ReviewItem;
