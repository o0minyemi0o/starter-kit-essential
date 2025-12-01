import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from '../src/styles/theme';

// Google Fonts 로드 (Material Symbols + 테마용 폰트)
const googleFonts = [
  // Material Symbols
  'Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
  'Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
  'Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
  // Material Theme - Outfit
  'Outfit:wght@300;400;500;600;700;800;900',
  // Monoline Theme - Space Mono, JetBrains Mono
  'Space+Mono:wght@400;700',
  'JetBrains+Mono:wght@300;400;500;600;700',
];

googleFonts.forEach((font) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${font}&display=swap`;
  document.head.appendChild(link);
});

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
    options: {
      storySort: {
        order: [
          'Overview',
          'Style', ['Overview', 'Colors', 'Typography', 'Icons'],
          'Component',
          'Template',
          'Page',
        ],
        method: 'alphabetical',
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        <div style={ { display: 'flex', justifyContent: 'center', width: '100%', paddingTop: '40px' } }>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;
