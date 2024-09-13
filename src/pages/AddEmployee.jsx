import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import NavbarComponent from '../components/Dashboardpage/nav'; // Ensure you have this Navbar component
import Sidebar from '../components/Dashboardpage/Sidebar';

const AddEmployee = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    position: '',
  });

  const { name, email, position } = employee;

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Assuming your API endpoint is '/api/employees'
    await axios.post('/api/employees', employee);
    navigate('/employees');
  };

  return (
    <div className="d-flex flex-column">
      <NavbarComponent />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1 p-4">
          
        
    <div className="container">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder='Name'
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder='Email'
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          
          <input
            type="text"
            className="form-control"
            name="position"
            placeholder='Position'
            value={position}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Employee
        </button>
      </form>
    </div>
    
        </main>
      </div>
    </div>
  );
};

export default AddEmployee;