// 1. KODA ARP 12기 전체 명단 데이터 (수정 사항 및 상세 정보 반영)
const members = [
    { id: "26001", name: "김구현", company: "케이알산업", pos: "상무", group: "창조분과", phone: "010-9401-8700", email: "kimkh@krindus.co.kr", addr: "서울 송파구 위례순환로 480", birth: "1974-03-29", img: "" },
    { id: "26002", name: "김기현", company: "코람코자산신탁", pos: "이사", group: "개발분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26003", name: "김선철", company: "㈜나산종합건축사사무소", pos: "사장", group: "개발분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26004", name: "김세훈", company: "㈜케이에스에이치파트너스", pos: "대표이사", group: "융합분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26005", name: "김승진", company: "미래에셋증권", pos: "이사", group: "도시분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26006", name: "김시찬", company: "성원엔지니어링", pos: "부사장", group: "개발분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26007", name: "김영미", company: "수협은행", pos: "지점장", group: "창조분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26008", name: "김영철", company: "바인그룹(동화세상에듀코)", pos: "회장", group: "도시분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26009", name: "김인식", company: "한국투자부동산신탁", pos: "상무보", group: "융합분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26010", name: "김재구", company: "데이터노우즈", pos: "사장", group: "융합분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26011", name: "김재만", company: "㈜에스피에스테크", pos: "대표이사", group: "개발분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26012", name: "김진학", company: "율림건설㈜", pos: "전무이사", group: "도시분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26013", name: "김태윤", company: "㈜아이엔에스시스템", pos: "대표이사", group: "창조분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26014", name: "김태형", company: "GS건설", pos: "상무", group: "개발분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26015", name: "김태훈", company: "우암건설 주식회사", pos: "사업본부장", group: "융합분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26016", name: "김평", company: "주식회사 신안디앤씨", pos: "대표이사", group: "도시분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26017", name: "김학성", company: "㈜성현이앤씨", pos: "대표이사", group: "창조분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26018", name: "남은오", company: "㈜태정종합건축", pos: "대표이사", group: "도시분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26019", name: "노거희", company: "주식회사 마리디앤씨", pos: "대표이사", group: "융합분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26020", name: "노원수", company: "㈜에이치엠", pos: "전무", group: "개발분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26021", name: "도종광", company: "요즘프라컨설팅", pos: "부문대표", group: "도시분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26022", name: "류권", company: "주식회사 대유건설", pos: "대표이사", group: "창조분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26023", name: "맹성호", company: "에이앤유디자인그룹", pos: "부사장", group: "융합분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26024", name: "박명식", company: "테마종합건설", pos: "이사", group: "도시분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26025", name: "박승옥", company: "육송㈜", pos: "회장", group: "창조분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26026", name: "박옥진", company: "마롬커뮤니케이션", pos: "기획이사", group: "융합분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26027", name: "박준형", company: "국토교통부", pos: "전역정책관", group: "개발분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26028", company: "㈜씨에이파트너스", name: "박홍주", pos: "대표이사", group: "도시분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26029", name: "방유진", company: "BNY멜론 투자자문", pos: "대표이사", group: "융합분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26030", name: "백승준", company: "㈜원진엔지니어링", pos: "대표이사", group: "창조분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26031", name: "송철한", company: "㈜스페이스에코", pos: "대표이사", group: "개발분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26032", name: "심동한", company: "우미건설㈜", pos: "상무", group: "융합분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26033", name: "안대호", company: "㈜나우동인건축", pos: "대표", group: "도시분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26034", name: "양상화", company: "주식회사 개성건설", pos: "상무이사", group: "개발분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26035", name: "오동진", company: "대신증권", pos: "본부장", group: "융합분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26036", name: "오재용", company: "한양증권", pos: "상무", group: "창조분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26037", name: "우정혁", company: "시너지로직", pos: "부사장", group: "융합분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26038", name: "이동걸", company: "신영증권㈜", pos: "이사대우", group: "개발분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26039", name: "이명화", company: "㈜디자인그룹꼬시나", pos: "대표", group: "도시분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26040", name: "이원석", company: "㈜림코", pos: "대표이사", group: "창조분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26041", name: "이은", company: "주식회사 엠비앤홀딩스", pos: "전무", group: "창조분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26042", name: "이정혁", company: "로고투자자문", pos: "상무", group: "개발분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26043", name: "이종원", company: "허브자산운용", pos: "상무", group: "융합분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26044", name: "이충한", company: "신성연립소규모조합", pos: "조합장", group: "도시분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26045", name: "장영은", company: "씨케이프라퍼티", pos: "대표", group: "도시분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26046", name: "장용서", company: "㈜서정인터내셔날", pos: "대표이사", group: "창조분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26047", name: "전정은", company: "㈜다원앤컴퍼니", pos: "전무", group: "개발분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26048", name: "정용재", company: "삼성증권㈜", pos: "팀장/이사", group: "융합분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26049", name: "정지융", company: "㈜위더스", pos: "사장", group: "도시분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26050", name: "정태희", company: "주식회사 바이오피아", pos: "이사", group: "창조분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26051", name: "정호경", company: "㈜삼건사", pos: "대표이사", group: "개발분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26052", name: "조민호", company: "㈜원포올디앤씨", pos: "대표이사", group: "도시분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26053", name: "조일훈", company: "JMC파트너스", pos: "대표", group: "창조분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" },
    { id: "26054", name: "채지원", company: "루시아홀딩스㈜", pos: "회장", phone: "010-2915-8880", email: "jwchae@lucia.co.kr", addr: "서울 강남구 도산대로 420", birth: "1975-07-27", img: "" },
    { id: "26055", name: "최상권", company: "하우스테일러", pos: "대표", phone: "010-4127-0505", email: "skchoi@houset.co.kr", addr: "서울 서초구 반포대로 100", birth: "1985-05-05", img: "" },
    { id: "26056", name: "최재진", company: "HL디앤아이 한라", pos: "팀장", phone: "010-6607-2994", email: "jjchoi@halla.co.kr", addr: "서울 송파구 올림픽로 300", birth: "1976-05-01", img: "" },
    { id: "26057", name: "최태진", company: "서초세무서", pos: "조사팀장", phone: "010-5298-9402", email: "tjchoi@nts.go.kr", addr: "서울 서초구 강남대로 193", birth: "1970-01-22", img: "" },
    { id: "26058", name: "태원출", company: "삼성물산㈜", pos: "팀장", phone: "010-3320-0063", email: "wctae@samsung.com", addr: "서울 강동구 상일로 6길 26", birth: "1969-09-27", img: "" },
    { id: "26059", name: "함경자", company: "㈜에스알비애드", pos: "부사장", phone: "010-2287-5511", email: "kjham@srb.co.kr", addr: "서울 강남구 역삼로 113", birth: "1973-10-05", img: "" },
    { id: "26060", name: "홍창표", company: "유진투자증권", pos: "담당", group: "창조분과", phone: "010-0000-0000", email: "", addr: "", birth: "", img: "" }
];

