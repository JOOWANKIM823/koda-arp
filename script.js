const members = [
    { id: "26001", name: "김구현", company: "케이알산업", pos: "상무", group: "창조분과", phone: "010-9401-8700", email: "kimkh@krindus.co.kr", addr: "서울 송파구 위례순환로 480", birth: "1974-03-29" },
    { id: "26018", name: "남은오", company: "㈜태정종합건축", pos: "대표이사", group: "도시분과", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    { id: "26027", name: "박준형", company: "국토교통부", pos: "토지정책관", group: "개발분과", phone: "010-0000-0000", email: "", addr: "", birth: "" },
    // ... 60명 전원 데이터 유지
    { id: "26060", name: "홍창표", company: "유진투자증권", pos: "담당", group: "창조분과", phone: "010-4240-3382", email: "cp.hong@eugenefn.com", addr: "서울 영등포구 국제금융로 24", birth: "1971-04-18" }
];

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    if(pageId === 'list-page') renderMembers(members);
}

function renderMembers(data) {
    const listDiv = document.getElementById('member-list');
    listDiv.innerHTML = data.map(m => `
        <div class="card" onclick="showDetail('${m.id}')">
            <div class="card-img">
                <img src="${m.name}.jpg" onerror="this.parentElement.innerHTML='PHOTO'">
            </div>
            <div class="card-info">
                <div class="group" style="color:#c5a059; font-size:0.7rem;">${m.group}</div>
                <div class="name">${m.name}</div>
                <div class="company" style="font-size:0.8rem; color:#666;">${m.company}</div>
            </div>
        </div>
    `).join('');
}

function showDetail(id) {
    const m = members.find(item => item.id === id);
    if(!m) return;
    const detailContent = document.getElementById('member-detail-content');
    detailContent.innerHTML = `
        <div class="detail-box">
            <div class="detail-header">
                <div class="detail-photo">
                    <img src="${m.name}.jpg" onerror="this.src=''">
                </div>
                <div>
                    <div style="color:blue; font-size:0.75rem; font-weight:bold;">ARP 12기</div>
                    <div style="font-size:1.5rem; font-weight:800; margin:4px 0;">${m.name}</div>
                    <div style="color:#666; font-size:0.95rem;">${m.company} | ${m.pos}</div>
                </div>
            </div>
            <table class="detail-table">
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

document.getElementById('search-input')?.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    const filtered = members.filter(m => m.name.includes(val) || m.company.includes(val));
    renderMembers(filtered);
});

window.onload = () => showPage('home-page');
