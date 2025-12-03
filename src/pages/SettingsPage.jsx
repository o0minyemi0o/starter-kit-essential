import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ConfigFormSection } from '../components/templates/ConfigFormSection';

/**
 * SettingsPage 컴포넌트
 *
 * Studio Config (설정) 페이지.
 * 프로젝트 및 사용자 설정을 관리한다.
 *
 * Props:
 * 없음
 *
 * Example usage:
 * <Route path="settings" element={<SettingsPage />} />
 */
function SettingsPage() {
  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Studio Config
        </Typography>
        <Typography color="text.secondary">
          Configure your project and account settings.
        </Typography>
      </Box>
      <ConfigFormSection />
    </>
  );
}

export default SettingsPage;

