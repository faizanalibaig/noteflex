import React from 'react';
import { Routes, Route } from 'react-router';
import CreateNote from '../components/Dashboard/Notes/CreateNote';
import Dashboard from '../components/Dashboard/Dashboard';
import DashboardLayout from '../layouts/DashboardLayout';
import HomeLayout from '../layouts/HomeLayout';
import { UserLogin, UserSignup } from '../components/UserAuth/index';
import UserLayout from '../layouts/UserLayout';
import CheckPc from "../components/Home/Check-Pc.jsx";
import Note from "../components/Notes/Note.jsx";

function NoteRoutes() {
  return (
    <Routes>
        <Route path='/' element={<HomeLayout />} />
        <Route path='/check-pc' element={<CheckPc />} />
        <Route path='/note/:name' element={<Note />} />
        <Route path='auth' element={<UserLayout />}>
        <Route path='signup' element={<UserSignup />} />
        <Route path='login' element={<UserLogin />} />
      </Route>
      <Route path='dashboard' element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='create-note' element={<CreateNote />} />
      </Route>
    </Routes>
  );
}

export default NoteRoutes;
