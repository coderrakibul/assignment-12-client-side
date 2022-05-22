import React from 'react';
import Banner from './Banner';
import Parts from './Parts';
import Reviews from './Reviews';
import Summary from './Summary';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Summary></Summary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;