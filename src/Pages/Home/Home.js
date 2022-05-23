import React from 'react';
import Banner from './Banner';
import Location from './Location';
import Parts from './Parts';
import Reviews from './Reviews';
import Summary from './Summary';
import Workers from './Workers';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Summary></Summary>
            <Reviews></Reviews>
            <Workers></Workers>
            <Location></Location>
        </div>
    );
};

export default Home;