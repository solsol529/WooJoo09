import { useEffect, useState, useRef } from "react";
import ChatList from "../components/ChatList";
import ChatHeader from "../components/ChatHeader";
import ChatFooter from "../components/ChatFooter";
import ChattingProduct from "../components/Chattingproduct";
import ChattingProductBuy from "../components/ChattingPoductBuy";
import ChatBuyButton from "../components/ChatBuyButton";
import ChatSellButton from "../components/ChatSellButton";


const ChatPage = () =>{
  // const [socketConnected, setSocketConnected] = useState(false);
  // const [inputMsg, setInputMsg] = useState("");
  // const [rcvMsg, setRcvMsg] = useState("");
  // const webSocketUrl = `ws://localhost:9009/ws/chat`;
  // // roomId랑 sender은 받아와야함 -> navigate로 받아오면 될듯
  // const roomId = window.localStorage.getItem("chatRoomId");
  // const sender = "곰돌이사육사";

  const [visible, setVisible] = useState(false);
  const [type, setType] = useState('');

  const visibleAccount = (e) => {
    setVisible(!visible);
    // setType(e.target.value)
  }

  const EntranceBuy  = visible?
      <ChattingProductBuy /> :  <ChattingProduct />;

  // let ws = useRef(null);
  // const [items, setItems] = useState([]);

  // const onChangMsg = (e) => {
  //     setInputMsg(e.target.value)
  // }

  // const onEnterKey = (e) => {
  //     if(e.key === 'Enter') onClickMsgSend(e);
  // }

  // const onClickMsgSend = (e) => {
  //     e.preventDefault();
  //     ws.current.send(
  //         JSON.stringify({
  //         "type":"TALK",
  //         "roomId": roomId,
  //         "sender": sender,
  //         "message":inputMsg}));
  //         setInputMsg("");
  // }
  // const onClickMsgClose = () => {
  //     ws.current.send(
  //         JSON.stringify({
  //         "type":"CLOSE",
  //         "roomId": roomId,
  //         "sender":sender,
  //         "message":"종료 합니다."}));
  //     ws.current.close();
  // }

  // useEffect(() => {
  //   // 화면이 렌더링 될 때 불러지는것, 자동으로 세션 연결
  //   // 화면이 로딩되자마자 웹소켓을 열어달라고 요청
  //     console.log("방번호 : " + roomId);
  //     if (!ws.current) {
  //         ws.current = new WebSocket(webSocketUrl);
  //         ws.current.onopen = () => {
  //             console.log("connected to " + webSocketUrl);
  //         setSocketConnected(true);
  //         };
  //     }
  //     if (socketConnected) {
  //       // 연결 되면 바로 방으로 진입
  //         ws.current.send(
  //             JSON.stringify({
  //             "type":"ENTER",
  //             "roomId": roomId,
  //             "sender": sender,
  //             "message":"처음으로 접속 합니다."}));
  //     }
  //     ws.current.onmessage = (evt) => {
  //         const data = JSON.parse(evt.data);
  //         console.log(data.message);
  //         setRcvMsg(data.message);
  //         setItems((prevItems) => [...prevItems, data]);
  //   };
  // }, [socketConnected]);


      
  return(
    <div className="wrapper">
      {/* 강사님 웹소켓 채팅 코드
      <div>
        <div>socket</div>
        <div>socket connected : {`${socketConnected}`}</div>
        <div>방번호: {roomId}</div>
        <h2>소켓으로 문자 전송하기 테스트</h2>
        <div>
            {items.map((item) => {
            return <div>{`${item.sender} > ${item.message}`}</div>;
            })}
        </div>
        <input className="msg_input" placeholder="문자 전송" value ={inputMsg} onChange={onChangMsg} onKeyUp={onEnterKey}/>
        <button className="msg_send" onClick={onClickMsgSend}>전송</button>
        <p/>
        <button className="msg_close" onClick={onClickMsgClose}>채팅 종료 하기</button>
      </div> */}
      <div className="chatLeft"><ChatList/></div>
      <div className="chatRight">
        
        <ChatHeader/>

        {EntranceBuy}
        {/* <ChattingProduct /> */}

        <div className="chatContent">
          <div className="chatDate">2022년 12월 1일</div>
          <div className="chatMessage">상대가 보낸 메시지!!!!!</div>
          <div className="chatMessage">상대가 보낸 메시지!!!!!</div>
          <div className="chatMessage">상대가 보낸 메시지!!!!!</div>
          <div className="chatMessage">상대가 보낸 메시지!!!!!</div>
          <div className="chatMessage">상대가 보낸 메시지!!!!!</div>
          <div className="chatMessage">상대가 보낸 메시지!!!!!</div>
          <div className="chatMessage">상대가 보낸 메시지!!!!!</div>
          <div className="chatMessage">상대가 보낸 메시지!!!!!</div>
          <div className="chatMessage">상대가 보낸 메시지!!!!!</div>
          <div className="chatTalkTime">19:00</div>
          <div className="chatTalkTime-My">19:12</div>
          <div className="chatMessage-My">내가 보낸 메시지!!!!!!</div>
        </div>

      <ChatSellButton/>

      <ChatFooter/>
      
      </div>
    </div>
  )
}
export default ChatPage