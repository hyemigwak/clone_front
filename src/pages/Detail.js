import React, { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import DetailInfo from '../components/DetailInfo';
import TopCate from "../components/TopCate";
import TopBody from "../components/TopBody";
import TopAd from "../components/TopAd";
import Loading from '../shared/Loading';
import ContactModal from "../components/ContactModal";
import { actionCreators as productActions } from "../redux/modules/products";


const Detail = (props) => {
    const dispatch=useDispatch()
    const id = props.match.params.id;
    const products = useSelector((state) => state.products.product_list);
    const is_loading = useSelector((state) => state.products.is_loading);
    const products_idx = products.findIndex((p) => p.pid === Number(id));
    const post = products[products_idx];

    useEffect(()=>{
        if(post){
            return;
        }
        dispatch(productActions.getOneProductAPI(id))
    },[])

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
        <div style={{display:'flex',  justifyContent:' center', background:'rgb(255,255,255)' }}>
                {post &&

        <div style={{width: '1024px'}}>
          
            <TopCate/>
            <TopBody data = {post} />
            <TopAd/>
            <DetailInfo data = {post}/>
            <ContactModal/>
            
        </div>
}
        </div>
    )
}



export default Detail
