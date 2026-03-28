// KODA ARP 12기 전체 명단 데이터 (수정 사항 반영 완료)
const members = [
    { no: 1, name: "김구현", id: "26001", group: "창조분과", company: "케이알산업", pos: "상무", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 2, name: "김기현", id: "26002", group: "개발분과", company: "코람코자산신탁", pos: "이사", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 3, name: "김선철", id: "26003", group: "개발분과", company: "㈜나산종합건축사사무소", pos: "사장", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 4, name: "김세훈", id: "26004", group: "융합분과", company: "㈜케이에스에이치파트너스", pos: "대표이사", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 5, name: "김승진", id: "26005", group: "도시분과", company: "미래에셋증권", pos: "이사", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 6, name: "김시찬", id: "26006", group: "개발분과", company: "성원엔지니어링", pos: "부사장", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 7, name: "김영미", id: "26007", group: "창조분과", company: "수협은행", pos: "지점장", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 8, name: "김영철", id: "26008", group: "도시분과", company: "바인그룹(동화세상에듀코)", pos: "회장", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 9, name: "김인식", id: "26009", group: "융합분과", company: "한국투자부동산신탁", pos: "상무보", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 10, name: "김재구", id: "26010", group: "융합분과", company: "데이터노우즈", pos: "사장", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 11, name: "김재만", id: "26011", group: "개발분과", company: "㈜에스피에스테크", pos: "대표이사", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 12, name: "김진학", id: "26012", group: "도시분과", company: "율림건설㈜", pos: "전무이사", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 13, name: "김태윤", id: "26013", group: "창조분과", company: "㈜아이엔에스시스템", pos: "대표이사", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 14, name: "김태형", id: "26014", group: "개발분과", company: "GS건설", pos: "상무", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 15, name: "김태훈", id: "26015", group: "융합분과", company: "우암건설 주식회사", pos: "사업본부장", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 16, name: "김평", id: "26016", group: "도시분과", company: "주식회사 신안디앤씨", pos: "대표이사", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 17, name: "김학성", id: "26017", group: "창조분과", company: "㈜성현이앤씨", pos: "대표이사", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 18, name: "남은오", id: "26018", group: "도시분과", company: "㈜태정종합건축", pos: "대표이사", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 19, name: "노거희", id: "26019", group: "융합분과", company: "주식회사 마리디앤씨", pos: "대표이사", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 20, name: "노원수", id: "26020", group: "개발분과", company: "㈜에이치엠", pos: "전무", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 21, name: "도종광", id: "26021", group: "도시분과", company: "요즘프라컨설팅", pos: "부문대표", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 22, name: "류권", id: "26022", group: "창조분과", company: "주식회사 대유건설", pos: "대표이사", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 23, name: "맹성호", id: "26023", group: "융합분과", company: "에이앤유디자인그룹", pos: "부사장", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 24, name: "박명식", id: "26024", group: "도시분과", company: "테마종합건설", pos: "이사", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 25, name: "박승옥", id: "26025", group: "창조분과", company: "육송㈜", pos: "회장", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 26, name: "박옥진", id: "26026", group: "융합분과", company: "마롬커뮤니케이션", pos: "기획이사", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 27, name: "박준형", id: "26027", group: "개발분과", company: "국토교통부", pos: "전역정책관", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 28, name: "박홍주", id: "26028", group: "도시분과", company: "㈜씨에이파트너스", pos: "대표이사", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 29, name: "방유진", id: "26029", group: "융합분과", company: "BNY멜론 투자자문", pos: "대표이사", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 30, name: "백승준", id: "26030", group: "창조분과", company: "㈜원진엔지니어링", pos: "대표이사", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 31, name: "송철한", id: "26031", group: "개발분과", company: "㈜스페이스에코", pos: "대표이사", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 32, name: "심동한", id: "26032", group: "융합분과", company: "우미건설㈜", pos: "상무", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 33, name: "안대호", id: "26033", group: "도시분과", company: "㈜나우동인건축", pos: "대표", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 34, name: "양상화", id: "26034", group: "개발분과", company: "주식회사 개성건설", pos: "상무이사", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 35, name: "오동진", id: "26035", group: "융합분과", company: "대신증권", pos: "본부장", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 36, name: "오재용", id: "26036", group: "창조분과", company: "한양증권", pos: "상무", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 37, name: "우정혁", id: "26037", group: "융합분과", company: "시너지로직", pos: "부사장", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 38, name: "이동걸", id: "26038", group: "개발분과", company: "신영증권㈜", pos: "이사대우", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 39, name: "이명화", id: "26039", group: "도시분과", company: "㈜디자인그룹꼬시나", pos: "대표", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 40, name: "이원석", id: "26040", group: "창조분과", company: "㈜림코", pos: "대표이사", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 41, name: "이은", id: "26041", group: "창조분과", company: "주식회사 엠비앤홀딩스", pos: "전무", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 42, name: "이정혁", id: "26042", group: "개발분과", company: "로고투자자문", pos: "상무", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 43, name: "이종원", id: "26043", group: "융합분과", company: "허브자산운용", pos: "상무", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 44, name: "이충한", id: "26044", group: "도시분과", company: "신성연립소규모조합", pos: "조합장", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 45, name: "장영은", id: "26045", group: "도시분과", company: "씨케이프라퍼티", pos: "대표", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 46, name: "장용서", id: "26046", group: "창조분과", company: "㈜서정인터내셔날", pos: "대표이사", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 47, name: "전정은", id: "26047", group: "개발분과", company: "㈜다원앤컴퍼니", pos: "전무", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 48, name: "정용재", id: "26048", group: "융합분과", company: "삼성증권㈜", pos: "팀장/이사", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 49, name: "정지융", id: "26049", group: "도시분과", company: "㈜위더스", pos: "사장", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 50, name: "정태희", id: "26050", group: "창조분과", company: "주식회사 바이오피아", pos: "이사", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 51, name: "정호경", id: "26051", group: "개발분과", company: "㈜삼건사", pos: "대표이사", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 52, name: "조민호", id: "26052", group: "도시분과", company: "㈜원포올디앤씨", pos: "대표이사", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 53, name: "조일훈", id: "26053", group: "창조분과", company: "JMC파트너스", pos: "대표", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { no: 54, name: "채지원", id: "26054", group: "개발분과", company: "루시아홀딩스㈜", pos: "회장", phone: "010-2915-8880", email: "jwchae@lucia.co.kr", addr: "서울 강남구 도산대로 420", birth: "1975-07-27" },
    { no: 55, name: "최상권", id: "26055", group: "개발분과", company: "하우스테일러", pos: "대표", phone: "010-4127-0505", email: "skchoi@houset.co.kr", addr: "서울 서초구 반포대로 100", birth: "1985-05-05" },
    { no: 56, name: "최재진", id: "26056", group: "융합분과", company: "HL디앤아이 한라", pos: "팀장", phone: "010-6607-2994", email: "jjchoi@halla.co.kr", addr: "서울 송파구 올림픽로 300", birth: "1976-05-01" },
    { no: 57, name: "최태진", id: "26057", group: "융합분과", company: "서초세무서", pos: "조사팀장", phone: "010-5298-9402", email: "tjchoi@nts.go.kr", addr: "서울 서초구 강남대로 193", birth: "1970-01-22" },
    { no: 58, name: "태원출", id: "26058", group: "창조분과", company: "삼성물산㈜", pos: "팀장", phone: "010-3320-0063", email: "wctae@samsung.com", addr: "서울 강동구 상일로 6길 26", birth: "1969-09-27" },
    { no: 59, name: "함경자", id: "26059", group: "도시분과", company: "㈜에스알비애드", pos: "부사장", phone: "010-2287-5511", email: "kjham@srb.co.kr", addr: "서울 강남구 역삼로 113", birth: "1973-10-05" },
    { no: 60, name: "홍창표", id: "26060", group: "창조분과", company: "유진투자증권", pos: "담당", phone: "010-0000-0000", email: "", addr: "", birth: "" }
];

// 화면 렌더링 로직 (검색 및 필터 포함)
function renderMembers(data) {
    const list = document.getElementById('memberList');
    if(!list) return;
    list.innerHTML = '';

    data.forEach(m => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="photo-area">PHOTO</div>
            <div class="info-area">
                <span class="group-badge">${m.group}</span>
                <div class="name">${m.name}</div>
                <div class="company">${m.company}</div>
                <div class="position">${m.pos}</div>
            </div>
        `;
        list.appendChild(card);
    });
}

// 필터링 및 검색 핸들러
document.getElementById('member-search')?.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    const filtered = members.filter(m => m.name.includes(val) || m.company.includes(val));
    renderMembers(filtered);
});

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const group = btn.dataset.filter;
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filtered = group === 'all' ? members : members.filter(m => m.group.includes(group));
        renderMembers(filtered);
    });
});

window.onload = () => renderMembers(members);
