import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { AssetCard } from '../../../components/orbit/cards/AssetCard';
import { assetData } from '../../../components/orbit/data/mock';
import { DocumentTitle, PageContainer } from '../../../components/storybookDocumentation';
import { SectionContainer } from '../../../components/container/SectionContainer';

export default {
  title: 'Custom Component/Card/AssetCard',
  component: AssetCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * ## 기본 사용법
 * 
 * 미디어 에셋을 표시하는 카드입니다.
 * CustomCard를 기반으로 미디어 갤러리에 최적화되어 있습니다.
 */
export const Default = {
  render: () => (
    <PageContainer>
      <DocumentTitle
        title="AssetCard"
        status="Ready"
        note="미디어 에셋 카드 (CustomCard 기반)"
        brandName="Card"
        systemName="AssetCard"
        version="1.0"
      />
      <SectionContainer>
        <Grid container spacing={3}>
          {assetData.slice(0, 4).map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <AssetCard data={item} />
            </Grid>
          ))}
        </Grid>
      </SectionContainer>
    </PageContainer>
  ),
};

/**
 * ## 이미지 타입
 */
export const ImageType = {
  render: () => {
    const imageAssets = assetData.filter(item => item.type === 'image').slice(0, 4);
    return (
      <PageContainer>
        <DocumentTitle
          title="AssetCard - Image"
          status="Ready"
          note="이미지 에셋 표시"
          brandName="Card"
          systemName="AssetCard"
          version="1.0"
        />
        <SectionContainer>
          <Grid container spacing={3}>
            {imageAssets.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 3 }}>
                <AssetCard data={item} />
              </Grid>
            ))}
          </Grid>
        </SectionContainer>
      </PageContainer>
    );
  },
};

/**
 * ## 비디오 타입
 */
export const VideoType = {
  render: () => {
    const videoAssets = assetData.filter(item => item.type === 'video').slice(0, 4);
    return (
      <PageContainer>
        <DocumentTitle
          title="AssetCard - Video"
          status="Ready"
          note="비디오 에셋 표시 (재생 아이콘 오버레이)"
          brandName="Card"
          systemName="AssetCard"
          version="1.0"
        />
        <SectionContainer>
          <Grid container spacing={3}>
            {videoAssets.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 3 }}>
                <AssetCard data={item} />
              </Grid>
            ))}
          </Grid>
        </SectionContainer>
      </PageContainer>
    );
  },
};

