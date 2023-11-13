import React from 'react'
import {
  TextField,
  Button,
  Container,
  CssBaseline,
  Typography,
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import SocialLoginButtons from '../atoms/buttons/SocialLoginButton'
import GoogleIcon from '@mui/icons-material/Google'

// MUI 테마 생성
const theme = createTheme({
  palette: {
    primary: {
      main: '#9575cd', // 예시 색상, 원하는 색상으로 변경 가능
    },
    background: {
      default: '#f3e5f5', // 예시 배경 색상, 원하는 색상으로 변경 가능
    },
  },
  typography: {
    fontFamily: '"Comic Sans MS", cursive, sans-serif', // 원하는 폰트로 변경 가능
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20, // 버튼 둥근 모서리 설정
          padding: '10px 20px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 20, // 입력 필드 둥근 모서리 설정
          marginBottom: '10px', // 간격 설정
        },
      },
    },
  },
})

// 로그인 폼 타입 정의
type LoginFormProps = {
  onLogin: (username: string, password: string) => void
}

const LoginForm = (props: LoginFormProps) => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.onLogin(username, password)
  }
  const googleButton = {
    icon: <GoogleIcon />,
    label: '구글 로그인',
    color: '#DB4437',
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="사용자 이름"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            로그인
          </Button>
          <SocialLoginButtons {...googleButton} />
        </form>
      </ThemeProvider>
    </Container>
  )
}

export default LoginForm
