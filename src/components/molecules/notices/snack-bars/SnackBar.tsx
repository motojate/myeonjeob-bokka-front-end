import { Snackbar, Alert } from '@mui/material'

const SnackBar = () => {
  return (
    <Snackbar open={true} message={'hi'} autoHideDuration={1000}>
      <Alert severity="error">This is an error message!</Alert>
    </Snackbar>
  )
}

export default SnackBar
