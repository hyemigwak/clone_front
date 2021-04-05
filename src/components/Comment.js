import React from 'react'
import styled from 'styled-components'
import comment from "../image/comment.png";
import report from "../image/report.png";
import bunjang from "../image/bunjang.jpg";

const Comment = () => {
    return (
        <CommentDiv>
            <ImageProfileWrapper>
                    <img src={bunjang} alt="logo"/>
            </ImageProfileWrapper>
            <CommentWrapper>
            <CommentHeader>
                <UserName>
                    번장알림센터
                </UserName>
                <Time>
                    0초 전
                </Time>
            </CommentHeader>
            <CommentContent>
            [공지글] 안전거래를 위한 번개장터만의 휴대폰/계좌조회 서비스가 출시되었습니다. http://bit.ly/2j0Mc7G
            </CommentContent>
            <ReportWrapper>
                <CommentReport>
                    <img src={comment} alt="comment"/>
                </CommentReport>
                <CommentReport>
                    <img src={report} alt="report"/>
                </CommentReport>
            </ReportWrapper>
            <Blank />
            </CommentWrapper>
        </CommentDiv>
    )
}


const Blank = styled.div`
    padding: 50px 0px;
`
const ImageProfileWrapper = styled.a`
    display: block;
    margin-right: 15px;
    img{
        border-radius: 50%;
        width: 48px;
        height: 48px;
    }
`

const CommentReport = styled.div`
    color: rgb(136, 136, 136);
    font-size: 13px;
    display: flex;
    align-items: unset;
    margin-right: 25px;
    position: relative;
    cursor: pointer;
    img{
        margin-right: 4px;
        width: 17px;
        height: 14px;
    }
    &::after{
        content: "";
    width: 1px;
    height: 13px;
    position: absolute;
    border-right: 1px solid rgb(238, 238, 238);
    top: 1px;
    right: -14px;
    }
`

const ReportWrapper = styled.div`
    display: flex;
    margin-bottom: 20px;
`

const CommentContent = styled.div`
margin-bottom: 20px;
    line-height: 1.5;
    white-space: pre-wrap;
`
const CommentWrapper = styled.div`
width: 100%;
    border-bottom: 1px solid rgb(238, 238, 238);

`

const CommentDiv = styled.div`
 
    display: flex;
    width: 100%;
`
const CommentHeader = styled.div`
display: flex;
    width: 100%;
    justify-content: space-between;
    color: rgb(136, 136, 136);
    margin-bottom: 10px;
    align-items: center;
`
const UserName = styled.div`

`
const Time = styled.div`
font-size: 13px;
    color: rgb(204, 204, 204);
`

export default Comment
