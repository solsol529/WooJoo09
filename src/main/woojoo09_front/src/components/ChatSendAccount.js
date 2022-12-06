import React from "react";
import { useState } from "react";
import "../style/chat.scss"

const SendAccount = () => {
        
    const [bank, setBank] = useState("");
    const [account, setAccount] = useState("");
    const [accountholder, setAccountholder] = useState("");


  const onChangeBank = (e) => {
    setBank(e.target.value);
  }
  const onChangeAccount = (e) => {
    setAccount(e.target.value);
  }
  const onChangeAccountholder = (e) => {
    setAccountholder(e.target.value);
  }
    return(

        <div className="sendAccount">
          <div>계좌번호</div>
          <input value={bank} onChange= {onChangeBank} placeholder={"은행"}/>
          <input value={account} onChange={onChangeAccount} placeholder={"계좌"}/>
          <input value={accountholder} onChange={onChangeAccountholder} placeholder={"예금주"}/>
          <button>전송</button>
        </div>
    );
};
export default SendAccount;