// 2. 페이지 전환 함수
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const targetPage = document.getElementById(pageId);
    if(targetPage) targetPage.classList.add('active');
    
    // 리스트 페이지로 이동 시 전체 명단 렌더링
    if(pageId === 'list-page') renderMembers(members);
}

// 3. 명단 렌더링 함수
function renderMembers(data) {
    const listDiv = document.getElementById('member-list');
    if(!listDiv) return;
    listDiv.innerHTML = '';

    data.forEach(m => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => showDetail(m.id);
        card.innerHTML = `
            <div class="card-img">
                ${m.img ? `<img src="${m.img}" onerror="this.parentElement.innerHTML='PHOTO'">` : 'PHOTO'}
            </div>
            <div class="card-info">
                <div class="group">${m.group}</div>
                <div class="name">${m.name}</div>
                <div class="company">${m.company}</div>
                <div class="pos">${m.pos}</div>
            </div>
        `;
        listDiv.appendChild(card);
    });
}

// 4. 상세 페이지 출력 함수
function showDetail(id) {
    const m = members.find(item => item.id === id);
    if(!m) return;

    const detailContent = document.getElementById('member-detail-content');
    if(!detailContent) return;

    detailContent.innerHTML = `
        <div class="detail-box">
            <div class="detail-header">
                <div class="detail-photo">
                    ${m.img ? `<img src="${m.img}" onerror="this.style.display='none'">` : ''}
                </div>
                <div>
                    <div style="color:#007bff; font-size:0.8rem; font-weight:bold;">ARP 12기</div>
                    <div style="font-size:1.6rem; font-weight:800; margin:5px 0; color:#333;">${m.name}</div>
                    <div style="color:#666; font-size:0.95rem;">${m.company} | ${m.pos}</div>
                </div>
            </div>
            <table class="detail-table">
                <tr><th>기수</th><td>12기</td></tr>
                <tr><th>학번</th><td>${m.id}</td></tr>
                <tr><th>분과</th><td>${m.group}</td></tr>
                <tr><th>생년월일</th><td>${m.birth || '-'}</td></tr>
                <tr><th>휴대전화</th><td>${m.phone || '-'}</td></tr>
                <tr><th>이메일</th><td>${m.email || '-'}</td></tr>
                <tr><th>회사주소</th><td>${m.addr || '-'}</td></tr>
            </table>
        </div>
    `;
    showPage('detail-page');
}

// 5. 검색 및 필터링 기능
document.getElementById('search-input')?.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    const filtered = members.filter(m => 
        m.name.toLowerCase().includes(val) || 
        m.company.toLowerCase().includes(val)
    );
    renderMembers(filtered);
});

// 6. 초기 로드
window.onload = () => {
    showPage('home-page');
};
