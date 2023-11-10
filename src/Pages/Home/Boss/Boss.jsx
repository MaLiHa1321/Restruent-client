import React from 'react';
import img from '../../../assets/home/chef-service.jpg'

const Boss = () => {
    return (
        <div className='w-full h-[500px] bg-fixed p-10'  style={{backgroundImage: `url(${img})`}}>

            <div className='p-12 w-1/2 mx-auto mt-24 bg-slate-100 space-y-4'>
                <h2 className='text-3xl text-center font-bold'>Bistro Boss</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam blanditiis reiciendis eius dolores beatae dolor a mollitia, voluptatibus rerum. Fuga! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ab cumque rerum.
                </p>
            </div>
        </div>
    );
};

export default Boss;