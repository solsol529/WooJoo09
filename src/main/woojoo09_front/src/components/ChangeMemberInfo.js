import { useState, useEffect } from "react";
import { storage } from "../api/firebase"
import { Link } from "react-router-dom";
import api from "../api/api";

const ChangeMemberInfo = (props) =>{
  const [changeNickname, setChangeNickname] = useState(false);
  const [changeProfileImg, setChangeProfileImg] = useState(false);
  const [changePwd, setChangePwd] = useState(false);
  const [changeEmail, setChangeEmail] = useState(false);
  const [changeReceiveAd, setChangeReceiveAd] = useState(false);
  let cnt = 0;
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");
  
  const [memberInfo, setMemberInfo] = useState('');
  const [inputPwd1, setInputPwd1] = useState('');
  const [inputPwd2, setInputPwd2] = useState('');
  const [inputPwd3, setInputPwd3] = useState('');
  const getNickname = window.localStorage.getItem("userNickname");
  const getPwd =  window.localStorage.getItem("userPwd");

  const [inputEmail, setInputEmail] = useState('');

  //오류메시지
  const [pwMessage, setPwMessage] = useState("");
  const [conPwMessage, setConPwMessage] = useState("");
  const [conPwMessage2, setConPwMessage2] = useState("");

  // 유효성 검사
  const [isPw, setIsPw] = useState(false)
  const [isConPw, setIsConPw] = useState(false);

    
    //유효성 검사
    const [isEmail, setIsEmail] = useState(false)

    //오류메시지
    const [emailMessage, setEmailMessage] = useState("");

  const handleImage = (event) => {
    const image = event.target.files[0];
    setImage(image);
    console.log(image);
    setError("");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setError("");
    if (image === "") {
      console.log("파일이 선택되지 않았습니다");
      setError("파일이 선택되지 않았습니다");
      return;
    }
    // 업로드 처리
    console.log("업로드 처리");
    const storageRef = storage.ref("images/profile/"); //어떤 폴더 아래에 넣을지 설정
    const imgName = (localStorage.getItem("memberNum") + "_pfImg");
    const imagesRef = storageRef.child(imgName);
    // const imagesRef = storageRef.child(image.name); //파일명

    console.log("파일을 업로드하는 행위");
    const upLoadTask = imagesRef.put(image);
    console.log("태스크 실행 전");

    upLoadTask.on(
      "state_changed",
      (snapshot) => {
        console.log("snapshot", snapshot);
        const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(percent + "% done");
      },
      (error) => {
        console.log("err", error);
        setError("파일 업로드에 실패했습니다." + error);
      },
      () => {
        upLoadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImageUrl(downloadURL);
        });
      }
    );
  };

  //현재 비밀번호 맞는지 ck
  const onClickPwdUpdate1 = async() => {
      try {
          const res = await api.userLogin(getNickname, inputPwd1);
          console.log(res.data);
          if(res.data.result === "OK") {
              console.log("비밀번호 체크중");
              onClickPwdUpdate2();
          } else {
          }           
      } catch (e) {
          console.log("로그인 에러..");
      }
  }
  //새 비밀번호 변경
  const onClickPwdUpdate2 = async() => {
      try {
          const memberUpdate = await api.memberUpdate(inputPwd3, "pwd", getNickname);
          console.log(memberUpdate.data.result);
          
          if(memberUpdate.data.result === "OK") {
              window.location.replace("/memberInfo");
          } else {
          }
      } catch (e) {
          console.log(e);
          console.log("비밀번호 변경 에러...!");
      }
  }
  //새 비밀번호 유효성 ck
  const onChangepwd2 = (e) => {
      //const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
      const passwordRegex = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{8,20}$/
      const passwordCurrent = e.target.value ;
      setInputPwd2(passwordCurrent);
      if (!passwordRegex.test(passwordCurrent)) {
          setPwMessage('영소문자+숫자+특수문자 8자리 이상 20자리 이하 입력해주세요!')
          setIsPw(false)
      } else {
          setPwMessage('안전한 비밀번호에요 : )')
          setIsPw(true);
      }        
  }

  //새 비밀번호 확인 일치 ck
  const onChangepwd3 = (e) => {
      const passwordCurrent2 = e.target.value;
      setInputPwd3(passwordCurrent2)
      if (passwordCurrent2 !== inputPwd2) {
          setConPwMessage2('비밀 번호가 일치하지 않습니다.')
          setIsConPw(false)
      } else {
          setConPwMessage2('비밀 번호가 일치 합니다. )')
          setIsConPw(true);
      }      
  }
  //현재 비밀번호 맞는지 ck
  const onChangepwd1 = (e) => {
      const passwordCurrent = e.target.value;
      setInputPwd1(passwordCurrent)
      if (passwordCurrent !== getPwd) {
          setConPwMessage('비밀 번호가 일치하지 않습니다.')
          setIsConPw(false)
      } else {
          setConPwMessage('비밀 번호가 일치 합니다.')
          setIsConPw(true);
      }      
  }

  // 통신 부분 에러때문에 주석 처리
