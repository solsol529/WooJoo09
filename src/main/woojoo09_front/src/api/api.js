import axios from "axios";
import { useContext } from 'react'; // useContext를 불러온다.
import { UserInfoContextStore } from "../stores/UserInfoContext"
import { getCookie } from "../util/cookie";
const HEADER = {"Content-type" : "application/json"}
// const HEADER = 'application/json';
const BASE_URL = "http://localhost:9009/developerkirby/";

axios.defaults.withCredentials = true; // withCredentials 전역 설정
  // const cookieSet = {
  //   withCredentials: true
  // 안되면 헤더 앞에 이 object 추가해서 보내기}
const api = {
  tokencheck: async function() {
    const tokenCmd = {
      cmd : "tokencheck"
    }
    return await axios.post(BASE_URL + "tokencheck", tokenCmd, HEADER);
  },

  maketokentest: async function() {
    const testCmd = {
      cmd: "test"
    }
    return await axios.post(BASE_URL+ "test", testCmd, HEADER);
  },
}

export default api;