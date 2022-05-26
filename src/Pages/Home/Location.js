import React from 'react';
import StreetLocation from '../../images/location.png';

const Location = () => {
    return (
        <div className='px-12 mt-24'>
            <h2 className='text-3xl font-bold text-center mb-8'>Our Location</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={StreetLocation} alt="Album" /></figure>
                <div className="card-body flex justify-center items-center">
                    <h2 className="card-title text-2xl">Address</h2>
                    <h3 className='text-xl'>State: FL - Florida</h3>
                    <h3 className='text-xl'>Zip Code: 12086</h3>
                    <h3 className='text-xl'>City Name: Miami</h3>
                    <h3 className='text-xl'>Street: 12/7 Mandarin Road</h3>
                    <h3 className='text-xl'>Shop No: 137, Block-D </h3>
                </div>
            </div>
        </div>
    );
};

export default Location;