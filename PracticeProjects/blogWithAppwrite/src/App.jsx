import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import './App.css'
import {} from "./store/authSlice"
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((data)=>{
      if(data){
        dispatch(login({data:userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  }, [])

  return !loading? (
    <div className='min-h-screen flex flex-wrap content-between bg-blue-300'>
      <div className='w-full block'>
        <Header/>
          <main>
            {/* <Outlet/> */}
          </main>
        <Footer/>
      </div>
    </div>
  ): null
}

export default App
