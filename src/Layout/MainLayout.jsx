import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className='  flex items-center justify-center w-100 h-[100dvh]'>
      <Outlet/>
    </div>
  )
}
