import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='px-12 mt-8 mb-8'>
            <h2 className='text-3xl font-bold text-center mb-8'>My Portfolio Page</h2>
            <div>
                <h2 className='text-center text-2xl'>Name: Md Rakibul Islam</h2>
                <h2 className='text-center text-2xl'>Email: coder.rakibul@gmail.com</h2>
                <h2 className='text-xl'>Educational Qualificatons:
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Exam Name</th>
                                    <th>Grade Point</th>
                                    <th>Passing Year</th>
                                    <th>Group</th>
                                    <th>Board</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>SSC</td>
                                    <td>4.82</td>
                                    <td>2017</td>
                                    <td>Science</td>
                                    <td>Rajshahi</td>
                                </tr>
                                <tr>
                                    <td>HSC</td>
                                    <td>3.83</td>
                                    <td>2019</td>
                                    <td>Humanities</td>
                                    <td>Rajshahi</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </h2>

                <h2 className='text-xl mt-6'> Present:
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Now Studing</th>
                                    <th>College Name</th>
                                    <th>Subject</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Honors</td>
                                    <td>Govt Azizul Haque College, Bogura</td>
                                    <td>Psychology</td>
                                    <td>Hons 2nd Year</td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </h2>



                <h2 className='text-xl mt-6'>Skills:
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th className='text-center'>Skills or Technologies</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>HTML-5, CSS-3, Bootstrap-5, Tailwind CSS, Javascript, DOM Manipulation, ES6, ReactjS, Nodejs, Expressjs, MongoDB and etc. </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </h2>

                <h2 className='text-xl mt-6'>Link of my project</h2>
                <div className='flex flex-col text-center text-blue-700'>
                    <a href="https://parts-car-11705.web.app/" target="_blank" rel="noopener noreferrer">https://parts-car-11705.web.app/</a>
                    <a href="https://warehouse-84aea.web.app/home" target="_blank">https://warehouse-84aea.web.app/home</a>

                    <a href="https://doctors-portal-d95b1.web.app/" target="_blank">https://doctors-portal-d95b1.web.app/</a>
                </div>

            </div>

        </div>
    );
};

export default MyPortfolio;