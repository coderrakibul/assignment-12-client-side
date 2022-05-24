import React from 'react';

const Blogs = () => {
    return (
        <div className='px-12 mt-16'>
            <h2 className='text-3xl font-bold text-center mb-8'>Blogs</h2>
            <div className='mb-16'>
                <div className='mb-8'>
                    <h3 className='text-xl font-bold'><strong>Question-1: </strong>How will you improve the performance of a React Application?</h3>
                    <p className='text-xl'><strong>Answer: </strong>An website performance depends on a developer. To faster an website we should prevent to re render unnecessary components
                        and keeping component state local where necessary.
                        when we will use image we should resize it.</p>
                </div>

                <div className='mb-8'>
                    <h3 className='text-xl font-bold'><strong>Question-2: </strong>What are the different ways to manage a state in a React application?</h3>
                    <p className='text-xl'><strong>Answer: </strong>There are four types of state to manage react state. Such as,
                        (i) local state (ii) global state (iii) server state (iv) url state.</p>
                </div>

                <div className='mb-8'>
                    <h3 className='text-xl font-bold'><strong>Question-3: </strong>How does prototypical inheritance work?</h3>
                    <p className='text-xl'><strong>Answer: </strong>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for prototypal inheritance , meaning that objects and methods can be shared, extended, and copied. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
                </div>

                <div className='mb-8'>
                    <h3 className='text-xl font-bold'><strong>Question-4: </strong>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h3>
                    <p className='text-xl'><strong>Answer: </strong>If we update state directly, calling the setState afterward may just replace the update we made. When we directly update the state, it does not change this.</p>
                </div>

                <div className='mb-8'>
                    <h3 className='text-xl font-bold'><strong>Question-6: </strong>What is a unit test? Why should write unit tests?</h3>
                    <p className='text-xl'><strong>Answer: </strong>Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected.

                        To justify any effort in business, there must be a positive impact on the bottom line. Such as,  Well-written unit tests act as documentation for our code. Any developer can quickly look at our tests and know the purpose of our functions.  and It simplifies the debugging process.</p>

                </div>




            </div>
        </div>
    );
};

export default Blogs;