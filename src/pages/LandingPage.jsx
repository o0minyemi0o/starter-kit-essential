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

/**
 * LandingPage 컴포넌트
 *
 * MUSE 서비스 소개 랜딩 페이지.
 * 서비스의 핵심 가치와 기능을 소개하고 사용자를 Archive 페이지로 유도합니다.
 *
 * 페이지 구조:
 * 1. Hero Section - 메인 메시지와 CTA
 * 2. Features Section - 4가지 핵심 기능 소개
 * 3. Journey Section - 사용자 시나리오
 * 4. CTA Section - 시작하기 버튼
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
  // 사용자 여정 데이터
  // ============================================
  const journeySteps = [
    {
      step: '1',
      title: '아이템 등록',
      description: '웹 서핑 중 발견한 좋은 이미지를 MUSE에 업로드하여 자신의 아카이브에 추가',
    },
    {
      step: '2',
      title: '영감 찾기',
      description: '기존에 수집된 아카이브와 새로 추가한 이미지를 함께 탐색하며 시각적 방향성 설정',
    },
    {
      step: '3',
      title: '기준 설정',
      description: '핵심 카테고리와 스타일 키워드를 적용하여 필요한 레퍼런스로 범위를 좁힘',
    },
    {
      step: '4',
      title: '무드보드 구축',
      description: '선별된 이미지들을 하나의 프로젝트 보드로 모아 명확한 시각적 가이드라인 완성',
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

      {/* Journey Section */}
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
            사용자 여정
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
            레퍼런스 관리부터 프로젝트 무드보드 완성까지
          </Typography>

          <Grid container spacing={3}>
            {journeySteps.map((step, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Box
                  sx={{
                    position: 'relative',
                    textAlign: 'center',
                    p: 3,
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      backgroundColor: 'primary.main',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    {step.step}
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 600, mb: 1 }}
                  >
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step.description}
                  </Typography>
                </Box>
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
