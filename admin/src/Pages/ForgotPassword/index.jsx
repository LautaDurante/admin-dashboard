import { Button } from '@mui/material';
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { IoMdLogIn } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";


const ForgotPassword = () => {

  return (
    <section className='bg-white w-full h-[100vh]'>
        <header className='w-full fixed top-0 left-0  px-4 py-2 flex items-center justify-between z-50'> 
            <Link to='/'><img src='../../../public/img/logo.png' className='w-[200px]'/></Link>


            <div className='flex items-center gap-0'>
            <NavLink to='/login' exact={true} activeClassName='isActive'> 
            <Button className='!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 gap-1'>
             <IoMdLogIn className='text-[18px]'/>Login
            </Button>
            </NavLink>

            <NavLink to='/sign-up' exact={true} activeClassName='isActive'>
             <Button className='!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 gap-1'>
             <FaRegCircleUser className='text-[16px]'/>Sign Up
            </Button>
            </NavLink>
            </div> 


        </header>
        <img src='../../../public/img/patern.png' className='w-full fixed top-0 left-0 opacity-5'/>

        <div className='loginBox card w-[600px] h-[auto] pb-20 mx-auto pt-20 relative z-50'>
            <div className='text-center'>
            <img src='../../../public/img/logo.png' className='m-auto'/>
            </div>

            <h1 className='text-center text-[35px] font-[800] mt-4'>
                Having trouble to sign in?
                <br/>
                Reset your password.
            </h1>


            <form className='w-full px-8 mt-3'>
                <div className='form-group mb-4 w-full'>
                    <h4 className='text-[14px] font-[500] mb-1'>Email</h4>
                    <input type="email"  placeholder='Enter your email' className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.2)] rounded-md focus:border-[rgba(0,0,0,0.3)] focus:outline-none px-3' />
                </div>
            </form>
             <form className='w-full px-8 mt-3'>

                <Button className='btn-blue btn-lg w-full'>Reset Password</Button>
                <br/> <br/>
                <div className='text-center flex items-center justify-center gap-4'>
                    <span>Dont want to reset?</span>
                    <Link to='/forgot-password' className='text-blue-600 font-[700] text-[15px] hover:underline hover:text-gray-700'>Sign in?</Link>          
                </div>


            </form>
                

        </div>

    </section>
  )
}
 

export default ForgotPassword;