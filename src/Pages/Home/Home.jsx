import React from 'react';
import Banner from './Banner';
import Categories from './Category/Categories';
import PopularMenu from './populerMenu/PopularMenu';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Categories></Categories>
         <PopularMenu></PopularMenu>
            
        </div>
    );
};

export default Home;