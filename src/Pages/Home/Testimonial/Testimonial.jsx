import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../component/sectionTitle/SectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import axios from 'axios';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'


const Testimonial = () => {
    const [reveiws, setReveiws] = useState([])
    useEffect(()=>{
        axios.get('reveiw.json')
        .then(res => {
            setReveiws(res.data)
        })
        .catch(err => console.log(err))
    },[])
    return (
        <div className='my-8'>
            <SectionTitle subHeading={"What our client said"} heading={"Testimonial"}></SectionTitle>
            <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
        {
            reveiws.map(reveiw =>  <SwiperSlide key={reveiw._id}>
                <div className='flex flex-col items-center m-16 my-16'>
                <Rating
      style={{ maxWidth: 180 }}
      value={reveiw.Rating}
      readOnly
    />
                  <p className='text-4xl m-4'><FaQuoteLeft></FaQuoteLeft></p>
                    <p className='mt-12'>{reveiw.details}</p>
                    <h3 className='text-2xl text-orange-400'>{reveiw.name}</h3>
                </div>

            </SwiperSlide>)
        }
    
      </Swiper>
            </div>
            
        </div>
    );
};

export default Testimonial;