import ChatPage from "./ChatPage"
import { useState } from "react";

const ChatPage2 = () =>{
  const [render, setRender] = useState(false);

  const changeRender = (value) => {
    setRender(value);
  };

  return <ChatPage render={render} changeRender={changeRender}/>
}

export default ChatPage2