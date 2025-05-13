import { Route, Routes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import QustionPage from './pages/QustionPage'
import Start from './pages/Start'

export default function App() {
  return (
    <div className='flex items-center justify-center bg-[#f3f4f6]'>
    <Routes>
      <Route path='' element={<MainLayout/>}>
      <Route path='/' element={<Start/>}></Route>      
      <Route path='/quiz' element={<QustionPage/>}></Route>      
      </Route>
    </Routes>
    </div>
  )
}
