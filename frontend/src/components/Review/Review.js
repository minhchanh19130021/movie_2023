const { Rating } = require('../Rating');

const Review = ({ author, rating, content }) => {
    return (
        <div className="mb-4 rounded-lg bg-gray-100 p-4 shadow">
            <h3 className="text-lg font-semibold">{author}</h3>
            <Rating rating={rating} totalStars={5} />
            <p className="mt-2 text-gray-700">{content}</p>
        </div>
    );
};
export default Review;
