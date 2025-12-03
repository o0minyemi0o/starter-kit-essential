import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { SearchBar } from '../../../components/orbit/input/SearchBar';
import { DocumentTitle, PageContainer } from '../../../components/storybookDocumentation';
import { SectionContainer } from '../../../components/container/SectionContainer';

export default {
  title: 'Custom Component/Input/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * ## 기본 사용법
 * 
 * 검색 입력 컴포넌트입니다.
 * MUI TextField를 기반으로 검색 아이콘이 포함되어 있습니다.
 */
export const Default = {
  render: () => (
    <PageContainer>
      <DocumentTitle
        title="SearchBar"
        status="Ready"
        note="검색 입력 컴포넌트 (MUI TextField 기반)"
        brandName="Input"
        systemName="SearchBar"
        version="1.0"
      />
      <SectionContainer>
        <Box sx={{ maxWidth: 400 }}>
          <SearchBar placeholder="Search..." />
        </Box>
      </SectionContainer>
    </PageContainer>
  ),
};

/**
 * ## 다양한 Placeholder
 */
export const Placeholders = {
  render: () => (
    <PageContainer>
      <DocumentTitle
        title="SearchBar - Placeholders"
        status="Ready"
        note="다양한 placeholder 예시"
        brandName="Input"
        systemName="SearchBar"
        version="1.0"
      />
      <SectionContainer>
        <Stack spacing={2} sx={{ maxWidth: 400 }}>
          <SearchBar placeholder="Search assets..." />
          <SearchBar placeholder="Search projects..." />
          <SearchBar placeholder="Search members..." />
        </Stack>
      </SectionContainer>
    </PageContainer>
  ),
};

/**
 * ## 인터랙티브 예시
 */
export const Interactive = {
  render: function InteractiveSearch() {
    const [value, setValue] = useState('');
    
    return (
      <PageContainer>
        <DocumentTitle
          title="SearchBar - Interactive"
          status="Ready"
          note="입력값 변화 확인"
          brandName="Input"
          systemName="SearchBar"
          version="1.0"
        />
        <SectionContainer>
          <Stack spacing={2} sx={{ maxWidth: 400 }}>
            <SearchBar 
              placeholder="Type something..." 
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Typography variant="body2" color="text.secondary">
              입력값: {value || '(비어있음)'}
            </Typography>
          </Stack>
        </SectionContainer>
      </PageContainer>
    );
  },
};

