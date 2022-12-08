import { useState, useEffect } from "react";
import api from "../api/api"

const PrivacyPolicy = () =>{
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.maketokentest();
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  
  return(
    <p>토큰발급테스트</p>
  );
}
export default PrivacyPolicy