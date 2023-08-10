import React from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const { user } = location.state;

  return (
    <div>
      <h2>Welcome to Dashboard</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Dashboard;
