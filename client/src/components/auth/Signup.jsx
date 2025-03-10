import React from 'react';

function Signup() {
  return (
    <section className='flex flex-col justify-center items-center h-screen font-sans gap-8'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h1 className='text-2xl font-bold'>Create Your Account</h1>
        <p className='text-sm font- text-center text-[#5C626C]'>
          Sign up using a unique code sent to the email address above.
        </p>
      </div>
      <form className='flex flex-col gap-2'>
        <input
          type='text'
          placeholder='Enter your Email'
          className='border-2 border-[#CBD5E1] w-[26rem] p-3 rounded-lg bg-[#FAFAF7] placeholder:text-[#5C626C] font-medium outline-none'
        />
        <input
          type='text'
          placeholder='Enter your Unique Code'
          className='border-2 border-[#CBD5E1] w-[26rem] p-3 rounded-lg bg-[#FAFAF7] placeholder:text-[#5C626C] font-medium outline-none'
        />
        <button
          type='submit'
          className='mt-8 w-[26rem] p-3 rounded-lg bg-[#F37121] text-white font-medium text-base'
        >
          Continue
        </button>
        <button
          type='submit'
          className='w-[26rem] p-3 rounded-lg bg-[#FAFAF7] text-white font-medium flex justify-center items-center gap-3'
        >
          <img src='/social-icon/google.png' className='h-5' />
          <h1 className='text-black font-medium text-base'>
            Continue with Google
          </h1>
        </button>
      </form>
      <p className='text-center text-sm mt-6 text-[#5C626C]'>
        By signing in, you agree to our <br />{' '}
        <span className='underline underline-offset-2	'>Terms of Service </span>
        and <span className='underline underline-offset-2	'>Privacy Policy</span>
      </p>
    </section>
  );
}

export default Signup;
