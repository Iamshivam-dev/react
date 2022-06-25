import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import Img1 from "../../Images/icon-carousel-1.png";
import Img2 from "../../Images/icon-carousel-2.png";
import Img3 from "../../Images/icon-carousel-3.png";
import '../../Styles/Carousel.css'

const Carousel = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
  };

  return (
    <div className="bottom-bar">
      <Slider {...settings} className="react-slider-custom">
        <div className="slider-content">
          <img src={Img3} alt="" />
          <div>
            <p>Upgrade to cabby prime</p>
            <span>Exclusive benefits for prime customers</span>
          </div>
        </div>
        <div className="slider-content">
          <img src={Img2} alt="" />
          <div>
            <p>Register as Cabby Corporate</p>
            <span>Employee travel management service made easy</span>
          </div>
        </div>
        <div className="slider-content">
          <img src={Img1} alt="" />
          <div>
            <p>Get the Cabby Sharepass</p>
            <span>Enjoy the cheapest ride on the go!</span>
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default Carousel;
