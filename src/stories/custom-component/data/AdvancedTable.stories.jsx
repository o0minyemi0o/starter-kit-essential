import { AdvancedTable } from '../../../components/orbit/data/AdvancedTable';
import { projectData } from '../../../components/orbit/data/mock';
import { DocumentTitle, PageContainer } from '../../../components/storybookDocumentation';
import { SectionContainer } from '../../../components/container/SectionContainer';

export default {
  title: 'Custom Component/Data/AdvancedTable',
  component: AdvancedTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * ## 기본 사용법
 * 
 * 정렬, 페이지네이션, 선택 기능이 포함된 테이블입니다.
 * StatusBadge를 활용하여 상태를 표시합니다.
 */
export const Default = {
  render: () => (
    <PageContainer>
      <DocumentTitle
        title="AdvancedTable"
        status="Ready"
        note="고급 테이블 (정렬, 페이지네이션, 선택 기능)"
        brandName="Data"
        systemName="AdvancedTable"
        version="1.0"
      />
      <SectionContainer>
        <AdvancedTable data={projectData} />
      </SectionContainer>
    </PageContainer>
  ),
};

/**
 * ## 적은 데이터
 */
export const FewRows = {
  render: () => (
    <PageContainer>
      <DocumentTitle
        title="AdvancedTable - Few Rows"
        status="Ready"
        note="데이터가 적을 때"
        brandName="Data"
        systemName="AdvancedTable"
        version="1.0"
      />
      <SectionContainer>
        <AdvancedTable data={projectData.slice(0, 5)} />
      </SectionContainer>
    </PageContainer>
  ),
};

/**
 * ## 빈 상태
 */
export const Empty = {
  render: () => (
    <PageContainer>
      <DocumentTitle
        title="AdvancedTable - Empty"
        status="Ready"
        note="데이터가 없을 때"
        brandName="Data"
        systemName="AdvancedTable"
        version="1.0"
      />
      <SectionContainer>
        <AdvancedTable data={[]} />
      </SectionContainer>
    </PageContainer>
  ),
};

