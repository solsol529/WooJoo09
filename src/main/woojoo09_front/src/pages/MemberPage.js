import { useContext } from 'react'; // useContext를 불러온다.
import { UserInfoContextStore } from "../stores/UserInfoContext"
import Footer from "../components/Footer";
import Header from "../components/Header";
import MemberInfo from "../components/MemberInfo"
import {setCookie, getCookie, setCookie2, setCookie3, setCookie4} from "../util/cookie"
import { useEffect } from 'react';
const MemberPage = () =>{

  //useContext를 사용해서 Store를 등록해줍니다.
  const UserInfo = useContext(UserInfoContextStore);

  setCookie("nickname", "칸쵸");
  setCookie2("nickname2", "아이셔");
  setCookie3("nickname3", "미쯔");
  setCookie4("nickname4", "하리보");
  UserInfo.setToken(getCookie("nickname"));

  return(
    <div className="memberinfowrapper">
      <Header/>
      <MemberInfo/>
      <p>{getCookie("nickname")}</p>
      <p>{UserInfo.token}</p>
      <p>왜안떠?</p>
      <p>{getCookie("nickname2")}</p>
      <p>{getCookie("nickname3")}</p>
      <p>{getCookie("nickname4")}</p>
      <p>{getCookie("token")}</p>
      <Footer/>
    </div>
  );
  // }
}
export default MemberPage