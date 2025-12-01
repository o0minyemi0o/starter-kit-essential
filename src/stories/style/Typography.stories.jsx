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
  title: 'Style/Typography',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## 타이포그래피 시스템

프로젝트에서 사용하는 폰트와 텍스트 스타일입니다.

### 폰트 패밀리
- 본문: Pretendard Variable
- 헤드라인 (영문): Outfit
- 헤드라인 (한글): Pretendard (Black)
        `,
      },
    },
  },
};

export const Default = {
  render: () => {
    const theme = useTheme();
    return (
      <Box sx={ { maxWidth: 800 } }>
        <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
          타이포그래피 시스템
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
          텍스트 스타일과 폰트 설정을 확인합니다.
        </Typography>

        <Divider sx={ { mb: 4 } } />

        <Typography variant="h5" sx={ { fontWeight: 600, mb: 3 } }>
          Heading Variants
        </Typography>

        <Box sx={ { mb: 4 } }>
          <Typography variant="h1" gutterBottom>h1. Heading</Typography>
          <Typography variant="h2" gutterBottom>h2. Heading</Typography>
          <Typography variant="h3" gutterBottom>h3. Heading</Typography>
          <Typography variant="h4" gutterBottom>h4. Heading</Typography>
          <Typography variant="h5" gutterBottom>h5. Heading</Typography>
          <Typography variant="h6" gutterBottom>h6. Heading</Typography>
        </Box>

        <Divider sx={ { mb: 4 } } />

        <Typography variant="h5" sx={ { fontWeight: 600, mb: 3 } }>
          Body Variants
        </Typography>

        <Box sx={ { mb: 4 } }>
          <Typography variant="subtitle1" gutterBottom>subtitle1. Lorem ipsum dolor sit amet</Typography>
          <Typography variant="subtitle2" gutterBottom>subtitle2. Lorem ipsum dolor sit amet</Typography>
          <Typography variant="body1" gutterBottom>body1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          <Typography variant="body2" gutterBottom>body2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          <Typography variant="button" display="block" gutterBottom>button text</Typography>
          <Typography variant="caption" display="block" gutterBottom>caption text</Typography>
          <Typography variant="overline" display="block">overline text</Typography>
        </Box>

        <Divider sx={ { mb: 4 } } />

        <Typography variant="h5" sx={ { fontWeight: 600, mb: 3 } }>
          Font Size 참조표
        </Typography>

        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>Variant</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>Font Size</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>용도</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={ { fontFamily: 'monospace' } }>h1</TableCell>
                <TableCell>{ theme.typography.h1.fontSize }</TableCell>
                <TableCell>페이지 메인 타이틀</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontFamily: 'monospace' } }>h2</TableCell>
                <TableCell>{ theme.typography.h2.fontSize }</TableCell>
                <TableCell>섹션 타이틀</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontFamily: 'monospace' } }>h3</TableCell>
                <TableCell>{ theme.typography.h3.fontSize }</TableCell>
                <TableCell>서브섹션 타이틀</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontFamily: 'monospace' } }>h4</TableCell>
                <TableCell>{ theme.typography.h4.fontSize }</TableCell>
                <TableCell>카드 타이틀</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontFamily: 'monospace' } }>h5</TableCell>
                <TableCell>{ theme.typography.h5.fontSize }</TableCell>
                <TableCell>작은 타이틀</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontFamily: 'monospace' } }>h6</TableCell>
                <TableCell>{ theme.typography.h6.fontSize }</TableCell>
                <TableCell>레이블 타이틀</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontFamily: 'monospace' } }>body1</TableCell>
                <TableCell>{ theme.typography.body1.fontSize }</TableCell>
                <TableCell>본문 텍스트</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontFamily: 'monospace' } }>body2</TableCell>
                <TableCell>{ theme.typography.body2.fontSize }</TableCell>
                <TableCell>보조 본문</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontFamily: 'monospace' } }>caption</TableCell>
                <TableCell>{ theme.typography.caption.fontSize }</TableCell>
                <TableCell>캡션, 주석</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontFamily: 'monospace' } }>overline</TableCell>
                <TableCell>{ theme.typography.overline.fontSize }</TableCell>
                <TableCell>레이블, 카테고리</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  },
};
