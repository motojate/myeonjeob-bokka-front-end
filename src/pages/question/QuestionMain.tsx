import { ThemeProvider } from '@emotion/react'
import {
  createTheme,
  CssBaseline,
  Container,
  FormControl,
  Button,
  Box,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import QuestionCountDropdown from 'src/components/atoms/dropdowns/QuestionCountDropdown'
import SplashScreenMainImageField from 'src/components/molecule/fields/SplashScreenMainImageField'
import { NUMBER_OF_MENU_ITEMS } from 'src/constants/datas'
import { setQuestionCount } from 'src/modules/question/questionSlice'
import { useAppDispatch } from 'src/store'

const theme = createTheme({
  palette: {
    primary: {
      main: '#9A7DFF',
    },
    background: {
      default: '#FFFFFF',
    },
  },
})

const QuestionMain = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [selected, setSelected] = useState<string>(
    NUMBER_OF_MENU_ITEMS[0].value
  )

  const handleClickButton = () => {
    dispatch(setQuestionCount(Number(selected)))
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{ height: '100vh', backgroundColor: theme.palette.primary.main }}
      >
        {' '}
        {/* 전체 배경 연보라색으로 설정 */}
        <Container
          component="main"
          maxWidth="sm"
          sx={{ backgroundColor: 'white', p: 2, borderRadius: 1, boxShadow: 1 }}
        >
          {' '}
          {/* 중앙 컨테이너 흰색 배경 */}
          {/* 중앙 내용 */}
          <Box sx={{ gap: 1, display: 'flex', width: '100%' }}>
            <FormControl sx={{ flex: 1, minWidth: 0 }} size="small">
              <QuestionCountDropdown value={selected} setValue={setSelected} />
            </FormControl>
            <Button
              onClick={handleClickButton}
              variant={'outlined'}
              sx={{ flex: 1, minWidth: 0 }}
            >
              오늘 문제 풀기
            </Button>
          </Box>
          {/* 중앙 내용 끝 */}
        </Container>
      </Box>
      {/* 푸터가 있다면 여기에 추가 */}
    </ThemeProvider>
  )
}

export default QuestionMain
