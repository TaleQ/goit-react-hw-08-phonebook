import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import { SliderBox } from './HomeSlider.styled';

export const HomeSlider = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      pagination={{
        type: 'progressbar',
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      <SwiperSlide>
        <SliderBox>
          <h3>Easy Authorization</h3>
          <p>
            Create an account in one-click and gain access to your personal
            phonebook.
          </p>
        </SliderBox>
      </SwiperSlide>
      <SwiperSlide>
        <SliderBox>
          <h3>Seamless Contact Management</h3>
          <p>
            Add and delete contacts with ease, keeping all your contacts in one
            central location.
          </p>
        </SliderBox>
      </SwiperSlide>
      <SwiperSlide>
        <SliderBox>
          <h3>Quick Search</h3>
          <p>Easily find specific contacts using search option.</p>
        </SliderBox>
      </SwiperSlide>
      <SwiperSlide>
        <SliderBox>
          <h3>Сonvenient and Safe Access</h3>
          <p>Access your contacts from anywhere, at any time.</p>
        </SliderBox>
      </SwiperSlide>
    </Swiper>
  );
};
