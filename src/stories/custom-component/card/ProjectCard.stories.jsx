import Grid from '@mui/material/Grid';
import { ProjectCard } from '../../../components/orbit/cards/ProjectCard';
import { projectData } from '../../../components/orbit/data/mock';
import { DocumentTitle, PageContainer } from '../../../components/storybookDocumentation';
import { SectionContainer } from '../../../components/container/SectionContainer';

export default {
  title: 'Custom Component/Card/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * ## 기본 사용법
 * 
 * 프로젝트 진행 상황을 표시하는 카드입니다.
 * CustomCard + StatusBadge를 조합하여 사용합니다.
 */
export const Default = {
  render: () => (
    <PageContainer>
      <DocumentTitle
        title="ProjectCard"
        status="Ready"
        note="프로젝트 카드 (CustomCard + StatusBadge 기반)"
        brandName="Card"
        systemName="ProjectCard"
        version="1.0"
      />
      <SectionContainer>
        <Grid container spacing={3}>
          {projectData.slice(0, 4).map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <ProjectCard data={item} />
            </Grid>
          ))}
        </Grid>
      </SectionContainer>
    </PageContainer>
  ),
};

/**
 * ## 상태별 카드
 */
export const ByStatus = {
  render: () => {
    const statuses = ['In Progress', 'Completed', 'Delayed', 'Planning'];
    const byStatus = statuses.map(status => 
      projectData.find(p => p.status === status)
    ).filter(Boolean);
    
    return (
      <PageContainer>
        <DocumentTitle
          title="ProjectCard - By Status"
          status="Ready"
          note="상태별 프로젝트 카드"
          brandName="Card"
          systemName="ProjectCard"
          version="1.0"
        />
        <SectionContainer>
          <Grid container spacing={3}>
            {byStatus.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 3 }}>
                <ProjectCard data={item} />
              </Grid>
            ))}
          </Grid>
        </SectionContainer>
      </PageContainer>
    );
  },
};

