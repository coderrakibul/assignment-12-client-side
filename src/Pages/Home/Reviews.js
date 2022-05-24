import React, { useEffect, useState } from 'react';
import Review from '../Home/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    const lastThree = reviews.slice(-3);

    return (
        <div className='px-12 mt-24'>
            <h2 className='text-3xl font-bold text-center mb-8'>Our Customers Review</h2>
            <div className='grid grid-cols-1 gap-10'>
                {
                    lastThree.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }

            </div>
        </div>
    );
};

export default Reviews;