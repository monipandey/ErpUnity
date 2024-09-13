import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup'; 
import AddProduct from "./pages/AddProduct";
import Product from "./pages/Product";
import Order from "./pages/Order";
import AddEmployee from './pages/AddEmployee';
import EmployeeList from './pages/Employeelist';
import Payment from "./pages/Payment";
import Feedback from "./pages/Feedback";
import AdminDash from './Dashboard/AdminDash';
import EmployeeDash from './Dashboard/EmployeeDash';



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/productlist" element={<Product />} />
                    <Route path="/addproduct" element={<AddProduct />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="feedback" element={<Feedback />} />
                    <Route path="order" element={<Order />} />
                    <Route path="/employeelist" element={<EmployeeList />} />
                    <Route path="/employee" element={<AddEmployee />} />
                    <Route path="/adminDashboard" element={<AdminDash />} />
                    <Route path="/employeeDashboard" element={<EmployeeDash />} />
                   
                </Routes>  
            </Router>
        </div>
    );
}

export default App;
