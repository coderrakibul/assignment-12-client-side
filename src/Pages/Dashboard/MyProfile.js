import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const MyProfile = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <h2>My Profile</h2>
            <div className='text-center'>
                {
                    user && <>
                        <h2 className='text-2xl'>{user.displayName}</h2>
                        <h3 className='text-xl'>{user.email}</h3>
                    </>
                }
            </div>
        </div>
    );
};

export default MyProfile;