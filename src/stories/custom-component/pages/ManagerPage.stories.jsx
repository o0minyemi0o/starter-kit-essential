import Typography from '@mui/material/Typography';
import { AppShell } from '../../../components/navigation/AppShell';
import { NavMenu } from '../../../components/navigation/NavMenu';
import { TaskTableBoard } from '../../../components/templates/TaskTableBoard';
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
  title: 'Pages/Manager',
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * ## Campaign Manager 페이지
 * 
 * 프로젝트 관리 페이지 시나리오입니다.
 * AppShell + NavMenu + TaskTableBoard 조합
 */
export const Default = {
  render: () => (
    <PageContainer>
      <DocumentTitle
        title="Campaign Manager"
        status="Live"
        note="캠페인 관리 페이지 시나리오"
        brandName="Page"
        systemName="Manager"
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
            activeId="projects"
            variant="underline"
          />
        }
      >
        <SectionContainer>
          <TaskTableBoard />
        </SectionContainer>
      </AppShell>
    </PageContainer>
  ),
};

