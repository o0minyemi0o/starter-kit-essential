import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

/**
 * LandingProblemSolution 컴포넌트
 *
 * 랜딩 페이지의 Problem-Solution 섹션.
 * 문제 제기와 해결책을 나란히 표시합니다.
 *
 * Props:
 * @param {object} data - Problem-Solution 데이터 [Required]
 *   @param {object} data.problem - 문제 섹션 데이터 [Required]
 *     @param {string} data.problem.badge - 배지 텍스트 [Required]
 *     @param {string} data.problem.badgeColor - 배지 색상 [Required]
 *     @param {string} data.problem.title - 문제 타이틀 [Required]
 *     @param {string[]} data.problem.descriptions - 문제 설명 목록 [Required]
 *   @param {object} data.solution - 해결책 섹션 데이터 [Required]
 *     @param {string} data.solution.badge - 배지 텍스트 [Required]
 *     @param {string} data.solution.badgeColor - 배지 색상 [Required]
 *     @param {string} data.solution.title - 해결책 타이틀 [Required]
 *     @param {string[]} data.solution.benefits - 혜택 목록 [Required]
 *
 * Example usage:
 * <LandingProblemSolution data={landingPageContent.usp.problemSolution} />
 */
export function LandingProblemSolution({ data }) {
  const { problem, solution } = data;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      <Grid container spacing={6} alignItems="center">
        {/* Problem */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="overline"
              sx={{
                color: problem.badgeColor,
                fontWeight: 600,
                letterSpacing: 1,
                mb: 2,
                display: 'block',
              }}
            >
              {problem.badge}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '1.75rem', md: '2rem' },
                lineHeight: 1.3,
                whiteSpace: 'pre-line',
              }}
            >
              {problem.title}
            </Typography>
            {problem.descriptions.map((desc, index) => (
              <Typography
                key={index}
                variant="body1"
                color="text.secondary"
                sx={{
                  mb: index < problem.descriptions.length - 1 ? 3 : 0,
                  fontSize: { xs: '1rem', md: '1.125rem' },
                }}
              >
                {desc}
              </Typography>
            ))}
          </Box>
        </Grid>

        {/* Solution */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="overline"
              sx={{
                color: solution.badgeColor,
                fontWeight: 600,
                letterSpacing: 1,
                mb: 2,
                display: 'block',
              }}
            >
              {solution.badge}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '1.75rem', md: '2rem' },
                lineHeight: 1.3,
                whiteSpace: 'pre-line',
              }}
            >
              {solution.title}
            </Typography>
            <Box component="ul" sx={{ pl: 0, listStyle: 'none' }}>
              {solution.benefits.map((item, index) => (
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
  );
}

export default LandingProblemSolution;
