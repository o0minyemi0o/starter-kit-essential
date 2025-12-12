/**
 * MUSE 랜딩페이지 콘텐츠 데이터
 *
 * 랜딩페이지의 모든 텍스트 콘텐츠와 구조를 정의합니다.
 * 섹션 구성: Hero → USP → Showcase → CTA
 */

export const landingPageContent = {
  // ============================================
  // Hero Section
  // 메인 메시지와 첫 번째 CTA
  // ============================================
  hero: {
    title: 'MUSE',
    subtitle: '시각적 영감 아카이빙 솔루션',
    description:
      '디자이너가 외부 웹/로컬에서 발견한 레퍼런스를 효율적으로 아카이빙하고, 태그 및 카테고리 기반으로 탐색하여 무드보드를 구축하는 개인화 SaaS',
    cta: {
      label: '시작하기',
      action: '/archive',
    },
    background: {
      gradient: 'linear-gradient(135deg, #0000FF 0%, #000088 100%)',
    },
  },

  // ============================================
  // USP Section (Unique Selling Proposition)
  // Problem-Solution + Features
  // ============================================
  usp: {
    // Problem-Solution
    problemSolution: {
      problem: {
        badge: 'Problem',
        badgeColor: 'error.main',
        title: '디자이너의 레퍼런스,\n폴더에 쌓여만 가고\n찾을 수 없나요?',
        descriptions: [
          '수백 개의 이미지가 폴더에 저장되어 있지만, 막상 필요할 때는 찾을 수 없는 경험.',
          '파일명으로는 기억나지 않고, 하나하나 열어보기엔 시간이 너무 오래 걸립니다.',
        ],
      },
      solution: {
        badge: 'Solution',
        badgeColor: 'primary.main',
        title: '태그 기반 검색과\n카테고리 시스템으로\n즉시 찾는 레퍼런스',
        benefits: [
          '태그로 검색: "미니멀", "Blue 톤" 같은 키워드로 즉시 필터링',
          '카테고리 분류: UI, 타이포그래피, 색상 등 체계적 정리',
          '무드보드 큐레이션: 프로젝트별로 선별된 이미지 모음',
        ],
      },
    },

    // Features
    features: {
      title: '핵심 기능',
      subtitle: 'MUSE가 제공하는 4가지 핵심 기능으로 효율적인 레퍼런스 관리를 경험하세요',
      items: [
        {
          icon: 'CloudUpload',
          title: '레퍼런스 추가',
          description: '파일 업로드와 동시에 카테고리/태그 정보를 입력하는 명확한 진입점 제공',
        },
        {
          icon: 'Folder',
          title: '레퍼런스 카테고리',
          description: '대분류 기준으로 이미지를 묶고 사이드바를 통해 쉽게 접근할 수 있는 네비게이션',
        },
        {
          icon: 'LocalOffer',
          title: '키워드 관리',
          description: '상세 태그를 이용해 리스트를 실시간으로 정제하는 유동적인 필터링 시스템',
        },
        {
          icon: 'Collections',
          title: '무드보드 작성',
          description: '선별된 아이템을 프로젝트 보드에 담아 새로운 컬렉션을 생성/편집',
        },
      ],
    },
  },

  // ============================================
  // Showcase Section
  // 워크플로우 예시 (Use Case)
  // ============================================
  showcase: {
    title: '워크플로우 예시',
    subtitle: '레퍼런스 수집부터 무드보드 완성까지',
    steps: [
      {
        stage: '수집',
        icon: 'CloudUpload',
        title: '영감 수집',
        scenario: '웹 서핑 중 발견한 좋은 이미지를',
        action: '드래그 앤 드롭으로 즉시 MUSE에 저장합니다',
        highlight: '카테고리와 태그를 함께 입력해 체계적으로 분류',
      },
      {
        stage: '탐색',
        icon: 'SearchOff',
        title: '프로젝트 시작',
        scenario: '새 브랜딩 프로젝트를 시작할 때',
        action: '"미니멀", "Blue 톤" 태그로 검색하여 필요한 레퍼런스만 필터링',
        highlight: '수백 개 이미지 중 원하는 것만 즉시 찾기',
      },
      {
        stage: '큐레이션',
        icon: 'Collections',
        title: '무드보드 완성',
        scenario: '선별된 이미지들을',
        action: '"브랜딩 프로젝트 A" 보드로 정리하여 클라이언트에게 제안',
        highlight: '체계적인 큐레이션으로 전문성 향상',
      },
      {
        stage: '활용',
        icon: 'CheckCircle',
        title: '반복 활용',
        scenario: '아카이브는 계속 성장하며',
        action: '다음 프로젝트에도 쉽게 재활용할 수 있는 자산이 됩니다',
        highlight: '시간이 지날수록 가치있는 레퍼런스 라이브러리',
      },
    ],
  },

  // ============================================
  // CTA Section
  // 최종 행동 유도
  // ============================================
  cta: {
    title: '지금 시작하세요',
    description: 'MUSE와 함께 더욱 효율적인 레퍼런스 관리와 창의적인 무드보드를 만들어보세요',
    button: {
      label: 'Archive 시작하기',
      action: '/archive',
    },
  },
};

/**
 * 아이콘 매핑 헬퍼
 * 아이콘 이름 문자열을 실제 MUI 아이콘 컴포넌트로 매핑
 */
export const iconMap = {
  CloudUpload: 'CloudUploadIcon',
  Folder: 'FolderIcon',
  LocalOffer: 'LocalOfferIcon',
  Collections: 'CollectionsIcon',
  SearchOff: 'SearchOffIcon',
  CheckCircle: 'CheckCircleIcon',
};

/**
 * 섹션 키 목록
 * 랜딩페이지 섹션의 렌더링 순서를 정의
 */
export const sectionOrder = ['hero', 'usp', 'showcase', 'cta'];

/**
 * 메타데이터
 * SEO 및 페이지 정보
 */
export const metadata = {
  title: 'MUSE - 시각적 영감 아카이빙 솔루션',
  description:
    '디자이너를 위한 레퍼런스 아카이빙 툴. 태그 기반 검색과 카테고리 시스템으로 영감을 체계적으로 관리하세요.',
  keywords: ['레퍼런스', '아카이빙', '무드보드', '디자이너', '영감', '큐레이션'],
};
