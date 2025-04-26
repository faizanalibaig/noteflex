import HomeHeader from '../components/Home/Home-Header';
import GetStarted from '../components/Home/Get-Started';

function HomeLayout() {
  return (
    <div className='h-[100dvh] overflow-hidden'>
      <HomeHeader />
      <GetStarted />
    </div>
  );
}

export default HomeLayout;
