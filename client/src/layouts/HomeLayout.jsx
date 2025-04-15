import { Outlet } from 'react-router';
import DashboardHeader from '../components/Dashboard/Dashboard-Header';
import HomeHeader from '../components/Home/Home-Header';
import GetStarted from '../components/Home/Get-Started';

function HomeLayout() {
  return (
    <>
      <HomeHeader />
      <GetStarted />
    </>
  );
}

export default HomeLayout;
