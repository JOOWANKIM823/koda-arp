// 60명 원우 전체 데이터베이스
const members = [
    { no: 1, name: "김구현", id: "26001", group: "개발분과", field: "시공", company: "케이알산업", pos: "상무", phone: "010-9401-8700", email: "kimkh@krindus.co.kr", addr: "서울 송파구 위례순환로 480" },
    { no: 2, name: "김기현", id: "26002", group: "융합분과", field: "금융", company: "코람코자산신탁", pos: "이사", phone: "010-8591-3971", email: "escoba@hanmail.net", addr: "서울 강남구 삼성로 511" },
    { no: 3, name: "김선철", id: "26003", group: "도시분과", field: "설계/감리", company: "㈜나산종합건축사사무소", pos: "사장", phone: "010-2319-8502", email: "sunchal2001@hanmail.net", addr: "서울 송파구 법원로 114" },
    { no: 4, name: "김세훈", id: "26004", group: "도시분과", field: "시행", company: "㈜케이에스에이치파트너스", pos: "대표이사", phone: "010-5100-4967", email: "sehun.kim@newnnext.com", addr: "서울 금천구 디지털로10길 69" },
    { no: 5, name: "김승진", id: "26005", group: "창조분과", field: "금융", company: "미래에셋증권", pos: "이사", phone: "010-7760-0509", email: "seungjin.kim@miraeasset.com", addr: "서울 중구 을지로5길 26" },
    { no: 6, name: "김시찬", id: "26006", group: "도시분과", field: "전문건설", company: "성원엔지니어링", pos: "부사장", phone: "010-5410-0637", email: "artchan1234@naver.com", addr: "충북 청주시 청원구 오창읍 주성2길 8" },
    { no: 7, name: "김영미", id: "26007", group: "개발분과", field: "금융", company: "수협은행", pos: "지점장", phone: "010-6396-2717", email: "kimseller@suhyup-bank.com", addr: "경기 수원시 팔달구 권광로 197" },
    { no: 8, name: "김영철", id: "26008", group: "도시분과", field: "시행", company: "바인그룹 (동화세상에듀코)", pos: "회장", phone: "010-5239-4542", email: "educo@educo.co.kr", addr: "서울 동대문구 왕산로 25" },
    { no: 9, name: "김인식", id: "26009", group: "도시분과", field: "금융", company: "한국투자부동산신탁", pos: "상무보", phone: "010-9250-3743", email: "nkis0208@naver.com", addr: "서울 강남구 테헤란로 518" },
    { no: 10, name: "김재구", id: "26010", group: "개발분과", field: "분양대행", company: "데이터노우즈", pos: "사장", phone: "010-9351-6355", email: "theanswer@dataknows.ai", addr: "서울 강남구 강남대로 484" },
    { no: 11, name: "김재만", id: "26011", group: "융합분과", field: "시행", company: "㈜에스피에스테크", pos: "대표이사", phone: "010-6334-0232", email: "spst114@naver.com", addr: "서울 성동구 광나루로 130" },
    { no: 12, name: "김진학", id: "26012", group: "개발분과", field: "시공", company: "율림건설㈜", pos: "전무이사", phone: "010-3545-5355", email: "jhkim@yullim.co.kr", addr: "서울 서초구 바우뫼로 215" },
    { no: 13, name: "김태윤", id: "26013", group: "개발분과", field: "시행", company: "㈜아이엔에스시스템", pos: "대표이사", phone: "010-2685-0651", email: "tykim@ins.co.kr", addr: "서울 강남구 봉은사로 429" },
    { no: 14, name: "김태형", id: "26014", group: "융합분과", field: "시공", company: "GS건설", pos: "상무", phone: "010-2221-5789", email: "thkim@gsenc.com", addr: "서울 종로구 종로 33" },
    { no: 15, name: "김태훈", id: "26015", group: "개발분과", field: "시공", company: "우암건설 주식회사", pos: "사업본부장", phone: "010-5430-0430", email: "thkim@wooam.co.kr", addr: "서울 강남구 학동로 306" },
    { no: 16, name: "김평", id: "26016", group: "창조분과", field: "시행", company: "주식회사 신안디앤씨", pos: "대표이사", phone: "010-7437-7474", email: "pkim@shinan.co.kr", addr: "서울 강남구 테헤란로 512" },
    { no: 17, name: "김학성", id: "26017", group: "융합분과", field: "설계/감리", company: "㈜성현이앤씨", pos: "대표이사", phone: "010-9251-9005", email: "hskim@sh-enc.co.kr", addr: "서울 성동구 연무장11길 22" },
    { no: 18, name: "남은오", id: "26018", group: "융합분과", field: "시공", company: "㈜태정종합건축", pos: "대표이사", phone: "010-2608-3654", email: "eonam@tj-const.co.kr", addr: "서울 송파구 송파대로 201" },
    { no: 19, name: "노거희", id: "26019", group: "융합분과", field: "시행", company: "주식회사 마리디앤씨", pos: "대표이사", phone: "010-4282-9550", email: "khno@mari.co.kr", addr: "서울 강남구 선릉로 604" },
    { no: 20, name: "노원수", id: "26020", group: "창조분과", field: "부동산관리", company: "㈜에이치엠", pos: "전무", phone: "010-4174-1470", email: "wsno@hm.co.kr", addr: "서울 강남구 역삼로 413" },
    { no: 21, name: "도종광", id: "26021", group: "도시분과", field: "설계/감리", company: "한국인프라컨설팅", pos: "부문대표", phone: "010-9155-7314", email: "jkdo@kic.co.kr", addr: "서울 마포구 마포대로 12" },
    { no: 22, name: "류권", id: "26022", group: "창조분과", field: "시공", company: "주식회사 대유건설", pos: "대표이사", phone: "010-9766-8283", email: "kryu@daeyou.co.kr", addr: "경기 안양시 동안구 시민대로 161" },
    { no: 23, name: "맹성호", id: "26023", group: "개발분과", field: "설계/감리", company: "에이앤유디자인그룹", pos: "부사장", phone: "010-6243-2342", email: "shmaeng@anudg.com", addr: "서울 강남구 테헤란로 501" },
    { no: 24, name: "박명식", id: "26024", group: "융합분과", field: "시공", company: "테마종합건설", pos: "이사", phone: "010-3389-9428", email: "mspark@thema.co.kr", addr: "서울 송파구 정의로 7길 13" },
    { no: 25, name: "박승옥", id: "26025", group: "융합분과", field: "시행", company: "육송㈜", pos: "회장", phone: "010-5211-2407", email: "sopark@yuksong.co.kr", addr: "서울 금천구 가산디지털1로 168" },
    { no: 26, name: "박옥진", id: "26026", group: "창조분과", field: "홍보/마케팅", company: "마롬커뮤니케이션", pos: "기획이사", phone: "010-8829-7616", email: "ojpark@marom.co.kr", addr: "서울 서초구 강남대로 369" },
    { no: 27, name: "박준형", id: "26027", group: "도시분과", field: "공공기관", company: "국토교통부", pos: "토지정책관", phone: "010-2263-2274", email: "jhpark@korea.kr", addr: "세종특별자치시 도움6로 11" },
    { no: 28, name: "박홍주", id: "26028", group: "개발분과", field: "시행", company: "㈜씨에이파트너스", pos: "대표이사", phone: "010-3470-8421", email: "hjpark@cap.co.kr", addr: "서울 강남구 테헤란로 406" },
    { no: 29, name: "방유진", id: "26029", group: "개발분과", field: "금융", company: "BNY Mellon 투자자문", pos: "대표이사", phone: "010-4168-8604", email: "yjbang@bnymellon.com", addr: "서울 중구 남대문로 84" },
    { no: 30, name: "백승준", id: "26030", group: "융합분과", field: "전문건설", company: "㈜원진엔지니어링", pos: "대표이사", phone: "010-2393-1361", email: "sjbaek@wonjin.co.kr", addr: "서울 양천구 목동동로 293" },
    { no: 31, name: "송철한", id: "26031", group: "도시분과", field: "시행", company: "㈜스페이스에코", pos: "대표이사", phone: "010-9107-7948", email: "chsong@spaceeco.co.kr", addr: "서울 용산구 한강대로 21길 7" },
    { no: 32, name: "심동한", id: "26032", group: "개발분과", field: "시공", company: "우미건설㈜", pos: "상무", phone: "010-8780-0075", email: "dhsim@woomi.co.kr", addr: "서울 강남구 언주로 30길 39" },
    { no: 33, name: "안대호", id: "26033", group: "도시분과", field: "설계/감리", company: "㈜나우동인건축", pos: "대표", phone: "010-4559-4453", email: "dhahn@nowarch.com", addr: "서울 강남구 테헤란로 441" },
    { no: 34, name: "양상화", id: "26034", group: "개발분과", field: "시공", company: "주식회사 개성건설", pos: "상무이사", phone: "010-3713-0930", email: "shyang@gaeseong.co.kr", addr: "서울 영등포구 국회대로 70길 15" },
    { no: 35, name: "오동진", id: "26035", group: "창조분과", field: "금융", company: "대신증권", pos: "본부장", phone: "010-9748-2788", email: "djoh@daishin.com", addr: "서울 중구 삼일대로 343" },
    { no: 36, name: "오재용", id: "26036", group: "도시분과", field: "금융", company: "한양증권", pos: "상무", phone: "010-3788-7736", email: "jyoh@hygood.co.kr", addr: "서울 영등포구 국제금융로 2길 28" },
    { no: 37, name: "우정혁", id: "26037", group: "융합분과", field: "분양대행", company: "주식회사 시너지로직", pos: "부사장", phone: "010-6333-1134", email: "jhwoo@synergy.co.kr", addr: "서울 강남구 선릉로 514" },
    { no: 38, name: "이동걸", id: "26038", group: "개발분과", field: "금융", company: "신영증권㈜", pos: "이사대우", phone: "010-8865-9031", email: "dklee@shinyoung.com", addr: "서울 영등포구 국제금융로 8길 16" },
    { no: 39, name: "이명화", id: "26039", group: "창조분과", field: "인테리어", company: "㈜디자인그룹꼬시나", pos: "대표", phone: "010-7339-2607", email: "mhlee@cocina.co.kr", addr: "서울 서초구 방배로 162" },
    { no: 40, name: "이원석", id: "26040", group: "도시분과", field: "시행", company: "㈜림코", pos: "대표이사", phone: "010-8979-3485", email: "wslee@rimko.co.kr", addr: "서울 강서구 공항대로 247" },
    { no: 41, name: "이은", id: "26041", group: "창조분과", field: "시행", company: "주식회사 엠비앤", pos: "전무", phone: "010-9702-6566", email: "elee@mbn.co.kr", addr: "서울 강남구 테헤란로 419" },
    { no: 42, name: "이정혁", id: "26042", group: "개발분과", field: "금융", company: "로고스투자자문", pos: "상무", phone: "010-2998-7727", email: "jhlee@logos.co.kr", addr: "서울 영등포구 의사당대로 97" },
    { no: 43, name: "이종원", id: "26043", group: "융합분과", field: "금융", company: "허브자산운용", pos: "상무", phone: "010-8916-7950", email: "jwlee@hubam.co.kr", addr: "서울 영등포구 여의대로 108" },
    { no: 44, name: "이충한", id: "26044", group: "도시분과", field: "정비사업", company: "신성연립소규모조합", pos: "조합장", phone: "010-5540-0926", email: "chlee@shinsung.com", addr: "서울 서초구 강남대로 43" },
    { no: 45, name: "장영은", id: "26045", group: "창조분과", field: "기타", company: "씨케이프라퍼티", pos: "대표", phone: "010-5252-8999", email: "yejang@ckprop.co.kr", addr: "서울 강남구 논현로 641" },
    { no: 46, name: "장용서", id: "26046", group: "융합분과", field: "기타", company: "㈜서정인터내셔날", pos: "대표이사", phone: "010-8906-3742", email: "ysjang@sjinter.co.kr", addr: "서울 송파구 중대로 135" },
    { no: 47, name: "전정은", id: "26047", group: "창조분과", field: "인테리어", company: "㈜다원앤컴퍼니", pos: "전무", phone: "010-3662-0225", email: "jejun@dawon.co.kr", addr: "서울 강남구 역삼로 542" },
    { no: 48, name: "정용재", id: "26048", group: "개발분과", field: "금융", company: "삼성증권㈜", pos: "팀장/이사", phone: "010-6543-0730", email: "yjjung@samsung.com", addr: "서울 서초구 서초대로 74길 11" },
    { no: 49, name: "정지융", id: "26049", group: "도시분과", field: "기타", company: "㈜위더스", pos: "사장", phone: "010-9116-7059", email: "jyjung@withus.co.kr", addr: "서울 강남구 광평로 280" },
    { no: 50, name: "정태희", id: "26050", group: "융합분과", field: "기타", company: "주식회사 바이오피아", pos: "이사", phone: "010-8600-8293", email: "thjung@biopia.co.kr", addr: "경기 성남시 분당구 판교로 253" },
    { no: 51, name: "정호경", id: "26051", group: "창조분과", field: "기타", company: "㈜삼건사", pos: "대표이사", phone: "010-9115-6775", email: "hkjung@samkun.co.kr", addr: "서울 영등포구 양산로 53" },
    { no: 52, name: "조민호", id: "26052", group: "개발분과", field: "분양대행", company: "㈜원포올디앤씨", pos: "대표이사", phone: "010-9109-9239", email: "mhcho@oneforall.co.kr", addr: "서울 강남구 테헤란로 82길 15" },
    { no: 53, name: "조일훈", id: "26053", group: "창조분과", field: "홍보/마케팅", company: "JMC파트너스", pos: "대표", phone: "010-6560-0091", email: "ihcho@jmc.co.kr", addr: "서울 강남구 강남대로 382" },
    { no: 54, name: "채지원", id: "26054", group: "개발분과", field: "시행", company: "루시아홀딩스㈜", pos: "회장", phone: "010-2915-8880", email: "jwchae@lucia.co.kr", addr: "서울 강남구 도산대로 420" },
    { no: 55, name: "최상권", id: "26055", group: "융합분과", field: "부동산중개", company: "하우스테일러", pos: "대표", phone: "010-4127-0505", email: "skchoi@houset.co.kr", addr: "서울 서초구 반포대로 100" },
    { no: 56, name: "최재진", id: "26056", group: "창조분과", field: "시공", company: "HL디앤아이 한라", pos: "팀장", phone: "010-6607-2994", email: "jjchoi@halla.co.kr", addr: "서울 송파구 올림픽로 300" },
    { no: 57, name: "최태진", id: "26057", group: "도시분과", field: "공공기관", company: "서초세무서", pos: "조사팀장", phone: "010-5298-9402", email: "tjchoi@nts.go.kr", addr: "서울 서초구 강남대로 193" },
    { no: 58, name: "태원출", id: "26058", group: "융합분과", field: "시공", company: "삼성물산㈜", pos: "팀장", phone: "010-3320-0063", email: "wctae@samsung.com", addr: "서울 강동구 상일로 6길 26" },
    { no: 59, name: "함경자", id: "26059", group: "개발분과", field: "기타", company: "㈜에스알비애드", pos: "부사장", phone: "010-2287-5511", email: "kjham@srb.co.kr", addr: "서울 강남구 역삼로 113" },
    { no: 60, name: "홍창표", id: "26060", group: "도시분과", field: "금융", company: "유진투자증권", pos: "담당", phone: "010-9543-4445", email: "cphong@eugenefn.com", addr: "서울 영등포구 국제금융로 24" }
];

