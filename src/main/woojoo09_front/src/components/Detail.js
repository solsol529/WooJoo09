import Map from "../components/Map"
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import profile from "../resources/profile_sample.png"
import grade1 from "../resources/grade_icon1_wreck.png"
import star from "../resources/star.png";

const Detail = () =>{

  const [displayMap, setDisplayMap] = useState(false);
  const [searchPlace, setSearchPlace] = useState("경희대학교 정문");
  const [displayComplainMsg, setDisplayComplainMsg] = useState(false);
  const [displayDeleteMsg, setDisplayDeleteMsg] = useState(false);

  const images = useRef([
    {src:'https://www.nintendo.co.kr/character/kirby/assets/img/home/kirby-forgotten-land-hero.jpg',
    url: '/category/fashion'}, 
    {src: 'https://www.nintendo.co.kr/front_images/news/1011/3f0153b93509b883f64237bc63502f42.jpg',
    url: '/category/beauty'}, 
    {src: 'https://www.nintendo.co.kr/front_images/news/924/aa92775cee80f39d0f6b5e30714ae1c9.jpg',
    url: '/category/life'}]);
  
    const [current, setCurrent] = useState(0);
    const [style, setStyle] = useState({
      marginLeft: `-${current}00%`
    });
    const imgSize = useRef(images.current.length);
  
    const moveSlide = (i) => {
      let nextIndex = current + i;
      
      if (nextIndex < 0) nextIndex = imgSize.current - 1;
      else if (nextIndex >= imgSize.current) nextIndex = 0;
  
      setCurrent(nextIndex);
    };

    const handleDisplayMap = ()=>{
      setDisplayMap(!displayMap);
    }

    useEffect(()=>{
      window.scrollTo({ top: 0, behavior: "auto" });
    }, [])
  
    useEffect(() => {
        setStyle({ marginLeft: `-${current}00%` });
    }, [current]);

    const writeComplain = () =>{
      setDisplayDeleteMsg(false);
      setDisplayComplainMsg(true);
    }

    const writeDelete = () =>{
      setDisplayComplainMsg(false);
      setDisplayDeleteMsg(true);
    }

  return(
    <div className="detail">
      <div className="detailCard">
        <div className="detailImg">
          <div className="slide">
            <div className="btn" onClick={() => { moveSlide(-1); }}>&lt;</div>
            <div className="window">
              <div className="flexbox" style={style}>
                {images.current.map((img, i) => (
                  <div
                    key={i}
                    className="img"
                    style={{ backgroundImage: `url(${img.src})` }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="btn2" onClick={() => { moveSlide(1); }}>&gt;</div>
          </div>
          <div className="position">
            {images.current.map((x, i) => (
              <div
                key={i}
                className={i === current ? 'dot current' : 'dot'}
                ></div>
            ))}
          </div>
        </div>
        {/* <div className="detailCardDesc">
        </div> */}
        <div className="cardDesc">
          <p>카테고리</p>
          <p className="detailName">상품이름은최대30자까지가능합니다최대30글자는이만큼입니다</p>
          <p>0000원</p>
          <p><span>수원시</span><span>영통구</span></p>
          <p><span>1 / N</span><span>D - 5</span></p>
          <p><span>직거래</span><span>택배</span></p>
          <img className="cardStar" src={star} alt="스크랩"/>
        </div>
      </div>
      <button>참여하기</button>
      <p className="detailErrMsg">공동구매에 참여하려면 <Link to="/main">로그인</Link>하세요!</p>
      <div className="detailProfile">
        <div>
          <img src={profile} alt="기본프로필"/>
          <p><img src={grade1} alt="등급아이콘"/>닉네임은최대10글자</p>
        </div>
        <div>
          <p>상점 소개</p>
          <p>상점소개는최대500자까지가능합니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글</p>
        </div>
        <div>
          <p>
            <p>공구 주최 횟수</p>
            <p><span>n</span><span> 번 이상</span></p>
          </p>
          <p>
            <p>공구 참여 횟수</p>
            <p><span>n</span><span> 번 이상</span></p>
          </p>
        </div>
      </div> 
      <div className="detailContent">
        <div className="detailDesc">
          <p>상세 설명</p>
          <p>
          상품상세설명은최대1000자까지가능합니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 1000자는 이만큼입니다. 10
          </p>
        </div>
        <div className="detailMethod">
          <p>거래 방법</p>
          <div className="direct">
            <p>직거래{<span className="methodOk">가능</span>}</p>
            <p>직거래 장소 : <span>{searchPlace}</span></p>
            <span onClick={handleDisplayMap}>{displayMap? "지도 닫기": "지도 보기"}</span>
            {displayMap&& <Map searchPlace={searchPlace}/>}
          </div>
          <div className="delivery">
            <p>택배거래{<span className="methodNok">불가능</span>} </p>
            <p>자세한 사항은 상점소개 또는 주최자에게 문의하세요</p>
          </div>
        </div>  
      </div>
      <div className="detailState">
        <p>
          <span onClick={writeComplain}>신고하기</span>
          <span>수정</span>
          <span onClick={writeDelete}>삭제</span>
        </p>
        <div>
          {displayComplainMsg && !displayDeleteMsg && <p className="complainMsg">신고 처리 되었습니다</p>}
          {displayDeleteMsg && !displayComplainMsg && <p className="deleteMsg">
            <span>공동구매를 정말로 삭제하시겠습니까? <span>삭제하기</span></span>
            <span>삭제하시면 채팅내역과 거래내용이 모두 사라집니다</span></p>}
        </div>
      </div>
    </div>
  );
}
export default Detail