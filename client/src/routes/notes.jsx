import React from 'react';
import { Routes, Route } from 'react-router';
import CreateNote from '../components/Dashboard/Notes/CreateNote';
import Dashboard from '../components/Dashboard/Dashboard';
import DashboardLayout from '../layouts/DashboardLayout';
import HomeLayout from '../layouts/HomeLayout';
import AuthLayout from '../layouts/AuthLayout';
import Signup from '../components/Auth/Signup';
import Login from '../components/Auth/Login';

function NoteRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomeLayout />} />
      <Route path='auth' element={<AuthLayout />}>
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
      </Route>
      <Route path='dashboard' element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='create-note' element={<CreateNote />} />
      </Route>
    </Routes>
  );
}

export default NoteRoutes;
