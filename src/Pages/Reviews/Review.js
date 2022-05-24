import { StarIcon } from '@heroicons/react/solid';
import React from 'react';

const Review = ({ review }) => {
    const { review: userReview, ratings, email } = review;
    return (
        <div>
            <h3 className='text-2xl'>User: {email}</h3>
            <p>Review: {userReview}</p>
            <h2 className='text-xl flex items-center text-orange-500'>Ratings: {ratings} <span><StarIcon className="h-6 w-6 text-orange-500 ml-1" /></span></h2>
        </div>
    );
};

export default Review;