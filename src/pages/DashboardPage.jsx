import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { StatsOverview } from '../components/templates/StatsOverview';

/**
 * DashboardPage 컴포넌트
 *
 * Team Pulse (대시보드) 페이지.
 * 팀의 주요 지표와 현황을 한눈에 보여준다.
 *
 * Props:
 * 없음
 *
 * Example usage:
 * <Route index element={<DashboardPage />} />
 */
function DashboardPage() {
  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Good Morning, Sarah!
        </Typography>
        <Typography color="text.secondary">
          Here's what's happening with your team today.
        </Typography>
      </Box>
      <StatsOverview />
    </>
  );
}

export default DashboardPage;

