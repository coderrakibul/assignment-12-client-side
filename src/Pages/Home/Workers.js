import React from 'react';
import Worker from './Worker';

const Workers = () => {
    const workers = [
        {
            id: 1,
            name: "John Doe",
            image: "https://i.ibb.co/6nmbvym/depositphotos-319894188-stock-photo-car-mechanic-carrying-a-tire.webp"
        },

        {
            id: 2,
            name: "Tomas Hang",
            image: "https://i.ibb.co/LrD4GVC/depositphotos-9632890-stock-photo-automechanic-taking-a-wrench-out.webp"
        },

        {
            id:3,
            name: "Curly",
            image: "https://i.ibb.co/f1m5JqV/depositphotos-88370532-stock-photo-mechanic-holding-a-wrench.webp"
        }

    ]
    return (
        <div className='mt-24'>
            <h2 className='text-3xl font-bold text-center mb-8'>Our Workers</h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    workers.map(worker => <Worker
                    key={worker.id}
                    worker={worker}
                    ></Worker>)
                }
            </div>
        </div>
    );
};

export default Workers;