import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { DocumentTitle, PageContainer, SectionTitle } from '../../../components/storybookDocumentation';
import {
  StyledParagraph,
  LeadParagraph,
  PullQuote,
  Callout,
} from '../../../components/typography/StyledParagraph';

export default {
  title: 'Custom Component/Typography/StyledParagraph',
  component: StyledParagraph,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## StyledParagraph

섹션을 강조하기 위한 스타일링된 문단 컴포넌트.

### 용도
- Lead paragraph로 섹션 소개
- Editorial 스타일의 본문 텍스트
- 인용구 (Pull Quote)
- 중요 정보 강조 (Callout)
        `,
      },
    },
  },
  argTypes: {
    preset: {
      control: 'select',
      options: ['lead', 'editorial', 'quote', 'callout', 'caption'],
      description: '스타일 프리셋',
    },
    dropCap: {
      control: 'boolean',
      description: '첫 글자 확대 (Drop Cap)',
    },
    dropCapStyle: {
      control: 'select',
      options: ['float', 'inline', 'margin'],
      description: 'Drop Cap 스타일',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: '텍스트 정렬',
    },
  },
};

const sampleText = {
  short: 'Design systems enable teams to build better products faster by making design reusable.',
  medium: 'A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications. It serves as a single source of truth for product teams.',
  long: 'Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing, and adjusting the space between pairs of letters. The term typography is also applied to the style, arrangement, and appearance of the letters, numbers, and symbols created by the process.',
  korean: '디자인 시스템은 재사용 가능한 컴포넌트와 명확한 표준으로 구성된 집합으로, 어떤 수의 애플리케이션이든 구축할 수 있습니다. 제품 팀을 위한 단일 진실 공급원(Single Source of Truth) 역할을 합니다.',
};

/** 기본 사용 */
export const Default = {
  args: {
    children: sampleText.medium,
    preset: 'lead',
    dropCap: false,
    align: 'left',
  },
};

/** 문서 및 데모 */
export const Documentation = {
  render: () => (
    <>
      <DocumentTitle
        title="StyledParagraph"
        status="Available"
        note="Styled paragraph component for section emphasis"
        brandName="Typography"
        systemName="Starter Kit"
        version="1.0"
      />
      <PageContainer>
        <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
          StyledParagraph
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
          섹션을 강조하기 위한 스타일링된 문단 컴포넌트입니다.
          다양한 프리셋과 Drop Cap 옵션으로 Editorial 스타일의 레이아웃을 구성합니다.
        </Typography>

        <SectionTitle title="Props" description="StyledParagraph 컴포넌트의 Props 목록입니다." />
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>Prop</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>Type</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>Default</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={ { fontFamily: 'monospace' } }>preset</TableCell>
                <TableCell>&apos;lead&apos; | &apos;editorial&apos; | &apos;quote&apos; | &apos;callout&apos; | &apos;caption&apos;</TableCell>
                <TableCell>&apos;lead&apos;</TableCell>
                <TableCell>스타일 프리셋</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontFamily: 'monospace' } }>dropCap</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>첫 글자 확대 (Drop Cap)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontFamily: 'monospace' } }>dropCapStyle</TableCell>
                <TableCell>&apos;float&apos; | &apos;inline&apos; | &apos;margin&apos;</TableCell>
                <TableCell>&apos;float&apos;</TableCell>
                <TableCell>Drop Cap 스타일</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontFamily: 'monospace' } }>maxWidth</TableCell>
                <TableCell>number | string</TableCell>
                <TableCell>65</TableCell>
                <TableCell>최대 너비 (ch 단위 또는 CSS 값)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontFamily: 'monospace' } }>indent</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>첫 줄 들여쓰기</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="Presets" description="다섯 가지 스타일 프리셋을 제공합니다." />
        <Stack spacing={ 5 }>
          <Box>
            <Typography variant="subtitle2" sx={ { mb: 1, color: 'text.secondary' } }>
              Lead - 섹션 소개 문단
            </Typography>
            <Box sx={ { p: 3, border: '1px solid', borderColor: 'divider' } }>
              <StyledParagraph preset="lead">
                { sampleText.medium }
              </StyledParagraph>
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={ { mb: 1, color: 'text.secondary' } }>
              Editorial - 본문 텍스트
            </Typography>
            <Box sx={ { p: 3, border: '1px solid', borderColor: 'divider' } }>
              <StyledParagraph preset="editorial">
                { sampleText.long }
              </StyledParagraph>
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={ { mb: 1, color: 'text.secondary' } }>
              Quote - 인용구
            </Typography>
            <Box sx={ { p: 3, border: '1px solid', borderColor: 'divider' } }>
              <StyledParagraph preset="quote">
                { sampleText.short }
              </StyledParagraph>
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={ { mb: 1, color: 'text.secondary' } }>
              Callout - 중요 정보 강조
            </Typography>
            <Box sx={ { p: 3, border: '1px solid', borderColor: 'divider' } }>
              <StyledParagraph preset="callout">
                { sampleText.short }
              </StyledParagraph>
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={ { mb: 1, color: 'text.secondary' } }>
              Caption - 이미지/미디어 설명
            </Typography>
            <Box sx={ { p: 3, border: '1px solid', borderColor: 'divider' } }>
              <StyledParagraph preset="caption">
                { sampleText.short }
              </StyledParagraph>
            </Box>
          </Box>
        </Stack>

        <SectionTitle title="Drop Cap Styles" description="세 가지 Drop Cap 스타일을 제공합니다." />
        <Stack spacing={ 5 }>
          <Box>
            <Typography variant="subtitle2" sx={ { mb: 1, color: 'text.secondary' } }>
              Float (기본) - 첫 글자가 왼쪽에 떠서 텍스트가 감싸는 형태
            </Typography>
            <Box sx={ { p: 3, border: '1px solid', borderColor: 'divider' } }>
              <StyledParagraph preset="editorial" dropCap dropCapStyle="float">
                { sampleText.long }
              </StyledParagraph>
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={ { mb: 1, color: 'text.secondary' } }>
              Inline - 첫 글자만 크게 인라인으로 표시
            </Typography>
            <Box sx={ { p: 3, border: '1px solid', borderColor: 'divider' } }>
              <StyledParagraph preset="editorial" dropCap dropCapStyle="inline">
                { sampleText.long }
              </StyledParagraph>
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={ { mb: 1, color: 'text.secondary' } }>
              Margin - 배경이 있는 Drop Cap
            </Typography>
            <Box sx={ { p: 3, border: '1px solid', borderColor: 'divider' } }>
              <StyledParagraph preset="editorial" dropCap dropCapStyle="margin">
                { sampleText.long }
              </StyledParagraph>
            </Box>
          </Box>
        </Stack>

        <SectionTitle title="Convenience Components" description="자주 사용되는 패턴을 위한 편의 컴포넌트입니다." />
        <Stack spacing={ 5 }>
          <Box>
            <Typography variant="subtitle2" sx={ { mb: 1, color: 'text.secondary' } }>
              LeadParagraph
            </Typography>
            <Box sx={ { p: 3, border: '1px solid', borderColor: 'divider' } }>
              <LeadParagraph>
                { sampleText.medium }
              </LeadParagraph>
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={ { mb: 1, color: 'text.secondary' } }>
              PullQuote (with author)
            </Typography>
            <Box sx={ { p: 3, border: '1px solid', borderColor: 'divider' } }>
              <PullQuote author="Steve Jobs">
                Design is not just what it looks like and feels like. Design is how it works.
              </PullQuote>
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={ { mb: 1, color: 'text.secondary' } }>
              Callout Variants
            </Typography>
            <Stack spacing={ 2 } sx={ { p: 3, border: '1px solid', borderColor: 'divider' } }>
              <Callout variant="default">
                This is a default callout for general information.
              </Callout>
              <Callout variant="info">
                This is an info callout for helpful tips and guidance.
              </Callout>
              <Callout variant="warning">
                This is a warning callout for important cautions.
              </Callout>
              <Callout variant="success">
                This is a success callout for positive confirmations.
              </Callout>
              <Callout variant="error">
                This is an error callout for critical issues.
              </Callout>
            </Stack>
          </Box>
        </Stack>

        <SectionTitle title="Korean Text" description="한글 텍스트에서의 스타일링입니다." />
        <Stack spacing={ 4 }>
          <Box sx={ { p: 3, border: '1px solid', borderColor: 'divider' } }>
            <StyledParagraph preset="lead">
              { sampleText.korean }
            </StyledParagraph>
          </Box>
          <Box sx={ { p: 3, border: '1px solid', borderColor: 'divider' } }>
            <StyledParagraph preset="editorial" dropCap>
              디자인 시스템은 재사용 가능한 컴포넌트와 명확한 표준으로 구성된 집합으로, 어떤 수의 애플리케이션이든 구축할 수 있습니다. 제품 팀을 위한 단일 진실 공급원(Single Source of Truth) 역할을 하며, 일관된 사용자 경험을 제공합니다. 이를 통해 디자이너와 개발자 간의 협업이 더욱 효율적으로 이루어집니다.
            </StyledParagraph>
          </Box>
        </Stack>

        <SectionTitle title="Usage Example" description="코드 사용 예시입니다." />
        <Box
          component="pre"
          sx={ {
            backgroundColor: 'grey.100',
            p: 3,
            fontSize: 13,
            fontFamily: 'monospace',
            overflow: 'auto',
            lineHeight: 1.6,
          } }
        >
          {`// Lead paragraph
<LeadParagraph>
  Introducing our new design system...
</LeadParagraph>

// Editorial with Drop Cap
<StyledParagraph preset="editorial" dropCap>
  Lorem ipsum dolor sit amet...
</StyledParagraph>

// Pull Quote
<PullQuote author="Steve Jobs">
  Design is how it works.
</PullQuote>

// Callout
<Callout variant="info">
  Important information here.
</Callout>`}
        </Box>
      </PageContainer>
    </>
  ),
};
