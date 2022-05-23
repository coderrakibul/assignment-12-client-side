import React from 'react';

const NotFound = () => {
    return (
        <div className='container text-center notfound-page'>
            <div className='flex justify-center items-center h-screen'>
               <div className='mb-24'>
               <h1 className='text-8xl font-bold text-red-600'>404!</h1>
                <h1 className='text-2xl font-bold text-red-600'>Page Not Found</h1>
               </div>
            </div>
        </div>
    );
};

export default NotFound;