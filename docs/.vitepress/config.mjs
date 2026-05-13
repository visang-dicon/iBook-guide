sidebar: [
  {
    text: '🚀 시작하기',
    collapsed: false, // 메뉴를 기본으로 펼쳐둠
    items: [
      { text: '로그인 안내', link: '/start/login' },
      { text: '화면 구성 파악', link: '/start/interface' }
    ]
  },
  {
    text: '🛠️ 에디터 기능 상세',
    collapsed: true, // 내용이 많으니 평소엔 접어둠
    items: [
      { text: '텍스트 편집기', link: '/features/text' },
      { text: '멀티미디어(이미지/영상)', link: '/features/media' },
      { text: '인터랙션 요소', link: '/features/interaction' }
    ]
  },
  {
    text: '✅ 제작 및 배포',
    collapsed: true,
    items: [
      { text: '저장 정책', link: '/process/save' },
      { text: '최종 검수 리스트', link: '/process/inspect' }
    ]
  }
]
