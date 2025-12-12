import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

/**
 * LandingHero 컴포넌트
 *
 * 랜딩 페이지의 Hero 섹션.
 * 메인 메시지와 CTA 버튼을 표시합니다.
 *
 * Props:
 * @param {object} data - Hero 섹션 데이터 [Required]
 *   @param {string} data.title - 메인 타이틀 [Required]
 *   @param {string} data.subtitle - 부제목 [Required]
 *   @param {string} data.description - 설명 텍스트 [Required]
 *   @param {object} data.cta - CTA 버튼 정보 [Required]
 *     @param {string} data.cta.label - 버튼 레이블 [Required]
 *   @param {object} data.background - 배경 스타일 [Required]
 *     @param {string} data.background.gradient - 그라데이션 CSS [Required]
 * @param {function} onGetStarted - CTA 버튼 클릭 핸들러 [Required]
 *
 * Example usage:
 * <LandingHero
 *   data={landingPageContent.hero}
 *   onGetStarted={() => navigate('/archive')}
 * />
 */
export function LandingHero({ data, onGetStarted }) {
  return (
    <Box
      sx={{
        background: data.background.gradient,
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
          {data.title}
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
          {data.subtitle}
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
          {data.description}
        </Typography>
        <Button
          variant="contained"
          size="large"
          endIcon={<ArrowForwardIcon />}
          onClick={onGetStarted}
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
          {data.cta.label}
        </Button>
      </Container>
    </Box>
  );
}

export default LandingHero;
