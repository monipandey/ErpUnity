import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Header from '../components/DashboardHeader/Header';

const AdminDash = () => {
  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <Header />
      </StyledEngineProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.querySelector("#root")).render(<AdminDash />);

export default AdminDash;
