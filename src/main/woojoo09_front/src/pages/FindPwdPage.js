import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const FindPwdPage = () =>{
  const [findPwdName, setFindPwdName] = useState('');
  const [findPwdPhone, setFindPwdPhone] = useState('');

  const [isFindPwdName, setIsFindPwdName] = useState(false);
  const [isFindPwdPhone, setIsFindPwdPhone] = useState(false);

  //에러 메시지
  const [findPwdNameOkMsg, setFindPwdNameOkMsg] = useState('');
  const [findPwdNameMsg, setFindPwdNameMsg] = useState('');

  const [findPwdPhoneOkMsg, setFindPwdPhoneOkMsg] = useState('');
  const [findPwdPhoneMsg, setFindPwdPhoneMsg] = useState('');

  //정규식
  const nameRegEx = /^[가-힣|a-z|A-Z|]+$/;
  const phoneRegEx = /^\d{2,3}-\d{3,4}-\d{4}$/; 

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

  const onChangeFindPwdPhone = (e) => {
    const inputFindPwdPhone = e.target.value;
    setFindPwdPhone(inputFindPwdPhone);
    if(inputFindPwdPhone.length === 0) {
      setIsFindPwdPhone(false);
      setFindPwdPhoneMsg("가입 시 등록한 전화번호를 입력해주세요.")
    } else if(!phoneRegEx.test(inputFindPwdPhone)) {
      setIsFindPwdPhone(false);
      setFindPwdPhoneMsg("전화번호 형식에 맞지 않습니다.");
    } else {
      setIsFindPwdPhone(true);
      setFindPwdPhoneOkMsg("");
    };
  }

  useEffect(() => {
    if(findPwdPhone.length === 10) {
      setFindPwdPhone(findPwdPhone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if(findPwdPhone.length === 13) {
      setFindPwdPhone(findPwdPhone.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
    if(phoneRegEx.test(findPwdPhone)) {
      setIsFindPwdPhone(true);
      // setFindPwdPhoneOkMsg("사용 가능한 전화번호 입니다.");
    }
  }, [findPwdPhone]);


  const onClickFindPwdCode = () => {

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
              <input type="text" value={findPwdPhone} className="findPwdPhone" placeholder="핸드폰번호"
              onChange={onChangeFindPwdPhone}></input>
            </div>
            <div className="findPwdErrMsg">
              {!isFindPwdPhone && <span className="findIdPhoneErr">{findPwdPhoneMsg}</span>}
              {isFindPwdPhone && <span className="findIdPhoneOk">{findPwdPhoneOkMsg}</span>}
            </div>
            <div className="findPwdCode">
              {!(isFindPwdName && isFindPwdPhone)
              && <button className="notFindPwdCodeBtn">인증번호 받기</button>}  
              {(isFindPwdName && isFindPwdPhone)
              && <button className="findPwdCodeBtn" onClick={onClickFindPwdCode}>인증번호 받기</button>}    
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