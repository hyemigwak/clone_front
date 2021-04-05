import React from 'react'
import DetailInfo from '../components/DetailInfo';



const Detail = (props) => {
    const id = props.match.params.id;

    return (
        <div style={{display:'flex',  justifyContent:' center', background:'rgb(255,255,255)' }}>
        <div style={{width: '1024px'}}>
            {id}
            <DetailInfo/>
        </div>
        </div>
    )
}



export default Detail
