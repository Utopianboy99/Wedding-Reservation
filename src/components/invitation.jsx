import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./invitation.css"; // Ensure this file exists

const images = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg",
  "/7.jpg",
  "/8.jpg",
  "/9.jpg",
  "/10.jpg",
];

const Invitation = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countdown = setInterval(() => {
      const targetDate = new Date("August 23, 2025 00:00:00").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(countdown);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="view-width">
      <div className="group1">
        <div className="img one"></div>
        <div className="img two"></div>
      </div>
      <div className="rightTopText">
        <h2>
          Your presence has been a gift to our
          journey,and we'd be honered to celebrate
          this milestone with you!
        </h2>
      </div>
      <div className="swiper-block">
        <div className="black-line"></div>
        <Swiper
          modules={[Autoplay, Navigation]} // Ensure all necessary modules are included
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={false} // Changed to true so navigation buttons appear
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="vertLine"></div>
              <img src={image} alt={`Slide ${index + 1}`} className="slide-image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="title">
        <h1>
          10th
          <br />
          <span className="span">ANNIVERSERY</span>
        </h1>
      </div>

      <div className="info">
        <div className="image">
          {/* <img src="box-img.jpg" alt="" width='120' /> */}
        </div>
        <h1>CASIMIR & CYNTHIA</h1>
        <h1>TSHIKOMBELA</h1>
        <p>Join us as we renew our vows and toast to TEN beautiful years of marriage.</p>
      </div>

      <div className="time-reg">
      </div>

      <div className="text-info">
        <div className="text">
          <h5 className="head-text">DATE: AUGUST 23, 2025 </h5>
          <p className="more-info">
            129 De Villiers street, Corner Van Hulstyen St, Kenilworth, Johannesburg South, 2000
          </p>
        </div>
      </div>
      <br />

      <div className="count-down-block">
        <br />
        <div className="countdown">
          <span>{timeLeft.days}D</span> :
          <span>{timeLeft.hours}H</span> :
          <span>{timeLeft.minutes}M</span> :
          <span>{timeLeft.seconds}S</span>
        </div>
        <br />

      </div>
      <br />
      <button><a href="https://wa.me/27651889112?text=Hi%20☺%0AI%20would%20like%20to%20reserve%20a%20seat%20at%20your%20wedding%20anniversary%20❤%0AMy%20name%20is%20" className="btn"  >RESERVE A SEAT</a></button>
      <br />
      <p className="frech" >"CLIQUEz CI-DESSUS POUR RESERVER VOTRE PLACE"</p>
    </div>
  );
};

export default Invitation;
