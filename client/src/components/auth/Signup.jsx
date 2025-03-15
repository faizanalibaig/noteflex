import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const initialState = {
  username: '',
  email: '',
  password: '',
  role: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    case 'username':
      return { ...state, username: action.payload };
    case 'role':
      return { ...state, role: action.payload };
    default:
      return state;
  }
};

function Signup() {
  const queryClient = useQueryClient();
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state),
      });
      if (!response.ok) {
        throw new Error('Failed to create user');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['register'] });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <section className='flex flex-col justify-center items-center h-[90%] gap-8'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h1 className='text-2xl font-main font-bold'>Create Your Account</h1>
        <p className='text-sm font-secondary text-center text-[#5C626C]'>
          Sign up using a unique code sent to the email address above.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-2 font-secondary'
        autoComplete='off'
      >
        <input
          type='text'
          placeholder='Enter your Username'
          onChange={(e) =>
            dispatch({ type: 'username', payload: e.target.value })
          }
          className='text-base border-2 border-[#CBD5E1]/20 w-[26rem] p-3 rounded-lg bg-[#FAFAF7] placeholder:text-[#5C626C] font-medium outline-none'
        />
        <select className='text-base border-2 border-[#CBD5E1]/20 w-[26rem] p-3 rounded-lg bg-[#FAFAF7] placeholder:text-[#5C626C] font-medium outline-none' onChange={(e)=> dispatch({ type:'role', payload: e.target.value })}>
          <option value=''>Select your role</option>
          <option value='User'>User</option>
          <option value='Admin'>Admin</option>
        </select>
        <input
          type='email'
          placeholder='Enter your Email'
          onChange={(e) => dispatch({ type: 'email', payload: e.target.value })}
          className='text-base border-2 border-[#CBD5E1]/20 w-[26rem] p-3 rounded-lg bg-[#FAFAF7] placeholder:text-[#5C626C] font-medium outline-none'
        />
        <input
          type='password'
          placeholder='Enter your Password'
          onChange={(e) =>
            dispatch({ type: 'password', payload: e.target.value })
          }
          className='text-base border-2 border-[#CBD5E1]/20 w-[26rem] p-3 rounded-lg bg-[#FAFAF7] placeholder:text-[#5C626C] font-medium outline-none'
        />

        <button
          type='submit'
          className='mt-8 w-[26rem] p-3 rounded-lg bg-[#005CE6] text-white font-medium text-base'
        >
          Continue
        </button>

        <button
          type='button'
          className='border-2 border-[#CBD5E1]/10 w-[26rem] p-3 rounded-lg bg-[#FAFAF7] text-white font-medium flex justify-center items-center gap-3'
        >
          <img
            src='/social-icon/google.png'
            className='h-5'
            alt='Google logo'
          />
          <h1 className='text-black font-medium text-base'>
            Continue with Google
          </h1>
        </button>
      </form>

      {mutation.isLoading && <p>Loading...</p>}
      {mutation.isError && (
        <p className='text-red-500'>Error: {mutation.error.message}</p>
      )}

      <p className='text-center text-sm mt-6 text-[#5C626C] font-secondary'>
        By signing in, you agree to our <br />
        <span className='underline underline-offset-2'>Terms of Service </span>
        and <span className='underline underline-offset-2'>Privacy Policy</span>
      </p>
    </section>
  );
}

export default Signup;
