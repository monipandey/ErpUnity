import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import NavbarComponent from '../components/Dashboardpage/nav'; // Ensure you have this Navbar component
import Sidebar from '../components/Dashboardpage/Sidebar';

const Employeelist = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const res = await axios.get('/api/employees');
      setEmployees(res.data);
    };
    fetchEmployees();
  }, []);

  return (
    <div className="d-flex flex-column">
      <NavbarComponent />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1 p-4">
          
            
    <div className="container">
      <h2>Employee List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
        </main>
      </div>
    </div>
  );
};

export default Employeelist;
