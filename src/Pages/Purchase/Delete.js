import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Delete = () => {
    const { productId } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/part/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId]);

    const handleDelete = () => {
        const proceed = window.confirm('are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/part/${productId}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })

        }
    }


    return (
        <div className='px-12 mt-8 mb-8'>
            <h2 className='text-3xl font-bold text-center mb-8'>Delete this product</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Id</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>{product.name}</th>
                            <td><img className='w-12' src={product.image} alt="product_image" /></td>
                            <td className='font-bold text-purple-500'>{product._id}</td>
                            <td><button onClick={() => handleDelete(product._id)} class="btn btn-circle text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button></td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Delete;


