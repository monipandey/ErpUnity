import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbarhori from '../components/Dashboardpage/nav'; // Ensure you have this Navbar component
import './ProductsPage.css'; // Create or adjust the CSS as needed

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
    <div className='container' style={{ fontFamily: 'Poppins' }}>
      <div className='row' style={{ width: '100%', marginTop: '-3.2rem' }}>
        <div className='col-xl-2 col-lg-2 col-md-6 col-sm-12' style={{ marginLeft: '-2.2rem', marginTop: '-1.6rem' }}>
          <Navbarhori />
        </div>

        <div className='col-xl-10 col-lg-10 col-md-6 col-sm-12'>
          <br />

          <div className='row mx-2' style={{ width: '100%' }}>
            <br />
            <div className='card-8 rounded-border'>
              <h1>Products Details</h1>
              <hr />
            </div>
            <br />
            <br />
            <br />

            <div className='card-5 mt-3 rounded-border'>
              <div className='container'>
                <table className='table table-striped'>
                  <thead>
                    <tr className='table-active'>
                      <th scope='col'>
                        <h5>Name</h5>
                      </th>
                      <th scope='col'>
                        <h5>Service</h5>
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

                    {data.map((element, id) => (
                      <tr key={id}>
                        <td>{element.name}</td>
                        <td>{element.service}</td>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
