import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/member.scss"
import "../style/common.scss"
import defaultProfileImg from "../resources/profile_sample.png";
import rankIcon6 from "../resources/grade_icon6_space.png";
import rankIcon1 from "../resources/grade_icon1_wreck.png";
import rankIcon2 from "../resources/grade_icon2_comet.png";
import rankIcon3 from "../resources/grade_icon3_planet.png";
import rankIcon4 from "../resources/grade_icon4_nebula.png";
import rankIcon5 from "../resources/grade_icon5_galaxy.png";
import ChangeMemberInfo from "./ChangeMemberInfo";
import MyTrade from "./MyTrade";
import api from "../api/api";
import MemberInfoList from "./MemeberInfoList";


const MemberInfo = () =>{

    const [memberInfo, setMemberInfo] = useState('');
    const getNickname = window.localStorage.getItem("userNickname");
    const [isChange, setIsChange] = useState('');
    const changeIsChange = (value) => {
      setIsChange(value);
    };

  
    return(
      <div className="memberinfomain">
        <MemberInfoList/>
        <div className="memberinfocenter">
          <ChangeMemberInfo changeIsChange={changeIsChange}/>
          <MyTrade/>
          <div className="unReg">회원 탈퇴</div>
        </div>
      </div>
    )
  }
  export default MemberInfo;