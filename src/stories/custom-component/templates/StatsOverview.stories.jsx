import { StatsOverview } from '../../../components/templates/StatsOverview';
import { DocumentTitle, PageContainer } from '../../../components/storybookDocumentation';
import { SectionContainer } from '../../../components/container/SectionContainer';

export default {
  title: 'Template/StatsOverview',
  component: StatsOverview,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * ## 기본 사용법
 * 
 * 대시보드 상단의 주요 지표를 표시하는 템플릿입니다.
 */
export const Default = {
  render: () => (
    <PageContainer>
      <DocumentTitle
        title="Stats Overview"
        status="Ready"
        note="대시보드 메트릭 섹션 템플릿"
        brandName="Template"
        systemName="Dashboard"
        version="1.0"
      />
      <SectionContainer>
        <StatsOverview />
      </SectionContainer>
    </PageContainer>
  ),
};

