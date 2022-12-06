import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const FindPwdPage = () =>{
  const [findPwdName, setFindPwdName] = useState('');
  const [findPwdEmail, setFindPwdEmail] = useState('');

  const [isFindPwdName, setIsFindPwdName] = useState(false);
  const [isFindPwdEmail, setIsFindPwdEmail] = useState(false);

  //���� �޽���
  const [findPwdNameOkMsg, setFindPwdNameOkMsg] = useState('');
  const [findPwdNameMsg, setFindPwdNameMsg] = useState('');

  const [findPwdEmailOkMsg, setFindPwdEmailOkMsg] = useState('');
  const [findPwdEmailMsg, setFindPwdEmailMsg] = useState('');

  const onChangeFindPwdName = (e) => {
    const inputFindPwdName = e.target.value;
    setFindPwdName(inputFindPwdName);
    if(inputFindPwdName.length === 0) {
      setIsFindPwdName(false);
      setFindPwdNameMsg("가입 시 등록한 이름을 입력해주세요.")
    }
  }

  const onChangeFindPwdEmail = (e) => {
    const inputFindPwdEmail = e.target.value;
    setFindPwdEmail(inputFindPwdEmail);
    if(inputFindPwdEmail.length === 0) {
      setIsFindPwdEmail(false);
      setFindPwdEmailMsg("가입 시 등록한 이메일을 입력해주세요.")
    }
  }


  const onClickFindPwd = () => {
    window.location.replace("/resetpwd");
  }

  
  return(
    <div className="wrapper">
      <Header/>
      <div className="findPwdWrapper">
        <div className="findPwd">
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
              <input type="text" value={findPwdEmail} className="findPwdEmail" placeholder="이메일"
              onChange={onChangeFindPwdEmail}></input>
            </div>
            <div className="findPwdErrMsg">
              {!isFindPwdEmail && <span className="findIdEmailErr">{findPwdEmailMsg}</span>}
              {isFindPwdEmail && <span className="findIdEmailOk">{findPwdEmailOkMsg}</span>}
            </div>
            <div>
              <button className="findPwdCodeButton">인증번호 받기</button>           
            </div>
            <div className="findPwdSmallBox">
            <input type="text" className="findPwdCodeInput" placeholder="인증번호를 입력 해주세요."></input>
            </div>
            </div>
              <button className="pwdSearchButton" onClick={onClickFindPwd}>확인</button>           
            <div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default FindPwdPage