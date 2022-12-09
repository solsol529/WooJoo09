import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import api from "../api/api";
const RegisterPage = () =>{
  const [regId, setRegId] = useState('');
  const [regPwd, setRegPwd] = useState('');
  const [regPwdCk, setRegPwdCk] = useState('');
  const [regNick, setRegNick] = useState('');
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regphoneVer, setRegPhoneVer] = useState('');
  const [regVerifyCode, setRegVerifyCode] = useState('');

  const [regIdCk, setRegIdCk] = useState(false);
  const [regNickCk, setRegNickCk] = useState(false);
  
  const [isRegId, setIsRegId] = useState(false);
  const [isRegIdCk, setIsRegIdCk] = useState(false);
  const [isRegPwd, setIsRegPwd] = useState(false);
  const [isRegPwdCk, setIsRegPwdCk] = useState(false);
  const [isRegNick, setIsRegNick] = useState(false);
  const [isRegName, setIsRegName] = useState(false);
  const [isRegEmail, setIsRegEmail] = useState(false);
  const [isRegPhone, setIsRegPhone] = useState(false);
  const [isRegPhoneVer, setIsRegPhoneVer] = useState(true); //false로 바꾸기
  const [isRegOnPhone, setIsRegOnPhone] = useState(false);
  const [isRegVerifyCode, setIsRegVerifyCode] = useState(false);
  
  const [regIdOkMsg, setRegIdOkMsg] = useState('');
  const [regIdMsg, setRegIdMsg] = useState('');

  const [regPwdOkMsg, setRegPwdOkMsg] = useState('');
  const [regPwdMsg, setRegPwdMsg] = useState('');

  const [regPwdCkOkMsg, setRegPwdCkOkMsg] = useState('');
  const [regPwdCkMsg, setRegPwdCkMsg] = useState('');

  const [regNickOkMsg, setRegNickOkMsg] = useState('');
  const [regNickMsg, setRegNickMsg] = useState('');

  const [regNameOkMsg, setRegNameOkMsg] = useState('');
  const [regNameMsg, setRegNameMsg] = useState('');

  const [regEmailOkMsg, setRegEmailOkMsg] = useState('');
  const [regEmailMsg, setRegEmailMsg] = useState('');

  const [regPhoneOkMsg, setRegPhoneOkMsg] = useState('');
  const [regPhoneMsg, setRegPhoneMsg] = useState('');

  const [phoneVerMsg, setPhoneVerMsg] = useState('');
  const [phoneVerOkMsg, setPhoneVerOkMsg] = useState('');
  
  //정규식
  const idRegEx = /^[A-za-z0-9]{3,15}$/g;
  const pwdRegEx = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{8,20}$/;
  const nickRegEx = /^[가-힣|a-z|A-Z|0-9|]+$/;
  const nameRegEx = /^[가-힣|a-z|A-Z|]+$/;
  const emailRegEx = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/; //정규식 다시 찾아보기
  const phoneRegEx = /^\d{2,3}-\d{3,4}-\d{4}$/;  
  const phoneCodeRegEx = /^[0-9]+$/;


  //가입완료 버튼
  const onClickRegComplete = () => {
    const fetchData = async () => {
      try {
        var birthDate = new Date(form.year+"-"+form.month+"-"+form.day);
        console.log(date);
        const response = await api.memberReg(regId, regPwd, regNick, regName, regEmail, birthDate, regPhone);
        if(response.data === true) {
        localStorage.removeItem("adOk")
        window.location.replace("/celebrate");
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }

  //아이디
  //수정중
  const onChangeRegId = (e) => {
    const inputId = e.target.value;
    setRegId(inputId);
    if(inputId.length > 15 || inputId.length < 5) {
      setIsRegId(false);
      setRegIdMsg("3~15자리 영문자 또는 숫자를 입력해주세요.");
      setIsRegId(true); //false로 바꾸기
      setRegIdMsg("아이디 중복 확인이 필요합니다.")
    }
  }

  //아이디 중복확인
  const onClickRegIdDup = () => {
    console.log("아이디 중복체크 할 때 들어온 값" + regId);
    if((regId.length !== 0) && (regId.length < 16)) {
      const fetchSearchData = async () => {
        try {
          const response = await api.memberIdDup(regId);
          if(response.data.result === "OK") {
            setIsRegIdCk(true);
            setIsRegId(true);
            setRegIdMsg("사용 가능한 아이디 입니다.");
            setIsRegOnPhone(true);
          } else if (response.data.result === "NOK") {
            setIsRegIdCk(false);
            setIsRegId(true);
            setRegIdMsg("이미 존재하는 아이디 입니다.");
          }
        } catch (e) {
          console.log(e);
        }
      };
      fetchSearchData();
    } else {
      setIsRegIdCk(false);
      setIsRegId(false);
      setRegIdMsg("아이디 형식을 확인 후 중복 체크를 해주세요.")
    }
  };

  //비밀번호
  const onChangeRegPwd = (e) => {
    const inputPwd = e.target.value;
    setRegPwd(inputPwd);
    if(pwdRegEx.test(inputPwd)) {
      setIsRegPwd(true);
      setRegPwdOkMsg("사용 가능한 비밀번호 입니다.");
    } else if (inputPwd.length === 0) {
      setIsRegPwd(false);
      setRegPwdMsg("비밀번호는 필수 항목 입니다.")
    } else {
      setIsRegPwd(false);
      setRegPwdMsg("8~20자리 소문자, 숫자, 특수문자를 입력해주세요.")
    }
  };

  //새 비밀번호 
  const onChangeRegPwdCk = (e) => {
    const inputPwdCk = e.target.value;
    setRegPwdCk(inputPwdCk); 
    if(regPwd.length === 0){
      setIsRegPwdCk(false);
      setRegPwdCkMsg("비밀번호 항목을 먼저 확인해주세요.");
    } else if(inputPwdCk.length === 0){
      setIsRegPwdCk(false);
      setRegPwdCkMsg("비밀번호 확인은 필수 항목입니다.");
    } else if(pwdRegEx.test(inputPwdCk) && inputPwdCk === regPwd){
      setIsRegPwdCk(true);
      setRegPwdCkOkMsg("비밀번호가 일치합니다.");
    } else{
      setIsRegPwdCk(false);
      setRegPwdCkMsg("비밀번호가 일치하지 않습니다.");
    }
  }

  //닉네임
  const onChangeRegNick = (e) => {
    const inputNick = e.target.value;
    setRegNick(inputNick);
    if(inputNick.length > 15 && inputNick.length < 2) {
      setIsRegNick(false);
      setRegNickMsg("2~15자리 한글,영문자,숫자를 입력해주세요.");
    } else if (!regNickCk) {
      setIsRegNick(true); //false로 바꾸기
      setRegNickMsg("닉네임 중복 확인이 필요합니다.")
    }
  }
  
  //이름
  const onChangeRegName = (e) => {
    const inputName = e.target.value;
    setRegName(inputName);
    if(nameRegEx.test(inputName)) {
      setIsRegName(true);
      setRegNameOkMsg("");
    } else if (inputName.length === 0){
      setIsRegName(false);
      setRegNameMsg("이름은 필수 항목 입니다.");        
    } else {
      setIsRegName(false);
      setRegNameMsg("이름을 다시 확인해주세요.");
    }
  }

  //이메일
  const onChangeRegEmail = (e) => {
    const inputEmail = e.target.value;
    setRegEmail(inputEmail);
    if(emailRegEx.test(inputEmail)) {
      setIsRegEmail(true);
      setRegEmailOkMsg("사용 가능한 이메일 입니다.");
    } else if (inputEmail.length === 0){
      setIsRegEmail(false);
      setRegEmailMsg("이메일은 필수 항목 입니다.");        
    } else {
      setIsRegEmail(false);
      setRegEmailMsg("이메일 형식을 확인해 주세요.");
    }
  };

  //생년월일
  const now = new Date(); //현재 날짜 및 시간
  var nowYear = now.getFullYear(); //연도

  //날짜 가져오기
  const [form, setForm] = useState({
    year: nowYear,
    month: "01",
    day: "01" 
  });

  let years = [];
  for(let y = now.getFullYear(); y >= 1930; y -= 1) {
    years.push(y);
  }
  
  let month = [];
  for(let m = 1; m <= 12; m += 1) {
    if(m < 10) {
      //날짜가 2자리로 나타나야 하기 때문에 1자리 월에 0을 붙여준다
      month.push("0" + m.toString());
    } else {
      month.push(m.toString());
    }
  }

  let days = [];
  let date = new Date(form.year, form.month, 0).getDate();
  for (let d = 1; d <= date; d += 1) {
    if (d < 10) {
     // 날짜가 2자리로 나타나야 했기 때문에 1자리 일에 0을 붙혀준다
      days.push("0" + d.toString());
    } else {
      days.push(d.toString());
    }
  }

  //전화번호 입력
  const onChangeRegPhone = (e) => {
    const inputPhone = e.target.value;
    setRegPhone(e.target.value);
    // setIsRegPhone(false);
    // if(!phoneRegEx.test(inputPhone)) {
    //   setRegPhoneOkMsg("전화번호 형식을 확인해 주세요.");
    //   setIsRegPhone(false);  
    // } else {
    //   setRegPhoneMsg("사용 가능한 전화번호 입니다.");
    //   setIsRegPhone(true);
    // }

    if(phoneRegEx.test(inputPhone)) {
      setRegPhoneOkMsg("사용 가능한 전화번호 입니다.");
      setIsRegPhone(true); 
    } else if (inputPhone.length === 0){
      setRegPhoneMsg("전화번호는 필수 항목 입니다.")
      setIsRegPhone(false);   
    } else {
      setRegPhoneMsg("전화번호 형식을 확인해 주세요.")
      setIsRegPhone(false);  
    }
  };

  useEffect(() => {
    if(regPhone.length === 10) {
      setRegPhone(regPhone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if(regPhone.length === 13) {
      setRegPhone(regPhone.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
    if(phoneRegEx.test(regPhone)) {
      setIsRegPhone(true);
      setRegPhoneOkMsg("사용 가능한 전화번호 입니다.");
    }
  }, [regPhone]);

  //인증번호 받기 버튼
  const onClickGetRegPhoneCode = () => {
    const regPhoneCodeInput = document.getElementById('regPhoneCodeInput');
    const regPhoneCodeOk = document.getElementById('regPhoneCodeOk');

    if((regPhoneCodeInput.style.display !== 'none') && (regPhoneCodeOk.style.display !== 'none')) {
      regPhoneCodeInput.style.display = 'none';
      regPhoneCodeOk.style.display = 'none';
    } else {
      regPhoneCodeInput.style.display = 'block';
      regPhoneCodeOk.style.display = 'block';
    };
  }

  //인증번호 입력 
  const onChangeRegPhoneCodeInput = (e) => {
    const regVerifyCode = e.target.value
    setRegVerifyCode(regVerifyCode);
    if(phoneCodeRegEx.test(regVerifyCode)) {
    setIsRegVerifyCode(true);
    }
  }

  return(
    <div className="registerwrapper">
      <Header/>
      <div className="registerWrapper">     
        <div className="register">
          <h2>회원가입</h2>
          <div className="registerMain">
            <div className="regSmallBox">
              <div className="regSmallTitle">
                <label>아이디</label>
              </div>
              <div className="regInputOut">
                <input type="text" value={regId} className="regIdInput" placeholder="아이디"
                onChange={onChangeRegId}></input>              
              </div>
              <div className="regIdOverlap">
                <button className="regIdDupBut" onClick={onClickRegIdDup}>중복확인</button>
              </div>
            </div>
            <div className="regErrMsg">
              {!isRegId && <span className="regIdErr">{regIdMsg}</span>}
              {isRegId && <span className="regIdOk">{regIdOkMsg}</span>}
            </div>
            <div className="regSmallBox">
              <div className="regSmallTitle">
                <label>비밀번호</label>
              </div>
              <div className="regInputOut">
                <input type="password" value={regPwd} className="regPwdInput" placeholder="비밀번호"
                onChange={onChangeRegPwd}></input>
              </div>
              <div className="regFakeBox"></div>
            </div>
            <div className="regErrMsg">
              {!isRegPwd && <span className="regPwdErr">{regPwdMsg}</span>}
              {isRegPwd && <span className="regPwdOk">{regPwdOkMsg}</span>}
            </div>
            <div className="regSmallBox">
              <div className="regSmallTitle">             
                <label>비밀번호 확인</label>
              </div>
              <div className="regInputOut">
                <input type="password" value={regPwdCk} className="regPwdCkInput" placeholder="비밀번호 확인"
                onChange={onChangeRegPwdCk}></input>
              </div>
              <div className="regFakeBox"></div>
            </div>
            <div className="regErrMsg">
              {!isRegPwdCk && <span className="regPwdCkErr">{regPwdCkMsg}</span>}
              {isRegPwdCk && <span className="regPwdCkOk">{regPwdCkOkMsg}</span>}
            </div>
            <div className="regSmallBox">
              <div className="regSmallTitle">
                <label>닉네임</label>
              </div>
              <div className="regInputOut">
                <input type="text" value={regNick} className="regNickInput" placeholder="닉네임"
                onChange={onChangeRegNick}></input>              
              </div>
              <div className="regIdOverlap">
                <button className="regNickDupBut">중복확인</button>
              </div>
            </div>
            <div className="regErrMsg">
              {!isRegNick && <span className="regNickErr">{regNickMsg}</span>}
              {isRegNick && <span className="regNickOk">{regNickOkMsg}</span>}
            </div>
            <div className="regSmallBox">
              <div className="regSmallTitle">
              <label>이름(실명)</label>
              </div>
              <div className="regInputOut">
              <input type="text" value={regName} className="regNameInput" placeholder="이름"
              onChange={onChangeRegName}></input>
              </div>
              <div className="regFakeBox"></div>
            </div>
            <div className="regErrMsg">
              {!isRegName && <span className="regNameErr">{regNameMsg}</span>}
              {isRegName && <span className="regNameOk">{regNameOkMsg}</span>}
            </div>
            <div className="regSmallBox">
              <div className="regSmallTitle">
                <label>이메일</label>
              </div>
              <div className="regInputOut">
                <input type="email" value={regEmail} className="regEmailInput" placeholder="이메일"
                onChange={onChangeRegEmail}></input>
              </div>
              <div className="regFakeBox"></div>
            </div>
            <div className="regErrMsg">
              {!isRegEmail && <span className="regEmailErr">{regEmailMsg}</span>}
              {isRegEmail && <span className="regEmailOk">{regEmailOkMsg}</span>}
            </div> 

            <div className="regSmallBox">
              <div className="regSmallTitle">
              <label>생년월일</label>
              </div>
              <div className="regBirthOut">

                <div className="regBirthYear">
                <select
                  value={form.year}
                  onChange={(e) =>
                  	setForm({...form, year: e.target.value})
                  }>
                  {years.map(item => (
                  	<option value={item} key={item}>
                      	{item}
                      </option>
                  ))}  
                </select>
                </div>
                <div className="regBirthMonth">
                <select
                  value={form.month}
                  onChange={(e) =>
                  	setForm({...form, month: e.target.value})
                  }>
                  {month.map(item => (
                  	<option value={item} key={item}>
                      	{item}
                      </option>
                  ))}  
                </select>
                </div>
                <div className="regBirthDay">
                <select
                  value={form.day}
                  onChange={(e) =>
                  	setForm({...form, day: e.target.value})
                  }>
                  {days.map(item => (
                  	<option value={item} key={item}>
                      	{item}
                      </option>
                  ))}  
                </select>
                </div>
              </div>
              <div className="regFakeBox"></div>
            </div>

            <div className="regSmallBox">
              <div className="regSmallTitle">
                <label>휴대폰</label>
              </div>
              <div className="regInputOut">
                <input type="tel" value={regPhone} className="regPhoneInput" placeholder="핸드폰번호"
                onChange={onChangeRegPhone}></input>              
              </div>
              <div className="regIdOverlap">

                {!isRegPhone && <button className="notRegGetPhoneCodeBut">인증번호 받기</button>}
                {isRegPhone && <button className="regGetPhoneCodeBut" onClick={onClickGetRegPhoneCode}>인증번호 받기</button>}

                
              </div>            
            </div>
            <div className="regErrMsg">
              {!isRegPhone && <span className="regPhoneErr">{regPhoneMsg}</span>}
              {isRegPhone && <span className="regPhoneOk">{regPhoneOkMsg}</span>}
            </div>
            <div className="regSmallBox">
              <div className="regSmallTitle">
                <label></label>
              </div>
              <div className="regInputOut">
                <input type="tel" value={regVerifyCode} id="regPhoneCodeInput" className="regPhoneCodeInput" placeholder="인증번호"
                onChange={onChangeRegPhoneCodeInput}></input>              
              </div>
              <div className="regIdOverlap">

                {!isRegVerifyCode && <button id="regPhoneCodeOk" className="notRegVerifyCodeOkBut">인증번호 확인</button>}
                {isRegVerifyCode && <button id="regPhoneCodeOk" className="regVerifyCodeOkBut">인증번호 확인</button>}

              </div>            
            </div>  
            <div className="regComplete">
              {!(isRegId && isRegPwd && isRegPwdCk && isRegNick && isRegName && isRegEmail && isRegPhone && isRegPhoneVer)
              && <button className="regNotCompleteBut">가입하기</button>}  
              {(isRegId && isRegPwd && isRegPwdCk && isRegNick && isRegName && isRegEmail && isRegPhone && isRegPhoneVer)
              && <button className="regCompleteBut" onClick={onClickRegComplete}>가입하기</button>}    
            </div> 
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default RegisterPage