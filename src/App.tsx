import React from 'react'
import { CssBaseline, Container } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import SplashScreenMainImageField from './components/molecule/fields/SplashScreenMainImageField'

// 전체 앱에 적용할 테마를 생성합니다. 이 테마는 우리가 원하는 배경색을 설정하는 데 사용됩니다.
const theme = createTheme({
  components: {
    // MUI 컨테이너에 대한 전역 스타일을 설정합니다.
    MuiContainer: {
      styleOverrides: {
        // 'main' 최대 너비(sm)를 가지는 컨테이너에 대해 스타일을 적용합니다.
        root: {
          height: '100vh', // 높이를 화면 전체 높이로 설정합니다.
          display: 'flex', // 자식 요소를 flex로 배치합니다.
          flexDirection: 'column', // 자식 요소를 세로로 정렬합니다.
          justifyContent: 'center', // 자식 요소를 중앙에 위치시킵니다.
          alignItems: 'center', // 자식 요소를 가로축에서 중앙에 위치시킵니다.
          backgroundColor: '#9A7DFF', // 배경색을 연보라색으로 설정합니다.
        },
      },
    },
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm">
        <SplashScreenMainImageField />
      </Container>
    </ThemeProvider>
  )
}

export default App
