export default {
  title: "iBook Studio 가이드",
  description: "비상교육 이용 안내서",
  base: '/iBook-guide/',
  themeConfig: {
    nav: [
      { text: '홈', link: '/' },
      { text: '사용법', link: '/guide' }
    ],
    sidebar: [
      {
        text: '🚀 시작하기',
        collapsed: false,
        items: [
          { text: '로그인 안내', link: '/guide' }, // 아직 파일이 없으니 임시로 guide 연결
          { text: '화면 구성 파악', link: '/guide' }
        ]
      },
      {
        text: '🛠️ 에디터 기능 상세',
        collapsed: true,
        items: [
          { text: '텍스트 편집기', link: '/guide' },
          { text: '멀티미디어(이미지/영상)', link: '/guide' },
          { text: '인터랙션 요소', link: '/guide' }
        ]
      },
      {
        text: '✅ 제작 및 배포',
        collapsed: true,
        items: [
          { text: '저장 정책', link: '/guide' },
          { text: '최종 검수 리스트', link: '/guide' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/visang-dicon/iBook-guide' }
    ],
    outline: { label: '이 페이지의 목차' }
  }
}
