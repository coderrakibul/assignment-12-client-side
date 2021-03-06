import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import Product from './Product';

const Products = () => {

    const [products, setProducts, isLoading] = useState([]);

    useEffect(() => {
        fetch("https://fast-retreat-82221.herokuapp.com/part")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    if (isLoading) {
        return <Loading></Loading>
    }


    return (

        <div>
            <h2 className="text-3xl font-bold text-center mb-8 mt-8">All Products: {products.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Avaiable</th>
                            <th>Min Order</th>
                            <th>Details</th>
                            <th>Update</th>
                            <th>Order</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <Product
                                key={product._id}
                                product={product}
                                index={index}
                            ></Product>)
                        }
                    </tbody>
                </table>
            </div>
        </div>


    );
};

export default Products;

