import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import CollectionsIcon from '@mui/icons-material/Collections';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

/**
 * LandingUseCase 컴포넌트
 *
 * 랜딩 페이지의 Use Case 섹션.
 * 워크플로우 예시를 4단계로 표시합니다.
 *
 * Props:
 * @param {object} data - Showcase 섹션 데이터 [Required]
 *   @param {string} data.title - 섹션 타이틀 [Required]
 *   @param {string} data.subtitle - 섹션 부제목 [Required]
 *   @param {Array} data.steps - 워크플로우 단계 목록 [Required]
 *     @param {string} step.stage - 단계 레이블 [Required]
 *     @param {string} step.icon - 아이콘 이름 [Required]
 *     @param {string} step.title - 단계 타이틀 [Required]
 *     @param {string} step.scenario - 시나리오 설명 [Required]
 *     @param {string} step.action - 액션 설명 [Required]
 *     @param {string} step.highlight - 하이라이트 텍스트 [Required]
 *
 * Example usage:
 * <LandingUseCase data={landingPageContent.showcase} />
 */
export function LandingUseCase({ data }) {
  // ============================================
  // 아이콘 매핑
  // ============================================
  const iconComponents = {
    CloudUpload: CloudUploadIcon,
    SearchOff: SearchOffIcon,
    Collections: CollectionsIcon,
    CheckCircle: CheckCircleIcon,
  };

  const getIcon = (iconName, sx = {}) => {
    const IconComponent = iconComponents[iconName];
    return IconComponent ? <IconComponent sx={sx} /> : null;
  };

  return (
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
          {data.title}
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
          {data.subtitle}
        </Typography>

        <Grid container spacing={4}>
          {data.steps.map((step, index) => (
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
  );
}

export default LandingUseCase;
