import React from 'react'
import styled from 'styled-components'
import Cards from './Cards'

const dummies = {
    search_list:[
    {
      "pid": "150581962",
      "uid": "11990038",
      "name": "이지부스트 700 V2 테프라 270사이즈 판매합니다.",
      "price": "210000",
      "username": "열공자",
      "update_time": 1617414008,
      "profile_image": "https://assets.bunjang.co.kr/img/badges/ic_badge_certificate.png",
      "product_image": "https://media.bunjang.co.kr/product/150624159_1_1617443693_w292.jpg",
      "description": "가품시환불가능 박스, 아코탭, 속지 구성입니다.",
      "description_for_detail": "상태좋아요, 택배 이용 시 5천원 네고 가능",
      "location": "경기도 평택시 비전2동",
      "keyword": "이지부스트,270,테프라"
    }, 
    {
      "pid": "150581962",
      "uid": "11990038",
      "name": "이지부스트 700 V2 테프라 270사이즈 판매합니다.",
      "price": "210000",
      "username": "열공자",
      "update_time": 1617414008,
      "profile_image": "https://assets.bunjang.co.kr/img/badges/ic_badge_certificate.png",
      "product_image": "https://media.bunjang.co.kr/product/150624159_1_1617443693_w292.jpg",
      "description": "가품시환불가능 박스, 아코탭, 속지 구성입니다.",
      "description_for_detail": "상태좋아요, 택배 이용 시 5천원 네고 가능",
      "location": "경기도 평택시 비전2동",
      "keyword": "이지부스트,270,테프라"
    }, 
    {
      "pid": "150581962",
      "uid": "11990038",
      "name": "이지부스트 700 V2 테프라 270사이즈 판매합니다.",
      "price": "210000",
      "username": "열공자",
      "update_time": 1617414008,
      "profile_image": "https://assets.bunjang.co.kr/img/badges/ic_badge_certificate.png",
      "product_image": "https://media.bunjang.co.kr/product/150624159_1_1617443693_w292.jpg",
      "description": "가품시환불가능 박스, 아코탭, 속지 구성입니다.",
      "description_for_detail": "상태좋아요, 택배 이용 시 5천원 네고 가능",
      "location": "경기도 평택시 비전2동",
      "keyword": "이지부스트,270,테프라"
    }, 
    {
      "pid": "150581962",
      "uid": "11990038",
      "name": "이지부스트 700 V2 테프라 270사이즈 판매합니다.",
      "price": "210000",
      "username": "열공자",
      "update_time": 1617414008,
      "profile_image": "https://assets.bunjang.co.kr/img/badges/ic_badge_certificate.png",
      "product_image": "https://media.bunjang.co.kr/product/150624159_1_1617443693_w292.jpg",
      "description": "가품시환불가능 박스, 아코탭, 속지 구성입니다.",
      "description_for_detail": "상태좋아요, 택배 이용 시 5천원 네고 가능",
      "location": "경기도 평택시 비전2동",
      "keyword": "이지부스트,270,테프라"
    }, 
    {
      "pid": "150581962",
      "uid": "11990038",
      "name": "이지부스트 700 V2 테프라 270사이즈 판매합니다.",
      "price": "210000",
      "username": "열공자",
      "update_time": 1617414008,
      "profile_image": "https://assets.bunjang.co.kr/img/badges/ic_badge_certificate.png",
      "product_image": "https://media.bunjang.co.kr/product/150624159_1_1617443693_w292.jpg",
      "description": "가품시환불가능 박스, 아코탭, 속지 구성입니다.",
      "description_for_detail": "상태좋아요, 택배 이용 시 5천원 네고 가능",
      "location": "경기도 평택시 비전2동",
      "keyword": "이지부스트,270,테프라"
    }

    ]}


const Main = () => {
    return (
        <>
        <Section>
            <H2>오늘의 상품 추천</H2>
            <ItemInfos>
                <ItemContainer>
                    {dummies.search_list.map((info, idx) =><Cards data = {info} key={idx} />)}
                </ItemContainer>
            </ItemInfos>
            </Section>
        </>
    )
}

const H2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 24px;
`
const Section = styled.section`
width: 1024px;
    margin: auto;
    padding: 3.5rem 0px 1.5rem;
`

const ItemInfos = styled.div`
    position: relative;
    overflow: hidden;
`

const ItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export default Main
