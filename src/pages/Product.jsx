import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavbarComponent from '../components/Dashboardpage/nav'; // Ensure you have this Navbar component
import Sidebar from '../components/Dashboardpage/Sidebar';
import './Product.css'; // Create or adjust the CSS as needed

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch product data (API call or local data)
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    // Fetch products data from API or service
    // This is just an example, replace with actual data fetching
    setProducts([
      { id: 1, name: 'Product 1', service: 'Service 1', catagory: 'Category 1', price: 100 },
      { id: 2, name: 'Product 2', service: 'Service 2', catagory: 'Category 2', price: 200 }
    ]);
    setData([
      { _id: 3, name: 'Product 3', service: 'Service 3', catagory: 'Category 3', price: 300 },
      { _id: 4, name: 'Product 4', service: 'Service 4', catagory: 'Category 4', price: 400 }
    ]);
  };

  const deleteUser = (id) => {
    // Implement delete functionality
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
    const newData = data.filter((item) => item._id !== id);
    setData(newData);
  };

  return (
    <div className="d-flex flex-column">
      <NavbarComponent />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1 p-4">
          <Container fluid>
            <h1 className="mb-4">Product List</h1>
            <div className='card-5 mt-3 rounded-border'>
              <div className='container'>
                <table className='table table-striped'>
                  <thead>
                    <tr className='table-active'>
                      <th scope='col'>
                        <h5>ID</h5>
                      </th>
                      <th scope='col'>
                        <h5>Name</h5>
                      </th>
                      <th scope='col'>
                        <h5>Category</h5>
                      </th>
                      <th scope='col'>
                        <h5>Price</h5>
                      </th>
                      <th scope='col'>
                        <h5>Operations</h5>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((user) => (
                      <tr key={user.id}>
                        <td style={{ fontSize: '17px' }}>{user.name}</td>
                        <td style={{ fontSize: '17px' }}>{user.service}</td>
                        <td style={{ fontSize: '17px' }}>{user.catagory}</td>
                        <td style={{ fontSize: '17px' }}>{user.price}</td>
                        <td>
                          <Link className='btn btn-dark' to={`/product/edit/${user.id}`}>
                            Edit
                          </Link>
                          <button className='btn btn-danger mx-2' onClick={() => deleteUser(user.id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}

                    {data.map((element) => (
                      <tr key={element._id}>
                        <td>{element.Id}</td>
                        <td>{element.name}</td>
                        <td>{element.catagory}</td>
                        <td>{element.price}</td>
                        <td className='d-flex'>
                          <Link to={`update/${element._id}`}>
                            <button type='button' className='btn btn-dark' style={{ width: '5rem' }}>
                              Edit
                            </button>
                          </Link>
                          <button className='btn btn-danger mx-2' onClick={() => deleteUser(element._id)} style={{ width: '5rem' }}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Container>
        </main>
      </div>
    </div>
  );
};

export default ProductsPage;
