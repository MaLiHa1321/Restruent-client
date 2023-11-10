import React from 'react';
import MenuItem from '../../shared/MenuItem/MenuItem';
import Cover from '../../shared/Cover/Cover';

const Menucategory = ({items, title, coverImage}) => {
    return (
        <div className='p-7'>
       {
        title && <Cover img={coverImage} title={title}></Cover>
       } 
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 my-16'>
        {
            items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
        }

    </div>
        </div>
    );
};

export default Menucategory;