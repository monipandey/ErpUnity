import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavbarComponent from '../components/Dashboardpage/nav'; // Ensure you have this Navbar component
import Sidebar from '../components/Dashboardpage/Sidebar';
import { PaymentTwoTone } from '@mui/icons-material';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';
const Payment = () => {



    const [getuserdata, setUserdata] = useState([]);

    const getdata = async () => {

        const res = await fetch("/get-order", {
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
            setUserdata(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, [])

    return (
        <>

<       div className="d-flex flex-column">
      <NavbarComponent />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1 p-4">
          <Container fluid>
            

                    <div className='col-xl-10 col-lg-9 col-md-6 col-sm-12 ' >
                        <br></br>
                        <div className='row' style={{ width: "120%" }} >


                            <div className='card-8 rounded-border'>
                                <h1>    <i className="far fa-credit-card" style={{ fontSize: "22px" }}></i>   Payments</h1>
                                <hr></hr>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>

                            



                            <div className="card-5 ">
                                <div className="container">
                                    <table class="table table-striped" style={{marginTop:'-1rem', width: "100%"}}>
                                        <thead>
                                            <tr className=" table-active">
                                                <th scope="col mt-1"><h5>Id</h5></th>
                                                <th scope="col"><h5>UserID</h5></th>


                                                <th scope="col"><h5>Amount</h5></th>
                                                <th scope="col"><h5>PaymentID</h5></th>
                                                <th scope="col"><h5>OrderID</h5></th>
                                              
                                                <th scope="col"><h5>Date</h5></th>

                                            </tr>
                                        </thead>
                                        <tbody>


                                            {
                                                getuserdata.map((element, id) => {
                                                    return (
                                                        <>
                                                            <tr>
                                                                <th scope="row">{id + 1}</th>
                                                                <td style={{ fontSize: "14px" }}> {element.ID}</td>
                                                                <td style={{ fontSize: "16px" }}>{element.amount}</td>
                                                                <td style={{ fontSize: "16px" }}>{element.paymentId}</td>
                                                                <td style={{ fontSize: "16px" }}>{element.orderId}</td>
                                                              
                                                                <td style={{ fontSize: "16px" }}>{element.date}</td>

                                                            </tr>
                                                            <br></br>
                                                        </>
                                                    )
                                                })
                                            }


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
    )
}

export default Payment