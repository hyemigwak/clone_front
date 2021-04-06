/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Cards from './Cards'
import { actionCreators as productActions } from "../redux/modules/products";
import Loading from '../shared/Loading';

const Main = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.product_list)
  const is_loading = useSelector((state) => state.products.is_loading);

  useEffect(() => {
      if(products.length <2){
    dispatch(productActions.getProductsAPI())}
  }, [products])

  if(is_loading){
        return(
            <>
           <Loading />
            </>
        )
  }

  if(!products){
      return(
          <>
          No data
          </>
      )
  }
    return (
        <>
        <Section>
            <H2>오늘의 상품 추천</H2>
            <ItemInfos>
                <ItemContainer>
                    {products.map((info, idx) =><Cards data = {info} key={idx} />)}
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
