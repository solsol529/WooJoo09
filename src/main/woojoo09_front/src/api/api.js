import axios from "axios";
import { useContext } from 'react'; // useContext를 불러온다.
import { UserInfoContextStore } from "../stores/UserInfoContext"
import { getCookie } from "../util/cookie";
const HEADER = {"Content-type" : "application/json"}
// const HEADER = 'application/json';
const BASE_URL = "http://192.168.10.231:8090/developerKirby/";

const api = {
  memberInfo: async function() {
    const regCmd = {
      cmd : "MemberInfo"
    }
    return await axios.post(BASE_URL + "MemberSelectServlet", regCmd, HEADER);
  },

  userLogin: async function(nickname, token) {
    const loginObj = {
      nickname: nickname
    }
    return await axios.post(BASE_URL+ "LoginServlet", loginObj, HEADER);
  },
}