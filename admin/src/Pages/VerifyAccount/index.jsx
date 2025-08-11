import { Button } from '@mui/material';
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { IoMdLogIn } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import OtpBox from '../../Components/OtpBox';




const VerifyAccount = () => {

    const [otp, setOtp] = React.useState('');
    const handleOtpChange = (value) => {
        setOtp(value);
    };

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
             <img src='../../../public/img/verify2.png' className='w-[100px] m-auto'/>
            </div>

            <h1 className='text-center text-[35px] font-[800] mt-4'>
                Welcome Back!
                <br/>
                Please verify your Email.
            </h1>

            <br/>

            <p className='text-center text-[15px]'>OTP send to<span className='text-blue-400 font-bold'> JuanAvellena@gmail.com</span></p>

            <br/>


            <div className='text-center flex items-center justify-center flex-col'>
                <OtpBox length={6} onChange={handleOtpChange}/>
            </div>

            <br/>

            <div className='w-[400px] m-auto'>
            <Button className='btn-blue w-full'>Verify OTP</Button>
            </div>
        </div>

    </section>
  )
}
 

export default VerifyAccount;