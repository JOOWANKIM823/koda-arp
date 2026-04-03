document.addEventListener("DOMContentLoaded", () => {
  const FAVORITES_KEY = "kodaArpFavorites";

  const pages = document.querySelectorAll(".page");
  const navButtons = document.querySelectorAll(".nav-btn");

  const recentNotices = document.getElementById("recentNotices");
  const weeklyLectureCard = document.getElementById("weeklyLectureCard");

  const memberSearch = document.getElementById("memberSearch");
  const memberList = document.getElementById("memberList");
  const departmentFilterButtons = document.querySelectorAll(".filter-chip");
  const favoriteOnlyBtn = document.getElementById("favoriteOnlyBtn");

  let activeDepartmentFilter = "전체";
  let favoriteOnlyMode = false;

  const memberModal = document.getElementById("memberModal");
  const memberModalCloseBtn = document.getElementById("memberModalCloseBtn");
  const modalMemberName = document.getElementById("modalMemberName");
  const modalMemberCompany = document.getElementById("modalMemberCompany");
  const modalMemberPosition = document.getElementById("modalMemberPosition");
  const modalMemberType = document.getElementById("modalMemberType");
  const modalMemberField = document.getElementById("modalMemberField");
  const modalMemberDepartment = document.getElementById("modalMemberDepartment");
  const modalMemberId = document.getElementById("modalMemberId");
  const modalMemberPhone = document.getElementById("modalMemberPhone");
  const modalMemberEmail = document.getElementById("modalMemberEmail");
  const modalMemberIntro = document.getElementById("modalMemberIntro");

  const modalCallBtn = document.getElementById("modalCallBtn");
  const modalCopyPhoneBtn = document.getElementById("modalCopyPhoneBtn");
  const modalCopyEmailBtn = document.getElementById("modalCopyEmailBtn");
  const contactToast = document.getElementById("contactToast");

  const noticeList = document.getElementById("noticeList");
  const curriculumList = document.getElementById("curriculumList");
  const galleryList = document.getElementById("galleryList");
  const boardList = document.getElementById("boardList");

  const memberCount = document.getElementById("memberCount");
  const noticeCount = document.getElementById("noticeCount");
  const curriculumCount = document.getElementById("curriculumCount");
  const galleryCount = document.getElementById("galleryCount");

  const attendanceIdInput = document.getElementById("attendanceIdInput");
  const attendanceSearchBtn = document.getElementById("attendanceSearchBtn");
  const attendanceInitial = document.getElementById("attendanceInitial");
  const attendanceNotFound = document.getElementById("attendanceNotFound");
  const attendanceResult = document.getElementById("attendanceResult");
  const attendanceResultName = document.getElementById("attendanceResultName");
  const attendanceResultId = document.getElementById("attendanceResultId");
  const attendanceResultMeta = document.getElementById("attendanceResultMeta");
  const attendanceResultRate = document.getElementById("attendanceResultRate");
  const attendancePresentCount = document.getElementById("attendancePresentCount");
  const attendanceLateCount = document.getElementById("attendanceLateCount");
  const attendanceEarlyLeaveCount = document.getElementById("attendanceEarlyLeaveCount");
  const attendanceAbsentCount = document.getElementById("attendanceAbsentCount");
  const attendanceWeeklyList = document.getElementById("attendanceWeeklyList");

  let currentModalPhone = "";
  let currentModalEmail = "";
  let toastTimer = null;

  function getFavorites() {
    try {
      const raw = localStorage.getItem(FAVORITES_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  }

  function saveFavorites(favorites) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }

  function toggleFavorite(memberId) {
    const favorites = getFavorites();
    const exists = favorites.includes(memberId);

    const nextFavorites = exists
      ? favorites.filter((id) => id !== memberId)
      : [...favorites, memberId];

    saveFavorites(nextFavorites);
  }

  function updateFavoriteOnlyButton() {
    if (!favoriteOnlyBtn) return;
    favoriteOnlyBtn.classList.toggle("active", favoriteOnlyMode);
    favoriteOnlyBtn.textContent = favoriteOnlyMode
      ? "★ 즐겨찾기만 보는 중"
      : "☆ 즐겨찾기만 보기";
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return dateString;
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  }

  function parseCurriculumDate(dateString) {
    const match = String(dateString).match(/(\d{2})월\s*(\d{2})일/);
    if (!match) return null;
    const month = Number(match[1]);
    const day = Number(match[2]);
    return new Date(2026, month - 1, day);
  }

  function sanitizePhone(phone) {
    return String(phone || "").replace(/[^0-9+]/g, "");
  }

  function normalizeEmail(email) {
    return String(email || "").trim();
  }

  function setButtonEnabled(button, enabled) {
    if (!button) return;
    button.disabled = !enabled;
    button.classList.toggle("disabled", !enabled);
  }

  function showToast(message) {
    if (!contactToast) return;
    contactToast.textContent = message;
    contactToast.classList.remove("hidden");

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      contactToast.classList.add("hidden");
    }, 1800);
  }

  async function copyText(text, successMessage) {
    if (!text) {
      showToast("복사할 정보가 없습니다.");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      showToast(successMessage);
    } catch (error) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();

      try {
        document.execCommand("copy");
        showToast(successMessage);
      } catch (err) {
        showToast("복사에 실패했습니다.");
      }

      document.body.removeChild(textarea);
    }
  }

  function tryCall(phone) {
    if (!phone) {
      showToast("전화번호가 없습니다.");
      return;
    }
    window.location.href = `tel:${phone}`;
  }

  function switchPage(pageId) {
    pages.forEach((page) => {
      page.classList.toggle("active", page.id === pageId);
    });

    navButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.page === pageId);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderCounts() {
    memberCount.textContent = `${members.length}명`;
    noticeCount.textContent = `${notices.length}건`;
    curriculumCount.textContent = `${curriculum.length}개`;
    galleryCount.textContent = `${gallery.length}장`;
  }

  function renderWeeklyLecture() {
    if (!weeklyLectureCard) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let selectedItem = null;

    for (const item of curriculum) {
      const itemDate = parseCurriculumDate(item.date);
      if (!itemDate) continue;
      if (itemDate >= today) {
        selectedItem = item;
        break;
      }
    }

    if (!selectedItem && curriculum.length) {
      selectedItem = curriculum[curriculum.length - 1];
    }

    if (!selectedItem) {
      weeklyLectureCard.innerHTML = `
        <div class="weekly-lecture-week">안내</div>
        <div class="weekly-lecture-title">등록된 강의 정보가 없습니다.</div>
        <div class="weekly-lecture-meta">커리큘럼 데이터를 확인해주세요.</div>
      `;
      return;
    }

    weeklyLectureCard.innerHTML = `
      <div class="weekly-lecture-week">${selectedItem.week} · ${selectedItem.date}</div>
      <div class="weekly-lecture-title">${selectedItem.title}</div>
      <div class="weekly-lecture-meta">강사: ${selectedItem.speaker}\n소속: ${selectedItem.organization}</div>
    `;
  }

  function renderRecentNotices() {
    if (!recentNotices) return;

    recentNotices.innerHTML = "";

    if (!notices.length) {
      recentNotices.innerHTML = `<div class="empty-state">등록된 공지가 없습니다.</div>`;
      return;
    }

    notices.slice(0, 3).forEach((notice) => {
      const item = document.createElement("div");
      item.className = "simple-item";
      item.innerHTML = `
        <div class="simple-item-title">${notice.title}</div>
        <div class="simple-item-date">${formatDate(notice.date)}</div>
      `;
      recentNotices.appendChild(item);
    });
  }

  function renderMembers(keyword = "") {
    memberList.innerHTML = "";

    const lowerKeyword = keyword.trim().toLowerCase();
    const favoriteIds = getFavorites();

    const filteredMembers = members.filter((member) => {
      const matchesKeyword = `
        ${member.id}
        ${member.name}
        ${member.company}
        ${member.position}
        ${member.memberType || ""}
        ${member.field || ""}
        ${member.department || ""}
        ${member.phone || ""}
        ${member.email || ""}
        ${member.intro || ""}
      `.toLowerCase().includes(lowerKeyword);

      const matchesDepartment =
        activeDepartmentFilter === "전체" ||
        member.department === activeDepartmentFilter;

      const matchesFavorite =
        !favoriteOnlyMode || favoriteIds.includes(member.id);

      return matchesKeyword && matchesDepartment && matchesFavorite;
    });

    if (!filteredMembers.length) {
      memberList.innerHTML = `<div class="empty-state">검색 결과가 없습니다.</div>`;
      return;
    }

    filteredMembers.forEach((member) => {
      const favorite = favoriteIds.includes(member.id);

      const memberTypeChip = member.memberType
        ? `<span class="member-chip member-type">${member.memberType}</span>`
        : "";

      const fieldChip = member.field
        ? `<span class="member-chip">${member.field}</span>`
        : "";

      const departmentChip = member.department
        ? `<span class="member-chip">${member.department}</span>`
        : "";

      const favoriteBadge = favorite
        ? `<span class="favorite-inline-badge">★ 즐겨찾기</span>`
        : "";

      const card = document.createElement("div");
      card.className = "member-card";
      card.dataset.memberId = member.id;
      card.innerHTML = `
        <div class="member-top-row">
          <div class="member-top-left">
            <div class="member-name-line">
              <div class="member-name">${member.name}</div>
              ${favoriteBadge}
            </div>
            <div class="member-company">${member.company}</div>
          </div>

          <button
            class="favorite-star-btn ${favorite ? "active" : ""}"
            data-favorite-id="${member.id}"
            type="button"
            aria-label="즐겨찾기"
          >
            ${favorite ? "★" : "☆"}
          </button>
        </div>

        <div class="member-meta-chips">
          <span class="member-badge">${member.position}</span>
          ${memberTypeChip}
          ${fieldChip}
          ${departmentChip}
        </div>

        <div class="member-info">
          <div class="info-row">
            <span class="info-label">ID</span>
            <span>${member.id}</span>
          </div>
          <div class="info-row">
            <span class="info-label">연락처</span>
            <span>${member.phone || "-"}</span>
          </div>
          <div class="info-row">
            <span class="info-label">이메일</span>
            <span>${member.email || "-"}</span>
          </div>
        </div>
      `;
      memberList.appendChild(card);
    });
  }

  function openMemberModal(memberId) {
    const member = members.find((item) => item.id === memberId);
    if (!member || !memberModal) return;

    modalMemberName.textContent = member.name || "-";
    modalMemberCompany.textContent = member.company || "-";
    modalMemberPosition.textContent = member.position || "-";
    modalMemberType.textContent = member.memberType || "회원 구분 없음";
    modalMemberField.textContent = member.field || "분야 미입력";
    modalMemberDepartment.textContent = member.department || "분과 미입력";
    modalMemberId.textContent = member.id || "-";
    modalMemberPhone.textContent = member.phone || "-";
    modalMemberEmail.textContent = member.email || "-";
    modalMemberIntro.textContent = member.intro || "등록된 소개가 없습니다.";

    currentModalPhone = sanitizePhone(member.phone);
    currentModalEmail = normalizeEmail(member.email);

    setButtonEnabled(modalCallBtn, !!currentModalPhone);
    setButtonEnabled(modalCopyPhoneBtn, !!currentModalPhone);
    setButtonEnabled(modalCopyEmailBtn, !!currentModalEmail);

    if (contactToast) {
      contactToast.classList.add("hidden");
    }

    memberModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeMemberModal() {
    if (!memberModal) return;
    memberModal.classList.add("hidden");
    document.body.style.overflow = "";
  }

  function renderNotices() {
    noticeList.innerHTML = "";

    if (!notices.length) {
      noticeList.innerHTML = `<div class="empty-state">등록된 공지가 없습니다.</div>`;
      return;
    }

    notices.forEach((notice) => {
      const card = document.createElement("div");
      card.className = "content-card";
      card.innerHTML = `
        <h3>${notice.title}</h3>
        <div class="content-meta">${formatDate(notice.date)}</div>
        <div class="content-body">${notice.content}</div>
      `;
      noticeList.appendChild(card);
    });
  }

  function renderCurriculum() {
    curriculumList.innerHTML = "";

    if (!curriculum.length) {
      curriculumList.innerHTML = `<div class="empty-state">등록된 커리큘럼이 없습니다.</div>`;
      return;
    }

    curriculum.forEach((item) => {
      const card = document.createElement("div");
      card.className = "content-card";
      card.innerHTML = `
        <h3>${item.week} · ${item.title}</h3>
        <div class="content-meta">${item.date}</div>
        <div class="content-body">강사: ${item.speaker}\n소속: ${item.organization}</div>
      `;
      curriculumList.appendChild(card);
    });
  }

  function renderGallery() {
    galleryList.innerHTML = "";

    if (!gallery.length) {
      galleryList.innerHTML = `<div class="empty-state">등록된 사진이 없습니다.</div>`;
      return;
    }

    gallery.forEach((item) => {
      const card = document.createElement("div");
      card.className = "gallery-card";
      card.innerHTML = `
        <img class="gallery-image" src="${item.image}" alt="${item.title}" />
        <div class="gallery-caption">
          <strong>${item.title}</strong>
          <span>${formatDate(item.date)}</span>
        </div>
      `;
      galleryList.appendChild(card);
    });
  }

  function renderBoard() {
    boardList.innerHTML = "";

    if (!boardPosts.length) {
      boardList.innerHTML = `<div class="empty-state">등록된 게시글이 없습니다.</div>`;
      return;
    }

    boardPosts.forEach((post) => {
      const card = document.createElement("div");
      card.className = "content-card";
      card.innerHTML = `
        <h3>${post.title}</h3>
        <div class="content-meta">${post.author} · ${formatDate(post.date)}</div>
        <div class="content-body">${post.content}</div>
      `;
      boardList.appendChild(card);
    });
  }

  function getStatusClass(status) {
    switch (status) {
      case "출석":
        return "status-present";
      case "지각":
        return "status-late";
      case "조퇴":
        return "status-early-leave";
      case "결석":
        return "status-absent";
      case "미입력":
      default:
        return "status-empty";
    }
  }

  function calculateRate(summary) {
    const total = summary.present + summary.late + summary.earlyLeave + summary.absent;
    if (!total) return 0;
    const attended = summary.present + summary.late + summary.earlyLeave;
    return Number(((attended / total) * 100).toFixed(1));
  }

  function resetAttendanceView() {
    attendanceInitial.classList.remove("hidden");
    attendanceNotFound.classList.add("hidden");
    attendanceResult.classList.add("hidden");
  }

  function showAttendanceNotFound() {
    attendanceInitial.classList.add("hidden");
    attendanceNotFound.classList.remove("hidden");
    attendanceResult.classList.add("hidden");
  }

  function showAttendanceResult(person) {
    attendanceInitial.classList.add("hidden");
    attendanceNotFound.classList.add("hidden");
    attendanceResult.classList.remove("hidden");

    const summary = person.summary || { present: 0, late: 0, earlyLeave: 0, absent: 0 };
    const rate = typeof person.attendanceRate === "number"
      ? person.attendanceRate
      : calculateRate(summary);

    attendanceResultName.textContent = person.name;
    attendanceResultId.textContent = `ID ${person.id}`;
    attendanceResultMeta.textContent =
      `${person.company} · ${person.position}${person.department ? ` · ${person.department}` : ""}`;
    attendanceResultRate.textContent = `${rate}%`;

    attendancePresentCount.textContent = `${summary.present}회`;
    attendanceLateCount.textContent = `${summary.late}회`;
    attendanceEarlyLeaveCount.textContent = `${summary.earlyLeave}회`;
    attendanceAbsentCount.textContent = `${summary.absent}회`;

    attendanceWeeklyList.innerHTML = "";

    (person.weekly || []).forEach((item) => {
      const row = document.createElement("div");
      row.className = "attendance-weekly-item";
      row.innerHTML = `
        <div class="attendance-week-left">
          <div class="attendance-week-title">${item.week}</div>
          <div class="attendance-week-topic">${item.topic || "-"}</div>
        </div>
        <div class="attendance-status-badge ${getStatusClass(item.status)}">
          ${item.status || "미입력"}
        </div>
      `;
      attendanceWeeklyList.appendChild(row);
    });
  }

  function searchAttendanceById() {
    const inputId = attendanceIdInput.value.trim();

    if (!inputId) {
      resetAttendanceView();
      return;
    }

    const matched = attendanceLookupData.find(
      (item) => String(item.id).trim() === inputId
    );

    if (!matched) {
      showAttendanceNotFound();
      return;
    }

    showAttendanceResult(matched);
  }

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      switchPage(button.dataset.page);
    });
  });

  if (memberSearch) {
    memberSearch.addEventListener("input", (e) => {
      renderMembers(e.target.value);
    });
  }

  departmentFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeDepartmentFilter = button.dataset.filter;

      departmentFilterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });
      button.classList.add("active");

      renderMembers(memberSearch ? memberSearch.value : "");
    });
  });

  if (favoriteOnlyBtn) {
    favoriteOnlyBtn.addEventListener("click", () => {
      favoriteOnlyMode = !favoriteOnlyMode;
      updateFavoriteOnlyButton();
      renderMembers(memberSearch ? memberSearch.value : "");
    });
  }

  if (memberList) {
    memberList.addEventListener("click", (e) => {
      const favoriteBtn = e.target.closest(".favorite-star-btn");
      if (favoriteBtn) {
        e.stopPropagation();
        toggleFavorite(favoriteBtn.dataset.favoriteId);
        renderMembers(memberSearch ? memberSearch.value : "");
        return;
      }

      const card = e.target.closest(".member-card");
      if (!card) return;
      openMemberModal(card.dataset.memberId);
    });
  }

  if (modalCallBtn) {
    modalCallBtn.addEventListener("click", () => {
      tryCall(currentModalPhone);
    });
  }

  if (modalCopyPhoneBtn) {
    modalCopyPhoneBtn.addEventListener("click", () => {
      copyText(currentModalPhone, "전화번호가 복사되었습니다.");
    });
  }

  if (modalCopyEmailBtn) {
    modalCopyEmailBtn.addEventListener("click", () => {
      copyText(currentModalEmail, "이메일이 복사되었습니다.");
    });
  }

  if (memberModalCloseBtn) {
    memberModalCloseBtn.addEventListener("click", closeMemberModal);
  }

  if (memberModal) {
    memberModal.addEventListener("click", (e) => {
      if (e.target === memberModal) {
        closeMemberModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMemberModal();
    }
  });

  if (attendanceSearchBtn) {
    attendanceSearchBtn.addEventListener("click", searchAttendanceById);
  }

  if (attendanceIdInput) {
    attendanceIdInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        searchAttendanceById();
      }
    });
  }

  updateFavoriteOnlyButton();
  renderCounts();
  renderWeeklyLecture();
  renderRecentNotices();
  renderMembers();
  renderNotices();
  renderCurriculum();
  renderGallery();
  renderBoard();
  resetAttendanceView();
});