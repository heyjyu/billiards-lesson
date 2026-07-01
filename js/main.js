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

  form.addEventListener('submit', function (e) {
    var a = (p1.value || '').trim(), b = (p2.value || '').trim(), c = (p3.value || '').trim();
    if (b.length < 3 || c.length < 4) {
      e.preventDefault();
      alert('휴대폰 번호를 정확히 입력해 주세요.');
      p2.focus();
      return;
    }
    combined.value = a + '-' + b + '-' + c;
  });
})();

// 접수 완료 메시지 (FormSubmit 전송 후 ?sent=1 로 돌아옴)
(function () {
  if (location.search.indexOf('sent=1') === -1) return;
  var form = document.querySelector('.contact-form');
  var ok = document.getElementById('formOk');
  if (form) form.style.display = 'none';
  if (ok) ok.style.display = 'block';
})();
