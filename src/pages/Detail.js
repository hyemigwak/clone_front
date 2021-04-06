import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as productActions } from "../redux/modules/products";
import DetailInfo from '../components/DetailInfo';
import TopCate from "../components/TopCate";
import TopBody from "../components/TopBody";
import TopAd from "../components/TopAd";
import Loading from '../shared/Loading';


const Detail = (props) => {
    const dispatch = useDispatch();
    const id = props.match.params.id;
    const mockProducts = useSelector((state) => state.products.product_list);
    const is_loading = useSelector((state) => state.products.is_loading);

    React.useEffect(()=>{
        dispatch(productActions.getOneProductAPI(id))
    },[])

    if(is_loading){
        return(
            <>
        <Loading />
            </>
        )
    }

    if(!mockProducts){
        return(
            <>
            No data
            </>
        )
    }

    return (
        <div style={{display:'flex',  justifyContent:' center', background:'rgb(255,255,255)' }}>
        <div style={{width: '1024px'}}>
            {id}
            <TopCate/>
            <TopBody data = {mockProducts} />
            <TopAd/>
            <DetailInfo/>
            
        </div>
        </div>
    )
}



export default Detail
