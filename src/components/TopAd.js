import React from 'react'
import styled from "styled-components";
import sample1 from "../image/sample1.jpg";
import sample2 from "../image/sample2.jpg";
import sample3 from "../image/sample3.jpg";
import sample4 from "../image/sample4.jpg";
import sample5 from "../image/sample5.jpg";
import sample6 from "../image/sample6.jpg";
import prevblack from "../image/prevblack.png";
import nextblack from "../image/nextblack.png";
import information from "../image/information.svg";

const TopAd = () => {
    return (
        <div>
            <Container>
                <RelatedProduct>
                    <RelatedLeft>
                        <RelatedText>연관상품</RelatedText>
                        <AdIcon><div>AD</div><img src={information} alt='info'/></AdIcon>
                    </RelatedLeft>
                    <RelatedRightText>1/4</RelatedRightText>
                </RelatedProduct>
                <ImgContainer>
                    <Buttonprev><img style={{width:"9px", height:"14px"}} src={prevblack} alt="이전페이지"/></Buttonprev>
                    <ImageBox1>
                        <img style={{width:"155px",height:"159px"}}src={sample1} alt='info'/>
                        <ImageText>3세 여아 외출복 세트</ImageText>
                    </ImageBox1>
                    <ImageBox>
                        <img style={{width:"155px",height:"159px"}}src={sample2} alt='info'/>
                        <ImageText>남자 기본 슬립온 블랙</ImageText>
                    </ImageBox>
                    <ImageBox>
                        <img style={{width:"155px",height:"159px"}}src={sample3} alt='info'/>
                        <ImageText>유아 인형 거의 새 상품</ImageText>
                    </ImageBox>
                    <ImageBox>
                        <img style={{width:"155px",height:"159px"}}src={sample4} alt='info'/>
                        <ImageText>아디다스 슈퍼스타 160</ImageText>
                    </ImageBox>
                    <ImageBox>
                        <img style={{width:"155px",height:"159px"}}src={sample5} alt='info'/>
                        <ImageText>짱구 피카츄 외 인형 팔아요</ImageText>
                    </ImageBox>
                    <ImageBox>
                        <img style={{width:"155px",height:"159px"}}src={sample6} alt='info'/>
                        <ImageText>제주도 에디션 라이언 인형</ImageText>
                    </ImageBox>
                    <Buttonnext><img style={{width:"9px", height:"14px"}} src={nextblack} alt="다음페이지"/></Buttonnext>
                </ImgContainer>

            </Container>
        </div>
    )
};

const Container = styled.div`
    width:1024px;
    margin: 0 auto 100px;
    height:235px;
`;

const RelatedProduct = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

const RelatedText = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: #212121;
`;

const RelatedRightText = styled(RelatedText)`
    font-size: 16px;
    font-weight: 500;
`;

const AdIcon = styled.div`
    border: 1px solid rgb(195, 194, 204);
    border-radius: 12px;
    margin-left: 4px;
    padding: 0px 6px;
    display:flex;
    justify-content: center;
    align-items: center;

    div{
        font-size: 14px;
        color: rgb(155, 153, 169);
        margin-right: 1px;
    }
`;

const RelatedLeft = styled.div`
    display:flex;
`;

const ImgContainer = styled.div`
    width: 1024px;
    margin: 0px auto 100px;
    display:flex;
    justify-content:space-evenly;
`;

const ImageBox = styled.div`
    width: 159px;
    margin-left: 16px;
`;

const ImageBox1 = styled(ImageBox)`
    margin-left: 0px;
`;

const ImageText = styled.div`
    margin-top: 5px;
    width: 100%;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    line-height: 1.4;
    font-size: 13px;
`;

const Buttonprev = styled.button`
    width: 50px;
    padding: 20px;
    height: 50px;
    background: rgb(255, 255, 255);
    opacity: 0.6;
    display: flex;
    justify-content: center;
    align-items: center;
    position:relative;
    top:60px;
    left: 48px;
    border:none;
`;

const Buttonnext = styled.button`
    width: 50px;
    height: 50px;
    padding: 20px;
    background: rgb(255, 255, 255);
    opacity: 0.6;
    display: flex;
    justify-content: center;
    align-items: center;
    position:relative;
    top: 60px;
    right: 48px;
    border:none;
`;





export default TopAd
