import { Header } from '@/components/Header'
import { Container, Box } from '@mui/material'
import { SwitchPage } from '@/components/SwitchPage'

export default function Dashboard() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#2F2E41'}}>
      <Container sx={{ maxWidth: '960px'}} >
        <Header/>
        <SwitchPage/>
      </Container>
    </Box>
  )
}
