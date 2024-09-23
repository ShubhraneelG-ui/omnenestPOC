import { Components } from '@mui/material';

export const MuiButtonComponent: Components = {
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
};
