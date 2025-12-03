import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TaskTableBoard } from '../components/templates/TaskTableBoard';

/**
 * ManagerPage 컴포넌트
 *
 * Campaign Manager 페이지.
 * 프로젝트와 캠페인 태스크를 관리하고 추적한다.
 *
 * Props:
 * 없음
 *
 * Example usage:
 * <Route path="manager" element={<ManagerPage />} />
 */
function ManagerPage() {
  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Campaign Manager
        </Typography>
        <Typography color="text.secondary">
          Track and manage your team's projects and tasks.
        </Typography>
      </Box>
      <TaskTableBoard />
    </>
  );
}

export default ManagerPage;

