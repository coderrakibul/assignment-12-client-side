import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Orders = () => {
    const [product, setProduct] = useState({});
    const { productId } = useParams();
    const [user] = useAuthState(auth);
    const email = user.email;
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        const url = `http://localhost:5000/part/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId]);

    const onSubmit = data => {

        const url = "http://localhost:5000/order";
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json)
            .then(result => {
                console.log(result)
            })

    };


    return (
        <div className='px-12 mt-8 mb-8'>
            <h2 className='text-3xl font-bold text-center mb-8'>Order this Product</h2>

            <form className='flex flex-col mx-auto w-96' onSubmit={handleSubmit(onSubmit)}>
                <label>Email:
                    <input readOnly className='text-xl py-4 bg-gray-100 text-center outline-none' value={email} {...register("email")} />
                </label>

                <label>Id:
                    <input readOnly className='p-2 bg-gray-100 outline-none text-purple-500 font-bold' value={productId} {...register("id")} />
                </label>

                <input className='btn btn-success font-bold fs-5 mb-2 py-2' type="submit" value="Place Order" />
            </form>
            <button className='btn btn-primary w-96 font-bold fs-5 mb-2 py-2 flex justify-center mx-auto'><Link to="/purchase">Go Back</Link></button>

        </div>
    );
};

export default Orders;