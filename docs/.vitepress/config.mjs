export default {
  title: "iBook Studio 가이드",
  description: "비상교육 이용 안내서",
  base: '/iBook-guide/',
  themeConfig: {
    nav: [
      { text: '홈', link: '/' },
      { text: '전체 가이드', link: '/guide' }
    ],
    sidebar: [
      {
        text: '📖 가이드 목록',
        collapsed: false, 
        items: [
          // 이제 각 메뉴를 클릭하면 독립된 파일(.md)로 이동합니다.
          { text: '🛠️ 에디터 기능 상세', link: '/features' }, 
          { text: '✅ 제작 및 배포', link: '/process' },
          { text: '📂 버전 관리', link: '/version' }
        ]
      }
    ]
  }
}
