# 에이스 당구 아카데미 웹사이트

강남 당구 레슨 소개 사이트 (샘플 데이터). 정적 HTML/CSS/JS — 빌드 없이 그대로 GitHub Pages에 올라감.

## 파일 구조
```
index.html      홈
lesson.html     레슨 안내
pricing.html    이용 요금
facility.html   시설
location.html   오시는 길
css/style.css   스타일
js/main.js      모바일 메뉴
sitemap.xml     검색엔진용 사이트맵
robots.txt      크롤러 허용 규칙
```

## 1. 샘플 → 실제 정보로 바꾸기 (일괄 치환)
아래 값을 실제 정보로 찾아바꾸기 하면 전 페이지에 반영됨:

| 샘플 값 | 바꿀 것 |
|---|---|
| `에이스 당구 아카데미` | 실제 상호 |
| `02-1234-5678` / `0212345678`(tel링크) | 실제 전화번호 |
| `서울 강남구 테헤란로 123, 5층` | 실제 주소 |
| `강남역 11번 출구 도보 5분` | 실제 위치 설명 |
| `10:00 ~ 02:00` | 실제 영업시간 |
| 요금 (20만원, 6만원, 2,500원 등) | 실제 요금 |
| `홍○○ 프로` | 실제 강사명 |

지도: `location.html`의 `<iframe class="map-embed" ...>` src를 실제 네이버/구글 지도 임베드 주소로 교체.

## 2. GitHub Pages 배포
1. GitHub에서 새 저장소 생성 (예: `billiards-lesson`)
2. 이 폴더를 push:
   ```
   git add -A
   git commit -m "당구 레슨 사이트 초기 버전"
   git branch -M main
   git remote add origin https://github.com/heyjyu/billiards-lesson.git
   git push -u origin main
   ```
3. 저장소 → Settings → Pages → Source: `main` / `/ (root)` 저장
4. 몇 분 뒤 `https://heyjyu.github.io/billiards-lesson/` 접속 확인

> 저장소 이름을 `heyjyu.github.io`로 만들면 주소가 `https://heyjyu.github.io/` 로 더 짧아짐 (이 경우 sitemap/canonical의 `/billiards-lesson/` 경로 제거).

## 3. 검색 노출 (구글 + 네이버) — 가장 중요
사이트를 올린다고 자동으로 검색되진 않음. **직접 등록**해야 함.

### 구글
1. [Google Search Console](https://search.google.com/search-console) 접속 → URL 접두어에 배포 주소 입력
2. 소유확인: HTML 태그 방식 선택 → 받은 `<meta name="google-site-verification" ...>` 코드를 `index.html`의 주석 처리된 자리에 붙여넣고 다시 push
3. 좌측 Sitemaps → `sitemap.xml` 제출

### 네이버 (국내 검색은 이게 핵심)
1. [네이버 서치어드바이저](https://searchadvisor.naver.com) → 웹마스터도구 → 사이트 등록
2. 소유확인: HTML 태그의 `<meta name="naver-site-verification" ...>` 코드를 `index.html`에 붙여넣고 push
3. 요청 → 사이트맵 제출 → `sitemap.xml` 등록

### ⭐ 네이버 플레이스 (당구장은 이게 제일 중요)
"당구 레슨", "◯◯ 당구장"으로 **네이버 지도/검색에 뜨는 건 웹사이트가 아니라 네이버 플레이스**임.
- [네이버 스마트플레이스](https://smartplace.naver.com)에서 업체 무료 등록 → 주소·전화·영업시간·사진·"레슨" 키워드 입력
- 여기에 위 웹사이트 주소를 "홈페이지"로 연결
- 구글은 [Google 비즈니스 프로필](https://business.google.com)에 동일하게 등록

정리: **검색 상위 노출 = 네이버 플레이스/구글 비즈니스 등록(필수) + 웹사이트(신뢰도 보강)** 조합.

## 4. 무료 도메인?
`README` 하단 참고 — 실질적으로 완전 무료의 좋은 도메인은 거의 없음.
- **가장 현실적(무료):** `heyjyu.github.io/billiards-lesson` 그대로 쓰기. 검색 노출엔 문제없음.
- **저렴한 유료(추천):** `.com`/`.co.kr`/`.kr` 도메인을 가비아·후이즈·Cloudflare Registrar 등에서 연 1~2만원대 구매 → GitHub Pages Settings → Pages → Custom domain에 입력 + 저장소에 `CNAME` 파일 추가.
- 예전 무료 도메인(Freenom .tk/.ml 등)은 현재 발급 중단/불안정이라 비추천.
