import React from 'react'
import { Button, Stack } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import AppleIcon from '@mui/icons-material/Apple' // 애플 아이콘을 상징하는 MUI 아이콘 (만약 존재한다면)

const socialMediaButtons = [
  { icon: <FacebookIcon />, label: '페이스북 로그인', color: '#3b5998' },
  { icon: <GoogleIcon />, label: '구글 로그인', color: '#DB4437' },
  { icon: <AppleIcon />, label: '애플 로그인', color: '#000000' },
]
interface SocialLoginButtonProps {
  icon: any
  label: string
  color: string
}

const SocialLoginButtons = () => {
  return (
    <Stack direction="row" spacing={2}>
      {socialMediaButtons.map((button, index) => (
        <Button
          key={index}
          startIcon={button.icon}
          variant="contained"
          style={{ backgroundColor: button.color, color: '#fff' }}
          onClick={() => console.log(button.label)}
        ></Button>
      ))}
    </Stack>
  )
}

export default SocialLoginButtons
