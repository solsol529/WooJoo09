import { useState, useEffect } from "react";
import {categories, getCategory, citys, towns} from "../util/util";
import Card from "./Card";
import { Link } from "react-router-dom";

const Main = ({categoryName})=>{
  const [lineUp, setLineUp] = useState('recommand');
  const [city, setCity] = useState('none');
  const [town, setTown] = useState('all');

  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }

  useEffect(()=>{
      window.addEventListener('scroll', updateScroll);
  });

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return(
    <div className={categoryName ? (scrollPosition < 150 ? "category" : "category  changed")
    : (scrollPosition < 150 ? "main" : "main changed")}>
      <p className="mainTitle">{categoryName? getCategory(categoryName) : "오늘의 공구"}</p>
      <div className="maindiv">
        <div className="mainSelectBar">
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
            <option value="none">지역 선택</option>
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
            <option value="all">지역 전체</option>
            {towns
            .filter((e) => e.city === city)
            .map((e) => (
              <option key={e.town} value={e.town}>
                {e.name}
              </option>
            ))}
          </select>
          </div>
          <Link to="/write"><button>등록하기</button></Link>
        </div>
        <div className="mainCardList">
          <Card lineUp={lineUp} city={city} town={town}/>
          <Card lineUp={lineUp} city={city} town={town}/>
          <Card lineUp={lineUp} city={city} town={town}/>
          <Card lineUp={lineUp} city={city} town={town}/>
          <Card lineUp={lineUp} city={city} town={town}/>
          <Card lineUp={lineUp} city={city} town={town}/>
          <Card lineUp={lineUp} city={city} town={town}/>
          <Card lineUp={lineUp} city={city} town={town}/>
          <Card lineUp={lineUp} city={city} town={town}/>
          <Card lineUp={lineUp} city={city} town={town}/>
          <Card lineUp={lineUp} city={city} town={town}/>
          <Card lineUp={lineUp} city={city} town={town}/>
        </div>
        <div className="mainbuttons">
        <button>더보기</button>
        <button onClick={goToTop}>맨위로</button>
        </div>
      </div>
    </div>
  );
}
export default Main