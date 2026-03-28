function showPage(pageId) {
    // 모든 페이지 숨기기
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    // 선택한 페이지 보여주기
    document.getElementById(pageId).classList.add('active');
}
