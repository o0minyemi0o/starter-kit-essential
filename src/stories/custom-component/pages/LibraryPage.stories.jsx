import Typography from '@mui/material/Typography';
import { AppShell } from '../../../components/navigation/AppShell';
import { NavMenu } from '../../../components/navigation/NavMenu';
import { MediaGridGallery } from '../../../components/templates/MediaGridGallery';
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
  title: 'Pages/Library',
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * ## Asset Library 페이지
 * 
 * 미디어 에셋 라이브러리 페이지 시나리오입니다.
 * AppShell + NavMenu + MediaGridGallery 조합
 */
export const Default = {
  render: () => (
    <PageContainer>
      <DocumentTitle
        title="Asset Library"
        status="Live"
        note="에셋 라이브러리 페이지 시나리오"
        brandName="Page"
        systemName="Library"
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
            activeId="assets"
            variant="underline"
          />
        }
      >
        <SectionContainer>
          <MediaGridGallery />
        </SectionContainer>
      </AppShell>
    </PageContainer>
  ),
};

