import React from 'react';
import { Routes, Route } from 'react-router';
import CreateNote from '../components/Dashboard/Notes/CreateNote';
import Dashboard from '../components/Dashboard/Dashboard';
import DashboardLayout from '../layouts/DashboardLayout';

function NoteRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='dashboard' element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='create-note' element={<CreateNote />} />
      </Route>
    </Routes>
  );
}

export default NoteRoutes;
