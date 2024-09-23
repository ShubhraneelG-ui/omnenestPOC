import { createTheme } from '@mui/material';
import { blue } from '@mui/material/colors';
import { COLOR_PALETTE } from 'constants/colorPalette';
import { MuiButtonComponent } from './components/MuiButton';

declare module '@mui/material/styles' {
  interface Palette {
    color?: Record<string, string>;
  }

  interface PaletteOptions {
    color?: Record<string, string>;
  }

  interface BreakpointOverrides {
    // NOTE: removes the `xs` breakpoint
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    // NOTE: adds the `mobile` breakpoint
    // mobile: true;
    // tablet: true;
    // laptop: true;
    // desktop: true;
  }
}

export const lightTheme = createTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
    secondary: {
      main: '#0c86f4',
    },
    color: COLOR_PALETTE,
  },
  // NOTE: Subscribe the component to theme.
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiButton: MuiButtonComponent.MuiButton,
  },
});
