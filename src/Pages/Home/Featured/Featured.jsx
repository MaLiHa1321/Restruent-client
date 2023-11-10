import React from 'react';
import SectionTitle from '../../../component/sectionTitle/SectionTitle';
import img1 from '../../../assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed   text-white pt-8 my-20'>
            <SectionTitle heading={"fatured Item"} subHeading={"check it out"}>

            </SectionTitle>
            <div className='md:flex justify-center bg-black opacity-60 items-center text-white py-20 pt-12 px-36 '>

            <div>
                <img src={img1} alt="" />
            </div>
            <div className='md:ml-10 text-white space-y-5'>
                <p>Aug 20, 2029</p>
                <p className='uppercase'>where can i get some</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum illo laborum asperiores voluptatem excepturi laboriosam.</p>
                <button className='btn btn-outline border-0 border-b-4 text-white mt-8'>Order Now</button>
            </div>
            </div>
        </div>
    );
};

export default Featured;