import React from 'react'
import styled from 'styled-components'
import Left from './Left'
import Right from './Right'

const DetailInfo = (props) => {


    return (
        <InfoDiv>
            <Left data = {props.data} />
            <Right data = {props.data} />
            <PowerLink className='Powerlink' />
        </InfoDiv>
    )
}

const PowerLink = styled.div`
display: flex;
    justify-content: center;
    background: rgb(249, 249, 249);
    padding: 40px 0px 80px;
`

const InfoDiv = styled.div`
    display: flex;
`

export default DetailInfo
