import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0ef6cc',
    },
    secondary: {
      main: '#f4fefd',
    },
    background: {
      default: '#1b2223',
      paper: '#3a4f50',
    },
    text: {
      primary: '#f4fefd',
      secondary: '#0ef6cc'
    },
  },
  typography: {
    fontFamily: [
      'Concert One',
      'cursive',
    ].join(','),
  }
});