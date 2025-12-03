import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AppShell } from '../../../components/navigation/AppShell';
import { NavMenu } from '../../../components/navigation/NavMenu';
import { StatsOverview } from '../../../components/templates/StatsOverview';
import { DocumentTitle, PageContainer } from '../../../components/storybookDocumentation';
import { SectionContainer } from '../../../components/container/SectionContainer';

// Navigation Items
const navItems = [
  { id: 'dashboard', label: 'Team Pulse' },
  { id: 'assets', label: 'Asset Library' },
  { id: 'projects', label: 'Campaign Manager' },
  { id: 'settings', label: 'Studio Config' },
];

export default {
  title: 'Pages/Dashboard',
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * ## Dashboard 페이지
 * 
 * 팀 대시보드 페이지 시나리오입니다.
 * AppShell + NavMenu + StatsOverview 조합
 */
export const Default = {
  render: () => (
    <PageContainer>
      <DocumentTitle
        title="Team Pulse (Dashboard)"
        status="Live"
        note="대시보드 페이지 시나리오"
        brandName="Page"
        systemName="Dashboard"
        version="1.0"
      />
      <AppShell
        logo={
          <Typography variant="h6" fontWeight={700} sx={{ letterSpacing: '-0.5px' }}>
            Orbit.
          </Typography>
        }
        headerCollapsible={
          <NavMenu
            items={navItems}
            activeId="dashboard"
            variant="underline"
          />
        }
      >
        <SectionContainer>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              Good Morning, Sarah!
            </Typography>
            <Typography color="text.secondary">
              Here's what's happening with your team today.
            </Typography>
          </Box>
          <StatsOverview />
        </SectionContainer>
      </AppShell>
    </PageContainer>
  ),
};

