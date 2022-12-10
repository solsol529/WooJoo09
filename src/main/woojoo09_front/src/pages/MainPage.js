import Banner from "../components/Banner";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer"
import { useState, useEffect } from "react";
import api from "../api/api";

const MainPage = () =>{

  const [isLogin, setIsLogin] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const changeIsLogin = (value) => {
    setIsLogin(value);
  };
  const changeIsAdmin = (value) => {
    setIsAdmin(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.tokencheck();
        if(response.data.result === "OK"){
          setIsLogin(true);
        } else{
          setIsLogin(false);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return(
    <div className="wrapper">
      <Header
       isLogin={isLogin} 
       changeIsLogin={changeIsLogin}
       isAdmin={isAdmin}
       changeIsAdmin={changeIsAdmin}/>
      <Banner/>
      <Main 
        isLogin={isLogin}
        isAdmin={isAdmin}/>
      <Footer/>
    </div>
  )
}
export default MainPage