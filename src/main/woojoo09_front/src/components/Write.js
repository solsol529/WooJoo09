import { useEffect, useState } from 'react'
import Map from './Map'
import {categories, citys, towns} from "../util/util"
import { storage } from "../api/firebase"
import representIcon from "../resources/representImg_icon.png"
import imgIcon from "../resources/images_icon.png"

const Write = () =>{

  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [city, setCity] = useState('none');
  const [town, setTown] = useState('all');
  const [countPartner, setCountPartner] = useState(1);
  const [productDetail, setProductDetail] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [thisDate, setThisDate] =  useState(new Intl.DateTimeFormat('kr').format(new Date()));
  const [dueYear, setDueYear] = useState(Number(thisDate.split('.')[0]));
  const [dueMonth, setDueMonth] = useState(Number(thisDate.split('.')[1]));
  const [dueDay, setDueDay] = useState(Number(thisDate.split('.')[2])+6);
  const [tradeMethod, setTradeMethod] = useState('');
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);

  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [representImg, setRepresentImg] = useState("");
  const [representUrl, setRepresentUrl] = useState("");
  const [representErr, setRepresentErr] = useState("");
  const [error, setError] = useState("");
  const [categoryErr, setCategoryErr] = useState("카테고리를 확인해 주세요!");
  const [nameErr, setNameErr] = useState("");
  const [priceErr, setPriceErr] = useState("");
  const [limitPartErr, setLimitPartErr] = useState("인원수를 확인해 주세요!");
  const [tradeMethodErr, setTradeMethodErr] = useState("거래 방법을 확인해 주세요!");
  const [dueDateErr, setDueDateErr] = useState("");
  const [detailErr, setDetailErr] = useState("");

  const [isName, setIsName] = useState('');
  const [isPrice, setIsPrice] = useState('');
  const [isTradeMethod, setIsTradeMethod] = useState('');
  const [isDetail, setIsDetail] = useState('');

  const [inputTradePlace, setInputTradePlace] = useState('');
  const [tradePlace, setTradePlace] = useState('');

  
  const [displayMap, setDisplayMap] = useState(false);

  const onChangeName = (e) => {
    setName(e.target.value);
    const name = e.target.value;
    if(name.length > 30){
      setIsName(false);
      setNameErr("상품명은 최대 30글자까지 가능합니다!");
    } else{
      setIsName(true);
      setNameErr("");
    }
  }

  const onChangePrice = (e) => {
    setPrice(e.target.value);
    const price = e.target.value;
    if(price > 9999999){
      setIsPrice(false);
      setPriceErr("가격은 최대 천만 원까지 가능합니다!");
    } else{
      setIsPrice(true);
      setPriceErr("");
    }
  }

  const onChangeTradePlace = (e) => {
    setInputTradePlace(e.target.value);
  }

  const onChangeTradeMethod = (e) => {
    setTradeMethod(e.target.value);
    setIsTradeMethod(true);
  }

  const onChangeProductDetail = (e) =>{
    if(e.target.value.length < 10) {
      setDetailErr("상세 설명을 10자 이상 입력해주세요")
      setIsDetail(false);
    }
    else if(e.target.value.length <= 2000) {
      setProductDetail(e.target.value);
      setDetailErr("");
      setIsDetail(true);
    }
    else{
      e.target.value = e.target.value.substr(0, 2001);
    }
  }

  const onChangeDueYear = (e) => {
    setDueYear(e.target.value);
  }

  const onChangeDueMonth = (e) => {
    setDueMonth(e.target.value);
  }

  const onChangeDueDay = (e) => {
    setDueDay(e.target.value);
  }

  const dateComplete = () =>{
  }

  const handleAddress = () => {
    setTradePlace(inputTradePlace);
    setDisplayMap(!displayMap);
  }
  const handleDisplayMap = () => {
    setDisplayMap(!displayMap);
  }

  const writeSubmit = ()=>{
    console.log("카테고리 : "+category);
    console.log("이름 : "+name);
    console.log("가격 : "+price);
  }

  const handleImage = (e) => {
    setUrls([]);
    let imgNum = 0;

    if (e.target.files.length === 0) {
      console.log("파일이 선택되지 않았습니다");
      setError("파일이 선택되지 않았습니다");
      setImages([]);
      setUrls([]);
      return;
    }

    for(const image of e.target.files){
      setImages((prevState) => [...prevState, image]);
      imgNum++;
      console.log(imgNum);

      if(imgNum > 5){
        // setError("이미지 갯수 초과");
        break;
      }
    }
    if(imgNum > 5) {
      setError("이미지 갯수 초과");
      setImages([]);
    } 
    else setError("");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (images.length < 1) {
      console.log("파일이 선택되지 않았습니다");
      setError("파일이 선택되지 않았습니다");
      return;
    }

    if ( images.length > 5){
      console.log("이미지는 대표이미지 포함 최대 6장까지 선택 가능합니다");
      setError("이미지는 대표이미지 포함 최대 6장까지 선택 가능합니다");
      setImages([]);
      return;
    }

    let imgNum = 1;

    for (const image of images){
       // 업로드 처리
      console.log("업로드 처리");
      const storageRef = storage.ref("images/writeTest/"); //어떤 폴더 아래에 넣을지 설정
      const imgName = ("Img"+ imgNum);
      console.log("imgNum" + imgNum);
      const imagesRef = storageRef.child(imgName);
      // const imagesRef = storageRef.child(image.name); //파일명

      console.log("파일을 업로드하는 행위");
      const upLoadTask = imagesRef.put(image);
      console.log("태스크 실행 전");

      upLoadTask.on(
        "state_changed",
        (snapshot) => {
          console.log("snapshot", snapshot);
          const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(percent + "% done");
        },
        (error) => {
          console.log("err", error);
          setError("파일 업로드에 실패했습니다." + error);
        },
        () => {
          upLoadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log("File available at", downloadURL);
            setUrls((prevState) => [...prevState, downloadURL]);
          });
        }
      );
      imgNum++;
    }
    setImages([]);
  };

  const handleImageRepresent = (event) => {
    setRepresentUrl("");
    const image = event.target.files[0];
    if (!image) {
      console.log("파일이 선택되지 않았습니다");
      setRepresentErr("파일이 선택되지 않았습니다");
      setRepresentImg("");
      setRepresentUrl("");
      return;
    }
    setRepresentImg(image);
    console.log(image);
    setRepresentErr("");
  };

  const onSubmitRepresent = (event) => {
    event.preventDefault();
    setError("");
    if (representImg === "") {
      console.log("파일이 선택되지 않았습니다");
      setRepresentErr("파일이 선택되지 않았습니다");
      return;
    }
    // 업로드 처리
    console.log("업로드 처리");
    const storageRef = storage.ref("images/profile/"); //어떤 폴더 아래에 넣을지 설정
    const imgName = ("represent");
    const imagesRef = storageRef.child(imgName);
    // const imagesRef = storageRef.child(image.name); //파일명

    console.log("파일을 업로드하는 행위");
    const upLoadTask = imagesRef.put(representImg);
    console.log("태스크 실행 전");

    upLoadTask.on(
      "state_changed",
      (snapshot) => {
        console.log("snapshot", snapshot);
        const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(percent + "% done");
      },
      (error) => {
        console.log("err", error);
        setRepresentErr("파일 업로드에 실패했습니다." + error);
      },
      () => {
        upLoadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
          setRepresentUrl(downloadURL);
        });
      }
    );
  };

  return(
    <div className="write">
      <p className="writeTitle">공동 구매 등록</p>
      <div className="writeInput">
      <div className='representInput'>
          <form className="writeRepresentInput" onSubmit={onSubmitRepresent}>
            <label><span>대표 이미지</span>
            <img src={representIcon} alt="대표이미지등록"/>
            <input type="file" accept="image/*" onChange={handleImageRepresent} />
            </label>
            {representImg && <p>{representImg.name}</p>}
            {representImg && <button onClick={onSubmitRepresent}>선택 이미지 등록</button>}
          </form>
          {representErr && <p>{representErr}</p>}
          {representUrl && (
            <div className="imgPreview">
              <p>이미지 미리보기</p>
              <div>
              <img className="representImgPreview" src={representUrl} alt="uploaded" />
              </div>
            </div>
          )}
      </div>
      <div className="imgInput">
        <form className="writeImgInput" onSubmit={onSubmit}>
          <label><span>상품 이미지</span>
          <img src={imgIcon} alt="상세이미지등록"/>
          <input multiple type="file" accept="image/*" onChange={handleImage} />
          </label>
          {images.length > 0 && 
          images.map((image)=>(<p>{image.name}</p>))}
          {images.length > 0 && 
          <button onClick={onSubmit}>선택 이미지 등록</button>}
        </form>
        {error && <p>{error}</p>}
        {(urls.length >= 1) && (
          <div className="imgPreview">
            <p>이미지 미리보기</p>
            <div>
            {urls.map((imageUrl)=>(<img className="writeImgPreview" src={imageUrl} alt="uploaded" />))}
            </div>
          </div>
        )}
      </div>
      <div className="categoryInput">
        <label><span>카테고리 선택<span className="essential7">*</span></span>
        <select
          value={category}
          onChange={({ target: { value } }) => {
            setCategory(value);
            console.log(value)
          }}
          onClick={()=>{setCategoryErr("");}}
        >
          {categories.map((e) => (
            <option key={e.value} value={e.value}>
              {e.name}
            </option>
          ))}
        </select>
        </label>
        {categoryErr && <span className="writeErr">{categoryErr}</span>}
      </div>
      <div className="nameInput">
        <label><span>상품명<span className="essential3">*</span></span>
        <input onChange={onChangeName}/></label>
        {!isName && <span className="writeErr">{nameErr}</span>}
      </div>
      <div className="priceInput">
        <label><span>가격<span className="essential2">*</span></span>
        <input type="number" onChange={onChangePrice}/>
        <span>원</span></label>
        {!isPrice && <span className="writeErr">{priceErr}</span>}
      </div>
      <div className="countPartnerInput">
      <label className="pageselect">
        <span>모집할 인원 수<span className="essential8">*</span></span>
            <select
              value={countPartner}
              onChange={({ target: { value } }) => {
                setCountPartner(value);
              }}
              onClick={()=>{setLimitPartErr("");}}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </label>
          {limitPartErr && <span className="writeErr">{limitPartErr}</span>}
      </div>
      <div className="dueDateInput">
        <label><span>모집 마감일<span className="essential6">*</span></span>
          <div>
          <input type="number" value={dueYear} onChange={onChangeDueYear}></input>
          <span>/</span>
          <input type="number" value={dueMonth} onChange={onChangeDueMonth}></input>
          <span>/</span>
          <input type="number" value={dueDay} onChange={onChangeDueDay}></input>
          </div>
        </label>
      </div>
      <div className="tradeMethodInput">
        <label><span>거래 방법<span className="essential5">*</span></span>
        <div>
        <label><input type="radio" name="method" onChange={onChangeTradeMethod} onClick={()=>{setTradeMethodErr("")}} value="direct" />직거래</label>
        <label><input type="radio" name="method" onChange={onChangeTradeMethod} onClick={()=>{setTradeMethodErr("")}} value="delivery"/>택배거래</label>
        <label><input type="radio" name="method" onChange={onChangeTradeMethod} onClick={()=>{setTradeMethodErr("")}} value="both"/>모두 가능</label>
        </div>
        </label>
        {tradeMethodErr && <span className="tradeMethodErr">{tradeMethodErr}</span>}
      </div>
      <div className="loactionInput">
        <label><span>동네</span>
        <select
          value={city}
          onChange={({ target: { value } }) => {
            setCity(value);
            // console.log(value)
          }}
        >
          <option value="none">지역 선택</option>
          {citys.map((e) => (
            <option key={e.city} value={e.name}>
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
            <option key={e.town} value={e.name}>
              {e.name}
            </option>
          ))}
        </select>
        </label>
      </div>
      <div className="placeInput">
        <label htmlFor="tradePlace"><span>직거래 장소</span>
        <div>
          <input id="tradePlace" placeholder="직거래 장소를 입력하세요" onChange={onChangeTradePlace} value={inputTradePlace} />
          {displayMap? <button onClick={handleDisplayMap}>지도 닫기</button> : 
          <button onClick={handleAddress}>지도 보기</button>}
        </div>
        </label>
        <div>{displayMap && <Map searchPlace={tradePlace} />}</div>
      </div>
      <div className="productDetailInput">
      <label><span>상세 설명<span className="essential52">*</span></span>
      <textarea name="writecontent" className="productDetailTextarea" 
        placeholder="상품의 설명을 자세하게 기재해주세요" onChange={onChangeProductDetail} cols="50" wrap="hard"></textarea>
      </label>
      <span className="writecontentlength">{productDetail.length}/2000</span>
      {detailErr && <span className="detailErr">{detailErr}</span>}
      </div>
      </div>
      {isName && isPrice && isTradeMethod && isDetail ? <button className="writeSubmitBtn" onClick={writeSubmit}>등록</button> :
      <button className="writeSubmitBtn nobutton">등록</button>}
    </div>
  );
}
export default Write