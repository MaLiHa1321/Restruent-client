import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../component/sectionTitle/SectionTitle';
import axios from 'axios';
import MenuItem from '../../shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(()=>{
        axios.get('menu.json')
        .then(res => {
            const popularItem = res.data.filter(item => item.category === 'popular');
            setMenu(popularItem)
        } )
        .catch(err => console.log(err))
        
    },[])
    return (
        <div className='mb-12'>
            <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"}></SectionTitle>
            <h2>{menu.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;