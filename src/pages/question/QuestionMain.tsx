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
import ProgressBar from 'src/components/molecule/progress-bars/ProgressBar'
import ProgressHeader from 'src/components/molecule/headers/ProgressHeader'
import QuestionForm from 'src/components/molecule/forms/QuestionForm'

const theme = createTheme({
  palette: {
    primary: {
      main: '#D1B2FF',
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
      <ProgressHeader progress={progress} maxProgress={state.count} />
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
          <QuestionForm />
        </Container>
      </Box>
      <AppBar
        position="static"
        color="primary"
        sx={{ top: 'auto', bottom: 0 }}
      ></AppBar>
    </ThemeProvider>
  )
}

export default QuestionMain
