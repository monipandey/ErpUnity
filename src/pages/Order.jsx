import React from 'react';
import { useState, useEffect } from 'react';
import NavbarComponent from '../components/Dashboardpage/nav'; 
import Sidebar from '../components/Dashboardpage/Sidebar';

const Order = () => {
    const [getuserdata, setUserdata] = useState([]);

    const getdata = async () => {
        const res = await fetch("/get-delivary", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");
        } else {
            setUserdata(data);
            console.log("get data");
        }
    }

    useEffect(() => {
        getdata();
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    return (
        <>
            <div className="d-flex flex-column">
      <NavbarComponent />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1 p-4">
          

                    <div className='col-xl-10 col-lg-9 col-md-6 col-sm-12'>
                        <br />
                        <div className='row' style={{ width: "100%" }}>
                            <div>
                                <h1><i className="fas fa-box-open" style={{ fontSize: "22px" }}></i> Orders</h1>
                            </div>
                            <br />
                            <hr />
                            <div className="card-5">
                                <div className="container">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr className="table-active">
                                                <th scope="col"><h5>UserName</h5></th>
                                                <th scope="col"><h5>Amount</h5></th>
                                                <th scope="col"><h5>Address</h5></th>
                                                <th scope="col"><h5>Phone</h5></th>
                                                <th scope="col"><h5>Start Time</h5></th>
                                                <th scope="col"><h5>End Time</h5></th>
                                                <th scope="col"><h5>Service</h5></th>
                                                <th scope="col"><h5>Date</h5></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {getuserdata.map((element, index) => (
                                                <tr key={index}>
                                                    <td style={{ fontSize: "16px" }}>{element.name}</td>
                                                    <td style={{ fontSize: "16px" }}>{element.amount}</td>
                                                    <td style={{ fontSize: "16px" }}>{element.address}</td>
                                                    <td style={{ fontSize: "16px" }}>{element.phone}</td>
                                                    <td style={{ fontSize: "16px" }}>{element.stime} AM</td>
                                                    <td style={{ fontSize: "16px" }}>{element.etime} PM</td>
                                                    <td style={{ fontSize: "16px" }}>{element.service}</td>
                                                    <td style={{ fontSize: "16px" }}>{formatDate(element.date)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    
        </main>
                </div>
            </div>
        </>
    );
}

export default Order;
