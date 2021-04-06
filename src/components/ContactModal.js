import React from 'react'
import styled from "styled-components";
import xbutton from "../image/xbutton.png";
import sample6 from "../image/sample6.jpg";
import thundertalk from "../image/thundertalk.png";
import yellowstar from "../image/yellowstar.png";

const ContactModal = (props) => {
    const {open, close} = props;

    return (
        <div>
            {open? (
                <Background>
                    <ModalContainer>
                        <CloseBtn><img onClick={close} style={{width:"16px", height:"17px"}} src={xbutton} alt="닫기버튼"/></CloseBtn>
                        <Img src={sample6} alt="프로필사진"/>
                        <UsernameBox>
                            <UsernameText>3xpqu</UsernameText>
                        </UsernameBox>
                        <ContactInfo>
                            <ContactLine>
                                <ContactKey>연락가능시간</ContactKey>
                                <Time>11시~22시</Time>
                            </ContactLine>
                            <ContactLine>
                                <ContactKey>상점별점후기</ContactKey>
                                <div>
                                    <img style={{width:"20px", height:"19px"}} src={yellowstar} alt="별점"/>
                                    <img style={{width:"20px", height:"19px"}} src={yellowstar} alt="별점"/>
                                    <img style={{width:"20px", height:"19px"}} src={yellowstar} alt="별점"/>
                                    <img style={{width:"20px", height:"19px"}} src={yellowstar} alt="별점"/>
                                </div>
                            </ContactLine>
                            <ContactLineLast>
                                <ContactKey>상점연락처</ContactKey>
                                <ContactPoint>연락처비공개</ContactPoint>
                            </ContactLineLast>
                            <ThunderTalk>
                                <img style={{width:"20px", height:"19px"}} src={thundertalk} alt="번개톡"/> <BtnText>번개톡</BtnText>
                            </ThunderTalk>
                        </ContactInfo>
                    </ModalContainer>
                </Background>
            ) : null }
        </div>
    )
}

const Background = styled.div`
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.6);
`;

const ModalContainer = styled.div`
    position: absolute;
    top: calc(50vh - 100px);
    left: calc(50vw - 200px);
    background-color:rgba(255, 255, 255, 1);
    width: 430px;
    height: 335px;
    padding: 56px 30px 20px;
    box-sizing: border-box;
    position: relative;
    z-index: 3102;
    opacity:1;
`;

const CloseBtn = styled.button`
    position:absolute;
    top:20px;
    right: 20px;
    border: none;
`;

const Img = styled.img`
    position: absolute;
    top: -41px;
    left: calc(50% - 41px);
    border: 2px solid rgb(255, 255, 255);
    border-radius: 50%;
    width: 82px;
    height: 82px;
`;

const UsernameText = styled.div`
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
`;

const UsernameBox = styled.div`
    border-bottom: 1px solid rgb(238, 238, 238);
    padding-bottom: 25px;
`;

const ContactInfo = styled.div`
    margin-bottom: 5px;
`;

const ContactLine = styled.div`
    display: flex;
    border-bottom: 1px solid rgb(238, 238, 238);
    height: 48px;
    align-items: center;
`;

const ContactLineLast = styled.div`
    display: flex;
    height: 48px;
    align-items: center;
`;

const ContactKey = styled.div`
    color: rgb(136, 136, 136);
    width: 110px;
`;

const Time = styled.div`
    color: rgb(247, 47, 51);
`;

const ContactPoint = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
`;

const ThunderTalk = styled.div`
    height: 56px;
    background: rgb(249, 168, 39);
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
`;

const BtnText = styled.div`
    font-size: 16px;
    margin-left: 5px;
`;




export default ContactModal;
