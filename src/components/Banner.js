import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slick from "react-slick";
import banner1 from ".././image/banner1.jpg";
import banner2 from ".././image/banner2.jpg";
import banner3 from ".././image/banner3.jpg";
import banner4 from ".././image/banner4.jpg";
import banner5 from ".././image/banner5.jpg";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }
  
const Banner = () => {

    const settings = {
        dots: false,
        arrows: true,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToshow: 1,
        slidesToScroll: 1,
    };

    return (
        <BannerBox>
            <Slick {...settings}>
                <div><Img src={banner1}/></div>
                <div><Img src={banner2}/></div>
                <div><Img src={banner3}/></div>
                <div><Img src={banner4}/></div>
                <div><Img src={banner5}/></div>
            </Slick>
        </BannerBox>
    );
}

const Arrows = styled.button`
    left: 3% !important;
    z-index: 1;
    color: white;
`;

const BannerBox = styled.div`
    width: 1030px;
    height: 300px;
    margin: 20px auto 30px;
`;
const Img = styled.img`
    width: 1030px;
    height: 300px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;



export default Banner
