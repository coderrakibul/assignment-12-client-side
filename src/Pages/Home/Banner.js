import React from 'react';
import bannerImage from '../../images/banner.png';

const Banner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImage} alt='bannerImage' />
                <div>
                    <h1 class="text-5xl font-bold">Get Your Best Car Tools</h1>
                    <p class="py-6">Our mission is to establish a world – class auto parts retail store business that will make available a wide range of auto parts from top auto parts manufacturing brands at affordable prices to the residence of Charleston – South Carolina and other key cities in the United States of America and Canada where we intend opening of chains of auto parts retail stores and franchise.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;