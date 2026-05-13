export default {
  title: "iBook Studio 가이드",
  description: "iBook Studio로 이북 만들기 단계별 이용 안내서",
  base: '/iBook-guide/',
  themeConfig: {
    // 노션처럼 깔끔한 로고와 검색 기능을 상상하며 구성합니다.
    nav: [
      { text: '홈', link: '/' },
      { text: '사용법', link: '/guide' }
    ],
    sidebar: [
      {
        text: '📖 이용 가이드',
        items: [
          { text: '시작하기', link: '/guide' },
          // 나중에 파일을 추가하면 여기에 줄을 늘리면 됩니다.
        ]
      }
    ],
    // 오른쪽 상단에 깃허브 링크를 넣어 전문성을 더합니다.
    socialLinks: [
      { icon: 'github', link: 'https://github.com/visang-dicon/iBook-guide' }
    ],
    outline: { label: '이 페이지의 목차' } // 노션의 '목차' 블록 같은 역할입니다.
  }
}
