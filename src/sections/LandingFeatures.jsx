import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FolderIcon from '@mui/icons-material/Folder';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CollectionsIcon from '@mui/icons-material/Collections';

/**
 * LandingFeatures 컴포넌트
 *
 * 랜딩 페이지의 Features 섹션.
 * 4가지 핵심 기능을 카드 형태로 표시합니다.
 *
 * Props:
 * @param {object} data - Features 섹션 데이터 [Required]
 *   @param {string} data.title - 섹션 타이틀 [Required]
 *   @param {string} data.subtitle - 섹션 부제목 [Required]
 *   @param {Array} data.items - 기능 목록 [Required]
 *     @param {string} item.icon - 아이콘 이름 [Required]
 *     @param {string} item.title - 기능 타이틀 [Required]
 *     @param {string} item.description - 기능 설명 [Required]
 *
 * Example usage:
 * <LandingFeatures data={landingPageContent.usp.features} />
 */
export function LandingFeatures({ data }) {
  // ============================================
  // 아이콘 매핑
  // ============================================
  const iconComponents = {
    CloudUpload: CloudUploadIcon,
    Folder: FolderIcon,
    LocalOffer: LocalOfferIcon,
    Collections: CollectionsIcon,
  };

  const getIcon = (iconName, sx = {}) => {
    const IconComponent = iconComponents[iconName];
    return IconComponent ? <IconComponent sx={sx} /> : null;
  };

  return (
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
        {data.items.map((feature, index) => (
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
  );
}

export default LandingFeatures;
