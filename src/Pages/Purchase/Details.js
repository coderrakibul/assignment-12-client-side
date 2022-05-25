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
            {
                <h2>{product._id}</h2>
            }
        </div>
    );
};

export default Details;