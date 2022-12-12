import "../style/findidcomplete.scss";
import { useNavigate } from "react-router-dom";


const FindIdComplete = ({findIdEmail}) => {
    const navigate = useNavigate();

    const onClickFindIdComLogin = () => {
        navigate('/login');
    }

    return (
        <>
        <div className="findIdCompleteMain">
            회원님의 아이디 찾기가 완료되었습니다.
        </div>
        <div className="findIdCompleteDt">
          회원님의 아이디는<br/>
          ooooo입니다.  
        </div>
        <div className="findIdCompleteLogin">
          <button onClick={onClickFindIdComLogin}>로그인하기</button>
        </div>
        </>
    )
}

export default FindIdComplete