// 나중에 페이지 전환 기능을 여기에 넣을 예정입니다.
// 지금은 간단하게 클릭 이벤트만 연결해둘게요.

document.querySelectorAll('.grid-item').forEach((item, index) => {
    item.addEventListener('click', () => {
        const menuName = item.querySelector('strong').innerText;
        alert(menuName + ' 페이지는 현재 준비 중입니다!');
    });
});

console.log("KODA ARP 앱이 준비되었습니다.");
