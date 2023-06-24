import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import 'tailwindcss/tailwind.css';

const Rating = ({ rating, totalStars, onRatingChange }) => {
    const [hoverRating, setHoverRating] = useState(0);

    const handleStarClick = (selectedRating) => {
        onRatingChange(selectedRating);
    };

    const handleStarHover = (hoveredRating) => {
        setHoverRating(hoveredRating);
    };

    const handleStarLeave = () => {
        setHoverRating(0);
    };

    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
        const starIcon =
            i <= (hoverRating || rating) ? (
                <FontAwesomeIcon
                    icon={faStar}
                    className="cursor-pointer text-yellow-500"
                    onClick={() => handleStarClick(i)}
                    onMouseEnter={() => handleStarHover(i)}
                    onMouseLeave={handleStarLeave}
                />
            ) : (
                <FontAwesomeIcon
                    icon={faStar}
                    className="cursor-pointer text-gray-400"
                    onClick={() => handleStarClick(i)}
                    onMouseEnter={() => handleStarHover(i)}
                    onMouseLeave={handleStarLeave}
                />
            );

        stars.push(<li key={i}>{starIcon}</li>);
    }

    return (
        <div className="flex items-center">
            <ul className="flex space-x-1">{stars}</ul>
            <span className="ml-2 text-gray-600">
                {hoverRating || rating}/{totalStars}
            </span>
        </div>
    );
};

export default Rating;
