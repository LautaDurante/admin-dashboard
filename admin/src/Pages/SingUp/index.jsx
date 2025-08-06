import { Button } from '@mui/material';
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { IoMdLogIn } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import LoadingButton from '@mui/lab/LoadingButton';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";




const SignUp = () => {

    const [loadingGoogle, setLoadingGoogle] = React.useState(false);
    const [loadingFb, setLoadingFb] = React.useState(false);

    const [isPasswordShow, setisPasswordShow] = React.useState(false);

    function handClickGoogle() {
        setLoadingGoogle(true);
    }
    function handClickFb() {
        setLoadingFb(true);
    }

  return (
    <section className='bg-white w-full'>
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
                Join us today! Get special <br/> benefits and stay up-to-date
            </h1>
            

            <div className='flex items-center justify-center w-full mt-5 gap-5'>
            <LoadingButton
                size="small"
                onClick={handClickGoogle}
                endIcon={<FcGoogle />}
                loading={loadingGoogle}
                loadingPosition="end"
                variant="outlined"
                className='!bg-none !py-2 !text-[15px] !capitalize !px-5 !text-[rgba(0,0,0,0.7)]'
             >
                Sign in with Google
            </LoadingButton>

            <LoadingButton
                size="small"
                onClick={handClickFb}
                endIcon={<FaFacebook />}
                loading={loadingFb}
                loadingPosition="end"
                variant="outlined"
                className='!bg-none !py-2 !text-[15px] !capitalize !px-5 !text-[rgba(0,0,0,0.7)]'
             >
                Sign in with Facebook
            </LoadingButton>
            </div>

            <br/>

            <div className='w-full flex items-center justify-center gap-3'>
                <span className='flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.2)]'></span>
                    <span className='text-[14px] font-[500]'>Or, Sign in with your email</span>
                <span className='flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.2)]'></span>
            </div>

            <br/>

            <form className='w-full px-8 mt-3'>
                <div className='form-group mb-4 w-full'>
                    <h4 className='text-[14px] font-[500] mb-1'>Full Name</h4>
                    <input type="text" className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.2)] rounded-md focus:border-[rgba(0,0,0,0.3)] focus:outline-none px-3' />
                </div>
                <div className='form-group mb-4 w-full'>
                    <h4 className='text-[14px] font-[500] mb-1'>Email</h4>
                    <input type="email" className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.2)] rounded-md focus:border-[rgba(0,0,0,0.3)] focus:outline-none px-3' />
                </div>
            </form>
             <form className='w-full px-8 mt-3'>
                <div className='form-group mb-4 w-full'>
                    <h4 className='text-[14px] font-[500] mb-1'>Password</h4>
                <div className='relative w-full'>
                    <input type={isPasswordShow===false ? 'password' : 'text'} className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.2)] rounded-md focus:border-[rgba(0,0,0,0.3)] focus:outline-none px-3' />
                    <Button className='!absolute top-[7px] right-[10px] z-50 !rounded-full !w-[35px] !h-[35px] !min-w-[35px] !text-gray-600' onClick={()=>setisPasswordShow(!isPasswordShow)}>{isPasswordShow===false ? <FaRegEye className='text-[18px]'/>: <FaEyeSlash className='text-[18px]'/>}</Button>
                </div>
                </div>


              <div className='form-group mb-4 w-full flex items-center justify-between'>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />


                    <Link to='/forgot-password' className='text-blue-600 font-[700] text-[15px] hover:underline hover:text-gray-700'>Forgot Password?</Link>


                </div>  


                <Button className='btn-blue btn-lg w-full'>Sign Up</Button>


            </form>
                

        </div>

    </section>
  )
}
 

export default SignUp;