import React from 'react'
import {
  TextField,
  Button,
  Container,
  CssBaseline,
  Typography,
  Box,
  InputAdornment,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

const QuestionForm = () => {
  return (
    <>
      {/* 메시지 박스 */}
      <Box
        sx={{
          mx: 2, // 좌우 마진
          my: 4, // 상하 마진
          p: 2, // 패딩
          backgroundColor: '#EAEAEA', // 박스 배경색
          borderRadius: 2, // 둥근 모서리
        }}
      >
        <Typography variant="body1">
          여기는 커피 한 잔과 진짜 좋은 풍경이 있는 곳이다, 안 그래? 경치가
          끝내준다!
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, color: 'primary.main' }}>
          This is a great{' '}
          <TextField
            variant="standard"
            placeholder="__________"
            InputProps={{
              disableUnderline: true, // 밑줄 제거
              sx: { color: 'white', borderBottom: '1px solid white' }, // 입력 필드 스타일
            }}
          />{' '}
          for a cafe, isnt it? What a view!
        </Typography>
      </Box>

      {/* 입력 필드 */}
      <Box sx={{ mx: 2, my: 2 }}>
        <TextField
          fullWidth
          variant="filled"
          placeholder="이곳에 답변을 입력하세요."
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SendIcon sx={{ color: 'primary.main' }} />
              </InputAdornment>
            ),
            sx: { color: 'white', backgroundColor: '#333', borderRadius: 1 }, // 입력 필드 스타일
          }}
        />
      </Box>
    </>
  )
}

export default QuestionForm
