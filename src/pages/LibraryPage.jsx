import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MediaGridGallery } from '../components/templates/MediaGridGallery';

/**
 * LibraryPage 컴포넌트
 *
 * Asset Library 페이지.
 * 팀의 미디어 에셋(이미지, 비디오)을 관리하고 탐색한다.
 *
 * Props:
 * 없음
 *
 * Example usage:
 * <Route path="library" element={<LibraryPage />} />
 */
function LibraryPage() {
  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Asset Library
        </Typography>
        <Typography color="text.secondary">
          Browse and manage your team's media assets.
        </Typography>
      </Box>
      <MediaGridGallery />
    </>
  );
}

export default LibraryPage;

