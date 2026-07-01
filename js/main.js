// 모바일 메뉴 토글
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  // 링크 클릭 시 메뉴 닫기
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') links.classList.remove('open');
  });
})();

// 상담신청 폼
(function () {
  var form = document.querySelector('.contact-form');
  if (!form) return;
  var p1 = document.getElementById('p1');
  var p2 = document.getElementById('p2');
  var p3 = document.getElementById('p3');
  var combined = document.getElementById('phoneCombined');

  // 숫자만 + 자동 다음칸 이동
  [p1, p2, p3].forEach(function (el, i) {
    if (!el) return;
    var next = [p1, p2, p3][i + 1];
    el.addEventListener('input', function () {
      el.value = el.value.replace(/[^0-9]/g, '');
      if (next && el.value.length >= el.maxLength) next.focus();
    });
  });

  // 상담 신청하기 → 문자앱 자동 채움 (받는번호 010-7758-1862, 손님은 전송만)
  var OWNER = '01077581862';
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = (document.getElementById('name').value || '').trim();
    var a = (p1.value || '').trim(), b = (p2.value || '').trim(), c = (p3.value || '').trim();
    var memo = (document.getElementById('memo').value || '').trim();
    if (!name) { alert('성함을 입력해 주세요.'); return; }
    if (b.length < 3 || c.length < 4) { alert('휴대폰 번호를 정확히 입력해 주세요.'); p2.focus(); return; }
    if (!memo) { alert('문의 내용을 입력해 주세요.'); return; }

    var phone = a + '-' + b + '-' + c;
    if (combined) combined.value = phone;
    var body = '[상담신청]\n작성자: ' + name + '\n연락처: ' + phone + '\n문의: ' + memo;
    // sms:번호?&body= → iOS·안드로이드 공통 호환
    window.location.href = 'sms:' + OWNER + '?&body=' + encodeURIComponent(body);

    // 문자앱 열린 뒤 안내 메시지 표시
    var ok = document.getElementById('formOk');
    if (ok) { form.style.display = 'none'; ok.style.display = 'block'; }
  });
})();
