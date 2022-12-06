import Footer from '../components/Footer';
import Header from "../components/Header";
import Celebrate from "../components/Celebrate";

const CelebratePage = () =>{
  return(
    <div className="wrapper">
      <Header/>
      <div className="celWrapper">     
        <div className="celebrate">
          <div className="celImg" />
            <div className="celMainWrite">         
            우주공구의 회원이 되신 것을 축하드립니다!
            </div>
            <div className="celDetailWrite">
              <h3>
              모든 회원가입절차가 완료되었습니다.<br/>
              로그인 후 우주공구의 모든 서비스를 이용할 수 있습니다.
              </h3>
            </div>
            <div className="celLowBox">
              <div className="celLoginBox">
                <button>로그인</button>
              </div>
              <div className="celMainBox">
                <button>메인으로</button>
              </div>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  );
}
export default CelebratePage