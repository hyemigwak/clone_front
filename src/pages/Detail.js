import React from 'react'
import DetailInfo from '../components/DetailInfo';
import TopCate from "../components/TopCate";
import TopBody from "../components/TopBody";
import TopAd from "../components/TopAd";


const Detail = (props) => {
    const id = props.match.params.id;

    return (
        <div style={{display:'flex',  justifyContent:' center', background:'rgb(255,255,255)' }}>
        <div style={{width: '1024px'}}>
            {id}
            <TopCate/>
            <TopBody/>
            <TopAd/>
            <DetailInfo/>
            
        </div>
        </div>
    )
}



export default Detail
