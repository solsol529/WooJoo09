import { useParams, useNavigate} from 'react-router-dom';
import { useState, useEffect } from "react";
import Footer from '../components/Footer';
import Header from "../components/Header";
import Loader from '../components/Loader';
import Main from "../components/Main";
import api from "../api/api"

const CategoryPage = () =>{
  let { categoryName } = useParams();
  const navigate = useNavigate();

  const [isLogin, setisLogin] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.tokencheck();
        if(response.data.result === "OK"){
          setisLogin(true);
        } else{
          setisLogin(false);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  if (!isLogin){
    navigate("/login", {state : "유효하지 않은 접근입니다\n로그인 후 이용해 주세요"});
  } else{
    return(
      <>
      {/* <Loader/> */}
      <div className="categoryWrapper">
        <Header/>
        <Main categoryName = {categoryName}/>
        <Footer/>
      </div>
      </>
    );
  }
  
}
export default CategoryPage