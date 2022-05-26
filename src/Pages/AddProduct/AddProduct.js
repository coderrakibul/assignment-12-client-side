import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://fast-retreat-82221.herokuapp.com/part`;
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
        <div className='px-12 mt-8'>
            <h2 className='text-3xl font-bold text-center mb-8'>Add a New Product</h2>
            <form className='w-96 flex flex-col mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 py-2 pl-2' placeholder='Product Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2 py-2 pl-2' placeholder='Photo URL' type="text" {...register("image")} />
                <textarea className='mb-2 py-2 pl-2' placeholder='Product Description' {...register("description")} />
                <input className='mb-2 py-2 pl-2' placeholder='Minimum Order' type="number" {...register("order_quantity")} />
                <input className='mb-2 py-2 pl-2' placeholder='Product Available' type="number" {...register("quantity")} />
                <input className='mb-2 py-2 pl-2' placeholder='Product Price' type="number" {...register("price")} />
                <input className='btn btn-primary fw-bold fs-5 mb-2 py-2' type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;