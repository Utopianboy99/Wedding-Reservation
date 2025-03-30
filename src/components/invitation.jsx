import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./invitation.css"; // Ensure this file exists

const images = [
  "/pic1.png",
  "/pic2.png",
  "/pic3.png",
  "/pic4.png",
  "/pic5.png",
  "/pic6.png",
  "/pic7.png",
  "/pic8.png",
  "/pic9.png",
  "/pic10.png"
];

const Invitation = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countdown = setInterval(() => {
      const targetDate = new Date("April 26, 2025 00:00:00").getTime();
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
            <img src={image} alt={`Slide ${index + 1}`} className="slide-image" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="title">
  
      </div>

      <div className="info"></div>

      <div className="time-reg">
        <img src="/info-pic.jpg" alt="info-pic" id="info-pic" />
      </div>

      <div className="text-info">
         <div className="text1">
          <h5 className="head-text">THANKS GIVING SERVICE </h5>
          <p className="more-info">12:30 - 14:00</p>
          <p className="more-info">THEME : ALL WHITE</p>
        </div>
        
        <div className="text2">
          <h5 className="head-text">DINNER</h5>
          <p className="more-info">17:00 - 21:00</p>
          <p className="more-info">THEME : BLACK & GOLD</p>
        </div> 
      </div>
        <br />
      <div className="address">
        <p>ADDRESS: 8 ALBERT STR TOWNSVIEW </p>
        <br id="br" />
        <p>(ROSETTENVILLE BAPTIST CHURCH)</p>
      </div>

      <div className="count-down-block">
        <br />
        <div className="countdown">
          <span>{timeLeft.days}D</span> :
          <span>{timeLeft.hours}H</span> :
          <span>{timeLeft.minutes}M</span> :
          <span>{timeLeft.seconds}S</span>
        </div>
        <br />
        <h3 className="countdown-title">TO OUR ANNIVERSARY!</h3>

      </div>
      <br />
      <button><a href="https://wa.me/+27729628115?text=Hi😃%2C%20I%20would%20like%20to%20reserve%20a%20seat%20at%20your%20wedding%20anniversary%2C%20my%20name%20is%20" className="btn"  >CLICK TO RESERVE <br /> A SEAT</a></button>
      <br />
      <p className="frech" >"CLIQUEz CI-DESSUS POUR RESERVER VOTRE PLACE"</p>
    </div>
  );
};

export default Invitation;
