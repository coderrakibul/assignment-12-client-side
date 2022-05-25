import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://fast-retreat-82221.herokuapp.com/user/admin/${email}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    refetch();
                    toast.success(`Successfully Made An Admin`);
                }
            });
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
                {(role !== 'admin') ? <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button> : <button class="btn btn-xs">Admin</button>}
            </td>

            <td><button class="btn btn-xs text-white bg-red-500">Remove</button></td>
        </tr>
    );
};

export default UserRow;