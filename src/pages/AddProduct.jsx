import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is imported
import { Container } from 'react-bootstrap';
import NavbarComponent from '../components/Dashboardpage/nav'; // Ensure you have this Navbar component
import Sidebar from '../components/Dashboardpage/Sidebar';
import './AddProduct.css'; // Create or adjust the CSS as needed

const AddUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    service: "",
    catagory: "",  
    price: "",
    information: "" // Fixed typo here
  });

  const { name, service, catagory, price, information } = user; // Fixed typo here

  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:4000/product", user);
    navigate("/"); // Use navigate for redirection
  };

  return (
    <div className="d-flex flex-column">
      <NavbarComponent />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1 p-4">
          <Container fluid>
            <div className="container">
              <div className="w-400 mx-full p-5 card-5">
                <h2 className="text-center mb-4">Add Product</h2>
                <form onSubmit={onSubmit}>
                  <div className="form-group mt-3">
                    <h5></h5>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder=" Product Id" // Updated placeholder text
                      name="name"
                      value={name}
                      onChange={onInputChange}
                    />
                  </div>
                  
                  <div className="form-group mt-3">
                    <h5></h5>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Product Name"
                      name="service"
                      value={service}
                      onChange={onInputChange}
                    />
                  </div>
                  
                  <div className="form-group mt-3">
                    <h5></h5>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder=" Product Category" // Fixed typo here
                      name="catagory"
                      value={catagory}
                      onChange={onInputChange}
                    />
                  </div>
                  
                  <div className="form-group mt-3">
                    <h5></h5>
                    <input
                      type="number"
                      className="form-control form-control-lg"
                      placeholder="Product Price"
                      name="price"
                      value={price}
                      onChange={onInputChange}
                    />
                  </div>
                  
                  <div className="form-group mt-3">
                    <h5></h5>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Product  Details" // Updated placeholder text
                      name="information" // Fixed typo here
                      value={information}
                      onChange={onInputChange}
                    />
                  </div>
                  
                  <button type="submit" className="btn btn-primary btn-block mt-3">
                    Add Product
                  </button>
                </form>
              </div>
            </div>
          </Container>
        </main>
      </div>
    </div>
  );
};

export default AddUser;
