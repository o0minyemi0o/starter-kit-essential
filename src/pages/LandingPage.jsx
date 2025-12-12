import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { landingPageContent } from '../data/landingPageContent';
import {
  LandingHero,
  LandingProblemSolution,
  LandingFeatures,
  LandingUseCase,
  LandingCTA,
} from '../sections';

/**
 * LandingPage 컴포넌트
 *
 * MUSE 서비스 소개 랜딩 페이지.
 * 서비스의 핵심 가치와 기능을 소개하고 사용자를 Archive 페이지로 유도합니다.
 *
 * 페이지 구조:
 * 1. Hero Section - 메인 메시지와 CTA
 * 2. Problem-Solution Section - 문제 제기와 해결책
 * 3. Features Section - 4가지 핵심 기능 소개
 * 4. Use Case Section - 워크플로우 예시 (수집 → 탐색 → 큐레이션 → 활용)
 * 5. CTA Section - 시작하기 버튼
 *
 * Example usage:
 * <LandingPage />
 */
export function LandingPage() {
  const navigate = useNavigate();

  // ============================================
  // 콘텐츠 데이터 import
  // ============================================
  const { hero, usp, showcase, cta } = landingPageContent;

  // ============================================
  // 이벤트 핸들러
  // ============================================
  const handleGetStarted = () => {
    navigate(hero.cta.action);
  };

  const handleCTAClick = () => {
    navigate(cta.button.action);
  };

  // ============================================
  // 렌더링
  // ============================================
  return (
    <Box>
      {/* Hero Section */}
      <LandingHero data={hero} onGetStarted={handleGetStarted} />

      {/* Problem-Solution Section */}
      <LandingProblemSolution data={usp.problemSolution} />

      {/* Features Section */}
      <LandingFeatures data={usp.features} />

      {/* Use Case Section */}
      <LandingUseCase data={showcase} />

      {/* CTA Section */}
      <LandingCTA data={cta} onCTAClick={handleCTAClick} />
    </Box>
  );
}

export default LandingPage;
