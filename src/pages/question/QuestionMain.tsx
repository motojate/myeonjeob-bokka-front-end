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
} from '@mui/material'
import { useAppSelector } from 'src/store'

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
  console.log(state)
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
          <MobileStepper
            variant="progress"
            steps={state.count}
            position="static"
            activeStep={9}
            sx={{ maxWidth: 400, flexGrow: 1 }}
            nextButton={<></>}
            backButton={<></>}
          />
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
