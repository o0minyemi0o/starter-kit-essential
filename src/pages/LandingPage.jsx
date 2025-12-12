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
import { landingPageContent } from '../data/landingPageContent';

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
  // 아이콘 매핑
  // ============================================
  const iconComponents = {
    CloudUpload: CloudUploadIcon,
    Folder: FolderIcon,
    LocalOffer: LocalOfferIcon,
    Collections: CollectionsIcon,
    SearchOff: SearchOffIcon,
    CheckCircle: CheckCircleIcon,
  };

  // 아이콘 생성 헬퍼 함수
  const getIcon = (iconName, sx = {}) => {
    const IconComponent = iconComponents[iconName];
    return IconComponent ? <IconComponent sx={sx} /> : null;
  };

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
      <Box
        sx={{
          background: hero.background.gradient,
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
            {hero.title}
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
            {hero.subtitle}
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
            {hero.description}
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
            {hero.cta.label}
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
          {usp.features.title}
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
          {usp.features.subtitle}
        </Typography>

        <Grid container spacing={4}>
          {usp.features.items.map((feature, index) => (
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
                  <Box sx={{ mb: 2 }}>
                    {getIcon(feature.icon, { fontSize: 48, color: 'primary.main' })}
                  </Box>
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
            {showcase.title}
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
            {showcase.subtitle}
          </Typography>

          <Grid container spacing={4}>
            {showcase.steps.map((step, index) => (
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
                      {getIcon(step.icon, { fontSize: 32 })}
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
                        {step.stage}
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
          {cta.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            mb: 4,
            fontSize: { xs: '1rem', md: '1.125rem' },
          }}
        >
          {cta.description}
        </Typography>
        <Button
          variant="contained"
          size="large"
          endIcon={<ArrowForwardIcon />}
          onClick={handleCTAClick}
          sx={{
            px: 4,
            py: 1.5,
            fontSize: '1.125rem',
            fontWeight: 600,
          }}
        >
          {cta.button.label}
        </Button>
      </Container>
    </Box>
  );
}

export default LandingPage;
