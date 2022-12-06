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
  {city: "Seoul", town: "Gangnam", name : "강남구"},
  {city: "Seoul", town: "Gangdong", name : "강동구"},
  {city: "Seoul", town: "Gangbuk", name : "강북구"},
  {city: "Seoul", town: "Gangseo", name : "강서구"},
  {city: "Seoul", town: "Gwanak", name : "관악구"},
  {city: "Seoul", town: "Gwangjin", name : "광진구"},
  {city: "Seoul", town: "Guro", name : "구로구"},
  {city: "Seoul", town: "Geumcheon", name : "금천구"},
  {city: "Seoul", town: "Nowon", name : "노원구"},
  {city: "Seoul", town: "Dobong", name : "도봉구"},
  {city: "Seoul", town: "Dongdaemun", name : "동대문구"},
  {city: "Seoul", town: "Dongjak", name : "동작구"},
  {city: "Seoul", town: "Mapo", name : "마포구"},
  {city: "Seoul", town: "Seodaemun", name : "서대문구"},
  {city: "Seoul", town: "Seocho", name : "서초구"},
  {city: "Seoul", town: "Sungdong", name : "성동구"},
  {city: "Seoul", town: "Sungbuk", name : "성북구"},
  {city: "Seoul", town: "Songpa", name : "송파구"},
  {city: "Seoul", town: "Yangcheon", name : "양천구"},
  {city: "Seoul", town: "Yeongdeungpo", name : "영등포구"},
  {city: "Seoul", town: "Yongsan", name : "용산구"},
  {city: "Seoul", town: "Eunpyeong", name : "은평구"},
  {city: "Seoul", town: "Jongno", name : "종로구"},
  {city: "Seoul", town: "Jung", name : "중구"},
  {city: "Seoul", town: "Jungnang", name : "중랑구"},

  {city: "Seongnam", town: "Bundang", name : "분당구"},
  {city: "Seongnam", town: "Jung", name : "수정구"},
  {city: "Seongnam", town: "Jungnang", name : "중원구"},

  {city: "Suwon", town: "Yeongtong", name : "영통구"},
  {city: "Suwon", town: "Jangan", name : "장안구"},
  {city: "Suwon", town: "Gwonseon", name : "종로구"},
  {city: "Suwon", town: "Paldal", name : "팔달구"},

  {city: "Yongin", town: "Giheung", name : "기흥구"},
  {city: "Yongin", town: "Suji", name : "수지구"},
  {city: "Yongin", town: "Cheoin", name : "처인구"},

]




export {categories, getCategory, citys, towns}