import React from 'react';
import Banner from './Banner';
import Categories from './Category/Categories';
import PopularMenu from './populerMenu/PopularMenu';
import Featured from './Featured/Featured';
import Testimonial from './Testimonial/Testimonial';
import Boss from './Boss/Boss';
import Contact from './Contact/Contact';
import Recommand from './ChefRecommanded/Recommand';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
         <Banner></Banner>
         <Categories></Categories>
         <Boss></Boss>
         <PopularMenu></PopularMenu>
         <Contact></Contact>
         <Recommand></Recommand>
         <Featured></Featured>
         <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;