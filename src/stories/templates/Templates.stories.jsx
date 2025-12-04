import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import { UploadModal } from '../../components/templates/UploadModal';
import { FilterBar } from '../../components/templates/FilterBar';
import { ImageCard } from '../../components/card/ImageCard';
import { museAssets } from '../../data/museMockData';

export default {
  title: 'Template/MUSE',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## MUSE Templates

MUSE 프로젝트를 위한 템플릿 컴포넌트 모음.

### 컴포넌트 목록
- **UploadModal**: 레퍼런스 업로드 전체 플로우 모달
- **FilterBar**: 검색 및 태그 기반 필터링 바
        `,
      },
    },
  },
};

/**
 * UploadModal 전체 플로우
 */
export const UploadModalFlow = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleUpload = async (data) => {
      console.log('Uploading:', data);
      // 실제 업로드 시뮬레이션
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Upload complete!');
    };

    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
          Upload Modal
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Complete upload flow with file selection, metadata input, and progress tracking
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setIsOpen(true)}
          sx={{ textTransform: 'none', fontWeight: 600 }}
        >
          Upload Reference
        </Button>
        <UploadModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onUpload={handleUpload}
        />
      </Box>
    );
  },
};

/**
 * FilterBar 기본 사용
 */
export const FilterBarDefault = {
  render: () => {
    const [search, setSearch] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const [sortBy, setSortBy] = useState('newest');
    const [viewMode, setViewMode] = useState('grid');

    const allTags = ['Neon', 'City', 'Abstract', 'Product', 'Minimal', 'Tech', 'Business', 'Glitch'];

    const handleTagToggle = (tag) => {
      setSelectedTags((prev) =>
        prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
      );
    };

    const handleClearFilters = () => {
      setSearch('');
      setSelectedTags([]);
    };

    // 필터링된 에셋
    const filteredAssets = museAssets.filter((asset) => {
      const matchesSearch = !search || asset.title.toLowerCase().includes(search.toLowerCase());
      const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => asset.tags.includes(tag));
      return matchesSearch && matchesTags;
    });

    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h6" sx={{ mb: 3, fontWeight: 700 }}>
          Filter Bar
        </Typography>

        <FilterBar
          searchValue={search}
          onSearchChange={setSearch}
          availableTags={allTags}
          selectedTags={selectedTags}
          onTagToggle={handleTagToggle}
          onClearFilters={handleClearFilters}
          sortBy={sortBy}
          onSortChange={setSortBy}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          resultCount={filteredAssets.length}
        />

        {/* 필터링된 결과 그리드 */}
        <Grid container spacing={3}>
          {filteredAssets.map((asset) => (
            <Grid key={asset.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <ImageCard
                src={asset.thumbnail}
                title={asset.title}
                tags={asset.tags}
                onLike={() => console.log('Like:', asset.title)}
                onAddToBoard={() => console.log('Add:', asset.title)}
              />
            </Grid>
          ))}
        </Grid>

        {filteredAssets.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No results found
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Try adjusting your filters
            </Typography>
          </Box>
        )}
      </Box>
    );
  },
};

/**
 * FilterBar 미니멀 버전
 */
export const FilterBarMinimal = {
  render: () => {
    const [search, setSearch] = useState('');
    const [selectedTags, setSelectedTags] = useState(['Minimal']);

    const handleTagToggle = (tag) => {
      setSelectedTags((prev) =>
        prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
      );
    };

    return (
      <Box sx={{ p: 4, maxWidth: 600 }}>
        <Typography variant="h6" sx={{ mb: 3, fontWeight: 700 }}>
          Filter Bar (Minimal)
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Without sort and view mode controls
        </Typography>
        <FilterBar
          searchValue={search}
          onSearchChange={setSearch}
          availableTags={['Minimal', 'Bold', 'Colorful', 'Dark', 'Light']}
          selectedTags={selectedTags}
          onTagToggle={handleTagToggle}
          onClearFilters={() => {
            setSearch('');
            setSelectedTags([]);
          }}
          resultCount={42}
        />
      </Box>
    );
  },
};

/**
 * 전체 갤러리 데모
 */
export const GalleryDemo = {
  render: () => {
    const [search, setSearch] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const [sortBy, setSortBy] = useState('newest');
    const [viewMode, setViewMode] = useState('grid');
    const [showUpload, setShowUpload] = useState(false);

    const allTags = [...new Set(museAssets.flatMap((a) => a.tags))];

    const handleTagToggle = (tag) => {
      setSelectedTags((prev) =>
        prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
      );
    };

    const filteredAssets = museAssets.filter((asset) => {
      const matchesSearch = !search || asset.title.toLowerCase().includes(search.toLowerCase());
      const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => asset.tags.includes(tag));
      return matchesSearch && matchesTags;
    });

    return (
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        {/* 헤더 */}
        <Box
          sx={{
            p: 3,
            borderBottom: '1px solid',
            borderColor: 'divider',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            MUSE Archive
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setShowUpload(true)}
            sx={{ textTransform: 'none', fontWeight: 600 }}
          >
            Upload
          </Button>
        </Box>

        {/* 필터 바 */}
        <Box sx={{ p: 3 }}>
          <FilterBar
            searchValue={search}
            onSearchChange={setSearch}
            availableTags={allTags}
            selectedTags={selectedTags}
            onTagToggle={handleTagToggle}
            onClearFilters={() => {
              setSearch('');
              setSelectedTags([]);
            }}
            sortBy={sortBy}
            onSortChange={setSortBy}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            resultCount={filteredAssets.length}
          />

          {/* 갤러리 그리드 */}
          <Grid container spacing={3}>
            {filteredAssets.map((asset) => (
              <Grid key={asset.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <ImageCard
                  src={asset.thumbnail}
                  title={asset.title}
                  tags={asset.tags}
                  onLike={() => console.log('Like:', asset.title)}
                  onAddToBoard={() => console.log('Add:', asset.title)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* 업로드 모달 */}
        <UploadModal
          isOpen={showUpload}
          onClose={() => setShowUpload(false)}
          onUpload={async (data) => {
            console.log('Uploading:', data);
            await new Promise((r) => setTimeout(r, 2000));
          }}
        />
      </Box>
    );
  },
};
