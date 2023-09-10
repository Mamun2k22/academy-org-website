
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import mz from '../assets/mz.mp4'

// import required modules
import { Autoplay } from 'swiper';


export const Video = () => {
    return (
        <div className='lg:my-0 my-40'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <div className='main'>


               


                        <video autoPlay loop muted className="relative" src={mz} />
                      

                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
}