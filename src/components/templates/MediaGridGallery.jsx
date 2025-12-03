import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { AssetCard } from '../orbit/cards/AssetCard';
import { SearchBar } from '../orbit/input/SearchBar';
import { assetData } from '../orbit/data/mock';

/**
 * MediaGridGallery
 * 검색 및 필터링이 가능한 미디어 갤러리 템플릿
 * 
 * 레이아웃 컨테이너(SectionContainer, PageContainer)는 페이지 레벨에서 제공됩니다.
 * 이 컴포넌트는 순수 콘텐츠만 렌더링합니다.
 * 
 * @param {Array} data - Asset 데이터 배열 (기본값: mock assetData)
 */
export const MediaGridGallery = ({ data = assetData }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // 필터 목록 추출
  const filters = ['All', 'Image', 'Video', 'Nature', 'Product'];

  // 데이터 필터링 로직
  const filteredData = data.filter((item) => {
    // 1. 텍스트 검색
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    // 2. 카테고리/타입 필터
    let matchesFilter = true;
    if (selectedFilter !== 'All') {
      if (selectedFilter === 'Image') matchesFilter = item.type === 'image';
      else if (selectedFilter === 'Video') matchesFilter = item.type === 'video';
      else matchesFilter = item.category.toLowerCase() === selectedFilter.toLowerCase();
    }

    return matchesSearch && matchesFilter;
  });

  return (
    <>
      {/* Header: Search & Filter */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Typography variant="h5" fontWeight={700}>
            Asset Library
          </Typography>
          <SearchBar 
            placeholder="Search assets..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Box>
        
        <Stack direction="row" spacing={1} sx={{ overflowX: 'auto', pb: 1 }}>
          {filters.map((filter) => (
            <Chip
              key={filter}
              label={filter}
              onClick={() => setSelectedFilter(filter)}
              color={selectedFilter === filter ? 'primary' : 'default'}
              variant={selectedFilter === filter ? 'filled' : 'outlined'}
              clickable
            />
          ))}
        </Stack>
      </Box>

      {/* Content: Grid */}
      <Grid container spacing={3}>
        {filteredData.map((item) => (
          <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <AssetCard data={item} />
          </Grid>
        ))}
      </Grid>

      {/* Empty State */}
      {filteredData.length === 0 && (
        <Box sx={{ py: 8, textAlign: 'center' }}>
          <Typography color="text.secondary">
            No assets found matching your criteria.
          </Typography>
        </Box>
      )}
    </>
  );
};
