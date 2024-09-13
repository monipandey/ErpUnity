import React from 'react';
import { Nav, Dropdown } from 'react-bootstrap';
import { FaHome, FaUser, FaShoppingCart, FaDollarSign, FaComment, FaCog, FaBoxes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import './Sidebar.css'; 

const Sidebar = () => {
  return (
    <div bg="dark" variant="dark" className="sidebar bg-dar">
      <h4 className="p-3">Dashboard</h4>
      <Nav className="flex-column p-3">
        <Nav.Link as={Link} to="/home">
          <FaHome className="sidebar-icon" /> Home
        </Nav.Link>
        <Nav.Link as={Link} to="/employee">
          <FaUser className="sidebar-icon" /> Employees
        </Nav.Link>
        <Nav.Link as={Link} to="/orders">
          <FaShoppingCart className="sidebar-icon" /> Orders
        </Nav.Link>
        <Nav.Link as={Link} to="/payments">
          <FaDollarSign className="sidebar-icon" /> Payments
        </Nav.Link>
        <Nav.Link as={Link} to="/feedback">
          <FaComment className="sidebar-icon" /> Feedback
        </Nav.Link>
        
        <Dropdown>
          <Nav.Link>
          <Dropdown.Toggle >
            <FaBoxes className="sidebar-icon" /> Products
          </Dropdown.Toggle>
          </Nav.Link>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/products/add">Add Product</Dropdown.Item>
            <Dropdown.Item as={Link} to="/products/list">Product List</Dropdown.Item>
          
          </Dropdown.Menu>
        </Dropdown>

        
      </Nav>
    </div>
  );
};

export default Sidebar;
