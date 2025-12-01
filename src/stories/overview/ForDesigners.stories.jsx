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

export default {
  title: 'Overview/For Designers',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## 디자이너를 위한 가이드

피그마를 사용해본 디자이너가 React + MUI + Storybook 환경을 이해하기 위한 가이드입니다.

### 용도
- 피그마 개념과 코드 개념의 1:1 매핑 이해
- React와 Storybook의 관계 파악
- 디자인-개발 협업 워크플로우 이해
        `,
      },
    },
  },
};

/** 섹션 컴포넌트 */
const Section = ({ title, description, children }) => (
  <Box sx={ { mb: 6 } }>
    <Typography variant="h5" sx={ { fontWeight: 600, mb: 1 } }>
      { title }
    </Typography>
    { description && (
      <Typography variant="body2" color="text.secondary" sx={ { mb: 3 } }>
        { description }
      </Typography>
    ) }
    { children }
  </Box>
);

/** 0. Overview - React와 Storybook의 관계 */
export const Overview = {
  name: '0. Overview',
  render: () => (
    <Box sx={ { maxWidth: 800 } }>
      <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
        React.js와 Storybook의 관계
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
        React.js와 Storybook이 무엇이고, 왜 함께 사용하는지 알아봅니다.
      </Typography>

      <Divider sx={ { mb: 4 } } />

      <Section title="핵심 비유">
        <TableContainer sx={ { mb: 4 } }>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell sx={ { fontWeight: 600, width: '30%', borderBottom: '1px solid', borderColor: 'divider' } }>
                  피그마
                </TableCell>
                <TableCell sx={ { borderBottom: '1px solid', borderColor: 'divider' } }>
                  디자인 파일 + 컴포넌트 문서
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600, borderBottom: '1px solid', borderColor: 'divider' } }>
                  React + Storybook
                </TableCell>
                <TableCell sx={ { borderBottom: '1px solid', borderColor: 'divider' } }>
                  실제 코드 + 컴포넌트 문서
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Section>

      <Section
        title="React.js란?"
        description="사용자가 실제로 보고 사용하는 화면을 만드는 도구입니다."
      >
        <Typography variant="body2" sx={ { mb: 2 } }>
          피그마에서 디자인한 것을 실제 웹사이트로 구현할 때 사용합니다.
          버튼을 클릭하면 반응하고, 데이터를 불러오고, 페이지를 이동하는 등 실제 동작하는 제품을 만듭니다.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          핵심 개념은 컴포넌트입니다. 피그마의 컴포넌트처럼 재사용 가능한 UI 블록을 만들고,
          이것들을 조합해서 전체 페이지를 구성합니다.
        </Typography>
      </Section>

      <Section
        title="Storybook이란?"
        description="컴포넌트를 독립적으로 보고 테스트하는 도구입니다."
      >
        <Typography variant="body2" sx={ { mb: 2 } }>
          전체 앱을 실행하지 않고도 각 컴포넌트를 개별적으로 확인할 수 있습니다.
          피그마에서 컴포넌트를 문서화하고 Variants를 정의하는 것처럼,
          Storybook에서 컴포넌트의 다양한 상태를 정의하고 문서화합니다.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          피그마와의 차이: 피그마는 그림이고, Storybook은 실제 작동하는 코드입니다.
          Storybook의 버튼은 실제로 클릭되고, hover 효과가 나타나고, disabled 상태가 적용됩니다.
        </Typography>
      </Section>

      <Divider sx={ { mb: 4 } } />

      <Section title="React와 Storybook의 관계">
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }></TableCell>
                <TableCell sx={ { fontWeight: 600 } }>실제 서비스 (App)</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>Storybook (문서)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>대상</TableCell>
                <TableCell>사용자</TableCell>
                <TableCell>개발자/디자이너</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>내용</TableCell>
                <TableCell>비즈니스 로직, 데이터 연동, 페이지 라우팅</TableCell>
                <TableCell>컴포넌트만 독립 표시, Props 테스트, 문서화</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>용도</TableCell>
                <TableCell>Production (실제 서비스)</TableCell>
                <TableCell>Development (개발/디자인 협업)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="body2" color="text.secondary" sx={ { mt: 3 } }>
          React로 만든 컴포넌트는 실제 서비스에서도, Storybook에서도 똑같이 사용됩니다.
          Storybook에서 보이는 버튼은 실제 서비스의 버튼과 100% 동일합니다.
        </Typography>
      </Section>

      <Divider sx={ { mb: 4 } } />

      <Section title="디자인 → 개발 워크플로우">
        <TableContainer>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell sx={ { fontWeight: 600, width: 80 } }>1단계</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>피그마에서 디자인</TableCell>
                <TableCell>컴포넌트, Variants, 스타일 정의</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>2단계</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>React로 구현</TableCell>
                <TableCell>피그마 디자인을 코드로 변환</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>3단계</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>Storybook에서 확인</TableCell>
                <TableCell>구현된 컴포넌트 디자이너가 검수</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>4단계</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>실제 서비스 배포</TableCell>
                <TableCell>검수된 컴포넌트로 제품 완성</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Section>
    </Box>
  ),
};

/** 1. 개념 매핑 - 피그마와 코드 비교 */
export const ConceptMapping = {
  name: '1. 개념 매핑',
  render: () => (
    <Box sx={ { maxWidth: 800 } }>
      <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
        피그마 ↔ 코드 개념 매핑
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
        피그마에서 익숙한 개념이 코드에서는 어떻게 불리는지 알아봅니다.
      </Typography>

      <Divider sx={ { mb: 4 } } />

      <TableContainer sx={ { mb: 6 } }>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={ { fontWeight: 600 } }>피그마</TableCell>
              <TableCell sx={ { fontWeight: 600 } }>코드</TableCell>
              <TableCell sx={ { fontWeight: 600 } }>설명</TableCell>
              <TableCell sx={ { fontWeight: 600 } }>예시</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Component</TableCell>
              <TableCell>React Component</TableCell>
              <TableCell>재사용 가능한 UI 블록</TableCell>
              <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>Button, Card, Input</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Variants</TableCell>
              <TableCell>Props</TableCell>
              <TableCell>컴포넌트의 상태와 옵션</TableCell>
              <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>variant="contained"</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Styles</TableCell>
              <TableCell>Theme</TableCell>
              <TableCell>색상, 타이포, 효과 등 디자인 토큰</TableCell>
              <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>primary: #0000FF</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>UI Kit</TableCell>
              <TableCell>MUI</TableCell>
              <TableCell>미리 만들어진 컴포넌트 라이브러리</TableCell>
              <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>Material Design 기반</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Override</TableCell>
              <TableCell>sx prop</TableCell>
              <TableCell>개별 인스턴스 스타일 덮어쓰기</TableCell>
              <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>{'sx={{ color: "red" }}'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Auto Layout</TableCell>
              <TableCell>Grid / Flexbox</TableCell>
              <TableCell>자동 정렬 레이아웃</TableCell>
              <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>Grid container, Stack</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Component Docs</TableCell>
              <TableCell>Storybook</TableCell>
              <TableCell>컴포넌트 문서화 및 테스트 도구</TableCell>
              <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>지금 보고 있는 화면</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Divider sx={ { mb: 4 } } />

      <Section title="핵심 개념 상세">
        <Box sx={ { mb: 4 } }>
          <Typography variant="subtitle1" sx={ { fontWeight: 600, mb: 1 } }>
            Component → React Component
          </Typography>
          <Typography variant="body2" color="text.secondary">
            피그마에서 마스터 컴포넌트를 만들고 인스턴스를 배치하듯이,
            React에서도 컴포넌트를 정의하고 여러 곳에서 재사용합니다.
          </Typography>
        </Box>
        <Box sx={ { mb: 4 } }>
          <Typography variant="subtitle1" sx={ { fontWeight: 600, mb: 1 } }>
            Variants → Props
          </Typography>
          <Typography variant="body2" color="text.secondary">
            피그마 Variants에서 Property를 바꾸면 컴포넌트가 변하듯이,
            React에서는 Props를 바꿔서 컴포넌트 상태를 제어합니다.
          </Typography>
        </Box>
        <Box sx={ { mb: 4 } }>
          <Typography variant="subtitle1" sx={ { fontWeight: 600, mb: 1 } }>
            Styles → Theme
          </Typography>
          <Typography variant="body2" color="text.secondary">
            피그마에서 Color Styles, Text Styles를 정의하듯이,
            Theme 파일에서 색상, 타이포그래피를 중앙 관리합니다.
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1" sx={ { fontWeight: 600, mb: 1 } }>
            Override → sx prop
          </Typography>
          <Typography variant="body2" color="text.secondary">
            피그마에서 인스턴스 속성을 덮어쓰듯이,
            sx prop으로 개별 컴포넌트의 스타일을 변경할 수 있습니다.
          </Typography>
        </Box>
      </Section>
    </Box>
  ),
};

/** 2. Theme 구조 */
export const ThemeStructure = {
  name: '2. Theme 구조',
  render: () => {
    const theme = useTheme();
    return (
      <Box sx={ { maxWidth: 800 } }>
        <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
          Theme = 피그마 Styles
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
          피그마의 Styles가 코드에서는 Theme으로 관리됩니다.
        </Typography>

        <Divider sx={ { mb: 4 } } />

        <Section title="개요">
          <Typography variant="body2" sx={ { mb: 3 } }>
            피그마에서 Color Styles, Text Styles, Effect Styles를 한 곳에서 관리하듯이,
            코드에서는 Theme 파일에서 모든 디자인 토큰을 관리합니다.
          </Typography>

          <TableContainer sx={ { mb: 4 } }>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>피그마 Styles</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>코드 Theme</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Color Styles (Primary, Secondary)</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>palette.primary, palette.secondary</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Text Styles (Heading, Body)</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>typography.h1, typography.body1</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Effect Styles (Shadow)</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>components.MuiPaper.styleOverrides</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Section>

        <Divider sx={ { mb: 4 } } />

        <Section title="현재 프로젝트 Theme 값">
          <TableContainer>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600, width: '30%' } }>Primary Color</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>{ theme.palette.primary.main }</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>Secondary Color</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>{ theme.palette.secondary.main }</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>Border Radius</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>{ theme.shape.borderRadius }px</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Section>

        <Divider sx={ { mb: 4 } } />

        <Section title="ThemeProvider">
          <Typography variant="body2" sx={ { mb: 2 } }>
            피그마에서 팀 라이브러리를 퍼블리시하면 모든 파일에서 사용할 수 있듯이,
            ThemeProvider로 감싼 영역 안의 모든 컴포넌트에 테마가 자동 적용됩니다.
          </Typography>
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
{ `<ThemeProvider theme={theme}>
  <Button />      // 자동으로 primary color 적용
  <Typography />  // 자동으로 font family 적용
  <Paper />       // 자동으로 elevation, border radius 적용
</ThemeProvider>` }
          </Box>
        </Section>
      </Box>
    );
  },
};

/** 3. 프로젝트 구조 */
export const ProjectStructure = {
  name: '3. 프로젝트 구조',
  render: () => (
    <Box sx={ { maxWidth: 800 } }>
      <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
        React.js & Storybook 구조
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
        React.js와 Storybook이 각각 어떻게 구성되고 실행되는지 알아봅니다.
      </Typography>

      <Divider sx={ { mb: 4 } } />

      <Section title="두 개의 독립적인 앱">
        <Typography variant="body2" sx={ { mb: 3 } }>
          React 프로젝트에서 실제 서비스(App)와 Storybook은 완전히 별개의 앱으로 실행됩니다.
          같은 컴포넌트를 공유하지만, 시작점과 설정 파일이 다릅니다.
        </Typography>

        <TableContainer sx={ { mb: 4 } }>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }></TableCell>
                <TableCell sx={ { fontWeight: 600 } }>실제 서비스</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>Storybook</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>실행 명령</TableCell>
                <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>pnpm dev</TableCell>
                <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>pnpm storybook</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>시작점</TableCell>
                <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>main.jsx → App.jsx</TableCell>
                <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>.storybook/main.js</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>설정</TableCell>
                <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>vite.config.js</TableCell>
                <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>.storybook/preview.jsx</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>포트</TableCell>
                <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>localhost:5173</TableCell>
                <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>localhost:6006</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Section>

      <Divider sx={ { mb: 4 } } />

      <Section title="React.js 앱 구조">
        <Typography variant="body2" sx={ { mb: 3 } }>
          React 앱은 항상 하나의 시작점(Entry Point)에서 시작해서 트리 구조로 컴포넌트를 렌더링합니다.
          피그마에서 최상위 Frame 안에 모든 요소가 들어가는 것과 같습니다.
        </Typography>

        <Box
          component="pre"
          sx={ {
            backgroundColor: '#f5f5f5',
            p: 2,
            fontSize: 12,
            fontFamily: 'monospace',
            overflow: 'auto',
            mb: 3,
          } }
        >
{ `index.html
  └── main.jsx (Entry Point)
        └── App.jsx (최상위 컴포넌트)
              └── ThemeProvider
                    ├── Header
                    ├── Main
                    └── Footer` }
        </Box>

        <TableContainer>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell sx={ { fontWeight: 600, width: '30%' } }>main.jsx</TableCell>
                <TableCell>피그마 파일을 여는 것</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>App.jsx</TableCell>
                <TableCell>최상위 Frame (모든 요소의 부모)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>ThemeProvider</TableCell>
                <TableCell>팀 라이브러리 연결</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Section>

      <Divider sx={ { mb: 4 } } />

      <Section title="Storybook 구조">
        <Typography variant="body2" sx={ { mb: 3 } }>
          Storybook은 .storybook 폴더의 설정 파일들로 구성됩니다.
        </Typography>

        <Box sx={ { mb: 4 } }>
          <Typography variant="subtitle2" sx={ { fontWeight: 600, mb: 1 } }>
            main.js - "무엇을 보여줄까?"
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={ { mb: 2 } }>
            어떤 스토리 파일을 로드할지, 어떤 기능(addon)을 사용할지 정의합니다.
          </Typography>
        </Box>

        <Box sx={ { mb: 4 } }>
          <Typography variant="subtitle2" sx={ { fontWeight: 600, mb: 1 } }>
            preview.jsx - "어떻게 보여줄까?"
          </Typography>
          <Typography variant="body2" color="text.secondary">
            모든 스토리에 공통으로 적용될 설정입니다. 테마, 레이아웃, 정렬 순서 등을 정의합니다.
          </Typography>
        </Box>
      </Section>

      <Divider sx={ { mb: 4 } } />

      <Section title="스토리 파일 구조 (*.stories.jsx)">
        <Typography variant="body2" sx={ { mb: 3 } }>
          각 스토리 파일은 하나의 컴포넌트에 대한 문서입니다.
          피그마에서 컴포넌트 페이지를 만들고 Variants를 정의하는 것과 같습니다.
        </Typography>

        <Box
          component="pre"
          sx={ {
            backgroundColor: '#f5f5f5',
            p: 2,
            fontSize: 12,
            fontFamily: 'monospace',
            overflow: 'auto',
            mb: 3,
          } }
        >
{ `// Button.stories.jsx

export default {
  title: 'Component/Button',  // 사이드바 경로
  component: Button,          // 문서화할 컴포넌트
};

// 각각의 Variant
export const Default = { args: { variant: 'contained' } };
export const Outlined = { args: { variant: 'outlined' } };` }
        </Box>

        <TableContainer>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell sx={ { fontWeight: 600, width: '30%' } }>export default</TableCell>
                <TableCell>컴포넌트 페이지 설정</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>title</TableCell>
                <TableCell>페이지 이름 및 위치</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>export const</TableCell>
                <TableCell>각각의 Variant</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>args</TableCell>
                <TableCell>Variant의 속성값</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Section>
    </Box>
  ),
};

/** 4. Storybook 사용법 */
export const StorybookGuide = {
  name: '4. Storybook 사용법',
  render: () => (
    <Box sx={ { maxWidth: 800 } }>
      <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
        Storybook = 컴포넌트 플레이그라운드
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
        Storybook에서 컴포넌트를 탐색하고 테스트하는 방법을 알아봅니다.
      </Typography>

      <Divider sx={ { mb: 4 } } />

      <Section title="개요">
        <Typography variant="body2" sx={ { mb: 3 } }>
          Storybook은 피그마의 Component Docs와 Inspect 패널을 합쳐놓은 것과 같습니다.
          실제 코드로 만들어진 컴포넌트를 시각적으로 확인하고, Props를 바꿔가며 테스트할 수 있습니다.
        </Typography>

        <TableContainer sx={ { mb: 4 } }>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>피그마 Inspect 패널</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>Storybook Controls</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>컴포넌트 속성 확인</TableCell>
                <TableCell>Props 실시간 조절</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Variants 선택</TableCell>
                <TableCell>드롭다운으로 Variants 변경</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>읽기 전용 (수정 불가)</TableCell>
                <TableCell>직접 조작 가능</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Section>

      <Divider sx={ { mb: 4 } } />

      <Section title="사용 방법">
        <TableContainer>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell sx={ { fontWeight: 600, width: 80 } }>1단계</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>사이드바에서 컴포넌트 선택</TableCell>
                <TableCell>왼쪽 사이드바에서 원하는 컴포넌트를 클릭합니다.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>2단계</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>Controls 패널에서 Props 조절</TableCell>
                <TableCell>하단의 Controls 탭에서 variant, color, size 등을 변경합니다.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>3단계</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>실시간 결과 확인</TableCell>
                <TableCell>Props를 바꾸면 미리보기 영역에서 컴포넌트가 즉시 변경됩니다.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Section>

      <Divider sx={ { mb: 4 } } />

      <Section title="연습">
        <Typography variant="body2">
          사이드바에서 Component → Button → Default로 이동한 후,
          하단 Controls에서 variant를 "outlined"로, color를 "secondary"로 바꿔보세요.
        </Typography>
      </Section>
    </Box>
  ),
};

/** 기본 스토리 */
export const Default = {
  render: () => (
    <Box sx={ { maxWidth: 800 } }>
      <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
        디자이너를 위한 가이드
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
        피그마 사용자가 React + MUI + Storybook을 이해하기 위한 가이드
      </Typography>

      <Divider sx={ { mb: 4 } } />

      <Typography variant="body2" sx={ { mb: 4 } }>
        이 문서는 피그마를 사용해본 디자이너가 코드 기반 디자인 시스템을 이해하도록 돕습니다.
        익숙한 피그마 개념과 1:1로 매핑하여 설명합니다.
      </Typography>

      <Section title="목차">
        <TableContainer>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell sx={ { fontWeight: 600, width: '30%' } }>0. Overview</TableCell>
                <TableCell>React.js와 Storybook의 관계</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>1. 개념 매핑</TableCell>
                <TableCell>피그마 ↔ 코드 용어 비교</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>2. Theme 구조</TableCell>
                <TableCell>피그마 Styles = Theme</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>3. 프로젝트 구조</TableCell>
                <TableCell>파일 위치와 연결 관계</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>4. Storybook 사용법</TableCell>
                <TableCell>컴포넌트 탐색 및 테스트</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Section>

      <Typography variant="body2" color="text.secondary" sx={ { mt: 4 } }>
        왼쪽 사이드바에서 각 섹션을 클릭하여 상세 내용을 확인하세요.
      </Typography>
    </Box>
  ),
};
