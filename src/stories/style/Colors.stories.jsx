import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useTheme } from '@mui/material/styles';
import {
  blue,
  blueGrey,
  grey,
  red,
  orange,
  green,
  lightBlue,
} from '@mui/material/colors';
import { DocumentTitle, PageContainer, SectionTitle } from '../../components/storybookDocumentation';

export default {
  title: 'Style/Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## 색상 시스템

프로젝트에서 사용하는 색상 팔레트와 역할별 컬러 토큰입니다.

### 구조
- Color Palette: 순수 색상값 모음 (blue[500], grey[100])
- Semantic Tokens: 역할별 의미 부여 (primary, secondary)
- Component Tokens: 컴포넌트별 적용 (Button, Alert)
        `,
      },
    },
  },
};

/** 팔레트 스케일 컴포넌트 - 큰 블록 형태 */
const PaletteScale = ({ name, colorObj, description }) => (
  <Box sx={ { mb: 6 } }>
    <Typography variant="h6" sx={ { fontWeight: 600, mb: 0.5 } }>{ name }</Typography>
    <Typography variant="body2" color="text.secondary" sx={ { mb: 2 } }>{ description }</Typography>
    <Box sx={ { display: 'flex', flexWrap: 'wrap', gap: 1 } }>
      { [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
        <Box
          key={ shade }
          sx={ {
            width: 80,
            height: 80,
            backgroundColor: colorObj[shade],
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 1,
          } }
        >
          <Typography
            variant="caption"
            sx={ {
              color: shade >= 400 ? 'white' : 'rgba(0,0,0,0.7)',
              fontSize: 12,
              fontWeight: 700,
            } }
          >
            { shade }
          </Typography>
          <Typography
            variant="caption"
            sx={ {
              color: shade >= 400 ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.5)',
              fontSize: 10,
              fontFamily: 'monospace',
            } }
          >
            { colorObj[shade] }
          </Typography>
        </Box>
      )) }
    </Box>
  </Box>
);

/** 기본 - 전체 색상 시스템 개요 */
export const Default = {
  render: () => {
    const theme = useTheme();
    return (
      <>
        <DocumentTitle
          title="Color System"
          status="Available"
          note="Color palette and semantic color tokens"
          brandName="Design System"
          systemName="Starter Kit"
          version="1.0"
        />
        <PageContainer>
          <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
            색상 시스템 개요
          </Typography>
        <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
          색상 시스템의 구조와 계층을 이해합니다.
        </Typography>

        <SectionTitle title="색상 토큰 계층 구조" />

        <TableContainer sx={ { mb: 4 } }>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>계층</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>설명</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>예시</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>Color Palette</TableCell>
                <TableCell>순수 색상값</TableCell>
                <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>blue[500], grey[100]</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>Semantic Tokens</TableCell>
                <TableCell>역할별 색상</TableCell>
                <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>primary.main, error.main</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>Component Tokens</TableCell>
                <TableCell>컴포넌트별 적용</TableCell>
                <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>Button color="primary"</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="현재 프로젝트 주요 색상" />

        <TableContainer>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell sx={ { fontWeight: 600, width: '20%' } }>Primary</TableCell>
                <TableCell sx={ { fontFamily: 'monospace' } }>#0000FF</TableCell>
                <TableCell>브랜드 색상, CTA 버튼, 링크</TableCell>
                <TableCell sx={ { width: 40 } }>
                  <Box sx={ { width: 24, height: 24, backgroundColor: theme.palette.primary.main } } />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>Secondary</TableCell>
                <TableCell sx={ { fontFamily: 'monospace' } }>{ theme.palette.secondary.main }</TableCell>
                <TableCell>보조 액션, 비활성 요소</TableCell>
                <TableCell>
                  <Box sx={ { width: 24, height: 24, backgroundColor: theme.palette.secondary.main } } />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        </PageContainer>
      </>
    );
  },
};

/** 1. Color Palette - 원시 색상 */
export const Palette = {
  name: '1. Color Palette',
  render: () => (
    <>
      <DocumentTitle
        title="Color Palette"
        status="Available"
        note="MUI default color palette"
        brandName="Design System"
        systemName="Starter Kit"
        version="1.0"
      />
      <PageContainer>
        <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
          Color Palette (원시 색상)
        </Typography>
      <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
        MUI에서 제공하는 기본 색상 팔레트입니다. 이 색상들을 조합하여 테마를 구성합니다.
      </Typography>

      <Divider sx={ { mb: 4 } } />

      <PaletteScale name="Blue" colorObj={ blue } description="Primary 색상의 기반" />
      <PaletteScale name="Blue Grey" colorObj={ blueGrey } description="Secondary 색상의 기반" />
      <PaletteScale name="Grey" colorObj={ grey } description="텍스트, 배경, 보더" />
      <PaletteScale name="Red" colorObj={ red } description="Error 상태" />
      <PaletteScale name="Orange" colorObj={ orange } description="Warning 상태" />
      <PaletteScale name="Green" colorObj={ green } description="Success 상태" />
      <PaletteScale name="Light Blue" colorObj={ lightBlue } description="Info 상태" />

      <SectionTitle title="명도 가이드" />

      <TableContainer>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell sx={ { fontWeight: 600, width: '20%' } }>50-100</TableCell>
              <TableCell>매우 밝음 - 배경색</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={ { fontWeight: 600 } }>200-300</TableCell>
              <TableCell>밝음 - hover, 보더</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={ { fontWeight: 600 } }>400-500</TableCell>
              <TableCell>기본 - main 색상</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={ { fontWeight: 600 } }>600-700</TableCell>
              <TableCell>어두움 - active, dark</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={ { fontWeight: 600 } }>800-900</TableCell>
              <TableCell>매우 어두움 - 텍스트</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </PageContainer>
    </>
  ),
};

/** 시멘틱 토큰 블록 컴포넌트 */
const SemanticColorBlock = ({ name, colorObj, description }) => {
  const shades = ['light', 'main', 'dark'];
  return (
    <Box sx={ { mb: 6 } }>
      <Typography variant="h6" sx={ { fontWeight: 600, mb: 0.5 } }>{ name }</Typography>
      <Typography variant="body2" color="text.secondary" sx={ { mb: 2 } }>{ description }</Typography>
      <Box sx={ { display: 'flex', flexWrap: 'wrap', gap: 1 } }>
        { shades.map((shade) => {
          const color = colorObj[shade];
          const isLight = shade === 'light';
          return (
            <Box
              key={ shade }
              sx={ {
                width: 120,
                height: 80,
                backgroundColor: color,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 1,
                border: isLight ? '1px solid rgba(0,0,0,0.1)' : 'none',
              } }
            >
              <Typography
                variant="caption"
                sx={ {
                  color: isLight ? 'rgba(0,0,0,0.7)' : 'white',
                  fontSize: 12,
                  fontWeight: 700,
                } }
              >
                { shade }
              </Typography>
              <Typography
                variant="caption"
                sx={ {
                  color: isLight ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.7)',
                  fontSize: 10,
                  fontFamily: 'monospace',
                } }
              >
                { color }
              </Typography>
            </Box>
          );
        }) }
      </Box>
    </Box>
  );
};

/** 단일 색상 블록 컴포넌트 */
const SingleColorBlock = ({ name, color, description, hasBorder = false }) => (
  <Box
    sx={ {
      width: 120,
      height: 80,
      backgroundColor: color,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 1,
      border: hasBorder ? '1px solid rgba(0,0,0,0.1)' : 'none',
    } }
  >
    <Typography
      variant="caption"
      sx={ {
        color: hasBorder ? 'rgba(0,0,0,0.7)' : 'white',
        fontSize: 12,
        fontWeight: 700,
      } }
    >
      { name }
    </Typography>
    <Typography
      variant="caption"
      sx={ {
        color: hasBorder ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.7)',
        fontSize: 10,
        fontFamily: 'monospace',
      } }
    >
      { color }
    </Typography>
  </Box>
);

/** 2. Semantic Tokens - 역할별 색상 */
export const SemanticTokens = {
  name: '2. Semantic Tokens',
  render: () => {
    const theme = useTheme();
    return (
      <>
        <DocumentTitle
          title="Semantic Tokens"
          status="Available"
          note="Role-based semantic colors"
          brandName="Design System"
          systemName="Starter Kit"
          version="1.0"
        />
        <PageContainer>
          <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
            Semantic Tokens (역할별 색상)
          </Typography>
        <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
          색상에 의미와 역할을 부여한 토큰입니다. 컴포넌트에서 이 토큰을 참조합니다.
        </Typography>

        <SectionTitle title="브랜드 색상" />

        <SemanticColorBlock
          name="Primary"
          colorObj={ theme.palette.primary }
          description="CTA 버튼, 링크, 선택된 상태"
        />
        <SemanticColorBlock
          name="Secondary"
          colorObj={ theme.palette.secondary }
          description="보조 버튼, 태그"
        />

        <SectionTitle
          title="상태 색상 (Feedback Colors)"
          description="사용자에게 시스템 상태를 전달하는 색상입니다."
        />

        <SemanticColorBlock
          name="Error"
          colorObj={ theme.palette.error }
          description="오류, 삭제, 위험"
        />
        <SemanticColorBlock
          name="Warning"
          colorObj={ theme.palette.warning }
          description="주의, 경고"
        />
        <SemanticColorBlock
          name="Success"
          colorObj={ theme.palette.success }
          description="성공, 완료, 활성"
        />
        <SemanticColorBlock
          name="Info"
          colorObj={ theme.palette.info }
          description="정보, 안내"
        />

        <SectionTitle title="텍스트 및 배경 색상" />

        <Box sx={ { mb: 6 } }>
          <Typography variant="h6" sx={ { fontWeight: 600, mb: 0.5 } }>Text</Typography>
          <Typography variant="body2" color="text.secondary" sx={ { mb: 2 } }>텍스트 색상</Typography>
          <Box sx={ { display: 'flex', flexWrap: 'wrap', gap: 1 } }>
            <SingleColorBlock name="primary" color={ theme.palette.text.primary } description="주요 텍스트" />
            <SingleColorBlock name="secondary" color={ theme.palette.text.secondary } description="보조 텍스트" />
            <SingleColorBlock name="disabled" color={ theme.palette.text.disabled } description="비활성 텍스트" />
          </Box>
        </Box>

        <Box sx={ { mb: 6 } }>
          <Typography variant="h6" sx={ { fontWeight: 600, mb: 0.5 } }>Background</Typography>
          <Typography variant="body2" color="text.secondary" sx={ { mb: 2 } }>배경 색상</Typography>
          <Box sx={ { display: 'flex', flexWrap: 'wrap', gap: 1 } }>
            <SingleColorBlock name="default" color={ theme.palette.background.default } description="페이지 배경" hasBorder />
            <SingleColorBlock name="paper" color={ theme.palette.background.paper } description="카드, 모달 배경" hasBorder />
          </Box>
        </Box>
        </PageContainer>
      </>
    );
  },
};

/** 3. Usage - 컴포넌트에서의 활용 */
export const Usage = {
  name: '3. Usage',
  render: () => (
    <>
      <DocumentTitle
        title="Color Usage"
        status="Available"
        note="Color application in components"
        brandName="Design System"
        systemName="Starter Kit"
        version="1.0"
      />
      <PageContainer>
        <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
          컴포넌트 적용 예시
        </Typography>
      <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
        Semantic Token이 실제 컴포넌트에 어떻게 적용되는지 확인합니다.
      </Typography>

      <SectionTitle
        title="Button 컴포넌트"
        description="Button의 color prop에 Semantic Token 이름을 전달하면 해당 색상이 적용됩니다."
      />

      <Box
        component="pre"
        sx={ {
          backgroundColor: '#f5f5f5',
          p: 2,
          fontSize: 12,
          fontFamily: 'monospace',
          overflow: 'auto',
          mb: 4,
        } }
      >
{ `<Button variant="contained" color="primary">Primary</Button>
<Button variant="contained" color="error">Error</Button>
<Button variant="contained" color="success">Success</Button>` }
      </Box>

      <SectionTitle
        title="sx prop으로 직접 사용"
        description="sx prop에서 theme 값을 직접 참조할 수 있습니다."
      />

      <Box
        component="pre"
        sx={ {
          backgroundColor: '#f5f5f5',
          p: 2,
          fontSize: 12,
          fontFamily: 'monospace',
          overflow: 'auto',
        } }
      >
{ `// 문자열로 참조 (권장)
<Box sx={{ backgroundColor: 'primary.main' }} />
<Box sx={{ color: 'text.secondary' }} />
<Box sx={{ borderColor: 'divider' }} />

// 함수로 참조 (복잡한 계산 필요시)
<Box sx={{ backgroundColor: (theme) => theme.palette.primary.light }} />` }
      </Box>
      </PageContainer>
    </>
  ),
};
