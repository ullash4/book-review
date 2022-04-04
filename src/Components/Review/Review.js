import React from 'react';
import useReview from '../Hooks/useReview';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
    const [review,] = useReview([]);
    return (
        <div className="bg-slate-200">
            <h1 className='text-2xl md:text-4xl font-semibold pt-7 text-center'>Some Of Our Clients Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 g-2 p-20'>
            {
                review.map(rev=><ReviewCard rev={rev} key={rev.id}></ReviewCard>)
            }
        </div>
        </div>
    );
};

export default Review;

