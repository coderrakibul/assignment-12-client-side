import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {

    const { productId } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `https://fast-retreat-82221.herokuapp.com/part/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId]);


    return (
        <div className='px-12 mt-8 mb-8'>
            <h2 className='text-3xl font-bold text-center mb-8'>Details of the Product</h2>
            <div>
                {
                    <div>

                        <div className='flex justify-center'><img src={product.image} alt="" /></div>
                        <h2 className='text-3xl'>Product Name: {product.name}</h2>
                        <h3 className='text-xl font-bold'>Product Id: <span className='text-purple-600'>{product._id}</span></h3>
                        <p>Description: {product.description}</p>

                        <h3 className='text-xl'>Available Product: {product.quantity}pcs</h3>
                        <h3 className='text-xl'>Minimum Order: {product.order_quantity}pcs</h3>
                        <h3 className='text-xl font-bold'>Price: ${product.price}</h3>

                    </div>
                }
            </div>
        </div>
    );
};

export default Details;