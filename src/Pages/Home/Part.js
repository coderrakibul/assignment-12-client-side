import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton'

const Part = ({ part }) => {
    const { name, image, description, order_quantity, quantity, price } = part;
    const shortDesc = description.slice(0, 100);
    return (
        <div class="card  bg-base-100 shadow-xl mt-8">
            <h2 className='text-2xl text-center text-primary font-bold mt-8'>{name}</h2>
            <figure class="">
                <img src={image} alt={name} class="rounded-xl" />
            </figure>
            <div class="card-body">
                <p>Description: {shortDesc}....</p>
                <p>Minimum Order: {order_quantity}</p>
                <p>Available: {quantity}</p>
                <p>Price: ${price}</p>
                <div className='text-2xl'>
                    <PrimaryButton>Purchase</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Part;