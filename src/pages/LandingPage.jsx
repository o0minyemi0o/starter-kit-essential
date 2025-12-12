import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FolderIcon from '@mui/icons-material/Folder';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CollectionsIcon from '@mui/icons-material/Collections';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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
  // 핵심 기능 데이터
  // ============================================
  const features = [
    {
      icon: <CloudUploadIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: '레퍼런스 추가',
      description: '파일 업로드와 동시에 카테고리/태그 정보를 입력하는 명확한 진입점 제공',
    },
    {
      icon: <FolderIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: '레퍼런스 카테고리',
      description: '대분류 기준으로 이미지를 묶고 사이드바를 통해 쉽게 접근할 수 있는 네비게이션',
    },
    {
      icon: <LocalOfferIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: '키워드 관리',
      description: '상세 태그를 이용해 리스트를 실시간으로 정제하는 유동적인 필터링 시스템',
    },
    {
      icon: <CollectionsIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: '무드보드 작성',
      description: '선별된 아이템을 프로젝트 보드에 담아 새로운 컬렉션을 생성/편집',
    },
  ];

  // ============================================
  // Use Case 데이터 - 워크플로우 예시
  // ============================================
  const useCaseSteps = [
    {
      time: '수집',
      icon: <CloudUploadIcon sx={{ fontSize: 32 }} />,
      title: '영감 수집',
      scenario: '웹 서핑 중 발견한 좋은 이미지를',
      action: '드래그 앤 드롭으로 즉시 MUSE에 저장합니다',
      highlight: '카테고리와 태그를 함께 입력해 체계적으로 분류',
    },
    {
      time: '탐색',
      icon: <SearchOffIcon sx={{ fontSize: 32 }} />,
      title: '프로젝트 시작',
      scenario: '새 브랜딩 프로젝트를 시작할 때',
      action: '"미니멀", "Blue 톤" 태그로 검색하여 필요한 레퍼런스만 필터링',
      highlight: '수백 개 이미지 중 원하는 것만 즉시 찾기',
    },
    {
      time: '큐레이션',
      icon: <CollectionsIcon sx={{ fontSize: 32 }} />,
      title: '무드보드 완성',
      scenario: '선별된 이미지들을',
      action: '"브랜딩 프로젝트 A" 보드로 정리하여 클라이언트에게 제안',
      highlight: '체계적인 큐레이션으로 전문성 향상',
    },
    {
      time: '활용',
      icon: <CheckCircleIcon sx={{ fontSize: 32 }} />,
      title: '반복 활용',
      scenario: '아카이브는 계속 성장하며',
      action: '다음 프로젝트에도 쉽게 재활용할 수 있는 자산이 됩니다',
      highlight: '시간이 지날수록 가치있는 레퍼런스 라이브러리',
    },
  ];

  // ============================================
  // 이벤트 핸들러
  // ============================================
  const handleGetStarted = () => {
    navigate('/archive');
  };

  // ============================================
  // 렌더링
  // ============================================
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0000FF 0%, #000088 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.75rem' },
            }}
          >
            MUSE
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              opacity: 0.95,
              fontWeight: 400,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            시각적 영감 아카이빙 솔루션
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 5,
              opacity: 0.9,
              maxWidth: '600px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.125rem' },
            }}
          >
            디자이너가 외부 웹/로컬에서 발견한 레퍼런스를 효율적으로 아카이빙하고,
            태그 및 카테고리 기반으로 탐색하여 무드보드를 구축하는 개인화 SaaS
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            onClick={handleGetStarted}
            sx={{
              backgroundColor: 'white',
              color: 'primary.main',
              px: 4,
              py: 1.5,
              fontSize: '1.125rem',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: 'grey.100',
              },
            }}
          >
            시작하기
          </Button>
        </Container>
      </Box>

      {/* Problem-Solution Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={6} alignItems="center">
          {/* Problem */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="overline"
                sx={{
                  color: 'error.main',
                  fontWeight: 600,
                  letterSpacing: 1,
                  mb: 2,
                  display: 'block',
                }}
              >
                Problem
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '1.75rem', md: '2rem' },
                  lineHeight: 1.3,
                }}
              >
                디자이너의 레퍼런스,<br />
                폴더에 쌓여만 가고<br />
                찾을 수 없나요?
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 3, fontSize: { xs: '1rem', md: '1.125rem' } }}
              >
                수백 개의 이미지가 폴더에 저장되어 있지만,
                막상 필요할 때는 찾을 수 없는 경험.
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontSize: { xs: '1rem', md: '1.125rem' } }}
              >
                파일명으로는 기억나지 않고,
                하나하나 열어보기엔 시간이 너무 오래 걸립니다.
              </Typography>
            </Box>
          </Grid>

          {/* Solution */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="overline"
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  letterSpacing: 1,
                  mb: 2,
                  display: 'block',
                }}
              >
                Solution
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '1.75rem', md: '2rem' },
                  lineHeight: 1.3,
                }}
              >
                태그 기반 검색과<br />
                카테고리 시스템으로<br />
                즉시 찾는 레퍼런스
              </Typography>
              <Box component="ul" sx={{ pl: 0, listStyle: 'none' }}>
                {[
                  '태그로 검색: "미니멀", "Blue 톤" 같은 키워드로 즉시 필터링',
                  '카테고리 분류: UI, 타이포그래피, 색상 등 체계적 정리',
                  '무드보드 큐레이션: 프로젝트별로 선별된 이미지 모음',
                ].map((item, index) => (
                  <Box
                    component="li"
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      mb: 2,
                      gap: 1.5,
                    }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: 'primary.main',
                        fontSize: 24,
                        flexShrink: 0,
                        mt: 0.25,
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ fontSize: { xs: '1rem', md: '1.125rem' } }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: '2rem', md: '2.5rem' },
          }}
        >
          핵심 기능
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            mb: 6,
            fontSize: { xs: '1rem', md: '1.125rem' },
          }}
        >
          MUSE가 제공하는 4가지 핵심 기능으로 효율적인 레퍼런스 관리를 경험하세요
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 3,
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 600, mb: 1.5 }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Use Case Section */}
      <Box sx={{ backgroundColor: 'grey.50', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            워크플로우 예시
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              mb: 6,
              fontSize: { xs: '1rem', md: '1.125rem' },
            }}
          >
            레퍼런스 수집부터 무드보드 완성까지
          </Typography>

          <Grid container spacing={4}>
            {useCaseSteps.map((step, index) => (
              <Grid size={{ xs: 12, sm: 6 }} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    p: 3,
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 3,
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    {/* Icon */}
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        backgroundColor: 'primary.light',
                        color: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {step.icon}
                    </Box>

                    {/* Content */}
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="overline"
                        sx={{
                          color: 'text.disabled',
                          fontWeight: 600,
                          letterSpacing: 0.5,
                          display: 'block',
                          mb: 0.5,
                        }}
                      >
                        {step.time}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          mb: 1.5,
                          fontSize: { xs: '1.125rem', md: '1.25rem' },
                        }}
                      >
                        {step.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 1, lineHeight: 1.6 }}
                      >
                        {step.scenario}{' '}
                        <Box
                          component="span"
                          sx={{ fontWeight: 600, color: 'text.primary' }}
                        >
                          {step.action}
                        </Box>
                      </Typography>
                      <Box
                        sx={{
                          display: 'inline-block',
                          px: 1.5,
                          py: 0.5,
                          backgroundColor: 'primary.lighter',
                          borderRadius: 1,
                          mt: 1,
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'primary.dark',
                            fontWeight: 600,
                            fontSize: '0.75rem',
                          }}
                        >
                          {step.highlight}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 }, textAlign: 'center' }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 700,
            mb: 3,
            fontSize: { xs: '2rem', md: '2.5rem' },
          }}
        >
          지금 시작하세요
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            mb: 4,
            fontSize: { xs: '1rem', md: '1.125rem' },
          }}
        >
          MUSE와 함께 더욱 효율적인 레퍼런스 관리와 창의적인 무드보드를 만들어보세요
        </Typography>
        <Button
          variant="contained"
          size="large"
          endIcon={<ArrowForwardIcon />}
          onClick={handleGetStarted}
          sx={{
            px: 4,
            py: 1.5,
            fontSize: '1.125rem',
            fontWeight: 600,
          }}
        >
          Archive 시작하기
        </Button>
      </Container>
    </Box>
  );
}

export default LandingPage;
