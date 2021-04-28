import React from 'react';

const Review = ({ review }) => {
    // console.log(review)
    const { rating, body } = review;
    console.log(rating);
    console.log(body);
    return (
        <div>
            <h3>Rating: {rating}</h3>
            <span>{body}</span>
            
        </div>
    )
};

export default Review;

