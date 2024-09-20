import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

export const themeCustom = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#af072e',
    },
  },
});
