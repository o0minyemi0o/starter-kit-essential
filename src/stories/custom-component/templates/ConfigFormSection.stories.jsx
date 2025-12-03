import { ConfigFormSection } from '../../../components/templates/ConfigFormSection';
import { DocumentTitle, PageContainer } from '../../../components/storybookDocumentation';
import { SectionContainer } from '../../../components/container/SectionContainer';

export default {
  title: 'Template/ConfigFormSection',
  component: ConfigFormSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * ## 기본 사용법
 * 
 * 사용자 설정 및 프로필 관리 폼 템플릿입니다.
 */
export const Default = {
  render: () => (
    <PageContainer>
      <DocumentTitle
        title="Config Form Section"
        status="Ready"
        note="사용자 설정 폼 템플릿"
        brandName="Template"
        systemName="Settings"
        version="1.0"
      />
      <SectionContainer>
        <ConfigFormSection />
      </SectionContainer>
    </PageContainer>
  ),
};

