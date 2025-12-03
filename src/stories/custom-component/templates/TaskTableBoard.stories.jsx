import { TaskTableBoard } from '../../../components/templates/TaskTableBoard';
import { DocumentTitle, PageContainer } from '../../../components/storybookDocumentation';
import { SectionContainer } from '../../../components/container/SectionContainer';

export default {
  title: 'Template/TaskTableBoard',
  component: TaskTableBoard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * ## 기본 사용법
 * 
 * 탭 네비게이션이 포함된 프로젝트 관리 보드 템플릿입니다.
 */
export const Default = {
  render: () => (
    <PageContainer>
      <DocumentTitle
        title="Task Table Board"
        status="Ready"
        note="프로젝트 관리 테이블 템플릿"
        brandName="Template"
        systemName="Manager"
        version="1.0"
      />
      <SectionContainer>
        <TaskTableBoard />
      </SectionContainer>
    </PageContainer>
  ),
};

