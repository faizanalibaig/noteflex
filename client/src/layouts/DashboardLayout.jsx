import { Outlet } from 'react-router';
import DashboardHeader from '../components/Dashboard/Dashboard-Header';

function DashboardLayout() {
  return (
    <>
      <DashboardHeader />
      <Outlet />
    </>
  );
}

export default DashboardLayout;
