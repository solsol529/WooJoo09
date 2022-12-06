import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Banner = () =>{

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

  useEffect(() => {
      setStyle({ marginLeft: `-${current}00%` });
  }, [current]);
  
  return(
    <div className="banner">
      <div className="slide">
        <div className="btnLeft" onClick={() => { moveSlide(-1); }}>&lt;</div>
        <div className="window">
          <div className="flexbox" style={style}>
            {images.current.map((img, i) => (
              <Link
                to={img.url}
                key={i}
                className="img"
                style={{ backgroundImage: `url(${img.src})` }}
              ></Link>
            ))}
          </div>
        </div>
        <div className="btnRight" onClick={() => { moveSlide(1); }}>&gt;</div>
        <div className="bannerPage">{current + 1} / {images.current.length}</div>
      </div>
      {/* <div className="position">
        {images.current.map((x, i) => (
          <div
            key={i}
            className={i === current ? 'dot current' : 'dot'}
            ></div>
         ))}
      </div> */}
    </div>
  );
}
export default Banner