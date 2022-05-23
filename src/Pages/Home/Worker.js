import React from 'react';

const Worker = ({ worker }) => {
    const { name, image } = worker;
    return (
        <div>
            <div className='flex justify-center'>
            <div class="w-80 h-80 bg-base-100 shadow-xl rounded-full">
                <figure><img className='rounded-full p-16' src={image} alt="Shoes" /></figure>
            </div>
        </div>
        <div>
            <h3 className='flex justify-center mt-6 text-2xl font-bold'>{name}</h3>
        </div>
        </div>
    );
};

export default Worker;