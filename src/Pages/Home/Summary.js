import React from 'react';
import { AnnotationIcon, TruckIcon, UsersIcon } from '@heroicons/react/solid'

const Summary = () => {
    return (
        <div className='px-12 mt-24'>
            <h2 className='text-3xl font-bold text-center mb-8'>Our Business Summary</h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-10'>
                   
                    <div class="card bg-pink-100 shadow-xl">
                        <div class="card-body text-center">
                            <div class="card-actions justify-end">
                            </div>
                            <UsersIcon className="h-10 w-10 mx-auto text-accent"/>
                            <h2 className='text-4xl text-orange-400 font-bold'>100+</h2>
                            <p className='font-bold'>Customers</p>
                        </div>
                    </div>

                    <div class="card bg-pink-100 shadow-xl">
                        <div class="card-body text-center">
                            <div class="card-actions justify-end">
                            </div>
                            <AnnotationIcon className="h-10 w-10 mx-auto text-accent"/>
                            <h2 className='text-4xl text-orange-400 font-bold'>25+</h2>
                            <p className='font-bold'>Reviews</p>
                        </div>
                    </div>

                    <div class="card bg-pink-100 shadow-xl">
                        <div class="card-body text-center">
                            <div class="card-actions justify-end">
                            </div>
                            <TruckIcon className="h-10 w-10 mx-auto text-accent"/>
                            <h2 className='text-4xl text-orange-400 font-bold'>30+</h2>
                            <p className='font-bold'>Parts</p>
                        </div>
                    </div>


            </div>
        </div>
    );
};

export default Summary;