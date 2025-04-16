import React from 'react';
import { Routes, Route } from 'react-router';
import CreateNote from '../components/Dashboard/Notes/CreateNote';
import Dashboard from '../components/Dashboard/Dashboard';
import DashboardLayout from '../layouts/DashboardLayout';
import HomeLayout from '../layouts/HomeLayout';
// import AuthLayout from '../layouts/AuthLayout';
// import { AuthSignup, AuthLogin } from '../components/Auth/index.js';

function NoteRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomeLayout />} />
      {/* <Route path='auth' element={<AuthLayout />}>
        <Route path='signup' element={<AuthSignup />} />
        <Route path='login' element={<AuthLogin />} />
      </Route> */}
      <Route path='dashboard' element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='create-note' element={<CreateNote />} />
      </Route>
    </Routes>
  );
}

export default NoteRoutes;
