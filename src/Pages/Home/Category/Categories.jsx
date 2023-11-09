import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../component/sectionTitle/SectionTitle';

const Categories = () => {
    return (
        <div>
            <section>
                <SectionTitle subHeading={"From 11.00am to 10.00pm"} heading={"Order Online"}></SectionTitle>
            </section>
                 <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white shadow-xl'>Salad</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white shadow-xl'>Pizzeas</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src= {slide3} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white shadow-xl'>soup</h3>
           </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white shadow-xl'>Desert</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src= {slide5} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white shadow-xl'>Salad</h3>
           </SwiperSlide>
       
      </Swiper>
            
        </div>
    );
};

export default Categories;