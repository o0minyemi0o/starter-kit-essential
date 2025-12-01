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

/** 팔레트 스케일 컴포넌트 */
const PaletteScale = ({ name, colorObj, description }) => (
  <Box sx={ { mb: 4 } }>
    <Typography variant="subtitle1" sx={ { fontWeight: 600, mb: 0.5 } }>{ name }</Typography>
    <Typography variant="body2" color="text.secondary" sx={ { mb: 2 } }>{ description }</Typography>
    <Box sx={ { display: 'flex', gap: 0.5 } }>
      { [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
        <Box key={ shade } sx={ { flex: 1, minWidth: 0 } }>
          <Box
            sx={ {
              height: 40,
              backgroundColor: colorObj[shade],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            } }
          >
            <Typography
              variant="caption"
              sx={ {
                color: shade >= 500 ? 'white' : 'rgba(0,0,0,0.7)',
                fontSize: '10px',
                fontWeight: 600,
              } }
            >
              { shade }
            </Typography>
          </Box>
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
      <Box sx={ { maxWidth: 800 } }>
        <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
          색상 시스템 개요
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
          색상 시스템의 구조와 계층을 이해합니다.
        </Typography>

        <Divider sx={ { mb: 4 } } />

        <Typography variant="h5" sx={ { fontWeight: 600, mb: 3 } }>
          색상 토큰 계층 구조
        </Typography>

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

        <Divider sx={ { mb: 4 } } />

        <Typography variant="h5" sx={ { fontWeight: 600, mb: 3 } }>
          현재 프로젝트 주요 색상
        </Typography>

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
      </Box>
    );
  },
};

/** 1. Color Palette - 원시 색상 */
export const Palette = {
  name: '1. Color Palette',
  render: () => (
    <Box sx={ { maxWidth: 800 } }>
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

      <Divider sx={ { my: 4 } } />

      <Typography variant="h5" sx={ { fontWeight: 600, mb: 3 } }>
        명도 가이드
      </Typography>

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
    </Box>
  ),
};

