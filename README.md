# BOMI BEAUTY 브랜드 홈페이지

대구 복현동 보미뷰티의 공식 브랜드 사이트입니다. 서비스, 갤러리, Instagram 링크와 리뷰를 별도 데이터 파일로 분리해 코딩 경험이 없어도 내용을 쉽게 바꿀 수 있습니다.

## 1. 개발 서버 실행

Node.js 22 이상을 설치한 뒤 프로젝트 폴더에서 아래 명령을 차례로 실행합니다.

```bash
npm install
npm run dev
```

화면에 표시되는 로컬 주소(기본값 `http://localhost:3000`)를 브라우저에서 여세요. 완성본 확인은 `npm run build`로 할 수 있습니다.

## 2. 사진 변경 방법

- 서비스 사진: `data/services.ts`의 각 `image` 주소를 변경합니다.
- 갤러리 사진: `data/gallery.ts`에 항목을 추가하거나 기존 `image` 주소를 변경합니다.
- 매장 외관 사진: 사진을 `public/images/store.jpg`로 넣고 `app/page.tsx`의 `exterior-placeholder` 영역을 `<img src="/images/store.jpg" ... />`로 교체합니다.
- Hero 사진: `app/page.tsx`에서 첫 번째 `hero-visual` 이미지 주소를 변경합니다.

이미지는 가급적 세로 사진은 1200×1600px 이상, 가로 사진은 1600px 이상을 권장합니다. 업로드된 사진은 영문 소문자 파일명으로 저장하면 관리하기 쉽습니다.

## 3. Instagram Reel URL 추가 방법

`data/instagram.ts`의 `instagramPosts` 배열에 아래 형식으로 추가합니다.

```ts
{
  url: "https://www.instagram.com/reel/게시물주소/",
  thumbnail: "/images/instagram/reel-01.jpg",
  type: "reel",
  date: "2026-08-27"
}
```

최대 6개가 표시됩니다. `instagramDisplayMode`를 `latest`로 두면 최신순, `random`으로 바꾸면 무작위 순서로 노출됩니다. Instagram을 직접 수집하지 않으므로 썸네일 사진은 `public/images/instagram` 폴더에 직접 넣어주세요.

## 4. 서비스 변경 방법

`data/services.ts`에서 이름, 설명, 사진을 수정합니다. 새 서비스를 추가할 때는 기존 항목을 복사한 뒤 `id`를 겹치지 않게 바꾸세요.

소개 문구는 `data/content.ts`, 작품 사진은 `data/gallery.ts`, 고객 후기는 `data/reviews.ts`에서 관리합니다. 실제 후기가 생기기 전에는 빈 배열을 유지하면 자연스러운 준비 중 문구가 표시됩니다.

## 5. Vercel 배포 방법

1. 이 폴더를 GitHub 저장소에 올립니다.
2. Vercel에서 **Add New → Project**를 선택하고 해당 저장소를 연결합니다.
3. Framework Preset은 Next.js, Build Command는 `npm run build`로 설정합니다.
4. 필요하다면 `.env.example`을 참고해 `NEXT_PUBLIC_SITE_URL`에 실제 도메인을 등록합니다.
5. Deploy를 누르면 배포가 시작됩니다. 이후 GitHub에 변경사항을 올릴 때마다 자동으로 다시 배포됩니다.

## 주요 콘텐츠 파일

- `data/services.ts` — 시술 서비스
- `data/gallery.ts` — 포트폴리오 사진
- `data/instagram.ts` — Instagram 게시물 및 노출 방식
- `data/reviews.ts` — 고객 후기
- `data/content.ts` — 소개 문구
