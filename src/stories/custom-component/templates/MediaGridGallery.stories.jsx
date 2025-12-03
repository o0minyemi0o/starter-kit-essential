import { MediaGridGallery } from '../../../components/templates/MediaGridGallery';
import { DocumentTitle, PageContainer } from '../../../components/storybookDocumentation';
import { SectionContainer } from '../../../components/container/SectionContainer';

export default {
  title: 'Template/MediaGridGallery',
  component: MediaGridGallery,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * ## 기본 사용법
 * 
 * 검색 및 필터링이 가능한 미디어 갤러리 템플릿입니다.
 */
export const Default = {
  render: () => (
    <PageContainer>
      <DocumentTitle
        title="Media Grid Gallery"
        status="Ready"
        note="검색 가능한 에셋 라이브러리 템플릿"
        brandName="Template"
        systemName="Gallery"
        version="1.0"
      />
      <SectionContainer>
        <MediaGridGallery />
      </SectionContainer>
    </PageContainer>
  ),
};

