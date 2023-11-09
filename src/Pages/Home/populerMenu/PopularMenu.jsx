import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../component/sectionTitle/SectionTitle';
import axios from 'axios';

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(()=>{
        axios.get('menu.json')
        .then(res => setMenu(res.data))
        .catch(err => console.log(err))
        
    },[])
    return (
        <div>
            <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"}></SectionTitle>
            <h2>{menu.length}</h2>
            {
                menu.map()
            }
        </div>
    );
};

export default PopularMenu;