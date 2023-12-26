import Navbar from '@app/components/Navbar'
import BoardBar from '@app/pages/Boards/BoardBar'
import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <Container sx={{ height: '100vh' }} maxWidth={false} disableGutters>
      <Navbar />
      <BoardBar />
      <Outlet />
    </Container>
  )
}

export default MainLayout
