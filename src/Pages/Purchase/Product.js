import React from 'react';

const Product = ({ product, index }) => {
    const { name, order_quantity, image, quantity, price } = product;

    return (

        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td><img className='w-10 h-10' src={image} alt="productImage" /></td>
            <td>${price}</td>
            <td>{quantity}pcs</td>
            <td>{order_quantity}pcs</td>
            <td>{<button class="btn btn-primary">Order</button>}</td>
            <td>{<button class="btn btn-success">Update</button>}</td>
            <td>{<button class="btn btn-circle text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>}</td>

        </tr>

    );
};

export default Product;