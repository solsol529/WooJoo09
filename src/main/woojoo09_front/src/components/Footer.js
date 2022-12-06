import { Link } from "react-router-dom";
const Footer = () =>{
  return(
    <div className="footer">
      <div>
      <Link to ="/">이용약관</Link>
      <Link to ="/">개인정보처리방침</Link>
      <Link to ="/">서비스소개</Link>
      <Link to ="/">카카오톡 문의하기</Link>
      </div>
      <div>
      <p>우주공구는 통신판매중개자이며 통신판매의 당사자가 아닙니다.</p>
      <p>따라서 개별 공급자가 등록하여 공급한 상품에 대한 거래정보 및 거래에 대한 책임은 공급자가 부담하며,
      이에 대해 우주공구는 어떠한 책임과 의무를 지니지 아니합니다.</p>
      </div>
    </div>
  );
}
export default Footer;