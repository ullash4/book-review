import React from 'react';

const ReviewCard = ({rev}) => {
    console.log(rev);
    const {name, picture, company, review, rating} = rev;
    return (
            <div className='mb-10 shadow-xl bg-white rounded-lg p-7 m-5 flex flex-col items-center'>
           <div className=''> <img className='w-28 h-28 rounded-full' src={picture} alt="" /></div>
            <div>
            <h2 className='text-center text-2xl font-semibold'>{name}</h2>
            <h1 className='text-center text-xl font-thin'>Company : {company}</h1>
            <h1 className='text-center font-bold'>Ratings : {rating} stars</h1>
            <h1 className='text-justify mt-2 font-sans'>"{review.slice(0, 300)}"~<span className='font-semibold text-xl'>{name}</span></h1>
            </div>
        </div>
    );
};

export default ReviewCard;