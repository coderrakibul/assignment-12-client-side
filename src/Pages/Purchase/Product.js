import { useNavigate } from 'react-router-dom';

const Product = ({ product, index }) => {
    const { _id, name, order_quantity, image, quantity, price } = product;
    const navigate = useNavigate();

    const navigateToProductDetails = id => {
        navigate(`/purchase/details/${id}`);
    };

    const navigateToOrders = (id) => {
        navigate(`/purchase/orders/${id}`);
    };


    const navigateToDelete = id => {
        navigate(`/purchase/delete/${id}`);
    };

    return (

        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td><img className='w-10 h-10' src={image} alt="productImage" /></td>
            <td>${price}</td>
            <td>{quantity}pcs</td>
            <td>{order_quantity}pcs</td>
            <td><button onClick={() => navigateToProductDetails(_id)} className="btn bg-blue-500">Details</button></td>
            <td><button className="btn btn-success">Update</button></td>
            <td><button onClick={() => navigateToOrders(_id)} className="btn btn-primary">Order</button></td>
            <td><button onClick={() => navigateToDelete(_id)} className="btn btn-circle text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M6 18L18 6M6 6l12 12" /></svg>
            </button></td>

        </tr>

    );
};

export default Product;