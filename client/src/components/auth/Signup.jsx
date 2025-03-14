import React from 'react';

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

function Signup() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  console.log('state', state);
  const handleSubmit = async (e) => {
    e.preventDefault();
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
        onClick={handleSubmit}
        className='flex flex-col gap-2 font-secondary'
      >
        <input
          type='text'
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
          type='submit'
          className='border-2 border-[#CBD5E1]/10 w-[26rem] p-3 rounded-lg bg-[#FAFAF7] text-white font-medium flex justify-center items-center gap-3'
        >
          <img src='/social-icon/google.png' className='h-5' />
          <h1 className='text-black font-medium text-base'>
            Continue with Google
          </h1>
        </button>
      </form>
      <p className='text-center text-sm mt-6 text-[#5C626C] font-secondary'>
        By signing in, you agree to our <br />{' '}
        <span className='underline underline-offset-2	'>Terms of Service </span>
        and <span className='underline underline-offset-2	'>Privacy Policy</span>
      </p>
    </section>
  );
}

export default Signup;
