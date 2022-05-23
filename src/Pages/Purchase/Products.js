import React, { useEffect, useState } from 'react';
import Product from './Product';


const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/part")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (



        <div>
            <h2 className="text-3xl font-bold text-center mb-8 mt-8">All Products: {products.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Avaiable</th>
                            <th>Min Order</th>
                            <th>Order</th>
                            <th>Update</th>
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

