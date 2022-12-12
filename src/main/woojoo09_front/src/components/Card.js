import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import fashionImg from "../resources/fashion_sample.png";
import star from "../resources/star.png";

const Card = ({lists, isLogin, isAdmin}) =>{
  const [thisDate, setThisDate] =  useState(new Intl.DateTimeFormat('kr').format(new Date()));

  return(
    <>
    {lists && lists.map(list => (
    <div className="card">
      <Link to={`/detail/${list.tradeNum}`} >
      <div className="cardImg">
        <img src={list.representImg} alt="상품 대표 이미지"/>
      </div>
      <div className="cardDesc">
        <p>{list.categoryName}</p>
        <p className="cardName">{list.product.length > 10 ? list.product.substring(0,10)+"..." : list.product}</p>
        <p>{list.price}원</p>
        <p>{list.city && <span>{list.city}</span>}{list.town && <span>{list.town}</span>}</p>
        {list.doneTrade === 'ONGOING' && <p><span>{list.acceptPartner} / {list.limitPartner}</span><span>D - {
         Math.floor((new Date(list.dueDate).getTime() - new Date(thisDate).getTime()) / (1000 * 60 * 60 * 24))
        }</span></p>}
        {list.doneTrade === 'FULL' && <p><span>모집 완료</span></p>}
        {list.doneTrade === 'DONE' && <p><span>종료</span></p>}
        <p>{list.tradeMethod === 'BOTH' ? <><span>직거래</span><span>택배</span></> :
        (list.tradeMethod === 'DIRECT' ? <span>직거래</span> : <span>택배</span>)}</p>
      </div>
      </Link>
      {(!isLogin || isAdmin) && <img className="cardStar" src={star} alt="스크랩"/>}
      {isLogin && <img className="cardStar" src={star} alt="스크랩"/>}
    </div>
    ))}
    </>
  );
}
export default Card