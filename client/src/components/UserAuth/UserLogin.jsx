import React, { useReducer } from 'react';
import { Link } from 'react-router';

const initialState = {
  email: '',
  password: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

const UserLogin = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('state: ', state);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: state.email,
          password: state.password,
        }),
      });

      if (!user.ok) {
        throw new Error('Failed to create user');
      }
      const data = await user.json();
      console.log('user data: ', data);
    } catch (error) {
      throw new Error('Failed to create user', error.message);
    }
  };
  return (
    <section className='h-[90%] flex flex-col justify-center items-center gap-8'>
      <h1 className=' text-xl sm:text-[22px] xl:text-2xl font-main font-bold'>
        Log in to Your Account
      </h1>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-center sm:items-start gap-2 font-secondary font-medium px-10'
      >
        <input
          type='email'
          placeholder='Enter your Email'
          className='text-base border-2 border-[#CBD5E1]/20 w-[80%] sm:w-[22rem] lg:w-[24rem] xl:w-[26rem] p-3 rounded-lg bg-[#FAFAF7] placeholder:text-[#5C626C] outline-none'
          onChange={(e) => dispatch({ type: 'email', payload: e.target.value })}
        />
        <input
          type='password'
          placeholder='Enter your Password'
          className='text-base border-2 border-[#CBD5E1]/20 w-[80%] sm:w-[22rem] lg:w-[24rem] xl:w-[26rem] p-3 rounded-lg bg-[#FAFAF7] placeholder:text-[#5C626C] outline-none'
          onChange={(e) =>
            dispatch({ type: 'password', payload: e.target.value })
          }
        />
        <h5 className='text-sm cursor-pointer text-[#F37121]'>
          forgot password?
        </h5>
        <Link
          to='/dashboard'
          type='submit'
          className='mt-8  w-[80%] sm:w-[22rem] lg:w-[24rem] xl:w-[26rem]  p-3 rounded-lg bg-[#005CE6] text-white text-base flex justify-center items-center'
        >
          Continue
        </Link>
        <button
          type='submit'
          className='border-2 border-[#CBD5E1]/10 w-[26rem] p-3 rounded-lg bg-[#FAFAF7] text-white flex justify-center 
          items-center gap-3'
        >
          <img src='/social-icon/google.png' className='h-5' />
          <h1 className='text-black text-base'>Continue with Google</h1>
        </button>
      </form>
      <p className='font-main text-center text-sm mt-6 text-[#5C626C]'>
        By signing in, you agree to our <br />{' '}
        <span className='underline underline-offset-2'>Terms of Service </span>
        and <span className='underline underline-offset-2'>Privacy Policy</span>
      </p>
    </section>
  );
};

export default UserLogin;
