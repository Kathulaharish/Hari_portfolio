import React from "react";
import "./testimonials.css";
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar1.jpg'
import AVTR4 from '../../assets/avatar2.jpg'

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
    {
        avatar: AVTR1,
        name: 'Varsha',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, nobis. Sint, nisi at eveniet dolorum eligendi laudantium totam corrupti facere culpa, provident ratione atque, voluptatibus asperiores deleniti nam. Nisi, dolores!',
    },
    {
        avatar: AVTR2,
        name: 'Hari',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, nobis. Sint, nisi at eveniet dolorum eligendi laudantium totam corrupti facere culpa, provident ratione atque, voluptatibus asperiores deleniti nam. Nisi, dolores!',
    },
    {
        avatar: AVTR3,
        name: 'vaishnavi',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, nobis. Sint, nisi at eveniet dolorum eligendi laudantium totam corrupti facere culpa, provident ratione atque, voluptatibus asperiores deleniti nam. Nisi, dolores!',
    },
    {
        avatar: AVTR4,
        name: 'Laxmi',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, nobis. Sint, nisi at eveniet dolorum eligendi laudantium totam corrupti facere culpa, provident ratione atque, voluptatibus asperiores deleniti nam. Nisi, dolores!',
    },
]


const Testimonials = ()=>{
    return(
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials_container"
             // install Swiper modules
      mo    dules={[Pagination, Navigation]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}>
                {
                    data.map(({avatar, name, review}, index) => {
                        return(
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client_avatar">
                                    <img src={avatar} alt="Avatar One" />
                                </div>
                                <h5 className="client_name">{ name}</h5>
                                <small className="client_review">{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials;