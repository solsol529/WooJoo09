import Header from "../components/Header"
import Footer from "../components/Footer"
import termPrivacy from "../style/termPrivacy.scss"

const TermPage = ()=>{




    return (
      <div>
        <Header/>
          <div className="termWrapper">
            <div className="term">
              <h2>이용 약관</h2>
                <div className="termBoxOut">
                    <div className="termBoxInner">
                    <p style={{fontWeight: "bold"}}>제1조    (목적)</p>
                    <br />
                      이 우주공구 공동구매 시범 서비스 이용약관(이하 “이 약관”)은, 주식회사 우주공구(이하 “우주공구” 또는 “회사”라 함)과 회사가 제공하는 우주공구 상품 판매 시범 서비스(이하 “상품 판매 시범 서비스" 또는 “이 서비스”)를 이용하고자 하는 사업자(이하 “판매자"라 함)간의 권리와 의무 및 기타 제반사항을 명확히 하는 것을 목적으로 합니다.<br/>
                      <br />
                      <br />
                      <br />
                    <p style={{fontWeight: "bold"}}>제2조    (용어의 정의)</p>
                    <br />
                      본 약관에서 사용하는 용어의 정의는 다음과 같습니다.<br/>
                      1. “우주공구 서비스”란 이용자가 회사의 서비스를 이용할 수 있도록 회사가 제공하는 공동거래 정보 공유를 위한 웹/앱 플랫폼 서비스 일체를 의미합니다.<br/>
                      2. “이용자”란 우주공구 서비스에 가입하여 고유번호를 부여 받은 후 이를 이용하는 사람을 의미합니다.<br/>
                      3. “주최자”란 우주공구의 이용자로서 프로필을 생성하고 공동구매 서비스를 이용하는데 있어 이 약관을 준수하기로 동의한 사람을 의미합니다.<br/>
                      4. “프로필"이란 우주공구 서비스 내에서 주최자의 정보를 이용자에게 제공하고 재화 또는 용역에 관한 정보를 노출할 수 있는 서비스를 의미합니다.<br/>
                      5. “공동구매 시범 서비스"란 회사가 프로필에 주최자가 등록한 재화 또는 용역을 이용자에게 제공할 수 있도록 중개하는 서비스를 의미합니다.<br/>
                      <br />
                      <br />
                      <br />
                    <p style={{fontWeight: "bold"}}>제3조    (약관의 효력)</p>
                    <br />
                      1. 회사는 본 약관을 우주공구 서비스 화면에 게시하여, 상품 판매 시범 서비스를 이용하고자 하는 판매자가 본 약관을 확인할 수 있도록 하여야 합니다.<br/>
                      2. 본 약관에 의해 공동 구매 시범 서비스를 이용하고자 하는 자는 이 약관의 내용을 숙지하고 주최자와 회사간의 권리, 의무관계에 대해 동의함을 확인합니다.<br/>
                      3. 회사는 필요한 경우 관련 법령을 위배하지 않는 범위 내에서 이 약관을 개정할 수 있으며, 이 경우 개정 내용과 적용 일자를 명시하여 우주공구 서비스를 통해 그 적용일자 7일 전부터 적용일자 전일까지 공지합니다. 다만 변경 내용이 주최자에게 불리한 변경의 경우, 개정약관의 적용일자 30일 전부터 적용일자까지 공지합니다.<br/>
                      4. 주최자가 개정약관에 동의하지 않는 경우 개정 약관의 적용일 이전에 거부 의사를 표시하고 이 약관에 대한 이 약관을 해지할 수 있습니다.<br/>
                      5. 회사가 본 조 3항에 따라 개정약관을 공지하면서 주최자에게 적용일 전까지 의사표시를 하지 않으면 의사 표시가 표명된 것으로 본다는 뜻을 명확하게 공지하였음에도 주최자가 명시적으로 거부 의사를 표명하지 아니한 경우 개정약관에 동의한 것으로 봅니다.<br/>
                      <br/>
                      <br />
                      <br />
                    <p style={{fontWeight: "bold"}}>제4조    (이 약관의 성립)</p>
                    <br />
                      1. 이 약관은 공동구매 서비스를 이용하고자하는 자가 이 약관에 동의하고 회사가 정한 절차에 따라 서비스 이용 신청을 하며, 이에 대해 회사가 심사를 거쳐 승낙함으로써 성립합니다. 회사는 이용승낙의 의사표시를 해당 서비스 화면에 게시하거나 전자우편 또는 기타 방법으로 할 수 있습니다.<br/>
                      2. 이용신청자는 등록신청의 정확성을 확인하기 위하여 회사가 별도로 요청하는 증빙서류가 있을 경우 신속히 제출하여야 하며, 회사는 해당 서류를 징구하는 시점까지 가입 신청에 대한 승낙을 보류하거나 거부할 수 있습니다.<br/>
                      3. 공동구매 서비스 이용 신청은 14세 이상 가능합니다.<br/>
                      4. 회사는 제1항에 따라 공동구매 서비스 이용을 신청한 자 중에 아래 각호에 해당하는 경우에는 승인을 거부할 수 있으며, 등록이 된 이후에도 아래 각호의 사유가 확인된 경우 승낙을 취소할 수 있습니다.<br/>
                      ㅇ실명이 아니거나 타인의 정보(사업자 번호 등)를 이용한 경우<br/>
                      ㅇ허위의 정보를 기재하거나, 회사가 제시하는 내용을 기재하지 않은 경우<br/>
                      ㅇ회사로부터 판매 중단 조치 등을 받은 판매자가 그 조치 기간 중에 이 약관을 임의 해지하고 재이용신청을 하는 경우<br/>
                      ㅇ가입을 신청한 자의 귀책사유로 인하여 승인이 불가능하거나 필수 서류 또는 회사가 요청하는 서류를 제출하지 않는 등 기타 제반 사항을 위반하여 신청하는 경우<br/>
                      ㅇ기타 이 약관에 위배되거나 위법 또는 부당한 이용신청 등 회사가 합리적인 판단에 의하여 필요하다고 인정하는 경우<br/>
                      5. 주최자는 이용신청시 제공한 정보가 변경되는 경우 즉시 회사에게 변경된 정보를 제공하여야 하며, 회사는 주최자가 정당한 사유 없이 변경된 정보를 제공하지 않는 경우 약관의 해지, 이 서비스 이용 제한 또는 결제 금액의 지급 또는 정산 보류를 포함하여 필요한 조치를 취할 수 있습니다. 이 경우 주최자는 회사의 조치에 따라 제3자에게 발생할 수 있는 사항에 대한 모든 책임을 부담합니다.<br/>
                      <br/>
                      <br />
                      <br />
                    <p style={{fontWeight: "bold"}}>제5조    (각 당사자의 역할과 의무)</p>
                    <br />
                      1. 회사와 주최자는 서로 독립적인 사업자이며, 이 약관에 대한 동의 또는 승낙에 따라 회사와 주최자 사이에 고용, 도급, 대리, 가맹(프랜차이즈), 납품, 위탁판매, 모자회사, 합작, 동업, 조합 등 어떠한 다른 관계도 성립하지 않음을 상호 명확히 확인합니다. 주최자는 어떠한 경우에도 자신이 우주공구과 위와 같은 관계에 있음을 표시, 암시하거나 이용자가 위와 같은 관계가 있는 것 같이 오인할 수 있는 행위를 하여서는 아니됩니다.<br/>
                      2. 회사는 이 서비스를 위하여 프로필에 주최자가 재화 또는 서비스를 등록하여 판매할 수 있는 기능을 제공하고 시스템을 운영, 관리하며, 회사가 통신판매의 당사자가 아니라는 사실을 이용자에게 고지합니다.<br/>
                      3. 주최자는 이 서비스를 통해 스스로 정한 공동구매 조건(상품의 종류, 서비스 조건, 배송 또는 설치 조건, 보증 또는 할인 등)에 따라 재화 또는 서비스를 자신의 상호로 주최하며, 이용자가 공동구매를 신청한 재화 또는 서비스에 대하여 공동구매가 확정된 경우 이를 이용자에게 배송, 전달하거나 서비스를 제공하여야 합니다. 주최자는 이 서비스를 통해 자신이 등록한 상품 정보의 이미지, 영상, 텍스트 등 모든 내용, 자신과 이용자 사이에 이루어지는 모든 거래행위 자체와 등록한 상품에 대하여 품질의 적합성, 완전성, 안전성, 합법성 또는 제3자 권리를 침해하지 않는다는 점 등 거래에 관한 모든 책임을 스스로 부담하며, 거래에 관하여 이용자와 분쟁이 발생하는 경우 자신의 비용과 책임으로 이를 모두 해결하여야 합니다.<br/>
                      <br/>
                      <br />
                      <br />
                    <p style={{fontWeight: "bold"}}>제6조    (계약의 해지 및 손해배상)</p>
                    <br />
                      1. 당사자 일방은 다음 각 호에 해당하는 귀책사유가 있는 상대방에게 10 영업일의 기간을 정하여 시정을 최고한 후 그 기간 동안 시정되지 않은 경우 이 약관을 해지할 수 있습니다.<br/>
                      ㅇ상대방이 이 약관상의 의무를 불이행하는 경우<br/>
                      ㅇ상대방이 일방 당사자의 명예 또는 신용을 훼손한 경우<br/>
                      ㅇ상대방에게 통보한 월 정산금액 등이 허위인 경우<br/>
                      ㅇ기타 이 약관의 목적을 달성하는 것이 객관적으로 불가능한 경우<br/>
                      2. 당사자는 다음의 경우 상대방에 대한 통보로써 즉시 이 약관을 해지할 수 있습니다.<br/>
                      ㅇ상대방이 이 약관에 따른 권리의무 및 데이터를 일방 당사자의 사전 동의 없이 제3자에게 양도, 전매하거나 질권 기타 담보의 목적물로 제공하는 경우<br/>
                      ㅇ상대방이 중요한 재산에 대하여 강제집행(가압류, 가처분포함)을 받거나 경매신청을 받았을 경우<br/>
                      ㅇ상대방에게 부도, 파산, 워크아웃, 회생 또는 파산절차개시 신청 등 사유가 발생한 경우<br/>
                      3. 본 조에 의해 이 약관이 해지되는 경우 귀책사유가 있는 당사자는 상대방이 입은 손해를 모두 배상해야 합니다. 단, 천재지변 또는 클라우드 서비스의 장애 등 불가항력에 의한 경우는 예외로 합니다.<br/>
                      <br/>
                      <br />
                      <br />
                    <p style={{fontWeight: "bold"}}>제7조    (비밀유지의무)</p>
                    <br />
                      1. 이 약관과 관련하여 상대방으로부터 제공받은 모든 정보는 다음 각 호 어느 하나에 해당하는 경우를 제외하고는 비밀로 하고, 이 약관상의 권리 또는 의무를 이행하기 위한 목적 이외에 이를 사용하거나 제3자에게 제공할 수 없습니다.<br/>
                      ㅇ당사자들이 공개하기로 합의한 사항<br/>
                      ㅇ공지된 정보<br/>
                      ㅇ정보를 제공받은 당사자가 제3자로부터 이미 적법하게 취득한 정보<br/>
                      ㅇ법률에 특별한 규정이 있거나 법령을 준수하기 위하여 불가피하게 정보를 제공하여야 하는 경우<br/>
                      2. 본 조의 비밀유지의무는 이 약관이 이행되지 않거나 해지 기타 사유로 종료된 경우에도 그 때로부터 2년간 유효합니다.<br/>
                      <br/>
                      <br />
                      <br />
                    <p style={{fontWeight: "bold"}}>제8조    (취득한 개인정보의 보호)</p>
                    <br />
                      1. 주최자는 공동구매 서비스의 이용에 따라 취득한 이용자 등 타인의 개인정보를 상품의 배송 또는 전달을 위한 목적 이외의 용도로 사용하거나 제3자에게 제공하는 등 외부에 유출할 수 없으며, 관련 법령 등에 따라 철저히 보호하여야 합니다.<br/>
                      2. 우주공구는 배송 등의 목적으로 주최자에게 공개되어 있는 이용자의 개인정보를 우주공구의 정책에 따라 상당 기간이 경과한 후 비공개 조치할 수 있습니다.<br/>
                      3. 주최자가 본 조를 위반하여 이용자와 분쟁이 발생하는 경우 자신의 노력과 비용으로 우주공구를 면책시켜야 하며, 민/형사 상 일체의 법적 책임을 부담하여야 합니다.<br/>
                      <br/>
                      <br />
                      <br />
                    <p style={{fontWeight: "bold"}}>제9조    (양도금지)</p>
                    <br />
                      당사자는 이 약관상의 권리의무를 제3자에게 양도 및 이전하거나 담보로 제공할 수 없습니다.<br/>
                      <br/>
                      <br />
                      <br />
                    <p style={{fontWeight: "bold"}}>제10조    (면책)</p>
                    <br />
                      1. 우주공구는 이용자들과 주최자 사이의 거래를 위한 시스템만을 제공할 뿐, 파트너가 등록한 상품 등에 관한 정보 또는 거래에 관하여 분쟁이 발생한 경우, 그 분쟁의 결과로 인한 책임은 판매자가 부담합니다. 제3자가 우주공구를 상대로 민/형사상 등의 문제를 제기하는 경우 주최자는 문제의 해결을 위하여 필요한 정보를 제공하는 등 적극 협조하여야 하며, 이와 관련하여 우주공구에 손해 또는 비용이 발생하는 경우 이를 배상 또는 보상합니다.<br/>
                      2. 우주공구는 적법한 권리자의 요구가 있거나, 컴퓨터 등 정보통신설비의 보수, 점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우 우주공구 서비스 제공을 일시적으로 중단할 수 있으며, 이와 관련하여 우주공구는 고의 또는 중대한 과실이 없는 한 책임을 부담하지 않습니다.<br/>
                      <br/>
                      <br />
                      <br />
                    <p style={{fontWeight: "bold"}}>제11조    (약관 개정)</p>
                    <br />
                      약관 변경시 회사는 우주공구 서비스를 통해 공지하며, 공지일로부터 7일 후 적용됩니다. 판매자가 변경되는 약관 내용에 대해 이의가 있는 경우 7일 이내에 제기할 수 있으며, 회사가 약관 변경을 명확하게 알리거나 통지하였음에도 불구하고 7일 이내에 주최자가 거부 의사를 명시적으로 나타내지 않는 경우에는, 주최자는 약관의 개정에 동의하는 것으로 간주됩니다.<br/>
                      <br/>
                      <br />
                      <br />
                    <p style={{fontWeight: "bold"}}>제12조    (분쟁의 해결)</p>
                    <br />
                      1. 이 약관으로 인하여 또는 이 약관과 관련하여 분쟁이 발생하는 경우 당사자들은 일차적으로 협의를 통한 원만한 해결을 도모합니다.<br/>
                      2. 제1항에 의한 협의가 이루어지지 않는 경우 이 약관으로 인하여 또는 이 약관과 관련하여 발생하는 모든 분쟁의 해결은 서울중앙지방법원을 제1심의 합의관할로 하는 소송에 의합니다.<br/>
                      <br/>
                      <br />
                      <br />
                      <div className="termDate">
                      적용 일자<br/>
                      2022년 12월 26일<br/>   
                      </div>                       
                    </div>
                    </div>                      
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default TermPage