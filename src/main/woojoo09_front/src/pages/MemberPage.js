import Footer from "../components/Footer";
import Header from "../components/Header";
import MemberInfo from "../components/MemberInfo"
import "../style/member.scss"
import { useEffect, useState } from 'react';
const MemberPage = () =>{

  const [isLogin, setIsLogin] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const changeIsLogin = (value) => {
    setIsLogin(value);
  };
  const changeIsAdmin = (value) => {
    setIsAdmin(value);
  };


  return(
    <div className="memberinfowrapper">
      <Header
      isLogin={isLogin} 
      changeIsLogin={changeIsLogin}
      isAdmin={isAdmin}
      changeIsAdmin={changeIsAdmin}/>
      <MemberInfo/>
      <Footer/>
    </div>
  );
  // }
}
export default MemberPage