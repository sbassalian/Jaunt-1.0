import React from 'react';

const Review = ({ review }) => {
    console.log('why doesnt this work')
    const { rating, body } = review;
    return (
        <div>
            <ul>
                <li>Rating: {rating}</li>
                <li>{body}</li>
            </ul>
        </div>
    )
};

export default Review;

