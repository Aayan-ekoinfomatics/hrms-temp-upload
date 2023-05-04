import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './components/global-components/Sidebar'
import { Navigate, Route, Routes } from 'react-router-dom'
import AccountsPage from './pages/AccountsPage'
import { useRecoilState } from 'recoil'
import sidebarToggleAtom from './recoil/sidebarToggleAtom'
import Dashboard from './pages/Dashboard'
import Employees from './pages/Employees'
import Leaves from './pages/Leaves'
import Events from './pages/Events'
import LoginPage from './pages/LoginPage'
// import 'react-calendar/dist/Calendar.css';

function App() {
  const [count, setCount] = useState(0)

  const [sidebarWidthFull, setSidebarWidthFull] = useRecoilState(sidebarToggleAtom);

  return (
    <div className='w-full inter bg-[var(--main-cream-color)]'>
      <Sidebar />
      <div className={`${sidebarWidthFull ? 'pl-[300px]' : 'pl-[70px]'} transition-all duration-300 ease-out`}>
        <Routes>
          <Route path='/' element={<Navigate to="/accounts" />} />
          {/* <Route path='/' element={<Dashboard />} /> */}
          <Route path='/accounts' element={<AccountsPage />} />
          <Route path='/employees' element={<Employees />} />
          <Route path='/leaves' element={<Leaves />} />
          <Route path='/events' element={<Events />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
