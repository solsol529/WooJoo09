import React from "react";
import { useState } from "react";
import "../style/chat.scss"

const ChatShipAdr = () => {
    const [receiverName, setreceiverName] = useState("");
    const [receiveraddress, setreceiveraddress] = useState("");
    const [receiverPhone, setreceiverPhone] = useState("");


  const onChangeReceiverName = (e) => {
    setreceiverName(e.target.value);
  }
  const onChangeReceiverAddress = (e) => {
    setreceiveraddress(e.target.value);
  }
  const onChangeReceiverPhone = (e) => {
    setreceiverPhone(e.target.value);
  }
    return(
        <>
            <div className="sendAccount">
                <div>배송정보 입력</div>
                <input value={receiverName} onChange= {onChangeReceiverName} placeholder={"이름"}/>
                <input value={receiveraddress} onChange={onChangeReceiverAddress} placeholder={"주소"}/>
                <input value={receiverPhone} onChange={onChangeReceiverPhone} placeholder={"핸드폰번호"}/>
                <button>완료</button>
            </div>
        </>
    );
};
export default ChatShipAdr;