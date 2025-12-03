import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useTheme } from '@mui/material/styles';
import { DocumentTitle, PageContainer, SectionTitle } from '../../components/storybookDocumentation';

export default {
  title: 'Style/Spacing',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## Spacing System

Consistent spacing scale based on MUI's 8px grid system.

### Structure
- Base Unit: 8px
- Scale: 0-12 multipliers
- Usage: margin, padding, gap
        `,
      },
    },
  },
};

/**
 * DocContent Component
 * Separated to use React hooks properly
 */
function DocContent() {
  const theme = useTheme();

  const spacingScale = [
    { token: 0, multiplier: '0x', px: 0 },
    { token: 0.5, multiplier: '0.5x', px: 4 },
    { token: 1, multiplier: '1x', px: 8 },
    { token: 1.5, multiplier: '1.5x', px: 12 },
    { token: 2, multiplier: '2x', px: 16 },
    { token: 3, multiplier: '3x', px: 24 },
    { token: 4, multiplier: '4x', px: 32 },
    { token: 5, multiplier: '5x', px: 40 },
    { token: 6, multiplier: '6x', px: 48 },
    { token: 8, multiplier: '8x', px: 64 },
    { token: 10, multiplier: '10x', px: 80 },
    { token: 12, multiplier: '12x', px: 96 },
  ];

  const usagePatterns = [
    { pattern: 'Component padding', values: '2 (16px)', example: 'p: 2' },
    { pattern: 'Section margin', values: '4-6 (32-48px)', example: 'my: 4' },
    { pattern: 'Element gap', values: '1-2 (8-16px)', example: 'gap: 1' },
    { pattern: 'Page padding', values: '3-6 (24-48px)', example: 'px: { xs: 2, md: 4 }' },
    { pattern: 'Card content', values: '2-3 (16-24px)', example: 'p: 3' },
    { pattern: 'Button spacing', values: '1-2 (8-16px)', example: 'gap: 2' },
  ];

  const sxProps = [
    { prop: 'm', description: 'margin (all sides)', example: 'm: 2' },
    { prop: 'mt, mr, mb, ml', description: 'margin (top, right, bottom, left)', example: 'mt: 2' },
    { prop: 'mx, my', description: 'margin (horizontal, vertical)', example: 'mx: "auto"' },
    { prop: 'p', description: 'padding (all sides)', example: 'p: 2' },
    { prop: 'pt, pr, pb, pl', description: 'padding (top, right, bottom, left)', example: 'pb: 3' },
    { prop: 'px, py', description: 'padding (horizontal, vertical)', example: 'px: 4' },
    { prop: 'gap', description: 'flex/grid gap', example: 'gap: 2' },
  ];

  return (
    <>
      <DocumentTitle
        title="Spacing"
        status="Available"
        note="8px grid spacing system"
        brandName="Design System"
        systemName="Starter Kit"
        version="1.0"
      />
      <PageContainer>
        <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
          Spacing System
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
          Consistent spacing based on 8px grid. Base unit: { theme.spacing(1) }.
        </Typography>

        <SectionTitle title="Spacing Scale" description="Available spacing tokens and their pixel values" />

        <TableContainer sx={ { mb: 4 } }>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={ { fontWeight: 600, width: '15%' } }>Token</TableCell>
                <TableCell sx={ { fontWeight: 600, width: '15%' } }>Multiplier</TableCell>
                <TableCell sx={ { fontWeight: 600, width: '15%' } }>Value</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>Visual</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { spacingScale.map((row) => (
                <TableRow key={ row.token }>
                  <TableCell sx={ { fontFamily: 'monospace', fontSize: 13 } }>{ row.token }</TableCell>
                  <TableCell sx={ { color: 'text.secondary', fontSize: 13 } }>{ row.multiplier }</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace', fontSize: 13 } }>{ row.px }px</TableCell>
                  <TableCell>
                    <Box sx={ { display: 'flex', alignItems: 'center', gap: 2 } }>
                      <Box
                        sx={ {
                          width: row.px,
                          height: 16,
                          backgroundColor: 'primary.main',
                          minWidth: 2,
                        } }
                      />
                      <Typography variant="caption" color="text.secondary">
                        { row.px > 0 ? `${ row.px }px` : '-' }
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="SX Props" description="Spacing props available in sx" />

        <TableContainer sx={ { mb: 4 } }>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={ { fontWeight: 600, width: '20%' } }>Prop</TableCell>
                <TableCell sx={ { fontWeight: 600, width: '40%' } }>Description</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>Example</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { sxProps.map((row) => (
                <TableRow key={ row.prop }>
                  <TableCell sx={ { fontFamily: 'monospace', fontSize: 13 } }>{ row.prop }</TableCell>
                  <TableCell sx={ { color: 'text.secondary', fontSize: 13 } }>{ row.description }</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>{ row.example }</TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="Common Patterns" description="Recommended spacing for common use cases" />

        <TableContainer sx={ { mb: 4 } }>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={ { fontWeight: 600, width: '25%' } }>Pattern</TableCell>
                <TableCell sx={ { fontWeight: 600, width: '25%' } }>Recommended</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>Code</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { usagePatterns.map((row) => (
                <TableRow key={ row.pattern }>
                  <TableCell sx={ { fontWeight: 600 } }>{ row.pattern }</TableCell>
                  <TableCell sx={ { color: 'text.secondary', fontSize: 13 } }>{ row.values }</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>{ row.example }</TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="Visual Examples" description="Spacing in context" />

        <Box sx={ { display: 'flex', flexDirection: 'column', gap: 3, mb: 4 } }>
          {/* Padding Example */}
          <Box>
            <Typography variant="caption" sx={ { fontFamily: 'monospace', mb: 1, display: 'block' } }>
              Padding: p: 0 → p: 4
            </Typography>
            <Box sx={ { display: 'flex', gap: 2, flexWrap: 'wrap' } }>
              { [0, 1, 2, 3, 4].map((p) => (
                <Box
                  key={ p }
                  sx={ {
                    border: '1px dashed',
                    borderColor: 'divider',
                  } }
                >
                  <Box
                    sx={ {
                      p,
                      backgroundColor: 'primary.main',
                      opacity: 0.1 + p * 0.15,
                    } }
                  >
                    <Box
                      sx={ {
                        width: 40,
                        height: 24,
                        backgroundColor: 'background.paper',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      } }
                    >
                      <Typography variant="caption">p: { p }</Typography>
                    </Box>
                  </Box>
                </Box>
              )) }
            </Box>
          </Box>

          {/* Gap Example */}
          <Box>
            <Typography variant="caption" sx={ { fontFamily: 'monospace', mb: 1, display: 'block' } }>
              Gap: gap: 1 → gap: 4
            </Typography>
            <Box sx={ { display: 'flex', gap: 4, flexWrap: 'wrap' } }>
              { [1, 2, 3, 4].map((g) => (
                <Box key={ g }>
                  <Box
                    sx={ {
                      display: 'flex',
                      gap: g,
                      p: 1,
                      border: '1px dashed',
                      borderColor: 'divider',
                    } }
                  >
                    { [1, 2, 3].map((i) => (
                      <Box
                        key={ i }
                        sx={ {
                          width: 24,
                          height: 24,
                          backgroundColor: 'primary.main',
                        } }
                      />
                    )) }
                  </Box>
                  <Typography variant="caption" color="text.secondary" sx={ { mt: 0.5, display: 'block' } }>
                    gap: { g }
                  </Typography>
                </Box>
              )) }
            </Box>
          </Box>
        </Box>

        <SectionTitle title="Code Usage" />

        <Box
          component="pre"
          sx={ {
            backgroundColor: 'grey.100',
            p: 3,
            fontSize: 12,
            fontFamily: 'monospace',
            overflow: 'auto',
          } }
        >
{ `// Using spacing tokens in sx prop
<Box sx={{ m: 2, p: 3 }}>  {/* margin: 16px, padding: 24px */}
  Content
</Box>

// Responsive spacing
<Box sx={{
  px: { xs: 2, sm: 3, md: 4 },  {/* 16px → 24px → 32px */}
  py: { xs: 3, md: 6 }          {/* 24px → 48px */}
}}>
  Responsive content
</Box>

// Using theme.spacing() directly
const theme = useTheme();
const customSpacing = theme.spacing(2);  // "16px"

// Flex gap
<Stack direction="row" spacing={2}>  {/* gap: 16px */}
  <Item />
  <Item />
</Stack>` }
        </Box>
      </PageContainer>
    </>
  );
}

/** Documentation */
export const Doc = {
  render: () => <DocContent />,
};
