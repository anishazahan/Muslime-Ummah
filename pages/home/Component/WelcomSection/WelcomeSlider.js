import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import img1 from "../../../../public/img/welcomeImg.jpg";
import img2 from "../../../../public/img/welcomeImg2.jpg";
import img3 from "../../../../public/img/welcomeImg3.jpg";
import img4 from "../../../../public/img/welcomeImg4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const WelcomeSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        // navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={"https://i.ibb.co/YjcWGM2/welcome-Img.webp"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://i.ibb.co/B6N9hzK/welcome-Img2.webp"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://i.ibb.co/kDh6sMt/welcome-Img3.webp"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://i.ibb.co/mqJpj31/welcome-Img4.webp"} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onClick={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={"https://i.ibb.co/YjcWGM2/welcome-Img.webp"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://i.ibb.co/B6N9hzK/welcome-Img2.webp"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://i.ibb.co/kDh6sMt/welcome-Img3.webp"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://i.ibb.co/mqJpj31/welcome-Img4.webp"} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default WelcomeSlider;
