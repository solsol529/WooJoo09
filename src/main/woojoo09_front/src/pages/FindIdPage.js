import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FindIdComplete from "../components/FindIdComplete";

const FindIdPage = () =>{
  const [changeFindIdComplete, setChangeFindIdComplete] = useState(false);

  const [findIdName, setFindIdName] = useState('');
  const [findIdEmail, setFindIdEmail] = useState('');

  const [isFindIdName, setIsFindIdName] = useState(false);
  const [isFindIdEmail, setIsFindIdEmail] = useState(false);

  //에러 메시지
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
    } else {
      setIsFindIdName(true);
    }
  }

  const onChangeFindIdEmail = (e) => {
    const inputFindIdEmail = e.target.value;
    setFindIdEmail(inputFindIdEmail);
    if(inputFindIdEmail.length === 0) {
      setIsFindIdEmail(false);
      setFindIdEmailMsg("가입 시 등록한 이메일을 입력해주세요.")
    } else {
      setIsFindIdEmail(true);
    }
  }

  const onClickIdSearch = () => {
    // window.location.replace("/findidcomplete");
  }

  return(
    <div className="wrapper">
      <Header/>
      <div className="findIdWrapper">
        <div className="findId">
          <h2>아이디 찾기</h2>
          <div className="findIdMain">
            {changeFindIdComplete &&
              <FindIdComplete findIdEmail={findIdEmail}/>
            }
              
            {!changeFindIdComplete &&
            <>
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
            <div className="findIdComplete">
              {!(isFindIdName && isFindIdEmail)
              && <button className="findIdNotCompleteBut">확인</button>}  
              {(isFindIdName && isFindIdEmail)
              && <button className="findIdCompleteBut" 
              onClick={()=>{setChangeFindIdComplete(true)}}>확인</button>}    
            </div>
            </>
            }

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default FindIdPage