import React, { useState } from "react";
import Slider from "react-slick";
import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
  bannerImgFour,
} from "../../assets";
const Banner = () => {
  const [docActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div className="">
        <ul className="sm:flex items-center justify-around hidden"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === docActive
            ? {
                width: "30px",
                height: "30px",
                color: "blue",
                border: "1px solid #f3a847",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                background: "#131921",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                height: "30px",
                color: "blue",
                border: "1px solid white",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                background: "#232f3e",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        {i + 1}
      </div>
    ),
  };
  return (
    <div className="w-full ">
      <div className="w-full h-full relative top-[121px] md:top-[62px] lg:top-[75px]">
        <Slider {...settings}>
          <div>
            <img src={bannerImgOne} alt="bannerImgOne" />
          </div>

          <div>
            <img src={bannerImgTwo} alt="bannerImgTwo" />
          </div>
          <div>
            <img src={bannerImgThree} alt="bannerImgThree" />
          </div>
          <div>
            <img src={bannerImgFour} alt="bannerImgFour" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
