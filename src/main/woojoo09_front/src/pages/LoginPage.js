import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const LoginPage = () =>{
  const [inputLoginId, setInputLoginId] = useState('');
  const [inputLoginPwd, setInputLogimPwd] = useState('');

  //�����޽���
  const [loginIdMsg, setLoginIdMsg] = useState('');
  const [loginPwdMsg, setLoginPwdMsg] = useState('');

  const onClickGoToTermAgree = () => {
    window.location.replace("/termagree")
  }

  const onClickLogin = () => {
     
  }


  return(
    <div className="wrapper">
      <Header/>
      <div className="loginWrapper">     
        <div className="login">
          <h2>로그인</h2>
          <div className="loginMain">
            <div className="loginSmallBox">
              <input type="text" className="loginInput" placeholder="아이디"></input>
            </div>
            <div className="loginSmallBox">
              <input type="password" className="pwdInput" placeholder="비밀번호"></input>
            </div>   
            <div className="IdPwdSearchButtonBox"> 
            <Link to="/findid" className="IdPwdSearchButton">아이디 찾기</Link>
            <Link to="/findpwd" className="IdPwdSearchButton">비밀번호 찾기</Link>            
            </div>
              <button className="loginButton" onClick={onClickLogin}>로그인하기</button>           
            <div>
              <button className="RegButton" onClick={onClickGoToTermAgree}>회원가입</button>
            </div>
            <div>         
              <button className="kakaoLogin">카톡로그인</button>
            </div> 
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default LoginPage