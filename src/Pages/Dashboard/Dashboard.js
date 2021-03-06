import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl font-bold'>Dashboard</h2>
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-50 mr-4 bg-base-100 text-base-content">
                    <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/myprofile">My Profile</Link></li>
                    {!admin && <li><Link to="/dashboard/addreview">Add a Review</Link></li>}
                    {admin && <li><Link to="/dashboard/users">Users</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;