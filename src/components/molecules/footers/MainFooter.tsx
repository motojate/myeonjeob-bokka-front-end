import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ py: 1, backgroundColor: '#9A7DFF' }}>
      <Typography variant="overline" align="center" sx={{ lineHeight: '1.2' }}>
        © 2023 Your App Name
      </Typography>
    </Box>
  )
}

export default Footer
