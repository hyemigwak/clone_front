/* eslint-disable jsx-a11y/img-redundant-alt */ /* eslint-disable react/jsx-no-target-blank */ /* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import styled from "styled-components";
import logo from ".././image/logo.png";
import notion from ".././image/notion.png";
import blog from ".././image/blog.png";
import facebook from ".././image/facebook.png";
import instagram from ".././image/instagram.png";

const Footer = () => {
    return (
        <>
            <BottomList>
                <List>
                    <a onClick={()=> window.open("https://m.bunjang.co.kr/customer/notice", '_blank')} >공지사항</a>
                    <a onClick={()=> window.open("https://m.bunjang.co.kr/customer/faq/1", '_blank')}>자주묻는질문</a>
                    <a onClick={()=> window.open("https://terms.bunjang.co.kr/terms/service-policy.html", '_blank')} >운영정책</a>
                    <a onClick={()=> window.open("https://m.bunjang.co.kr/qna", '_blank')}> 1:1문의사항 </a>
                    <a onClick={()=> window.open("http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1138645836", '_blank')}> 사업자정보확인</a>
                    <a onClick={()=> window.open("https://terms.bunjang.co.kr/terms/service.html", '_blank')}> 이용약관</a>
                    <a onClick={()=> window.open("https://terms.bunjang.co.kr/terms/privacy.html", '_blank')}> 개인정보처리방침</a>
                    <a onClick={()=> window.open("https://terms.bunjang.co.kr/terms/youth-policy.html", '_blank')}> 청소년보호정책</a>
                    <a onClick={()=> window.open("https://terms.bunjang.co.kr/terms/location.html", '_blank')}> 위치기반서비스 이용약관</a>
                </List>
            </BottomList>
            <div style={{width:"1024px", margin: "30px auto 0px"}}>    
                <Container>
                    <div>
                        <div style={{display:"flex", alignItems:"center"}}>
                            <img style={{height: "24px", marginRight:"16px"}} src={logo} alt="bunjang-logo"/>
                            <div style={{display:"flex"}}>
                                <a style={{textDecoration:"none"}} target="_blank" href="https://www.notion.so/BUNJANG-35a8c66ae6ce4ac187625c297925ae96">
                                <img style={{width: "16px", marginRight:"5px"}} src={notion} alt="notion-image"/>
                                <Text>회사소개</Text></a>
                            </div>
                        </div>
                        <div style ={{marginTop: "5px"}}>
                            <Text>누구나, 무엇이든 쉽고 편하고 안전하게 거래하는 세상을 꿈꾸고 있습니다.</Text>
                        </div>
                    </div>
                    <div>
                        <a style={{textDecoration:"none"}} target="_blank" href="https://www.facebook.com/likebunjang"><img style={{width:"24px", height:"24px", marginRight:"10px"}} src={facebook} alt="facebook-logo"/></a>
                        <a style={{textDecoration:"none"}} target="_blank" href="https://blog.naver.com/bunjang1"><img style={{width:"24px", height:"24px", marginRight:"10px"}} src={blog} alt="blog-logo"/></a>
                        <a style={{textDecoration:"none"}} target="_blank" href="https://www.instagram.com/bunjang_daily/"><img style={{width:"24px", height:"24px"}} src={instagram} alt="instagram-logo"/></a>
                    </div>
                </Container>
                <CompanyInfo>
                    대표이사: 이재후  |  개인정보보호담당자: 이동주  |  주소: 서울특별시 서초구 서초대로38길 12 마제스타시티 타워2 지하1층
                    <br/>사업자등록번호: 113-86-45836 <br/>
                    통신판매업신고: 2019-서울서초-1126 <br/>
                    호스팅서비스 제공자: Amazon Web Services (AWS)
                    <br/><br/>
                    고객/판매자센터: 1670-2910  |  FAX: 02-598-8241 <br/>
                    운영시간: 전화문의: 9시~18시(주말/공휴일 제외)  |  1:1문의: 9시~18시<br/>
                    ※ 점심시간 12~13시<br/>
                    E-MAIL: help@bunjang.co.kr <br/>
                    <br/>
                    “번개장터_컨시어지” 상점의 판매상품을 제외한 모든 상품들에 대하여, 번개장터㈜는 통신판매중개자로서 중고거래마켓 번개장터의 거래 당사자가 아니며, 입점판매자가 등록한 상품정보 및 거래에 대해 책임을 지지 않습니다.<br/>
                    <br/><br/>
                    <span style={{fontWeight:"bold"}}>우리은행 채무지급보증 안내</span><br/>
                    번개장터(주)는 “번개장터_컨시어지” 상점이 판매한 상품에 한해, 고객님이 현금 결제한 금액에 대해 우리은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다.
                    <br/><a onClick={() => window.open("https://terms.bunjang.co.kr/terms/wooriguarantee.html", '_blank')} ><span style={{cursor:"pointer", textDecoration:"underline"}}>서비스 가입사실 확인</span></a>
                    <br/><br/>
                    Copyright ⓒ Bungaejangter Inc. All rights reserved.
                    
                </CompanyInfo>
            </div>
        </>
    )
}

const BottomList = styled.div`
    border-top: 1px solid rgb(238,238,238); 
    border-bottom: 1px solid rgb(238,238,238);
    width: 100%;
    height: 66px;

`;

const List = styled.div`
    margin: 22px auto;
    width: 1024px;
    color: #4D4D4D;
    font-size: 13px;
    a::after {
        margin: 0px 15px 0px 15px;
        content:"|";
    }
    a:last-child::after{
        content:"";
    }
`;

const Container = styled.div`
    display:flex;
    justify-content: space-between;
    margin-bottom: 36px;
    align-item: center;
`;

const CompanyInfo = styled.div`
    color: #999999;
    font-size: 13px;
`;

const Text = styled.span`
    size: 14px;
    color: #212121;
`;

export default Footer
