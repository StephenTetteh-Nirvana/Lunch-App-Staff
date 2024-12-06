import { Routes, Route, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Personnels from './pages/Personnels'
import Orders from './pages/Orders'
import Register from './pages/register'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import NotFound from './pages/NotFound'


function App() {
  
  const location = useLocation()
  const navigate = useNavigate()

  const user = localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')) : null

  const userStatus = () => {
    if(!user && location.pathname === '/'){
      navigate('/login')
    }
  }

  useEffect(()=>{
    userStatus()
  })

  return (
    <>
      <div className="bg-white w-full">
        {location.pathname ==='/login' || location.pathname ==='/register' || location.pathname ==='/forgotPassword' ? ''
          :
          <Navbar/>
        }
      </div>

      <Routes>
        <Route path="/" element={<Personnels/>}></Route>
        <Route path="/orders" element={<Orders/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path="/forgotPassword" element={<ForgotPassword/>}></Route> 
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </>
  )
}
export default App
