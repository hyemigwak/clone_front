import React, {useCallback} from 'react';
import styled from "styled-components";
import thunderlogo from "../image/thunderlogo.png";
import { history } from "../redux/configureStore";
import {useDispatch} from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import Login from "./Login";

const Signup = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = React.useState("");
    const [pwd, setPwd] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [pwdCheck, setPwdCheck] = React.useState("");
    const onChangeusername = useCallback((e) => setUsername(e.target.value),[])
    const onChangePwd = useCallback((e) => setPwd(e.target.value),[])
    const onChangemail = useCallback((e) => setEmail(e.target.value),[])
    const onChangepwdCheck = useCallback((e) => setPwdCheck(e.target.value),[])
    
    const siteSignup = () => {

        if(username === "" || pwd === "" || email === "" || pwdCheck === "") {
            window.alert("모두 입력해주세요!");
            return;
        }
        if(pwd !== pwdCheck){
            window.alert("비밀번호가 일치하지 않습니다!");
            return;
        }
        dispatch(userActions.SignUPApi(username,pwd));
    }
    return (
        <div>
            <div>
                <LoginContainer>
                    <ContentsContainer>
                        <MainName>
                            <img style={{width:"30px", height:"38px", marginRight:"8px"}} src={thunderlogo}/>
                            <TextMain>번개장터 회원가입</TextMain>
                        </MainName>
                        <div>
                            <TextSub>ID/PW/이메일을 모두 입력해주세요!</TextSub>
                        </div>
                        <div>
                            <div>
                                <IDPW>ID</IDPW>
                                <Input placeholder="아이디를 입력해주세요!" type="text" value={username} onChange={onChangeusername}/>
                            </div>
                            <div>
                                <IDPW>E-MAIL</IDPW>
                                <Input placeholder="이메일을 입력해주세요!" type="text" value={email} onChange={onChangemail}/>
                            </div>
                            <div>
                                <IDPW>패스워드</IDPW>
                                <Input placeholder="비밀번호를 입력해주세요!" type="password" value={pwd} onChange={onChangePwd}/>
                            </div>
                            <div>
                                <IDPW>패스워드 재확인</IDPW>
                                <Input placeholder="비밀번호를 다시 입력해주세요!" type="password" value={pwdCheck} onChange={onChangepwdCheck}/>
                            </div>
                        </div>
                        <LoginBtn onClick={siteSignup}>회원가입</LoginBtn>
                    </ContentsContainer>
                </LoginContainer>
            </div>
        </div>
    )
}

const LoginContainer = styled.div`
    margin: 80px auto 80px;
    width: 300px;
    height: 500px;
    background: rgb(255, 255, 255);
    padding: 60px;
    box-shadow: rgb(0 0 0 / 10%) 0px 3px 6px 0px;
    font-size: 14px;
    color: rgb(30, 29, 41);
`;

const ContentsContainer = styled.div`
    width: 100%;
    margin:0 auto;
`;

const MainName = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
`;

const TextMain = styled.div`
    font-size: 30px;
    white-space: pre-wrap;
    line-height: 1.2;
    margin-bottom: 15px;
`;

const TextSub = styled.div`
    line-height: 1.5;
    font-size: 14px;
    margin-bottom: 40px;
    display:flex;
    text-align: center;
    justify-content: center;
`;

const Input = styled.input`
    width: 100%;
    margin-bottom: 7px;
    height: 40px;
    border: 1px solid #eeeeee;
    box-shadow: rgb(0 0 0 / 10%) 0px 3px 6px 0px;
`;

const LoginBtn = styled.button`
    margin-top: 30px;
    background: rgb(247, 47, 51);
    color: rgb(255, 255, 255);
    width: 100%;
    height: 3.5rem;
    line-height: 3.5rem;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 30px;
    text-align: center;
    vertical-align: middle;
    border:none;
`;

const IDPW = styled.div`
    font-weight: bold;
    font-size: 14px;
    color: rgb(33,33,33); 
    margin: 5px 0px 5px 5px;  
`;

export default Signup;
