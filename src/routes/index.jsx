import MainLayout from '@app/layout'
import Board from '@app/pages/Boards/_id'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Board></Board>}></Route>
      </Route>
    </Routes>
  )
}

export default AppRoutes
