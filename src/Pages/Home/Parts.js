import React, { useEffect, useState } from 'react';
import Part from './Part';


const Parts = () => {

    const [parts, setParts] = useState([]);

    const firstThree = parts.slice(0, 3);


    useEffect(() => {
        fetch("http://localhost:5000/part")
            .then(res => res.json())
            .then(data => setParts(data))
    }, []);

    return (

        <div className='px-12 mb-8'>
            <h2 className='text-3xl text-center font-bold'>Parts Collection</h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    firstThree.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>

        </div>

    );
};

export default Parts;