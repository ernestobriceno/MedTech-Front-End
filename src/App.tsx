import React from 'react';
import { UserRoleProvider } from './context/UserRoleContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Appointments } from './pages/Appointments';
import { Appointment } from './pages/Appointment';
import { HealthCheck } from './pages/Health';
import { Doctordashboard } from './pages/DoctorDashboard';
import { Navbar } from './components/PatientNavbar';
import { DoctorNavbar } from './components/DoctorNavbar';
import { Patients } from './pages/patients';
import { Patienthealth } from './pages/patienthealth';
import { Examination } from './pages/Examination';
import { AddExams } from './pages/Addexams';
import { Xray } from './pages/Xray';
import { Files } from './pages/Files';
import { Prescription } from './pages/Prescription';
import { DoctorsHistory } from './pages/Doctors';
import { HospitalsHistory } from './pages/HospitalList';
import { InsuranceList } from './pages/Insurance';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  return (
    <UserRoleProvider>
      <Router>
        <MainContent />
      </Router>
    </UserRoleProvider>
  );
};

const MainContent: React.FC = () => {
  const { userRole } = useUserRole();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ ProtectedRoute>
        } />
        <Route path="/health" element={
          <ProtectedRoute>
            <HealthCheck />
          </ ProtectedRoute>
        } />
        <Route path="/hospital/appointments" element={
          <ProtectedRoute>
            <Appointments />
          </ ProtectedRoute>
        } />
        <Route path="/hospital/appointment" element={
          <ProtectedRoute>
            <Appointment />
          </ProtectedRoute>
        } />
        <Route path="/doctor/dashboard" element={
          <ProtectedRoute>
            <Doctordashboard />
          </ProtectedRoute>
        } />
        <Route path="/patients" element={
          <ProtectedRoute>
            <Patients />
          </ProtectedRoute>
        } />
        <Route path="/patienthealth" element={
          <ProtectedRoute>
            <Patienthealth />
          </ProtectedRoute>
        } />
        <Route path="/addexams" element={
          <ProtectedRoute>
            <AddExams />
          </ProtectedRoute>
        } />
        <Route path="/xrays" element={
          <ProtectedRoute>
            <Xray />
          </ProtectedRoute>
        } />
        <Route path="/files" element={
          <ProtectedRoute>
            <Files />
          </ProtectedRoute>
        } />
        <Route path="/prescriptions" element={
          <ProtectedRoute>
            <Prescription />
          </ProtectedRoute>
        } />
        <Route path="/examinations" element={
          <ProtectedRoute>
            <Examination />
          </ProtectedRoute>
        } />
        <Route path="/doctors" element={
          <ProtectedRoute>
            <DoctorsHistory />
          </ProtectedRoute>
        } />
        <Route path="/hospitals" element={
          <ProtectedRoute>
            <HospitalsHistory />
          </ProtectedRoute>
        } />
        <Route path="/insurance" element={
          <ProtectedRoute>
            <InsuranceList />
          </ProtectedRoute>
        } />
        {/* <Route path="/prescriptions" element={<Exams />} /> */}
      </Routes>

      {/* Conditional Navbars */}
      {userRole === 'patient' && <Navbar />}
      {userRole === 'doctor' && <DoctorNavbar />}
    </>
  );
};

import { useContext } from 'react';
import { UserRoleContext } from './context/UserRoleContext';

const useUserRole = () => {
  const context = useContext(UserRoleContext);
  if (!context) {
    throw new Error('useUserRole must be used within a UserRoleProvider');
  }
  return context;
};

export default App;
