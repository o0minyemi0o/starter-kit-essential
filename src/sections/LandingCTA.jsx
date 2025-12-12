import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

/**
 * LandingCTA 컴포넌트
 *
 * 랜딩 페이지의 CTA(Call-to-Action) 섹션.
 * 최종 행동 유도 메시지와 버튼을 표시합니다.
 *
 * Props:
 * @param {object} data - CTA 섹션 데이터 [Required]
 *   @param {string} data.title - 섹션 타이틀 [Required]
 *   @param {string} data.description - 설명 텍스트 [Required]
 *   @param {object} data.button - 버튼 정보 [Required]
 *     @param {string} data.button.label - 버튼 레이블 [Required]
 * @param {function} onCTAClick - CTA 버튼 클릭 핸들러 [Required]
 *
 * Example usage:
 * <LandingCTA
 *   data={landingPageContent.cta}
 *   onCTAClick={() => navigate('/archive')}
 * />
 */
export function LandingCTA({ data, onCTAClick }) {
  return (
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
        {data.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: 'text.secondary',
          mb: 4,
          fontSize: { xs: '1rem', md: '1.125rem' },
        }}
      >
        {data.description}
      </Typography>
      <Button
        variant="contained"
        size="large"
        endIcon={<ArrowForwardIcon />}
        onClick={onCTAClick}
        sx={{
          px: 4,
          py: 1.5,
          fontSize: '1.125rem',
          fontWeight: 600,
        }}
      >
        {data.button.label}
      </Button>
    </Container>
  );
}

export default LandingCTA;