/** 2. Semantic Tokens - 역할별 색상 */
export const SemanticTokens = {
  name: '2. Semantic Tokens',
  render: () => {
    const theme = useTheme();
    return (
      <Box sx={ { maxWidth: 800 } }>
        <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
          Semantic Tokens (역할별 색상)
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
          색상에 의미와 역할을 부여한 토큰입니다. 컴포넌트에서 이 토큰을 참조합니다.
        </Typography>

        <Divider sx={ { mb: 4 } } />

        <Typography variant="h5" sx={ { fontWeight: 600, mb: 3 } }>
          브랜드 색상
        </Typography>

        <TableContainer sx={ { mb: 4 } }>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>Token</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>Light</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>Main</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>Dark</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>용도</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>Primary</TableCell>
                <TableCell>
                  <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
                    <Box sx={ { width: 16, height: 16, backgroundColor: theme.palette.primary.light } } />
                    <Typography variant="caption" sx={ { fontFamily: 'monospace' } }>{ theme.palette.primary.light }</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
                    <Box sx={ { width: 16, height: 16, backgroundColor: theme.palette.primary.main } } />
                    <Typography variant="caption" sx={ { fontFamily: 'monospace' } }>#0000FF</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
                    <Box sx={ { width: 16, height: 16, backgroundColor: theme.palette.primary.dark } } />
                    <Typography variant="caption" sx={ { fontFamily: 'monospace' } }>{ theme.palette.primary.dark }</Typography>
                  </Box>
                </TableCell>
                <TableCell>CTA 버튼, 링크, 선택된 상태</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>Secondary</TableCell>
                <TableCell>
                  <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
                    <Box sx={ { width: 16, height: 16, backgroundColor: theme.palette.secondary.light } } />
                    <Typography variant="caption" sx={ { fontFamily: 'monospace' } }>{ theme.palette.secondary.light }</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
                    <Box sx={ { width: 16, height: 16, backgroundColor: theme.palette.secondary.main } } />
                    <Typography variant="caption" sx={ { fontFamily: 'monospace' } }>{ theme.palette.secondary.main }</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
                    <Box sx={ { width: 16, height: 16, backgroundColor: theme.palette.secondary.dark } } />
                    <Typography variant="caption" sx={ { fontFamily: 'monospace' } }>{ theme.palette.secondary.dark }</Typography>
                  </Box>
                </TableCell>
                <TableCell>보조 버튼, 태그</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Divider sx={ { mb: 4 } } />

        <Typography variant="h5" sx={ { fontWeight: 600, mb: 3 } }>
          상태 색상 (Feedback Colors)
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={ { mb: 3 } }>
          사용자에게 시스템 상태를 전달하는 색상입니다.
        </Typography>

        <TableContainer sx={ { mb: 4 } }>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>Token</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>값</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>의미</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>예시</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>Error</TableCell>
                <TableCell>
                  <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
                    <Box sx={ { width: 16, height: 16, backgroundColor: theme.palette.error.main } } />
                    <Typography variant="caption" sx={ { fontFamily: 'monospace' } }>{ theme.palette.error.main }</Typography>
                  </Box>
                </TableCell>
                <TableCell>오류, 삭제, 위험</TableCell>
                <TableCell>유효성 오류, 삭제 버튼</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>Warning</TableCell>
                <TableCell>
                  <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
                    <Box sx={ { width: 16, height: 16, backgroundColor: theme.palette.warning.main } } />
                    <Typography variant="caption" sx={ { fontFamily: 'monospace' } }>{ theme.palette.warning.main }</Typography>
                  </Box>
                </TableCell>
                <TableCell>주의, 경고</TableCell>
                <TableCell>저장 안 됨, 만료 예정</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>Success</TableCell>
                <TableCell>
                  <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
                    <Box sx={ { width: 16, height: 16, backgroundColor: theme.palette.success.main } } />
                    <Typography variant="caption" sx={ { fontFamily: 'monospace' } }>{ theme.palette.success.main }</Typography>
                  </Box>
                </TableCell>
                <TableCell>성공, 완료, 활성</TableCell>
                <TableCell>저장 완료, 온라인 상태</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>Info</TableCell>
                <TableCell>
                  <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
                    <Box sx={ { width: 16, height: 16, backgroundColor: theme.palette.info.main } } />
                    <Typography variant="caption" sx={ { fontFamily: 'monospace' } }>{ theme.palette.info.main }</Typography>
                  </Box>
                </TableCell>
                <TableCell>정보, 안내</TableCell>
                <TableCell>도움말, 새 기능 안내</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Divider sx={ { mb: 4 } } />

        <Typography variant="h5" sx={ { fontWeight: 600, mb: 3 } }>
          텍스트 및 배경 색상
        </Typography>

        <TableContainer>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell sx={ { fontWeight: 600, width: '25%' } }>text.primary</TableCell>
                <TableCell>
                  <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
                    <Box sx={ { width: 16, height: 16, backgroundColor: theme.palette.text.primary } } />
                    <Typography variant="caption" sx={ { fontFamily: 'monospace' } }>{ theme.palette.text.primary }</Typography>
                  </Box>
                </TableCell>
                <TableCell>주요 텍스트, 제목</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>text.secondary</TableCell>
                <TableCell>
                  <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
                    <Box sx={ { width: 16, height: 16, backgroundColor: theme.palette.text.secondary } } />
                    <Typography variant="caption" sx={ { fontFamily: 'monospace' } }>{ theme.palette.text.secondary }</Typography>
                  </Box>
                </TableCell>
                <TableCell>보조 텍스트, 설명</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>background.default</TableCell>
                <TableCell>
                  <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
                    <Box sx={ { width: 16, height: 16, backgroundColor: theme.palette.background.default, border: '1px solid #e0e0e0' } } />
                    <Typography variant="caption" sx={ { fontFamily: 'monospace' } }>{ theme.palette.background.default }</Typography>
                  </Box>
                </TableCell>
                <TableCell>페이지 배경</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>background.paper</TableCell>
                <TableCell>
                  <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
                    <Box sx={ { width: 16, height: 16, backgroundColor: theme.palette.background.paper, border: '1px solid #e0e0e0' } } />
                    <Typography variant="caption" sx={ { fontFamily: 'monospace' } }>{ theme.palette.background.paper }</Typography>
                  </Box>
                </TableCell>
                <TableCell>카드, 모달 배경</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  },
};

/** 3. Usage - 컴포넌트에서의 활용 */
export const Usage = {
  name: '3. Usage',
  render: () => (
    <Box sx={ { maxWidth: 800 } }>
      <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
        컴포넌트 적용 예시
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
        Semantic Token이 실제 컴포넌트에 어떻게 적용되는지 확인합니다.
      </Typography>

      <Divider sx={ { mb: 4 } } />

      <Typography variant="h5" sx={ { fontWeight: 600, mb: 3 } }>
        Button 컴포넌트
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={ { mb: 3 } }>
        Button의 color prop에 Semantic Token 이름을 전달하면 해당 색상이 적용됩니다.
      </Typography>

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

      <Divider sx={ { mb: 4 } } />

      <Typography variant="h5" sx={ { fontWeight: 600, mb: 3 } }>
        sx prop으로 직접 사용
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={ { mb: 3 } }>
        sx prop에서 theme 값을 직접 참조할 수 있습니다.
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
{ `// 문자열로 참조 (권장)
<Box sx={{ backgroundColor: 'primary.main' }} />
<Box sx={{ color: 'text.secondary' }} />
<Box sx={{ borderColor: 'divider' }} />

// 함수로 참조 (복잡한 계산 필요시)
<Box sx={{ backgroundColor: (theme) => theme.palette.primary.light }} />` }
      </Box>
    </Box>
  ),
};
