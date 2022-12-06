import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import CelebratePage from "./pages/CelebratePage";
import ChatListPage from "./pages/ChatListPage";
import ChatPage from "./pages/ChatPage";
import DetailPage from "./pages/DetailPage";
import FindIdPage from "./pages/FindIdPage";
import FindPwdPage from "./pages/FindPwdPage";
import MainPage from "./pages/MainPage";
import MemberPage from "./pages/MemberPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPwdPage from "./pages/ResetPwdPage";
import TermAgreePage from "./pages/TermAgreePage";
import WritePage from "./pages/WritePage";
import TermPage from "./pages/TermPage";
import LoginPage from "./pages/LoginPage"
import FindIdCompletePage from "./pages/FindIdCompletePage"

import "./style/common.scss";
import "./style/detail.scss";
import "./style/write.scss";
import "./style/chat.scss";
import "./style/celebrate.scss";
import "./style/findid.scss";
import "./style/findidcomplete.scss";
import "./style/findpwd.scss";
import "./style/login.scss";
import "./style/register.scss";
import "./style/resetpwd.scss";
import "./style/termagree.scss";

import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/main' element={<MainPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/category/:categoryName' element={<CategoryPage/>}/>
          <Route path='/findid' element={<FindIdPage/>}/>
          <Route path='/findpwd' element={<FindPwdPage/>}/>
          <Route path='/resetpwd' element={<ResetPwdPage/>}/>
          <Route path='/termagree' element={<TermAgreePage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/celebrate' element={<CelebratePage/>}/>
          <Route path='/detail/:tradeNum' element={<DetailPage/>}/>
          <Route path='/chatlist' element={<ChatListPage/>}/>
          <Route path='/chat' element={<ChatPage/>}/>
          <Route path='/member' element={<MemberPage/>}/>
          <Route path='/write' element={<WritePage/>}/>
          <Route path='/term' element={<TermPage/>}/>
          <Route path="/findidcomplete" element={<FindIdCompletePage/>}/>
          <Route path='/privacypolicy' element={<PrivacyPolicyPage/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
