import Map from "../components/Map"
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import profile from "../resources/profile_sample.png"
import grade1 from "../resources/grade_icon1_wreck.png"
import star from "../resources/star.png";
import api from "../api/api";
import fashionsample from "../resources/fashion_sample.png"
import { defaultImgs } from "../util/util"

const Detail = ({isLogin, isAdmin, tradeNum}) =>{

  const [displayMap, setDisplayMap] = useState(false);
  const [searchPlace, setSearchPlace] = useState("경희대학교 정문");
  const [displayComplainMsg, setDisplayComplainMsg] = useState(false);
  const [displayDeleteMsg, setDisplayDeleteMsg] = useState(false);

  const [thisDate, setThisDate] =  useState(new Intl.DateTimeFormat('kr').format(new Date()));

  const [images, setImages] = useState([]);
    
    const [current, setCurrent] = useState(0);
    const [style, setStyle] = useState({
      marginLeft: `-${current}00%`
    });
    const [imgSize, setImgSize] = useState();
  
    const moveSlide = (i) => {
      let nextIndex = current + i;
      
      if (nextIndex < 0) nextIndex = imgSize - 1;
      else if (nextIndex >= imgSize) nextIndex = 0;
  
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

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
          try {
            const response = await api.tradeDetailSelect(tradeNum);
            console.log(response.data);
            console.log(response.data.detail.city)
            setData(response.data);
          } catch (e) {
            console.log(e);
          }
          try {
            const response = await api.tradeDetailImgSelect(tradeNum);
            console.log(response.data);
            setImages(response.data);
            console.log(response.data.length);
            setImgSize(response.data.length);
          } catch (e) {
            console.log(e);
          }
          setLoading(false);
        };
        fetchData();
    }, []);

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
      { data &&
        <>
        <div className="detailCard">
        <div className="detailImg">
          <div className="slide">
            {images.length > 1 && <div className="btn" onClick={() => { moveSlide(-1); }}>&lt;</div>}
            <div className="window">
              <div className="flexbox" style={style}>
                {images && images.map((img, i) => (
                  <div
                    key={i}
                    className="img"
                    style={{ backgroundImage: `url(${img.imgUrl})` }}
                  ></div>
                ))}
                {images.length === 0 &&
                  <div
                    className="img"
                    style={{ backgroundImage: `url(${defaultImgs.패션.imgUrl})` }}
                  ></div>
                }
              </div>
            </div>
            {images.length > 1 && <div className="btn2" onClick={() => { moveSlide(1); }}>&gt;</div>}
          </div>
          <div className="position">
            {images.length > 1 && images.map((x, i) => (
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
          <p>{data.detail.categoryName}</p>
          <p className="detailName">{data.detail.product}</p>
          <p>{data.detail.price}원</p>
          {/* <p><span>1 / N</span><span>D - 5</span></p>
          <p><span>직거래</span><span>택배</span></p> */}
          <p>{data.detail.city && <span>{data.detail.city}</span>}{data.detail.town && <span>{data.detail.town}</span>}</p>
          {data.detail.doneTrade === 'ONGOING' && <p><span>{data.detail.acceptPartner} / {data.detail.limitPartner}</span><span>D - {
          Math.floor((new Date(data.detail.dueDate).getTime() - new Date(thisDate).getTime()) / (1000 * 60 * 60 * 24))
          }</span></p>}
          {data.detail.doneTrade === 'FULL' && <p><span>모집 완료</span></p>}
          {data.detail.doneTrade === 'DONE' && <p><span>종료</span></p>}
          <p>{data.detail.tradeMethod === 'BOTH' ? <><span>직거래</span><span>택배</span></> :
          (data.detail.tradeMethod === 'DIRECT' ? <span>직거래</span> : <span>택배</span>)}</p>
          <img className="cardStar" src={star} alt="스크랩"/>
        </div>
      </div>
      {isLogin? <button>참여하기</button> : <button disabled="true">참여하기</button>}
      {!isLogin && <p className="detailErrMsg">공동구매에 참여하려면 <Link to="/main">로그인</Link>하세요!</p>}
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
      </>}
    </div>
  );
}
export default Detail