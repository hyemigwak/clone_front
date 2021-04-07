import React, {useCallback} from 'react'
import { history } from "../redux/configureStore";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import thunderlogo from "../image/thunderlogo.png";

const Login = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = React.useState("");
    const [pwd, setPwd] = React.useState("");
    const onChangeUsername = useCallback((e) => setUsername(e.target.value),[])
    const onChangePwd = useCallback((e) => setPwd(e.target.value),[])

    const LogIn = () => {

        if( username ==="" || pwd === ""){
            window.alert("모두 입력해주세요")
            return;
        }
        dispatch(userActions.loginAPI(username,pwd));
        history.push("/");

    }

    return (
        <div>
            <LoginContainer>
                <ContentContainer>
                    <MainName>
                        <img style={{width:"30px", height:"38px", marginRight:"8px"}} src={thunderlogo}/>
                        <TextMain>번개장터 로그인</TextMain>
                    </MainName>
                    <div>
                        <TextSub>아이디와 패스워드를 입력해주세요!</TextSub>
                    </div>
                    <div>
                        <div>
                            <IDPW>ID</IDPW>
                            <Input placeholder="아이디를 입력해주세요!" type="text" value={username} onChange={onChangeUsername}/>
                        </div>
                        <div>
                            <IDPW>PW</IDPW>
                            <Input placeholder="비밀번호를 입력해주세요!" type="password" value={pwd} onChange={onChangePwd}/>
                        </div>
                    </div>
                        <LoginBtn onClick={LogIn}>로그인</LoginBtn>
                        <SignBtn onClick={()=>{history.push("/signup")}}>회원가입 하러가기</SignBtn>
                    </ContentContainer>
            </LoginContainer>
        </div>
    )
}

const LoginContainer = styled.div`
    margin: 80px auto 80px;
    width: 300px;
    height: 420px;
    background: rgb(255, 255, 255);
    padding: 60px;
    box-shadow: rgb(0 0 0 / 10%) 0px 3px 6px 0px;
    font-size: 14px;
    color: rgb(30, 29, 41);
`;

const ContentContainer = styled.div`
    width: 100%;
    margin: 0 auto;
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
    display: flex;
    text-align: center;
    justify-content: center;
`;

const Input = styled.input`
    width: 100%;
    height: 40px;
    margin-bottom: 7px;
    border: 1px solid #eeeeee;
    box-shadow: rgb(0 0 0 / 10%) 0px 3px 6px 0px;
`;

const LoginBtn = styled.button`
    margin-top: 30px;
    background: rgb(247, 47, 51);
    color: rgb(255, 255, 255);
    width: 100%;
    height: 3.2rem;
    line-height: 3.2rem;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 15px;
    text-align: center;
    border:none;

`;

const SignBtn = styled.button`
    margin-top: 5px;
    background: #6930c3;
    color: rgb(255, 255, 255);
    width: 100%;
    height: 3.2rem;
    line-height: 3.2rem;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
    text-align: center;
    border:none;
`;

const IDPW = styled.div`
    font-weight: bold;
    font-size: 14px;
    color: rgb(33,33,33); 
    margin: 5px 0px 5px 5px;  
`;

export default Login;
