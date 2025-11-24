# 이미지 관리 가이드

이 디렉토리(`public/images`)는 포트폴리오의 모든 정적 이미지 자산을 포함합니다.

## 디렉토리 구조
- `about/`: 프로필 사진 및 About 섹션 관련 이미지.
- `insights/`: 블로그 포스트 또는 인사이트용 이미지.
- `projects/`: 프로젝트 쇼케이스용 이미지.
- `products/`: 제품 쇼케이스용 이미지.

## 프로필 사진 선택
사이드바와 홈 페이지에 표시되는 프로필 사진을 변경하려면:

1.  이미지를 `public/images/about/`에 추가하세요.
2.  `src/data/profile.js` 파일을 엽니다.
3.  `selectedImage` 속성을 원하는 이미지의 파일명으로 업데이트하세요.

```javascript
// src/data/profile.js
export const profileConfig = {
  selectedImage: 'profile-2.jpg', // 이 부분을 원하는 이미지 파일명으로 변경하세요
  // ...
};
```

## 다른 디렉토리의 이미지 사용하기
`insights`와 같은 다른 디렉토리의 이미지를 사용하려면 다음 단계를 따르세요:

1.  **이미지 추가**: 이미지 파일(예: `my-post-cover.jpg`)을 해당 폴더(예: `public/images/insights/`)에 넣으세요.
2.  **코드에서 참조**:
    - React 컴포넌트에서: `/images/`로 시작하는 경로를 사용하세요.
      ```jsx
      <Image src="/images/insights/my-post-cover.jpg" width={800} height={400} alt="커버 이미지" />
      ```
    - Markdown 파일에서: public 폴더 기준의 절대 경로 또는 상대 경로를 사용하세요.
      ```markdown
      ![커버 이미지](/images/insights/my-post-cover.jpg)
      ```

## 모범 사례 (Best Practices)
- 설명적인 파일명을 사용하세요 (예: `img123.jpg` 대신 `project-dashboard-v1.jpg`).
- 웹 최적화를 위해 이미지를 압축하여 로딩 속도를 높이세요.
- 접근성을 위해 항상 `alt` 텍스트를 제공하세요.
