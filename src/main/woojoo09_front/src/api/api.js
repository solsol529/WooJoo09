import axios from "axios";
const HEADER = 'application/json';
const BASE_URL = "http://192.168.10.231:8090/developerKirby/";

const api = {
  userLogin: async function(nickname, pwd) {
    const loginObj = {
      nickname: nickname,
      pwd: pwd
    }
    return await axios.post(BASE_URL+ "LoginServlet", loginObj, HEADER);
  },
}