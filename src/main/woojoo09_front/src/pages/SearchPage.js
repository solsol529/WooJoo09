import { useParams, useNavigate} from 'react-router-dom';
import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer"

const SearchPage = () =>{
  let { target } = useParams();
  return(
    <div className="wrapper">
      <Header/>
      <Main target = {target}/>
      <Footer/>
    </div>
  )
}
export default SearchPage