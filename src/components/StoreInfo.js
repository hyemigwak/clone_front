import React from 'react'
import styled from 'styled-components'
import seller_profile from '../image/seller_profile.png'
import follow from '../image/follow.png'
const StoreInfo = (props) => {

    const {user_name} = props.data

    return (
        <>
        <StoreInfoTitle>
            상점정보
        </StoreInfoTitle>
        <StoreInfoWapper>
            <SellerInfoWrapper>
                <SellerProfile>
                    <img src={seller_profile} alt="seller"/>
                </SellerProfile>
                <SellerInfo>
                    <SellerName>{user_name}</SellerName>
                    <SellerMoreInfo>
                        <MoreInfo>상품1</MoreInfo>
                        <MoreInfo>팔로워0</MoreInfo>
                    </SellerMoreInfo>
                </SellerInfo>
            </SellerInfoWrapper>
            <FollowButton>
                        <img src={follow} alt="follow"/>
                        팔로우
                    </FollowButton>

        </StoreInfoWapper>
            
        </>
    )
}

const FollowButton = styled.button`
width: 100%;
    height: 32px;
    border: 1px solid rgb(238, 238, 238);
    color: rgb(136, 136, 136);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    border-radius: 2px;
img{
    margin-right: 3px;
    width: 20px;
    height: 14px;
}
`

const MoreInfo = styled.a`
font-size: 13px;
    color: rgb(153, 153, 153);
    :first-child{
        margin-right: 17px;
    position: relative;
    ::after{
    content: "";
    position: absolute;
    top: 1px;
    right: -8px;
    width: 1px;
    height: 12px;
    border-right: 1px solid rgb(204, 204, 204);
    }
    }
`

const SellerMoreInfo = styled.div`
    display: flex;
`
const SellerName = styled.div`
  display: block;
    margin: 4px 0px 11px;
`
const SellerInfo = styled.a`
  
`

const SellerProfile = styled.a`
    margin-right: 16px;
    img{
        border-radius: 50%;
        width: 48px;
        height: 48px;
    }
`

const SellerInfoWrapper = styled.div`
        display: flex;
    margin-top: 20px;
    margin-bottom: 16px;
`

const StoreInfoWapper = styled.div`
    padding: 0px 10px;
`

const StoreInfoTitle = styled.div`
    font-size: 18px;
    padding: 48px 0px 16px;
    border-bottom: 1px solid rgb(238, 238, 238);
`

export default StoreInfo
