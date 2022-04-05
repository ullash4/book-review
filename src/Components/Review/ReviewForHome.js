import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../Hooks/useReview';
import ReviewCard from '../ReviewCard/ReviewCard';

const ReviewForHome = () => {
    const [review, ] = useReview([]);
    return (
        <div className="bg-slate-200 text-center">
            <h1 className='text-2xl md:text-4xl font-semibold pt-7'>Customer Reviews (3)</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 g-2 p-5'>
            {
                review.slice(0, 3).map(rev=><ReviewCard rev={rev} key={rev.id}></ReviewCard>)
            }
        </div>
            <Link to={'/review'}><button className="py-2 px-3 bg-slate-400 rounded-lg font-semibold m-5 hover:bg-black hover:text-white">See all Review</button></Link>
        </div>
    );
};

export default ReviewForHome;