import { Link } from "react-router-dom";

const MyWrite = () =>{
  return(
    <div className="mywrite">
      <p>내 공구</p>
      <p><Link to="/myTrade">주최한 공구</Link></p>
      <p><Link to="/myTrade">참여 대기 중인 공구</Link></p>
      <p><Link to="/myTrade">참여 중인 공구</Link></p>
      <p><Link to="/myTrade">참여 완료인 공구</Link></p>
      <p><Link to="/myTrade">찜한 공구</Link></p>
    </div>
  );
};
export default MyWrite;