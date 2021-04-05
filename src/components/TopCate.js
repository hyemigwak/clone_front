import React from 'react'
import styled from "styled-components";
import homeIcon from "../image/homeIcon.png";
import dropdown from "../image/dropdown.png";
import dropdown_right from "../image/dropdown_right.png";

const TopCate = () => {


    return (
        <div style={{width:"1024px", margin:"0 auto"}}>
        <Cate>
            <div style={{display:"flex"}}>
                <img style={{width:"15px", height:"15px", margin:"0px 2px"}} src={homeIcon} alt="홈"/>
                <HomeText>홈</HomeText>
            </div>
            <Dropdown>
                <img style={{ width:"6px", height:"10px", margin:"0px 10px" }} src={dropdown_right} alt="오른쪽화살표"/>
                <DropdownBox>
                    <Text>남성의류</Text>
                    <img style ={{width: "10px",height:"6px", marginRight:"4px"}} src={dropdown} alt="드롭다운화살표"/>
                </DropdownBox>
            </Dropdown>
            <Dropdown>
                <img style={{ width:"6px", height:"10px", margin:"0px 10px" }} src={dropdown_right} alt="오른쪽화살표"/>
                <DropdownBox>
                    <Text>셔츠/남방</Text>
                    <img style ={{width: "10px",height:"6px", marginRight:"4px"}} src={dropdown} alt="드롭다운화살표"/>
                </DropdownBox>
            </Dropdown>
            <Dropdown>
                <img style={{ width:"6px", height:"10px", margin:"0px 10px" }} src={dropdown_right} alt="오른쪽화살표"/>
                <DropdownBox>
                    <Text>체크 셔츠</Text>
                    <img style ={{width: "10px",height:"6px", marginRight:"4px"}} src={dropdown} alt="드롭다운화살표"/>
                </DropdownBox>
            </Dropdown>
        </Cate>
        </div>
    )
}
const Cate = styled.div`
    display: flex;
    align-items: center;
    height: 78px;
    border-bottom: 1px solid #212121
`;

const HomeText = styled.div`
    font-size: 12px;
    margin: 0px 3px;
`;

const Dropdown = styled.div`
    display: flex;
    width: 180px;
    height: 28px;
    align-items: center;
`;

const DropdownBox = styled.div`
    display: flex;
    padding: 0px 4px;
    justify-content: space-between;
    width: 154px;
    align-items: center;
    height: 28px;
    border:1px solid #EEEEEE
`;

const Text = styled.div`
    display:flex;
    align-items: center;
    height: 11.5px;
    font-size: 12px;
    padding: 0px 25px 0px 10px;
`;


export default TopCate;
