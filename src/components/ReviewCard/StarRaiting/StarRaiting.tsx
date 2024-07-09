
import React from 'react';
import scss from './StarRaiting.module.scss';

interface StarRatingProps {
  stars: number;
}

const StarRating: React.FC<StarRatingProps> = ({ stars }) => {
  const validStars = Math.min(5, Math.max(0, stars)); // Ensure stars is between 0 and 5
  const filledStars = Array(validStars).fill(true);
  const emptyStars = Array(5 - validStars).fill(false);

  return (
    <div className={scss.starRating}>
      {[...filledStars, ...emptyStars].map((isFilled, index) => (
        <span key={index} className={isFilled ? scss.filledStar : scss.emptyStar}>
          ★ 
        </span>
      ))}
    </div>
  );
};

export default StarRating;
