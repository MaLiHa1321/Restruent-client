import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../component/sectionTitle/SectionTitle';
import axios from 'axios';

const Recommand = () => {
   
    return (
        <div>
           
            <SectionTitle heading={'chef recommends'} subHeading={"Should Try"}></SectionTitle>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          <div className="card w-78 bg-base-100 shadow-xl">
  <figure><img src="https://cristianonew.ukrdevs.com/wp-content/uploads/2017/01/bbq-370x247.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Chicken salad</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit culpa recusandae vel.</p>
    <div className="card-actions justify-center">
    <button className='btn btn-outline border-0 border-b-4  mt-8'>View Full menu</button>
    </div>
  </div>
</div>
<div className="card w-78 bg-base-100 shadow-xl">
  <figure><img src="https://cristianonew.ukrdevs.com/wp-content/uploads/2017/01/bbq-370x247.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Chicken salad</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis dignissimos cum natus.</p>
    <div className="card-actions justify-center">
    <button className='btn btn-outline border-0 border-b-4  mt-8'>View Full menu</button>
    </div>
  </div>
</div>
<div className="card w-78 bg-base-100 shadow-xl">
  <figure><img src="https://cristianonew.ukrdevs.com/wp-content/uploads/2017/01/bbq-370x247.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Chicken salad</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis dignissimos cum natus.</p>
    <div className="card-actions justify-center">
    <button className='btn btn-outline border-0 border-b-4  mt-8'>View Full menu</button>
    </div>
  </div>
</div>
          </div>
        </div>
    );
};

export default Recommand;