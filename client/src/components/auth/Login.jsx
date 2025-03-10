import React from 'react';

function Login() {
  return (
    <section className='h-[90%] flex flex-col justify-center items-center gap-8'>
      <h1 className='text-2xl font-main font-bold'>Log in to Your Account</h1>
      <form className='flex flex-col gap-2 font-secondary'>
        <input
          type='text'
          placeholder='Enter your Email'
          className='text-base border-2 border-[#CBD5E1]/20 w-[26rem] p-3 rounded-lg bg-[#FAFAF7] placeholder:text-[#5C626C] font-medium outline-none'
        />
        <input
          type='text'
          placeholder='Enter your Password'
          className='text-base border-2 border-[#CBD5E1]/20 w-[26rem] p-3 rounded-lg bg-[#FAFAF7] placeholder:text-[#5C626C] font-medium outline-none'
        />
        <h5 className='text-sm font-medium cursor-pointer text-[#F37121]'>
          forgot password?
        </h5>
        <button
          type='submit'
          className='mt-8 w-[26rem] p-3 rounded-lg bg-[#005CE6] text-white font-medium text-base'
        >
          Continue
        </button>
        <button
          type='submit'
          className='border-2 border-[#CBD5E1]/10 w-[26rem] p-3 rounded-lg bg-[#FAFAF7] text-white font-medium flex justify-center items-center gap-3'
        >
          <img src='/social-icon/google.png' className='h-5' />
          <h1 className='text-black font-medium text-base'>
            Continue with Google
          </h1>
        </button>
      </form>
      <p className='font-main text-center text-sm mt-6 text-[#5C626C]'>
        By signing in, you agree to our <br />{' '}
        <span className='underline underline-offset-2'>Terms of Service </span>
        and <span className='underline underline-offset-2'>Privacy Policy</span>
      </p>
    </section>
  );
}

export default Login;
