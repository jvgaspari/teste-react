import { createTheme } from '@mui/material/styles'
import 'typeface-open-sans'

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Opens Sans'
    ].join(','),
  },
  palette: {
    text: {
      primary: '#FFFFFF',
      secondary: '#2F2E41'
    }
  }
});