import React, {useState} from 'react'
import authService from '../appwrite/auth'
import {Link, useNavigate} from 'react-router-dom'
import {login} from "../store/authSlice"
import {Button, Input} from './index'
import { useDispatch } from 'react-redux'
import {useForm} from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const create = async(data) =>{
        setError("")
        try{
            const userData = await authService.createAccount(data)
            if(userData){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData));
                navigate('/')
            }
        } catch(err){
            setError(err.message)
        }
    }
  return (
    <div className='flex items-center justify-center'>
        <h2>LOGO</h2>
        <div className={`mx-auto w-full max-w-lg bg-gray-200 rounded-xl p-10 border border-black`}>
        <div className='mb-2 flex justify-center'>
            <span className='inline-block w-full max-w-[100px]'> <h2>LOGO</h2></span>
        </div>
        <h2 className='text-center text-2xl font-bold leading-tight'>Sign in to your account.</h2>
        <p className='mt-2 text-center text-base text-back'>
            Do not have any account?
            <Link to="/signup" className='font-medium text-primary transition-all duration-200 hover:underline'> Sign Up</Link>
        </p>
        {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
        <form onSubmit={handleSubmit(create)}>
            <div className='space-y-5'>
                <Input 
                label = "Fullname:"
                placeholder = "Enter your fullname."
                {...register("name", {
                    required:true,

                })}
                />
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
                <Button className="w-full" type= "submit">Create Account</Button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Signup