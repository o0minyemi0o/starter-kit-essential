import Grid from '@mui/material/Grid';
import { MetricCard } from '../orbit/cards/MetricCard';
import { metricData } from '../orbit/data/mock';

/**
 * StatsOverview
 * 대시보드 상단 통계 템플릿
 * 
 * 레이아웃 컨테이너(SectionContainer, PageContainer)는 페이지 레벨에서 제공됩니다.
 * 이 컴포넌트는 순수 콘텐츠만 렌더링합니다.
 * 
 * @param {Array} data - Metric 데이터 배열 (기본값: mock metricData)
 */
export const StatsOverview = ({ data = metricData }) => {
  return (
    <Grid container spacing={3}>
      {data.map((item) => (
        <Grid key={item.id} size={{ xs: 12, sm: 6, lg: 3 }}>
          <MetricCard data={item} />
        </Grid>
      ))}
    </Grid>
  );
};
