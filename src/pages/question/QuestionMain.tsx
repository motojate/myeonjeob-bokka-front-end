import { ThemeProvider } from '@emotion/react'
import {
  createTheme,
  CssBaseline,
  Container,
  Box,
  AppBar,
  Toolbar,
  Typography,
  MobileStepper,
  Button,
} from '@mui/material'
import { useAppSelector } from 'src/store'
import { useState } from 'react'
import ProgressBar from 'src/components/molecule/Bars/ProgressBar'

const theme = createTheme({
  palette: {
    primary: {
      main: '#9A7DFF',
    },
    background: {
      default: '#FFFFFF',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          minHeight: '60px',
        },
      },
    },
  },
})

const QuestionMain = () => {
  const state = useAppSelector((state) => state.questionReducer)
  const [progress, setProgress] = useState<number>(0)
  const handleClick = () => {
    setProgress((state) => state + 1)
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6">면접보까</Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          height: 'calc(100vh - 120px)',
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Container
          component="main"
          maxWidth="sm"
          sx={{
            backgroundColor: 'white',
            p: 2,
            borderRadius: 1,
            boxShadow: 1,
            height: '100%',
          }}
        >
          <ProgressBar progress={progress} maxBlocks={10} />
        </Container>
      </Box>
      <AppBar position="static" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar style={{ justifyContent: 'center' }}>
          <Typography variant="h6">진행도: {`1/${state.count}`}</Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default QuestionMain
