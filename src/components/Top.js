import React from 'react'
import styled from 'styled-components'
import appdown from "../image/appdown.svg";
import star from "../image/star.svg";

const TopWrapper = styled.div`
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

const Top = () => {
    return (
                  <TopWrapper>
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
      </TopWrapper>
    )
}

export default Top
