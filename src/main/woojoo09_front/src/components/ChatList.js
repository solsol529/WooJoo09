
import { useState } from "react";
import { NavLink, Route } from "react-router-dom";
import fashion from "../resources/fashion_sample.png";
import "../style/chat.scss"
import "../style/common.scss"

const ChatList = () =>{

  const [seller, setSeller] = useState('');
  
  const onChangeSeller = () => {

  }
  return(
    <div className="wrapperLeft">
            <div className="chatList">
                채팅목록
            </div>
            
            <div className="chatDetail">
              <div className="chatButton">
                  <NavLink to="/chat" onChange={onChangeSeller} >
                    <p>
                      <img src={fashion} alt="패션"/>
                      <p className="chatDetail">닉네임</p>
                      <p className="chatTime">시간</p>
                      <div>최근 글</div>
                      <p className="chatAlert"/>
                    </p>
                  </NavLink> 
                </div>
            </div>
            
            <div className="chatDetail">
              <div className="chatButton">
                  <NavLink to="/chatbuy">
                    <p className="chatlistDetail">
                      <img src={fashion} alt="패션"/>
                      <p className="chatDetail">닉네임</p>
                      <p className="chatTime">시간</p>
                      <div>최근 글</div>
                      <p className="chatAlert"/>
                    </p>
                  </NavLink> 
                </div>
            </div>
    </div>
  );
}
export default ChatList