import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Admin from '../components/Dashboardpage/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap



const AdminDash = () => {
  return(
  <React.StrictMode>
    <Admin />
  </React.StrictMode>
);
}
export default AdminDash;
