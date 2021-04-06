import React, {useState} from 'react';
import ContactModal from "./ContactModal";
import styled from "styled-components";
import appPoint from "../image/appPoint.png";
import minieyes from "../image/minieyes.png";
import miniheart from "../image/miniheart.png";
import minisiren from "../image/minisiren.png";
import minitime from "../image/minitime.png";
import redheart from "../image/redheart.svg";
import whiteheart from "../image/whiteheart.svg";

const TopBody = (props) => {
    
    const {name,price,product_image,location,free_shipping,tradable} = props.data
    
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
        document.body.style.overflow = "hidden";
    }

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = "unset";
    }
    
    
    return (
        <div style={{width:"1024px", height:"490px", margin:"0 auto"}}>
            <ProductInfo>
                <ImageBox>
                    <img style={{width:"428px", height:"428px"}} src={product_image} alt="이미지"/>
                </ImageBox>
                <Info>
                    <TitleInfo>
                        <Title>{name}</Title>
                            <PriceBtn>
                                <Pricing>{price}<span>원</span></Pricing>
                                <div className="Appimg"><img style={{width:"216px", height:"30px", cursor:"pointer"}} src={appPoint} alt="앱콘"/></div>
                            </PriceBtn>
                    </TitleInfo>
                    <Grayinfo>
                        <GrayLeft>
                            <GrayBox>
                                <img style={{width: "16px", height:"16px", marginRight:"3px"}} src={miniheart} alt="미니하트"/>
                                <Num>2</Num>
                            </GrayBox>
                            <GrayBox>
                                <img style={{width: "21px", height:"13px", marginRight:"3px"}} src={minieyes} alt="미니아이즈"/>
                                <Num>28</Num>
                            </GrayBox>
                            <GrayBox>
                                <img style={{width: "16px", height:"16px", marginRight:"3px"}} src={minitime} alt="미니시계"/>
                                <Num>2시간전</Num>
                            </GrayBox>
                        </GrayLeft>
                        <div>
                            <GrayBox>
                                <img style={{width: "15px", height:"15px", marginRight:"3px"}} src={minisiren} alt="미니사이렌"/>
                                <ReportBtn>신고하기</ReportBtn>
                            </GrayBox>
                        </div>
                    </Grayinfo>
                    <StateInfo>
                        <div style={{display:"flex", marginBottom:"20px"}}>
                            <ListName>상품상태</ListName>
                            <ListValue>중고</ListValue>
                        </div>
                        <div style={{display:"flex", marginBottom:"20px"}}>
                            <ListName>교환여부</ListName>
                            <ListValue>{tradable? "교환가능":"교환불가능"}</ListValue>
                        </div>
                        <div style={{display:"flex", marginBottom:"20px"}}>
                            <ListName>배송비</ListName>
                            <ListValueDeliver>{free_shipping? "배송비포함" : "배송비별도"}</ListValueDeliver>
                        </div>
                        <div style={{display:"flex", marginBottom:"34px"}}>
                            <ListName>거래지역</ListName>
                            <ListValueLocation>
                                {location}
                                <LocationCertify>지역인증</LocationCertify>
                            </ListValueLocation>
                        </div>
                    </StateInfo>
                    <ButtonInfo>
                        <Button0>
                        <img src={redheart} alt="빨간하트"/>
                            <Btngap>찜</Btngap>
                            <Btngap>2</Btngap>
                        </Button0>
                        <Button1>
                            <img src={whiteheart} alt="하얀색하트"/>
                            <Btngap>찜</Btngap>
                            <Btngap>2</Btngap>
                        </Button1>
                        <Button2 onClick={openModal}>연락하기</Button2>
                        <Button3>바로구매</Button3>
                    </ButtonInfo>
                    <ContactModal open={modalOpen} close={closeModal}/>
                </Info>
            </ProductInfo>
        </div>
    )
}

const ProductInfo = styled.div`
    display:flex;
    padding: 30px 0px;
`;

const ImageBox = styled.div`
    width: 428px;
    height: 428px;
`;

const Info = styled.div`
    width: 554px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`;

