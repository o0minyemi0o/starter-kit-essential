import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { StatusBadge } from '../../../components/orbit/data/StatusBadge';
import { DocumentTitle, PageContainer } from '../../../components/storybookDocumentation';
import { SectionContainer } from '../../../components/container/SectionContainer';

export default {
  title: 'Custom Component/Data/StatusBadge',
  component: StatusBadge,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

const allStatuses = ['Completed', 'In Progress', 'Review', 'Delayed', 'Planning', 'Urgent'];

/**
 * ## 기본 사용법
 * 
 * 상태값을 시각적인 뱃지로 표시하는 컴포넌트입니다.
 * MUI Chip을 기반으로 상태별 색상이 자동 적용됩니다.
 */
export const Default = {
  render: () => (
    <PageContainer>
      <DocumentTitle
        title="StatusBadge"
        status="Ready"
        note="상태 표시 뱃지 (MUI Chip 기반)"
        brandName="Data"
        systemName="StatusBadge"
        version="1.0"
      />
      <SectionContainer>
        <Typography variant="h6" gutterBottom>모든 상태</Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {allStatuses.map((status) => (
            <StatusBadge key={status} status={status} />
          ))}
        </Stack>
      </SectionContainer>
    </PageContainer>
  ),
};

/**
 * ## 크기 비교
 */
export const Sizes = {
  render: () => (
    <PageContainer>
      <DocumentTitle
        title="StatusBadge - Sizes"
        status="Ready"
        note="small / medium 크기 비교"
        brandName="Data"
        systemName="StatusBadge"
        version="1.0"
      />
      <SectionContainer>
        <Stack spacing={3}>
          <Box>
            <Typography variant="subtitle2" gutterBottom>Small</Typography>
            <Stack direction="row" spacing={1}>
              {allStatuses.map((status) => (
                <StatusBadge key={status} status={status} size="small" />
              ))}
            </Stack>
          </Box>
          <Box>
            <Typography variant="subtitle2" gutterBottom>Medium (기본)</Typography>
            <Stack direction="row" spacing={1}>
              {allStatuses.map((status) => (
                <StatusBadge key={status} status={status} size="medium" />
              ))}
            </Stack>
          </Box>
        </Stack>
      </SectionContainer>
    </PageContainer>
  ),
};

