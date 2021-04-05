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
import next from ".././image/next.png";
import prev from ".././image/prev.png";




const Banner = () => {

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      >
      <ArrowLeft><img style={{width:"15px", height:"30px"}} src={prev} alt="arrowLeft"/></ArrowLeft>
      </div>
    );
  }
  
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      >
      <ArrowRight><img style={{width:"15px", height:"30px"}} src={next} alt="arrowRight"/></ArrowRight>
      </div>
    );
  }
  

    const settings = {
        dots: false,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToshow: 4,
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


const ArrowLeft = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 950px;
`;

const ArrowRight = styled.div`
  position: absolute;
  left: 5px;
  right: 1000px;
  top: 10px;
  z-index: 2;
`;

const BannerBox = styled.div`
    width: 1030px;
    height: 300px;
    margin: 0px auto 30px;
`;
const Img = styled.img`
    position: relative;
    width: 1030px;
    height: 300px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    // z-index:1;
`;



export default Banner
