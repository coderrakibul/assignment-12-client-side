import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const email = user.email;
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

        const url = "http://localhost:5000/review";
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
            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>

                <textarea className='w-full p-2' placeholder='give a review' {...register("review")} />
                <input disabled className='text-xl my-4 text-center' value={email} {...register("email")} />

                <input className='btn btn-primary fw-bold fs-5 mb-2 py-2' type="submit" />

            </form>
        </div>
    );
};

export default AddReview;