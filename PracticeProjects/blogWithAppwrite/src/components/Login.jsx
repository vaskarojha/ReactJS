import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import {login as authLogin} from '../store/authSlice';
import {Button, Input} from "./index"
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async(data) =>{
        setError("")
        try {
            const session = await authService.login(data)
            if (session){
                const userData = await authService.getCurrentUser()
                if(userData){
                    dispatch(authLogin(userData))
                }
                navigate("/")
            }
        } catch(error){
            setError(error.message)
        }
    }
  return (
    <div className='flex items-center justify-center w-full'>
        <div className="mb-2 flex justify-center">
            <span className='inline-block w-full max-w-[100px]'>
                <h2>LOGO</h2>
            </span>

        </div>
        <h2 className='text-center text-2xl font-bold leading-tight'>Sign in to your account.</h2>
        <p className='mt-2 text-center text-base text-back'>
            Do not have any account?
            <Link to="/signup" className='font-medium text-primary transition-all duration-200 hover:underline'> Sign Up</Link>
        </p>
        {error && <p className='text-red-500 text-center'>{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                label= "Email"
                placeholder = "Your email here.."
                type= "email"
                {...register("email", {required:true, validate:{
                    matchPattern:(value) =>"" || "Email address not valid"
                }})}
                />
                <Input
                label = "password"
                type="password"
                placeholder = "Enter password"
                {...register("password", {
                    required:true
                })}
                />
                <Button type= "submit" className= "w-full">Sign in</Button>
            </div>
        </form>
    </div>
  )
}

export default Login