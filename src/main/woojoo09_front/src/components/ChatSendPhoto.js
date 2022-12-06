import React from "react";
import { useState } from "react";
import "../style/chat.scss"


const SendPhoto =() => {

    const [SendPhoto, setSendPhoto] = useState("");


  const onChangeSendPhoto = (e) => {
    setSendPhoto(e.target.value);
  }


    return (

        <div className="sendFile">
        <div>사진</div>
          <input type="file" value={SendPhoto} onChange= {onChangeSendPhoto}/>

          <button>전송</button>
      </div>
    )
}
export default SendPhoto