//   const pfImgChange = async() => {
//     try {
//       const res = await api.pfImgChange(imageUrl);
//       console.log(res.data.result);
//       if(res.data.result === "OK") {
//         setChangeProfileImg(false);
//         props.changeIsChange(++cnt);
//         // window.location.replace("/memberinfo");
//       } else {

//       }
//     } catch (e) {
//       console.log("로그인 에러..");
//       console.log(e);
//     }
//   }
// 여기까지

  // const [file, setFile] = useState();
  // const onFileChange = (event) => {
  //   // Updating the state
  //   setFile({ file: event.target.files[0] });
  // };





    //기존 이메일 출력
    useEffect(() => {    
    const memberData = async () => {
        try {
            const response = await api.memberInfo(getNickname);
            setMemberInfo(response.data);
            console.log(response.data)
        } catch (e) {
            console.log(e);
        }
    };
    memberData();
    }, []);

    //새 이메일 변경
    //변경을 누르면 새로운 이메일이 db에 변경됨
    const onClickEmailUpdate = async() => {
        try {
            const memberUpdate = await api.memberUpdate(inputEmail, "mail", getNickname);
            console.log(memberUpdate.data.result);
            
            if(memberUpdate.data.result === "OK") {
                window.location.replace("/memberInfo");
            } else {
            }
        } catch (e) {
            console.log(e);
            console.log("이메일 변경 에러...!");
        }
    }

    const onChangemail = (e) => {
      const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      const emailCurrent = e.target.value ;
      setInputEmail(emailCurrent);
      if (!emailRegex.test(emailCurrent)) {
          setEmailMessage('이메일 형식이 아닙니다.')
          setIsEmail(false)
      } else {
          setEmailMessage('')
          setIsEmail(true);
      }        
  }


  return(
    <div className="changememberinfo">
      <p>회원정보 수정</p>

      {!changeProfileImg && !changeEmail && !changePwd  && <p onClick={()=>{setChangeNickname(true)}}
      onDoubleClick={()=>{setChangeNickname(false)}}>닉네임 변경</p>}
      {changeNickname && 
        <div className="pfImgChange">
          {error && {error}}
          <div className="pwdchange_container">
            <p className="pwd_current">현재 닉네임 : 폼폼푸린
            </p>
            <div className="current_pwd_hint">
            {inputPwd1.length > 0 && (
                <span className={`message ${isConPw ? 'success' : 'error'}`}>{conPwMessage}</span>)}
            </div>
            <p className="pwd_change_ck">새 닉네임
            <input type="text" value={inputPwd2} className="pwd_change_input" onChange={onChangepwd2}></input>
            </p>
            <div className="pwd_hint">
                {inputPwd2.length > 0 && (
                <span className={`message ${isPw ? 'success' : 'error'}`}>{pwMessage}</span>)}
            </div>
            <span className="pwd_change_yes" onClick={onClickPwdUpdate1}>변경</span>
            <Link to='/memberinfo' className="pwd_cancle">취소</Link>
         </div>
        </div>
      }

      {!changeProfileImg && !changeEmail && !changeNickname && <p onClick={()=>{setChangePwd(true)}}
      onDoubleClick={()=>{setChangePwd(false)}}>비밀번호 변경</p>}
      {changePwd && 
        <div className="pfImgChange">
          {error && {error}}
          <div className="pwdchange_container">
            <p className="pwd_current">현재 비밀번호
            <input type="password" value={inputPwd1} className="pwd_change_input" onChange={onChangepwd1}></input>
            </p>
            <div className="current_pwd_hint">
            {inputPwd1.length > 0 && (
                <span className={`message ${isConPw ? 'success' : 'error'}`}>{conPwMessage}</span>)}
            </div>
            <p className="pwd_change_ck">새 비밀번호
            <input type="password" value={inputPwd2} className="pwd_change_input" onChange={onChangepwd2}></input>
            </p>
            <div className="pwd_hint">
                {inputPwd2.length > 0 && (
                <span className={`message ${isPw ? 'success' : 'error'}`}>{pwMessage}</span>)}
            </div>
            <p className="pwd_change_ck2">새 비밀번호 확인
            <input type="password" value={inputPwd3} className="pwd_change_input" onChange={onChangepwd3}></input>
            </p>
            <div className="pwd_hint2">
                {inputPwd3.length > 0 && (
                <span className={`message ${isConPw ? 'success' : 'error'}`}>{conPwMessage2}</span>)}
            </div>
            <span className="pwd_change_yes" onClick={onClickPwdUpdate1}>변경</span>
            <Link to='/memberinfo' className="pwd_cancle">취소</Link>
         </div>
        </div>
      }
      

      {!changeProfileImg && !changePwd && !changeNickname &&  <p onClick={()=>{setChangeEmail(true)}}
      onDoubleClick={()=>{setChangeEmail(false)}}>이메일 변경</p>}
          {changeEmail &&
            <div>
              <p className="email_current">현재 이메일 주소</p>
              {memberInfo && memberInfo.map(member => (
                  <div key={member.nickname}>
                      <p className="email_current2">{member.email}</p>
                  </div>
              ))}
              {/* <div >
                      <p className="email_current2">rabbit@gmail.com</p>
              </div> */}
              <p className="email_new">
                  <p>새 이메일 주소</p>
                  <input type="email" value={inputEmail} className="email_change_input" onChange={onChangemail}></input>
              </p>
              <div className="email_hint">
                  {inputEmail.length > 0 && (
                  <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>)}
              </div>
              <span className="email_change_yes" onClick={onClickEmailUpdate}>변경</span>
              <Link to='/memberinfo' className="email_cancle">취소</Link>
        </div>
        }

      {/* {!changeProfileImg && !changePwd && !changeEmail && !changeNickname && <p onClick={()=>{setChangeReceiveAd(true)}}
            onDoubleClick={()=>{setChangeReceiveAd(false)}}>광고 수신 여부 변경</p>}
            {changeReceiveAd && 
              <div className="pfImgChange">
                <div className="pwdchange_container">
                  <p className="pwd_current">현재 광고 수신 여부는 허용입니다.
                  </p>
                    <input type="radio">허용</input>
                    <input type="radio">거부</input>
                  <span className="pwd_change_yes" onClick={onClickPwdUpdate1}>변경</span>
                  <Link to='/memberinfo' className="pwd_cancle">취소</Link>
              </div>
              </div>
            } */}



      {!changeEmail && !changePwd && !changeNickname && <p onClick={()=>{setChangeProfileImg(true) }}
      onDoubleClick={()=>{setChangeProfileImg(false)}}>프로필 사진 변경</p>}
      {changeProfileImg && 
        <div className="pfImgChange">
          {error && {error}}
          <form className="pfImgForm" onSubmit={onSubmit}>
            <input type="file" onChange={handleImage} />
            <button onClick={onSubmit}>업로드</button>
          </form>
          {imageUrl && (
            <div>
              <p> 이미지 미리보기</p>
              <img className="pfImgPreview" src={imageUrl} alt="uploaded" />
              {/* width="400px" */}
            </div>
          )}
          {/* onClick={pfImgChange} 넣어야함  */}
          <button type="button" >업로드한 이미지로 프로필 변경</button>
        </div>
      }
    </div>
  );
};

export default ChangeMemberInfo;