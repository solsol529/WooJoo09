import { useState, useEffect } from "react";
import {categories, getCategory, citys, towns} from "../util/util";
import Card from "./Card";
import { Link } from "react-router-dom";
import api from "../api/api"
import { getCookie, setCookie } from "../util/cookie";
import Loader from "./Loader";

const Main = ({categoryName, target, isLogin, isAdmin})=>{
  const [lineUp, setLineUp] = useState('recommand');
  const [city, setCity] = useState('');
  const [town, setTown] = useState('');

  const [lists, setLists] = useState([]);
  const [size, setSize] = useState(12);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  const [bottomScroll, setBottomScroll] = useState(0);

  useEffect(()=>{
      window.addEventListener('scroll', updateScroll);
  });

  useEffect(() => {
    const fetchData = async () => {
     setLoading(true);
      try {
        const response = await api.tradeSelect(lineUp, city, town, page, size);
        console.log(response.data.content);
        setLists(response.data.content);
        setPage(page + 1);
        if(response.data.last == 'true') setIsLastPage(true)
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const appendList = () => {
    const fetchData = async () => {
      setBottomScroll(window.scrollY || document.documentElement.scrollTop)
      setLoading(true);
      try {
        const response = await api.tradeSelect(lineUp, city, town, page, size);
        console.log(response.data.content);
        setLists(prev => ([...prev, ...response.data.content]));
        setPage(page + 1);
        if(response.data.last === true) {
          setIsLastPage(true);
          console.log()
        }
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
    console.log("이동해야하는 스크롤의 위치는 " + document.documentElement.scrollTop )
    goToBottom(document.documentElement.scrollTop)
  }

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToBottom = (value) => {
    console.log("이동할 스크롤 위치는 " + value);
    window.scrollTo({top: value, behavior: "smooth"});
  };

  if(loading) {
    return (
      <div className={(categoryName || target) ? (scrollPosition < 150 ? "category" : "category  changed")
        : (scrollPosition < 150 ? "main" : "main changed")}
        style={{height:"10000000vh"}}>
        <Loader/>
      </div>
    )
  }

  return(
    <div className={(categoryName || target) ? (scrollPosition < 150 ? "category" : "category  changed")
    : (scrollPosition < 150 ? "main" : "main changed")}>
      {!target && <p className="mainTitle">{categoryName? getCategory(categoryName) : "오늘의 공구"}</p>}
      {target && <p>'{target}'에 대한 검색 결과</p>}
      <div className="maindiv">
        {!target && <div className="mainSelectBar">
          <div>
          <select
            value={lineUp}
            onChange={({ target: { value } }) => {
              setLineUp(value);
              // console.log(value)
            }}
          >
            <option value="recent">최신순</option>
            <option value="deadline">마감 임박순</option>
            <option value="recommand">추천순</option>
            <option value="lowPrice">낮은 가격순</option>
            <option value="highPrice">높은 가격순</option>
          </select>
          <select
            value={city}
            onChange={({ target: { value } }) => {
              setCity(value);
              // console.log(value)
            }}
          >
            <option value="">지역 선택</option>
            {citys.map((e) => (
              <option key={e.city} value={e.city}>
                {e.name}
              </option>
            ))}
          </select>
          <select
            value={town}
            onChange={({ target: { value } }) => {
              setTown(value);
              // console.log(value)
            }}
          >
            <option value="">지역 전체</option>
            {towns
            .filter((e) => e.city === city)
            .map((e) => (
              <option key={e.town} value={e.town}>
                {e.name}
              </option>
            ))}
          </select>
          </div>
          {isLogin && !isAdmin && <Link to="/write"><button>등록하기</button></Link>}
        </div>}
        <div className="mainCardList">
          <Card lists={lists} isLogin={isLogin} isAdmin={isAdmin}/>
        </div>
        <div className="mainbuttons">
        {!isLastPage && <button onClick={
          appendList
        }
          >더보기</button>}
        <button onClick={goToTop}>맨위로</button>
        </div>
      </div>
    </div>
  );
}
export default Main