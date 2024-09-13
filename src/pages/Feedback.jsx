import React, { useState, useEffect } from 'react';
import NavbarComponent from '../components/Dashboardpage/nav'; 
import Sidebar from '../components/Dashboardpage/Sidebar';
import { Container } from 'react-bootstrap'; // Import Container from react-bootstrap or any relevant library

const Feedback = () => {
    const [getuserdata, setUserdata] = useState([]);

    const getdata = async () => {
        try {
            const res = await fetch("http://localhost:8080/api/feedback", { // Ensure this matches your backend endpoint
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.message || "Failed to fetch data");
            }

            const data = await res.json();
            setUserdata(data);
            console.log("Data fetched successfully", data);
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };

    useEffect(() => {
        getdata();
    }, []);

    return (
        <>
            <div className="d-flex flex-column">
                <NavbarComponent />
                <div className="d-flex flex-grow-1">
                    <Sidebar />
                    <main className="flex-grow-1 p-4">
                        <Container fluid>
                            <div className='col-xl-10 col-lg-10 col-md-6 col-sm-12'>
                                <br />
                                <div className='row mx-2' style={{ width: "100%" }}>
                                    <br />
                                    <div>
                                        <h1>Feedback</h1>
                                    </div>
                                    <br />
                                    <br />
                                    <hr />
                                    <div className="card-5">
                                        <div className="container">
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr className="table-active">
                                                        <th scope="col mt-1"><h5>Id</h5></th>
                                                        <th scope="col"><h5>Username</h5></th>
                                                        <th scope="col"><h5>Email</h5></th>
                                                        <th scope="col"><h5>Number</h5></th>
                                                        <th scope="col"><h5>Message</h5></th>
                                                        <th scope="col"><h5>Date</h5></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {getuserdata.map((element, index) => (
                                                        <tr key={index}>
                                                            <th scope="row">{index + 1}</th>
                                                            <td style={{ fontSize: "17px" }}>{element.name}</td>
                                                            <td style={{ fontSize: "17px" }}>{element.email}</td>
                                                            <td style={{ fontSize: "17px" }}>{element.phone}</td>
                                                            <td style={{ fontSize: "17px" }}>{element.message}</td>
                                                            <td style={{ fontSize: "17px" }}>{element.date}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </main>
                </div>
            </div>
        </>
    );
};

export default Feedback;
