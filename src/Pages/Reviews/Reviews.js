import React, { useEffect, useState } from 'react';
import Review from '../Reviews/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://fast-retreat-82221.herokuapp.com/review")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);


    return (
        <div className='px-12 mt-8 mb-8'>
            <h2 className='text-3xl font-bold text-center mb-8'>Our Customers Review</h2>
            <div className='grid grid-cols-1 gap-10'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }

            </div>
        </div>
    );
};

export default Reviews;