import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    // NOTE: Mode 'dark' gives default dark theme with change in text color.
    mode: 'dark',
    primary: {
      main: '#9e9e9e',
      contrastText: '#fff',
    },
    secondary: {
      main: '#d5d5d5',
    },
  },
  // NOTE: Subscribe the component to theme.
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          fontSize: '16px',
        },
      },
    },
  },
});
