import React from "react";
import styled from "styled-components";
import naver from "../image/naver.png";
import fb from "../image/fb.png";
import twitter from "../image/twitter.png";
import url from "../image/url.png";
import StoreInfo from "./StoreInfo";

const Right = (props) => {
  

return (
    <RightDiv>
    <SNSWrapper>
        <Naver>
          <img src={naver} alt="naver" />
        </Naver>
        <FB>
          <img src={fb} alt="fb" />
        </FB>
        <Twitter>
          <img src={twitter} alt="twitter" />
        </Twitter>
        <Url>
          <img src={url} alt="url" />
        </Url>
      </SNSWrapper>
    <SotreInfoContainer>
        <StoreInfoInner>
        <StoreInfo data = {props.data} />
        
        </StoreInfoInner>
        <ButtonWrapper>
        <ContactButton>연락하기</ContactButton>
        <BuyButton>바로구매</BuyButton>
        </ButtonWrapper>
    </SotreInfoContainer>
    </RightDiv>
);
};

const ButtonWrapper = styled.div`
position: absolute;
bottom: 15px;
left: 0px;
display: flex;
width: 100%;
/* padding: 16px; */
  * {
    flex: 1 1 0%;
    display: flex;
    margin-right: 10px;
    justify-content: center;
    height: 56px;
    font-size: 18px;
    align-items: center;
    font-weight: 600;
}
`;
const BuyButton = styled.button`
margin-right: 0px;
background: rgb(247, 0, 0);
border: 1px solid rgb(223, 0, 0);
color: rgb(255, 255, 255);
`;

const ContactButton = styled.button`
  background: rgb(255, 164, 37);
  border: 1px solid rgb(243, 150, 20);
  color: rgb(255, 255, 255);
`;

const StoreInfoInner = styled.div`

`

const SotreInfoContainer = styled.div`
  height: calc(100% - 50px);
  border-right: 1px solid rgb(238, 238, 238);
  padding: 0px 32px 118px;
  position: relative;
`;

const Url = styled.button`
  position: relative;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  background: rgb(126, 110, 108);
  border: none;
  img {
    width: 25px;
    height: 25px;
  }
`;
const Twitter = styled.button`
  position: relative;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  background: rgb(85, 172, 238);
  border: none;
  img {
    width: 16px;
    height: 13px;
  }
`;
const FB = styled.button`
  position: relative;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  background: rgb(59, 89, 152);
  border: none;
  img {
    width: 8px;
    height: 15px;
  }
`;
const Naver = styled.button`
  position: relative;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  background: rgb(0, 203, 47);
  border: none;
  img {
    width: 22px;
    height: 18px;
  }
`;
const SNSWrapper = styled.div`
  height: 50px;
  padding-top: 6px;
  border-bottom: 1px solid rgb(33, 33, 33);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const RightDiv = styled.div`
  width: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Right;
