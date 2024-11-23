import { useEffect, useState } from "react";
import api from "../provider/api";

import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Slider() {

  const [slideItems, setSlideItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch slides from API
  const fetchSlides = async () => {
    try {
      const resp = await api.get("/api/admin/slider/getsliders");
      console.log(resp);
      // Assuming your response data contains an array of slides
      setSlideItems(resp.data); // Adjust based on the actual response structure
      setLoading(false);
    } catch (ex) {
      setLoading(false);
      console.error('Error fetching slides:', ex);
    }
  }

  useEffect(() => {
    fetchSlides();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state while slides are fetching
  }

  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        style={{ width: "80%", height: "400px", marginTop:"5px"}}
      >
        {slideItems.length > 0 ? (
          slideItems.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide.sliderImagePath} alt={`Slide ${index + 1}`}  style={{height:"400px",width:"80%"}}/>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div>No slides available</div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}