const TitleInfo = styled.div`
    margin-left: 40px;
    border-bottom: 1px solid #EEEEEE;
    width: 100%;
    height: 128px;
    padding-bottom: 5px;
`;

const Title = styled.div`
    font-size: 24px;
    margin-bottom: 18px;
    font-weight: 600;
    line-height: 1.4;
`;

const Pricing = styled.div`
    font-size: 40px;
    font-weight: 600;

    span{
        font-size: 28px;
        font-weight: 400;
    }
`;
const PriceBtn = styled.div`
    width: 554px;
    display:flex;
    justify-content: space-between;
    align-items: flex-end;
`;

const Grayinfo = styled.div`
    width: 554px;
    margin: 15px 0px 25px 40px;
    display:flex;
    justify-content: space-between;
    align-items: center;

`;

const GrayLeft = styled.div`
    display:flex;
    
    div::after {
        content:"";
        width: 1px;
        height: 12px;
        border-right: 1px solid rgb(238, 238, 238);
        margin: 0px 10px 0px 10px;
    };
    div:last-child::after {
        content:none;
    }
`;

const GrayBox = styled.div`
    display:flex;
    align-items: center;
    justify-contents: center;

`;

const ReportBtn = styled.button`
    color: rgb(204, 204, 204);
    font-size: 16px;
    display: flex;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    border: none;
`;


const Num = styled.span`
    font-size: 16px;
    color: #CCCCCC;
`;

const StateInfo = styled.div`
    width: 100%;
    margin-left: 40px;
`;

const ListName = styled.div`
    position: relative;
    color: rgb(153, 153, 153);
    font-size:14px;
    padding-left: 15px;
    width: 90px;

    ::before {
        position: absolute;
        top: 7px;
        left: 6px;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: rgb(204, 204, 204);
        content: "";
    };

`;

const ListValue = styled.div`
    color: #212121;
    font-size:14px;
`;

const ListValueDeliver = styled(ListValue)`
    color: rgb(110, 71, 238);
`;

const ListValueLocation = styled(ListValue)`
    color: rgb(98, 177, 217);
    display:flex;
`;

const LocationCertify = styled.div`
    color: rgb(98, 177, 217);
    border: 1px solid rgb(98, 177, 217);
    height: 19px;
    font-size: 11px;
    margin-left: 10px;
    text-align: center;
    padding: 0px 4px;
    border-radius: 2px;
    justify-content: center;
    height: 19px;

`;

const ButtonInfo = styled.div`
    display:flex;
    justify-content: space-evenly;
    width: 554px;
    height: 56px;
    align-items: center;
`;

const Button0 = styled.button`
    display: none;
    background: rgb(51, 51, 51);
    color: rgb(255, 255, 255);
    border: none;
    width:100%;
    cursor: pointer;
    height: 56px;
    width: 179px;
    font-size: 18px;
    font-weight: 600;
    line-height: 20.7px;
    margin: 0px 10px 0px 40px;
`;


const Button1 = styled.button`
    background: rgb(204, 204, 204);
    color: rgb(255, 255, 255);
    border: none;
    width:100%;
    cursor: pointer;
    height: 56px;
    width: 179px;
    font-size: 18px;
    font-weight: 600;
    line-height: 20.7px;
    margin: 0px 10px 0px 40px;
`;

const Button2 = styled.button`
    background: rgb(255, 164, 37);
    border: 1px solid rgb(243, 150, 20);
    color: rgb(255, 255, 255);
    width:100%;
    cursor: pointer;
    height: 56px;
    width: 179px;
    font-size: 18px;
    font-weight: 600;
    line-height: 20.7px;
    margin-right: 10px;
`;

const Button3 = styled.button`
    background: rgb(247, 0, 0);
    border: 1px solid rgb(223, 0, 0);
    color: rgb(255, 255, 255);
    width:100%;
    cursor: pointer;
    height: 56px;
    width: 179px;
    font-size: 18px;
    font-weight: 600;
    line-height: 20.7px;
`;

const Btngap = styled.span`
    margin-left: 5px;
`;

export default TopBody
