import { ThemeProvider } from '@emotion/react'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import {
  createTheme,
  CssBaseline,
  Container,
  FormControl,
  Button,
  Box,
  AppBar,
  Toolbar,
  Typography,
  MobileStepper,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import QuestionCountDropdown from 'src/components/atoms/dropdowns/QuestionCountDropdown'
import SplashScreenMainImageField from 'src/components/molecule/fields/SplashScreenMainImageField'
import { NUMBER_OF_MENU_ITEMS } from 'src/constants/datas'
import { setQuestionCount } from 'src/modules/question/questionSlice'
import { useAppDispatch, useAppSelector } from 'src/store'

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
          // 헤더 및 푸터 크기 조정
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
          height: 'calc(100vh - 120px)', // 전체 높이에서 헤더와 푸터 높이를 제외
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
            height: '100%', // 컨테이너 높이를 최대로 설정
          }}
        >
          {/* 여기에 컨텐츠 추가 */}
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
