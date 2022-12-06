import { Link } from "react-router-dom";
import fashionImg from "../resources/fashion_sample.png";
import star from "../resources/star.png";

const Card = ({lineUp, city, town}) =>{
  return(
    <div className="card">
      <Link to="/detail/1">
      <div className="cardImg">
        <img src={fashionImg} alt="개발하는 커비"/>
      </div>
      <div className="cardDesc">
        <p>카테고리</p>
        <p className="cardName">상품이름최대n글자</p>
        <p>0000원</p>
        <p><span>수원시</span><span>영통구</span></p>
        <p><span>1 / N</span><span>D - 5</span></p>
        <p><span>직거래</span><span>택배</span></p>
      </div>
      </Link>
      <img className="cardStar" src={star} alt="스크랩"/>
    </div>
  );
}
export default Card