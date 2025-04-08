import { useState, useEffect } from 'react';
import Intro from './components/Intro/Intro';

import DashboardHeader from './components/Dashboard/Dashboard-Header';
import Dashboard from './components/Dashboard/Dashboard';
import CreateNote from './components/Dashboard/Notes/CreateNote';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const sessionCheck = sessionStorage.getItem('intro');
    if (!sessionCheck || sessionCheck === 'false') {
      const shown = async () => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setShowIntro(false);
        sessionStorage.setItem('intro', 'true');
      };

      shown();
    } else {
      setShowIntro(false);
    }
  }, []);

  if (
    typeof window !== 'undefined' &&
    sessionStorage.getItem('intro') === 'true'
  ) {
    return (
      <>
        <section className='w-screen h-screen'>
          {/* <section className='w-full h-full flex justify-center items-center'>
            <h1 className='text-2xl sm:text-3xl font-main font-bold text-[#005CE6]'>
              welcome to noteflex
            </h1>
          </section> */}
          <DashboardHeader />
          {/* <Dashboard /> */}
          <CreateNote />
        </section>
      </>
    );
  }

  return (
    <section className='w-screen h-screen'>
      {showIntro ? (
        <Intro />
      ) : (
        <section className='w-full h-full flex justify-center items-center'>
          <h1 className='text-2xl sm:text-3xl font-main font-bold text-[#005CE6]'>
            welcome to noteflex
          </h1>
        </section>
      )}
    </section>
  );
}

export default App;
