import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <h1 className='text-3xl text-center font-semibold mt-5'>Click Button to show Results</h1>
            <div className='flex md:flex-row flex-col justify-around items-center m-10'>

                <Link to={'contextapi'}>
                <button className='py-5 px-20 m-2 rounded-lg bg-black text-white text-2xl'>What is Context API</button>
                </Link>

                <Link to={'inlineblock'}>
                    <button className='py-5 px-20 m-2 rounded-lg bg-black text-white text-2xl'>Inline Block and Block elements</button>
                    </Link>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Blog;