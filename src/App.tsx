import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layout
import MainLayout from './layout/MainLayout';

// Pages
import LoginForm from './components/auth/LoginForm';
import Dashboard from './pages/Dashboard';
import ComplaintsPage from './pages/ComplaintsPage';
import OrdersPage from './pages/OrdersPage';
import VendorsPage from './pages/VendorsPage';
import UsersPage from './pages/UsersPage';
import AddVendorForm from './components/vendors/AddVendorForm';
import EscalationPanel from './components/complaints/EscalationPanel';

// Mock Data
import { mockEscalation } from './data/mockData';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/dashboard\" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="vendors" element={<VendorsPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="complaints" element={<ComplaintsPage />} />
          <Route path="escalation/:id" element={<EscalationPanel escalation={mockEscalation} />} />
          <Route path="*" element={<Navigate to="/dashboard\" replace />} />
        </Route>
        
        <Route path="/add-vendor" element={<AddVendorForm />} />
      </Routes>
    </Router>
  );
}

export default App;