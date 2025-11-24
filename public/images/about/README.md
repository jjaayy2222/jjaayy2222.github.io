# About 섹션 이미지

이 폴더는 About 섹션과 프로필 관련 이미지를 저장합니다.

## 📸 포함될 이미지

- **프로필 사진** (`profile.jpg`, `profile.png` 등)
  - 사용처: Sidebar (모바일/데스크톱), About 페이지
  - 권장 크기: 최소 200x200px (정사각형)
  
- **배경 이미지** (선택사항)
  - About 페이지 배경용

## 🔄 프로필 사진 교체 방법

1. 이 폴더에 프로필 사진 저장
2. 다음 파일에서 경로 수정:
   - `src/components/Sidebar.js` (2곳)
   - `src/app/page.js` (1곳)

```javascript
// 현재
src="/images/about/profile-placeholder.svg"

// 교체 후 (예시)
src="/images/about/profile.jpg"
```

## 📝 현재 파일

- `profile-placeholder.svg` - 플레이스홀더 (교체 필요)
