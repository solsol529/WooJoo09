const categories = [
  {
    name : "패션",
    value : "fashion"
  },
  {
    name : "뷰티",
    value : "beauty"
  },
  {
    name : "생활",
    value : "life"
  },
  {
    name : "식품",
    value : "food"
  },
  {
    name : "취미",
    value : "hobby"
  },
  {
    name : "반려동물",
    value : "pet"
  },
];

const getCategory = (category) =>{
  for(let e of categories){
    if(e.value === category) return e.name
  }
}

const citys = [
  {city: "Seoul", name : "서울시"},
  {city: "Seongnam", name : "성남시"},
  {city: "Suwon", name : "수원시"},
  {city: "Yongin", name : "용인시"},
  {city: "Hanam", name : "하남시"}
]

const towns = [
  {city: "서울시", town: "Gangnam", name : "강남구"},
  {city: "서울시", town: "Gangdong", name : "강동구"},
  {city: "서울시", town: "Gangbuk", name : "강북구"},
  {city: "서울시", town: "Gangseo", name : "강서구"},
  {city: "서울시", town: "Gwanak", name : "관악구"},
  {city: "서울시", town: "Gwangjin", name : "광진구"},
  {city: "서울시", town: "Guro", name : "구로구"},
  {city: "서울시", town: "Geumcheon", name : "금천구"},
  {city: "서울시", town: "Nowon", name : "노원구"},
  {city: "서울시", town: "Dobong", name : "도봉구"},
  {city: "서울시", town: "Dongdaemun", name : "동대문구"},
  {city: "서울시", town: "Dongjak", name : "동작구"},
  {city: "서울시", town: "Mapo", name : "마포구"},
  {city: "서울시", town: "Seodaemun", name : "서대문구"},
  {city: "서울시", town: "Seocho", name : "서초구"},
  {city: "서울시", town: "Sungdong", name : "성동구"},
  {city: "서울시", town: "Sungbuk", name : "성북구"},
  {city: "서울시", town: "Songpa", name : "송파구"},
  {city: "서울시", town: "Yangcheon", name : "양천구"},
  {city: "서울시", town: "Yeongdeungpo", name : "영등포구"},
  {city: "서울시", town: "Yongsan", name : "용산구"},
  {city: "서울시", town: "Eunpyeong", name : "은평구"},
  {city: "서울시", town: "Jongno", name : "종로구"},
  {city: "서울시", town: "Jung", name : "중구"},
  {city: "서울시", town: "Jungnang", name : "중랑구"},

  {city: "성남시", town: "Bundang", name : "분당구"},
  {city: "성남시", town: "Jung", name : "수정구"},
  {city: "성남시", town: "Jungnang", name : "중원구"},

  {city: "수원시", town: "Yeongtong", name : "영통구"},
  {city: "수원시", town: "Jangan", name : "장안구"},
  {city: "수원시", town: "Gwonseon", name : "종로구"},
  {city: "수원시", town: "Paldal", name : "팔달구"},

  {city: "용인시", town: "Giheung", name : "기흥구"},
  {city: "용인시", town: "Suji", name : "수지구"},
  {city: "용인시", town: "Cheoin", name : "처인구"},

]

const defaultImgs = {
  패션 : {
    imgUrl: "https://firebasestorage.googleapis.com/v0/b/developerkirbydrive.appspot.com/o/woojoo09%2Futil%2Ffashion_sample.png?alt=media&token=bccd92dc-1499-4ad9-bdb5-b33e469a6360"
  },
  뷰티 : {
    imgUrl : "https://firebasestorage.googleapis.com/v0/b/developerkirbydrive.appspot.com/o/woojoo09%2Futil%2Fbeauty_sample.png?alt=media&token=8f95a809-ba80-4fbe-bb7a-fd9f6eb69010"
  },
  생활 : {
    imgUrl : "https://firebasestorage.googleapis.com/v0/b/developerkirbydrive.appspot.com/o/woojoo09%2Futil%2Flife_sample.png?alt=media&token=cad35a69-1bb6-47aa-9d39-a09eaa74a77a"
  },
  식품 : {
    imgUrl : "https://firebasestorage.googleapis.com/v0/b/developerkirbydrive.appspot.com/o/woojoo09%2Futil%2Ffood_sample.png?alt=media&token=0299f8e3-732a-44b3-8024-257b07875063"
  },
  취미 : {
    imgUrl : "https://firebasestorage.googleapis.com/v0/b/developerkirbydrive.appspot.com/o/woojoo09%2Futil%2Fhobby_sample.png?alt=media&token=45de7960-2aa3-4fad-9809-2cd36dc0587e"
  },
  반려동물 : {
    imgUrl : "https://firebasestorage.googleapis.com/v0/b/developerkirbydrive.appspot.com/o/woojoo09%2Futil%2Fpet_sample.png?alt=media&token=a27d2dbd-66b4-44ec-a928-33ef99b1f0a8"
  },
}



export {categories, getCategory, citys, towns, defaultImgs}