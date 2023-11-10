import React from 'react';

const MenuItem = ({item}) => {
    // console.log(Object.keys(item).join(','))
    const {id,name,recipe,image,category,price} = item;

    return (
        <div className='flex space-x-4 space-y-4'>
            <img src={image} style={{borderRadius: '0 200px 200px'}} className='w-[100px] object-cover' alt="" />
            <div>
                <h3 className='uppercase font-bold'>{name}---------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-400 font-bold'>${price}</p>
     
            
        </div>
    );
};

export default MenuItem;