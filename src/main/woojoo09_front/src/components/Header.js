import { useState, useEffect } from "react";
import { NavLink ,Link } from "react-router-dom";
import logo from "../resources/logo.png";
import logoWhite from "../resources/logoWhite.png";
import search from "../resources/search_purple.png";
import chat from "../resources/chat.png";
import chatMoving from "../resources/chatMoving.gif";
import profile from "../resources/profile.png";
import chatWhite from "../resources/chat_white2.png";
import chatMovingWhite from "../resources/chatMoving_white2.gif";
import profileWhite from "../resources/profile_white2.png";
import chatBlack from "../resources/chat_black.png";
import chatMovingBlack from "../resources/chatMoving_black.gif";
import profileBlack from "../resources/profile_black.png";
import { categories } from "../util/util";

const Header = () =>{


  const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });
  // const [current, setCurrent] = useState('main');
  
  const handleKeyPress = e => {
    // if(e.key === 'Enter') {
    //   console.log(e.target.value);
    //   localStorage.setItem("write", "search");
    //   window.location.replace(`/search/${e.target.value}`);
    // }
  }

  return(
    <div className={scrollPosition < 150 ? "header" : "changedHeader"}>
      <div className="headerTop">
        <div className="headerLogo">
          <Link to="/main">
            {scrollPosition < 150 && <img src={logo} alt="우주공구"/>}
            {scrollPosition >= 150 && <img src={logoWhite} alt="우주공구"/>}
          </Link>
        </div>
        <div className="headerSearch">
          <input type="text" placeholder=""
          onKeyPress={handleKeyPress}/>
          <img src={search} alt="검색"/>
        </div>
        <div className="headerLogin">
          {/* <button>로그인</button> */}
          <Link to="/member"><img src={scrollPosition < 150 ? profileBlack : profileWhite} alt="내정보"/></Link>
          <Link to="/chatlist"><img src={scrollPosition < 150 ? chatMovingBlack : chatMovingWhite} alt="채팅"/></Link>
         
        </div>
      </div>
      <div className="headerBottom">
        <div className="headerCategory">
          {categories.map((category) => (
            <NavLink to ={`/category/${category.value}`}
            // className={category.value === current? "selected" : ""}
            // onClick={()=>{
            //   setCurrent(category.value)
            //   console.log(current)
            // }}
            activeClassName="active"
            >{category.name}</NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Header;