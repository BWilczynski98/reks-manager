import { Container, Box } from '@mui/material'
import { red } from '@mui/material/colors'

const Dashboard = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ bgcolor: red[500], height: '100vh' }} />
    </Container>
  )
}

export default Dashboard
