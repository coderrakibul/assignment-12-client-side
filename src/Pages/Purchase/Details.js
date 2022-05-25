import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {

    const { productId } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/part/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId]);


    return (
        <div className='px-12 mt-8'>
            <h2 className='text-3xl font-bold text-center mb-8'>Details of the Product</h2>
            <div>
                {
                    <div>
                        
                        <div className='flex justify-center'><img src={product.image} alt="" /></div>
                        <h2 className='text-3xl text-accent'>Product Name: {product.name}</h2>
                        <h2 className='text-2xl text-accent'>Product Id: {product._id}</h2>
                        <p>{product.description}</p>
                        
                        <h2 className='text-2xl text-accent'>Available Product: {product.quantity}pcs</h2>
                        <h2 className='text-2xl text-accent'>Minimum Order: {product.order_quantity}pcs</h2>
                        <h2 className='text-2xl text-accent'>Price: ${product.price}</h2>
                        
                    </div>
                }
            </div>
        </div>
    );
};

export default Details;