import React from 'react';

const Worker = ({ worker }) => {
    const { name, image } = worker;
    return (
        <div className='flex justify-center'>
            <div class="w-80 h-80 bg-base-100 shadow-xl rounded-full">
                <figure><img className='rounded-full p-16' src={image} alt="Shoes" /></figure>
               
            </div>
        </div>
    );
};

export default Worker;