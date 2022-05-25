import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const email = user.email;
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

        const url = "https://fast-retreat-82221.herokuapp.com/review";
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
        <div className='mt-8'>
            <h2 className='text-center text-3xl mb-8'>Add Your Review</h2>
            <div className='flex justify-center items-center'>
                <form className='flex flex-col w-96' onSubmit={handleSubmit(onSubmit)}>

                    <textarea className='w-full p-2' placeholder='give a review' {...register("review")} />
                    <input className='my-4 p-2' placeholder='rating' type="number" {...register("ratings")} />
                    <input readOnly className='text-xl my-4 py-4 text-center' value={email} {...register("email")} />

                    <input className='btn btn-primary fw-bold fs-5 mb-2 py-2' type="submit" />

                </form>
            </div>
        </div>
    );
};

export default AddReview;