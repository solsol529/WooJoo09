import "../style/resetpwd.scss";


const ResetPwdComplete = () => {

    return (
        <>
        <h2>비밀번호 재설정</h2>
        <div className="resetPwdMain">
          <div>
            <span>비밀번호가 정상적으로 변경되었습니다.</span>
          </div>
        </div>          
        <div className="resetPwdLoginBtn">
          <button>로그인하기</button>     
        </div>
        </>
    )

}
export default ResetPwdComplete;