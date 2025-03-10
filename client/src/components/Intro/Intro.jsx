import CountUp from 'react-countup';

const Intro = () => {
  return (
    <>
      <section className='w-full h-full bg-[#005CE6] flex flex-col justify-end px-8 pb-32 sm:px-10 sm:pb-14 gap-1'>
        <div className='flex justify-between'>
          <h1 className='text-2xl sm:text-3xl text-white font-bold font-main'>
            noteflex
          </h1>
          <h3 className='text-white font-secondary font-medium text-lg sm:text-xl'>
            <CountUp start={0} end={100} duration={3} />%
          </h3>
        </div>
        <div className='bg-white rounded-sm w-full h-[2px]' />
      </section>
    </>
  );
};

export default Intro;
