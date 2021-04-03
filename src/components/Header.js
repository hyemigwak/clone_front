import React from "react";
import styled from "styled-components";
import appdown from "../image/appdown.svg";
import star from "../image/star.svg";
import header_logo from "../image/header-logo.svg";
import search from "../image/search.png";
import talk from "../image/talk.png";
import mystore from "../image/mystore.png";
import sell from "../image/sell.png";
import hbg from "../image/hbg.png";
import arrowRight from "../image/arrowRight.png";

const Top = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(238, 238, 238);
`;
const TopContainer = styled.div`
  width: 1024px;
  display: flex;
  justify-content: space-between;
`;
const TopMenu = styled.div`
  display: flex;
  flex-shrink: 0;
`;
const StyledA = styled.a`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: rgb(102, 102, 102);
  padding: 0 15px;
  position: relative;
  line-height: 1.4;
  text-decoration: none;
  cursor: pointer;
  img {
    margin-right: 5px;
    vertical-align: ceter;
    border-style: none;
  }
`;
const TopButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: rgb(102, 102, 102);
  padding: 0 15px;
  position: relative;
  line-height: 1.4;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  appearance: none;
  border-color: none;
  border: none;
  &:hover,
  :focus {
    outline: none;
  }
  img {
    margin-right: 5px;
    vertical-align: ceter;
    border-style: none;
  }
`;
const MainHeader = styled.div`
  position: sticky;
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 35px;
  background: rgb(255, 255, 255);
  z-index: 10;
  border-bottom: 1px solid rgb(238, 238, 238);
  top: 0px;
  left: 0px;
`;
const MainHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1024px;
`;
const MainHeaderTop = styled.div`
  display: flex;
  align-items: center;
  width: 1024px;
  height: 40px;
`;
const LogoA = styled.a`
  margin-right: 100px;
  width: 136px;
  display: flex;
  align-items: center;
  img {
    vertical-align: bottom;
  }
`;
const MainHeaderMiddle = styled.div`
  border: 2px solid rgb(247, 47, 51);
  width: 460px;
  height: 40px;
  box-sizing: border-box;
  position: relative;
`;
const MainHeaderMiddleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 15px;
  box-sizing: border-box;
  input {
    color: rgb(102, 102, 102);
    flex-grow: 1;
    appearance: none;
    border: none;
    &:hover,
    :focus {
      outline: none;
    }
  }
`;
const SearchA = styled.a`
  color: rgb(33, 33, 33);
  text-decoration: none;
  cursor: pointer;
  img {
    vertical-align: bottom;
    width: 16px;
    height: 16px;
  }
`;
const MainHeaderRight = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  flex-grow: 1;
`;
const TalkButton = styled.button`
  margin-left: 30px;
  display: flex;
  align-items: center;
  position: relative;
  border: none;
  background: #fff;
  &:hover,
  :focus {
    outline: none;
  }
  img {
    margin-right: 5px;
    vertical-align: bottom;
    width: 23px;
    height: 24px;
    background-color: transparent;
  }
`;
const HeaderRightA = styled.a`
  margin-left: 30px;
  display: flex;
  align-items: center;
  position: relative;
  img {
    width: 23px;
    height: 24px;
    margin-right: 5px;
  }
`;
const MainHeaderBottom = styled.div`
    display: flex;
    align-items: center;
    height: 70px;
`
const Hambuger = styled.div`
margin-right: 20px;
    position: relative;
    img{
        width: 20px;
        height: 16px;
    }
`
const SellerInfoA = styled.a`
    display: flex;
    align-items: baseline;
    margin: 10px;
    line-height: 1.5;
    height: 21px;
    box-sizing: border-box;
    border-bottom: 1px solid transparent;
    img{
        width: 6px;
        height: 9px;
        margin-left: 5px;
    }
`
const Header = () => {
  return (
    <div>
      <Top>
        <TopContainer>
          <TopMenu>
            <StyledA>
              <img src={appdown} alt="ddd" />
              앱다운로드
            </StyledA>
            <TopButton>
              <img src={star} alt="favorite" />
              즐겨찾기
            </TopButton>
          </TopMenu>
          <TopMenu>
            <TopButton>로그인/회원가입</TopButton>
            <TopButton>내상점</TopButton>
          </TopMenu>
        </TopContainer>
      </Top>
      <MainHeader>
        <MainHeaderContainer>
          <MainHeaderTop>
            <LogoA>
              <img src={header_logo} alt="logo" />
            </LogoA>
            <MainHeaderMiddle>
              <MainHeaderMiddleContainer>
                <input type="text" placeholder="상품명, 지역명, @상점명 입력" />
                <SearchA>
                  <img src={search} alt="search" />
                </SearchA>
              </MainHeaderMiddleContainer>
            </MainHeaderMiddle>
            <MainHeaderRight>
              <TalkButton>
                <img src={talk} alt="talk" />
                번개톡
              </TalkButton>
              <HeaderRightA>
                <img src={mystore} alt="mystore" />
                내상점
              </HeaderRightA>
              <HeaderRightA>
                <img src={sell} alt="mystore" />
                판매하기
              </HeaderRightA>
            </MainHeaderRight>
          </MainHeaderTop>
        <MainHeaderBottom>
                <Hambuger>
                    <img src={hbg} alt="menu"/>
                </Hambuger>
                <SellerInfoA>
                    <b>번개장터 판매자센터</b>
                    <img src={arrowRight} alt="arrowRight"/>
                </SellerInfoA>
        </MainHeaderBottom>
        </MainHeaderContainer>
      </MainHeader>
    </div>
  );
};

export default Header;
