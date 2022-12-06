import React from "react";
import { useState } from "react";
import "../style/chat.scss"

const SendDelivery = () => {
        
    const [deliveryCompany, setDeliveryCompany] = useState("");
    const [deliveryNum, setdeliveryNum] = useState("");

  const onChangeDeliveryCompany = (e) => {
    setDeliveryCompany(e.target.value);
  }
  const onChangeDeliveryNum = (e) => {
    setdeliveryNum(e.target.value);
  }

    return(

        <div className="sendDelivery">
          <div>운송장</div>
          <input value={deliveryCompany} onChange= {onChangeDeliveryCompany} placeholder={"택배사"}/>
          <input value={deliveryNum} onChange={onChangeDeliveryNum} placeholder={"운송장번호"}/>

          <button>전송</button>
        </div>
    );
};
export default SendDelivery;