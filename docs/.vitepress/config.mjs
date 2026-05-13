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
        text: '📖 전체 메뉴',
        items: [
          { text: '🛠️ 에디터 기능 상세', link: '/guide#에디터-기능-상세' },
          { text: '✅ 제작 및 배포', link: '/guide#제작-및-배포' },
          { text: '📂 버전 관리', link: '/guide#버전-관리' }
        ]
      }
    ],
    outline: { 
      label: '이 페이지의 목차',
      level: [2, 3] // ##(2)와 ###(3) 소제목을 우측 목차에 표시
    }
  }
}
