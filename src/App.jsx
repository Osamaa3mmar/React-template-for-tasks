import { Route, Routes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'

export default function App() {
  return (
    <Routes>
      <Route path='' element={<MainLayout/>}>
      {/* <Route path='' element={''}></Route>       //put routes here */}
      </Route>
    </Routes>
  )
}
