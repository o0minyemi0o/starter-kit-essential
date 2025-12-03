import Grid from '@mui/material/Grid';
import { MetricCard } from '../../../components/orbit/cards/MetricCard';
import { metricData } from '../../../components/orbit/data/mock';
import { DocumentTitle, PageContainer } from '../../../components/storybookDocumentation';
import { SectionContainer } from '../../../components/container/SectionContainer';

export default {
  title: 'Custom Component/Card/MetricCard',
  component: MetricCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * ## 기본 사용법
 * 
 * 대시보드 주요 지표를 표시하는 카드입니다.
 * CustomCard를 기반으로 통계 표시에 최적화되어 있습니다.
 */
export const Default = {
  render: () => (
    <PageContainer>
      <DocumentTitle
        title="MetricCard"
        status="Ready"
        note="대시보드 메트릭 카드 (CustomCard 기반)"
        brandName="Card"
        systemName="MetricCard"
        version="1.0"
      />
      <SectionContainer>
        <Grid container spacing={3}>
          {metricData.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, lg: 3 }}>
              <MetricCard data={item} />
            </Grid>
          ))}
        </Grid>
      </SectionContainer>
    </PageContainer>
  ),
};

/**
 * ## 개별 카드
 */
export const SingleCard = {
  render: () => (
    <PageContainer>
      <DocumentTitle
        title="MetricCard - Single"
        status="Ready"
        note="개별 메트릭 카드 예시"
        brandName="Card"
        systemName="MetricCard"
        version="1.0"
      />
      <SectionContainer>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <MetricCard data={metricData[0]} />
          </Grid>
        </Grid>
      </SectionContainer>
    </PageContainer>
  ),
};

