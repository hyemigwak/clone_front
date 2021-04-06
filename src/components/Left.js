import React from "react";
import styled from "styled-components";
import locationIcon from "../image/locationIcon.png";
import category from "../image/category.png";
import tag from "../image/tag.png";
import confirm from "../image/confirm.png";
import Comment from "./Comment";
const Left = (props) => {

  const {description,location} = props.data


return (
    <LeftDiv>
    <InfoTab>
        <ProductInfoButton>
          상품정보
          <span />
        </ProductInfoButton>
        <ProductAskButton>
          상품문의
          <span />
        </ProductAskButton>
      </InfoTab>
    <Info>
        <ProductInfo>
        <Title>상품정보</Title>
        <ProductInfoBody>
            <Blank />
            <ProductInfoContent>
              {description} 
            </ProductInfoContent>
            <ProductInfoMore>
            <Location>
                <ProductInfoMoreTtitle>
                <img src={locationIcon} alt="location" />
                거래지역
                </ProductInfoMoreTtitle>
                <ProductInfoMoreDetail>
                <span>{location}</span>
                </ProductInfoMoreDetail>
            </Location>
            <Category>
                <ProductInfoMoreTtitle>
                <img src={category} alt="category" />
                카테고리
                </ProductInfoMoreTtitle>
                <ProductInfoMoreDetail>
                <span>기타 여성가방</span>
                </ProductInfoMoreDetail>
            </Category>
            <Tag>
                <ProductInfoMoreTtitle>
                <img src={tag} alt="tag" />
                상품태그
                </ProductInfoMoreTtitle>
                <ProductInfoMoreDetail>
                <span></span>
                </ProductInfoMoreDetail>
            </Tag>
            </ProductInfoMore>
        </ProductInfoBody>
        </ProductInfo>
        <ProductAsk>
            <ProductAskTitle>
                상품문의 
                <span>0</span>
            </ProductAskTitle>
            <ProductAskInputArea>
                    <ProductAskInputDiv>
                        <textarea placeholder="상품문의 입력" />
                    </ProductAskInputDiv>
                    <ProductAskInputConfirm>
                        <InputLength>0 / 100</InputLength>
                        <ConfirmButton>
                            <img src={confirm} alt="confirm"/>
                            등록
                            </ConfirmButton>
                    </ProductAskInputConfirm>
            </ProductAskInputArea>
            </ProductAsk>
            <ProductAskList>
                    <Comments>
                        <Comment />
                    </Comments>
            </ProductAskList>
    </Info>
    </LeftDiv>
);
};


const Comments = styled.div`
    padding-top: 25px;
`

const ProductAskList = styled.div`
    margin-top: 10px;
`
const ConfirmButton = styled.button`
    border: 1px solid rgb(238, 238, 238);
    height: 32px;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    font-size: 13px;
    color: rgb(136, 136, 136);
    img{
        margin-right: 4px;
        width:15px;
        height: 16px;
    }
`

const InputLength = styled.div`
    margin-left: 10px;
    font-size: 12px;
    color: rgb(136, 136, 136);
`

const ProductAskInputConfirm = styled.div`
    display: flex;
    width: 95%;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;

`
const ProductAskInputDiv = styled.div`
    width: 94%;
    padding: 20px;
    height: 80px;
    border-bottom: 1px solid rgb(238, 238, 238);
    textarea{
        width: 95%;
    height: 100%;
    resize: none;
    font-size: 13px;
    line-height: 1.5;
    }
`

const ProductAskInputArea = styled.div`
    border-right: 1px solid rgb(238, 238, 238);
    border-bottom: 1px solid rgb(238, 238, 238);
    border-left: 1px solid rgb(238, 238, 238);
`

const ProductAsk = styled.div`
  margin-top: 10px;
`;
const ProductAskTitle = styled.div`
    padding: 60px 0px 15px;
    font-size: 18px;
    border-bottom: 1px solid rgb(238, 238, 238);
    span{
        color: rgb(247, 47, 51)
    }
`
const LeftDiv = styled.div`
  flex: 1 1 0%;
`;
const InfoTab = styled.div`
  display: flex;
  height: 50px;
`;

const ProductInfoButton = styled.button`
  border-left: 1px solid rgb(33, 33, 33);
  flex: 1 1 0%;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 1px solid rgb(33, 33, 33);
  border-right: 1px solid rgb(33, 33, 33);
  border-bottom: 1px solid rgb(255, 255, 255);
  background: rgb(255, 255, 255);
  color: rgb(33, 33, 33);
  font-weight: 600;
  span {
    margin-left: 10px;
  }
`;
const ProductAskButton = styled.button`
  flex: 1 1 0%;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 1px solid rgb(238, 238, 238);
  border-right: 1px solid rgb(238, 238, 238);
  border-bottom: 1px solid rgb(33, 33, 33);
  background: rgb(250, 250, 250);
  color: rgb(136, 136, 136);

  span {
    margin-left: 10px;
  }
`;
const Info = styled.div`
  padding-right: 30px;
  border-right: 1px solid rgb(238, 238, 238);
  height: calc(100% - 50px);
`;
const ProductInfo = styled.div``;
const Title = styled.div`
  font-size: 18px;
  padding: 48px 0px 16px;
  border-bottom: 1px solid rgb(238, 238, 238);
`;
const ProductInfoBody = styled.div``;
const Blank = styled.div`
  margin-top: 30px;
`;
const ProductInfoContent = styled.div`
  white-space: pre-wrap;
  margin: 40px 0px;
  line-height: 1.5;
`;
const ProductInfoMore = styled.div`
  padding: 20px 0px;
  border-top: 1px solid rgb(238, 238, 238);
  border-bottom: 1px solid rgb(238, 238, 238);
  display: flex;
`;
const Location = styled.div`
  width: 221px;
  border-right: 1px solid rgb(238, 238, 238);
`;
const ProductInfoMoreTtitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  font-size: 13px;
  color: rgb(178, 178, 178);
  img {
    margin-right: 7px;
  }
`;
const ProductInfoMoreDetail = styled.div`
  font-size: 13px;
  color: rgb(102, 102, 102);
  padding: 0px 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  line-height: 1.5;
  min-height: 19px;
`;

const Category = styled.div`
  width: 221px;
  border-right: 1px solid rgb(238, 238, 238);
`;
const Tag = styled.div`
  border-right: 0px;
  width: 221px;
`;
export default Left;
