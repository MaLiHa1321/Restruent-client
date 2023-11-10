import React from 'react';
import Banner from './Banner';
import Categories from './Category/Categories';
import PopularMenu from './populerMenu/PopularMenu';
import Featured from './Featured/Featured';


const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Categories></Categories>
         <PopularMenu></PopularMenu>
         <Featured></Featured>
            
        </div>
    );
};

export default Home;