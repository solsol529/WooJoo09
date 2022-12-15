import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ResetPwd from "../components/ResetPwd";

const FindPwdPage = () =>{
  const navigate = useNavigate();

  const [changeResetPwd, setChangeResetPwd] = useState(false);

  const [findPwdName, setFindPwdName] = useState('');
  const [findPwdEmail, setFindPwdEmail] = useState('');

  const [isFindPwdName, setIsFindPwdName] = useState(false);
  const [isFindPwdEmail, setIsFindPwdEmail] = useState(false);

  const [findePwdCodeInput, setFindePwdCodeInput] = useState('');
  const [isFindPwdVerifyCode, setIsFindPwdVerifyCode] = useState(false);

  //에러 메시지
  const [findPwdNameOkMsg, setFindPwdNameOkMsg] = useState('');
  const [findPwdNameMsg, setFindPwdNameMsg] = useState('');

  const [findPwdEmailOkMsg, setFindPwdEmailOkMsg] = useState('');
  const [findPwdEmailMsg, setFindPwdEmailMsg] = useState('');

  //정규식
  const nameRegEx = /^[가-힣|a-z|A-Z|]+$/;
  const emailRegEx = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const CodeRegEx = /^[0-9]+$/;

  const onChangeFindPwdName = (e) => {
    const inputFindPwdName = e.target.value;
    setFindPwdName(inputFindPwdName);
    if(inputFindPwdName.length === 0) {
      setIsFindPwdName(false);
      setFindPwdNameMsg("가입 시 등록한 이름을 입력해주세요.");
    } else if(!nameRegEx.test(inputFindPwdName)) {
      setIsFindPwdName(false);
      setFindPwdNameMsg("이름 형식에 맞지 않습니다.");
    } else {
      setIsFindPwdName(true);
      setFindPwdNameOkMsg("");
    };
  }

  const onChangeFindPwdEmail = (e) => {
    const inputFindPwdEmail = e.target.value;
    setFindPwdEmail(inputFindPwdEmail);
    if(inputFindPwdEmail.length === 0) {
      setIsFindPwdEmail(false);
      setFindPwdEmailMsg("가입 시 등록한 이메일주소를 입력해주세요.")
    } else if(!emailRegEx.test(inputFindPwdEmail)) {
      setIsFindPwdEmail(false);
      setFindPwdEmailMsg("이메일 형식에 맞지 않습니다.");
    } else {
      setIsFindPwdEmail(true);
      setFindPwdEmailOkMsg("");
    };
  }

  //인증번호 받기 버튼
  const onClickFindPwdCode = () => {
    const findPwdCodeInput = document.getElementById('findPwdCodeInput');
    // if(isFindPwdName && isFindPwdEmail) {
    //   findPwdCodeInput.style.display = 'block';
    // }
    const nameEmailFetchData = async () => {
      try {
        const response = await api.nameEmailCk(findPwdName, findPwdEmail);
        if(response.data === true) {
          findPwdCodeInput.style.display = 'block';
          // const EmailfetchData = async () => {
          //     try {
          //       const response = await api.verifyCodeEmailSend()
          //     } catch (e) {
          //       console.log(e)
          //     }
          // }
        } else if(response.data === false) {
          setIsFindPwdEmail(false);
          setFindPwdEmailMsg("가입하신 이름과 이메일을 찾을 수 없습니다.")
        }
      } catch (e) {
          console.log(e);        
      }
    }
    nameEmailFetchData();
  }

  
  const onChangeFindPwdCodeInput = (e) => {
    const findPwdCodeInput = e.target.value;
    setFindePwdCodeInput(findPwdCodeInput);
    if(CodeRegEx.test(findPwdCodeInput)) {
      setIsFindPwdVerifyCode(true);
    }
  }

  const onClickFindPwd = () => {   
    // if(isFindPwdVerifyCode) navigate('/resetpwd');
  }

  
  return(
    <div className="wrapper">
      <Header/>
      <div className="findPwdWrapper">
        <div className="findPwd">
          {changeResetPwd && 
          <ResetPwd />}

          {!changeResetPwd &&
          <>
          <h2>비밀번호 찾기</h2>
          <div className="findPwdMain">
            <div className="findPwdSmallBox">           
              <input type="text" value={findPwdName} className="findPwdName" placeholder="이름"
              onChange={onChangeFindPwdName}></input> 
            </div>
            <div className="findPwdErrMsg">
              {!isFindPwdName && <span className="findIdNameErr">{findPwdNameMsg}</span>}
              {isFindPwdName && <span className="findIdNameOk">{findPwdNameOkMsg}</span>}
            </div>
            <div className="findPwdSmallBox">
              <input type="text" value={findPwdEmail} className="findPwdEmail" placeholder="이메일주소"
              onChange={onChangeFindPwdEmail}></input>
            </div>
            <div className="findPwdErrMsg">
              {!isFindPwdEmail && <span className="findIdEmailErr">{findPwdEmailMsg}</span>}
              {isFindPwdEmail && <span className="findIdEmailOk">{findPwdEmailOkMsg}</span>}
            </div>
            <div className="findPwdCode">
              <button id="findPwdCodeBtn" className={(isFindPwdName && isFindPwdEmail) ? 'findPwdCodeBtn' : 'notFindPwdCodeBtn'}
              onClick={onClickFindPwdCode}>인증번호 받기</button>
            </div>
            <div className="findPwdSmallBox">
              <input type="text" value={findePwdCodeInput} id="findPwdCodeInput" className="findPwdCodeInput" placeholder="인증번호 입력"
              style={{display: "none"}} onChange={onChangeFindPwdCodeInput}></input>
            </div>
          </div>
          <div>
            <button id="pwdSearchButton" className={isFindPwdVerifyCode ? 'pwdSearchOkBtn' : 'pwdSearchNotBtn'}
            onClick={isFindPwdVerifyCode ? ()=>{setChangeResetPwd(true)} : ()=>{setChangeResetPwd(false)}}>확인</button>             
          </div>
          </>
          }
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default FindPwdPage