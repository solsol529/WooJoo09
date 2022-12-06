import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const FindIdPage = () =>{
  const [findIdName, setFindIdName] = useState('');
  const [findIdEmail, setFindIdEmail] = useState('');

  const [isFindIdName, setIsFindIdName] = useState(false);
  const [isFindIdEmail, setIsFindIdEmail] = useState(false);

  //���� �޽���
  const [findIdNameOkMsg, setFindIdNameOkMsg] = useState('');
  const [findIdNameMsg, setFindIdNameMsg] = useState('');

  const [findIdEmailOkMsg, setFindIdEmailOkMsg] = useState('');
  const [findIdEmailMsg, setFindIdEmailMsg] = useState('');

  const onChangeFindIdName = (e) => {
    const inputFindIdName = e.target.value;
    setFindIdName(inputFindIdName);
    if(inputFindIdName.length === 0) {
      setIsFindIdName(false);
      setFindIdNameMsg("가입 시 등록한 이름을 입력해주세요.")
    }
  }

  const onChangeFindIdEmail = (e) => {
    const inputFindIdEmail = e.target.value;
    setFindIdEmail(inputFindIdEmail);
    if(inputFindIdEmail.length === 0) {
      setIsFindIdEmail(false);
      setFindIdEmailMsg("가입 시 등록한 이메일을 입력해주세요.")

    }
  }

  const onClickIcSearch = () => {
    window.location.replace("/findidcomplete");
  }

  return(
    <div className="wrapper">
      <Header/>
      <div className="findIdWrapper">
        <div className="findId">
          <h2>아이디 찾기</h2>
          <div className="findIdMain">
            <div className="findIdSmallBox">           
              <input type="text" value={findIdName} className="findIdName" placeholder="이름"
              onChange={onChangeFindIdName}></input> 
            </div>
            <div className="findIdErrMsg">
              {!isFindIdName && <span className="findIdNameErr">{findIdNameMsg}</span>}
              {isFindIdName && <span className="findIdNameOk">{findIdNameOkMsg}</span>}
            </div>
            <div className="findIdSmallBox">
              <input type="text" value={findIdEmail} className="findIdEmail" placeholder="이메일"
              onChange={onChangeFindIdEmail}></input>
            </div> 
            <div className="findIdErrMsg">
              {!isFindIdEmail && <span className="findIdEmailErr">{findIdEmailMsg}</span>}
              {isFindIdEmail && <span className="findIdEmailOk">{findIdEmailOkMsg}</span>}
            </div>
            </div>
              <button className="idSearchButton" onClick={onClickIcSearch}>확인</button>           
            <div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default FindIdPage