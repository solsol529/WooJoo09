
import { useState,  useEffect } from "react";
import { NavLink } from "react-router-dom";
import fashion from "../resources/fashion_sample.png";
import "../style/chat.scss"
import "../style/common.scss"
import api from "../api/api"

const ChatList = () =>{

  const [seller, setSeller] = useState('');
  const [lists, setLists] = useState('');
  const [loading, setLoading] = useState(false);
  const [prepared, setPrepared] = useState(false);

  const onChangeSeller = () => {

  }

  useEffect(() => {
    const fetchData = async () => {
     setLoading(true);
      try {
        const response = await api.chatList();
        setLists(response.data);
        console.log(response.data);
        setPrepared(true);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return(
    <div className="wrapperLeft">
            <div className="chatList">
                채팅목록
            </div>
            { prepared && 
            lists.map(({nickname, imgUrl, chatTime, chatContent, isRead }) => (
                <div className="chatDetail">
              <div className="chatButton">
                  <NavLink to="/chat" onChange={onChangeSeller} >
                    <p>
                      <div>{imgUrl}</div>
                      <p className="chatDetailNick">{nickname}</p>
                      <p className="chatTime">{chatTime}</p>
                      <div className="chatRecent">{chatContent}</div>
                      {isRead === "unread" && <p className="chatAlert"/>}
                    </p>
                  </NavLink> 
                </div>
            </div>
            

              ))
            }
            

    </div>
  );
}
export default ChatList