// 리스트 그리기 함수 (사진 + 전체 상세 정보 연결)
function renderMembers(data) {
    const listWrap = document.getElementById('member-list-items');
    listWrap.innerHTML = data.map((m) => `
        <li class="member-card" onclick="openDetail(${m.no})">
            <div class="card-left">
                <div class="profile-img-area">
                    <img src="img/${m.name}.jpg" alt="${m.name}" onerror="this.src='https://via.placeholder.com/55x55?text=No+Pic'">
                </div>
                <div class="m-info">
                    <div class="name-tag"><strong>${m.name}</strong> <span class="batch-badge">${m.id}</span></div>
                    <p class="company">${m.company}</p>
                    <p class="position">${m.pos} | ${m.field}</p>
                </div>
            </div>
            <div class="card-right">
                <a href="tel:${m.phone}" class="action-btn call" onclick="event.stopPropagation()"><i class="fas fa-phone"></i></a>
            </div>
        </li>
    `).join('');
}

// 상세 정보 팝업 열기
function openDetail(no) {
    const m = members.find(item => item.no === no);
    const body = document.getElementById('modal-body');
    body.innerHTML = `
        <div class="modal-header">
            <img src="img/${m.name}.jpg" class="modal-profile-img" onerror="this.src='https://via.placeholder.com/100x100?text=No+Pic'">
            <h3>${m.name} 원우님</h3>
        </div>
        <div class="detail-item"><label>학번</label><span>${m.id}</span></div>
        <div class="detail-item"><label>분과 / 분야</label><span>${m.group} / ${m.field}</span></div>
        <div class="detail-item"><label>소속 / 직위</label><span>${m.company} / ${m.pos}</span></div>
        <div class="detail-item"><label>휴대전화</label><span>${m.phone}</span></div>
        <div class="detail-item"><label>이메일</label><span>${m.email}</span></div>
        <div class="detail-item"><label>회사주소</label><span>${m.addr}</span></div>
    `;
    document.getElementById('member-detail-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('member-detail-modal').style.display = 'none';
}

// 초기 실행
window.onload = () => {
    renderMembers(members);
};