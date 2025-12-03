import Typography from '@mui/material/Typography';
import { AppShell } from '../../../components/navigation/AppShell';
import { NavMenu } from '../../../components/navigation/NavMenu';
import { ConfigFormSection } from '../../../components/templates/ConfigFormSection';
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
  title: 'Pages/Settings',
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * ## Studio Config 페이지
 * 
 * 설정 페이지 시나리오입니다.
 * AppShell + NavMenu + ConfigFormSection 조합
 */
export const Default = {
  render: () => (
    <PageContainer>
      <DocumentTitle
        title="Studio Config"
        status="Live"
        note="설정 페이지 시나리오"
        brandName="Page"
        systemName="Settings"
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
            activeId="settings"
            variant="underline"
          />
        }
      >
        <SectionContainer>
          <ConfigFormSection />
        </SectionContainer>
      </AppShell>
    </PageContainer>
  ),
};

