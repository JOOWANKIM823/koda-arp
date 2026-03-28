// 리스트 그리기 함수 (사진 추가 버전)
function renderMembers(data) {
    const listWrap = document.getElementById('member-list-items');
    listWrap.innerHTML = data.map((m) => `
        <li class="member-card" onclick="openDetail(${m.no})">
            <div class="card-left">
                <div class="profile-img-area">
                    <img src="img/${m.name}.jpg" alt="${m.name}" onerror="this.src='https://via.placeholder.com/50x50?text=No+Pic'">
                </div>
                <div class="m-in