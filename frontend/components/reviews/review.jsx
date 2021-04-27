import React from 'react';

const Review = ({ review }) => {
    
    const { rating, body } = review;
    return (
        <div>
            <h3>Rating: {rating}</h3>
            <span>{body}</span>
            
        </div>
    )
};

export default Review;

