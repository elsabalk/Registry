import React, { useState, useEffect } from 'react';
import { Row, Col, Card, CardBody } from "reactstrap";
import { MDBTable, MDBTableBody } from 'mdbreact';

import axios from 'axios';
import $ from 'jquery';

function ProductList(props) {
    const [inputData, setInput] = useState([{ title: '', price: '', description: '', image: '' }]);
    const [showData, setShowData] = useState([{ id: '', title: '' }]);


    // Api Headers and GET route
    const headers = {
        'Content-Type': 'application/json'
    };

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`, { headers: headers })
            .then(response => {
                setInput(response.data);
            })
            .catch((error) => {
                console.log("Error: Something went wrong!");
            })
    }, []);

    const onHandleSubmit = (id) => {

        axios.get('https://fakestoreapi.com/products/' + id)
            .then(response => {
                setShowData([...showData, { id: response.data.id, title: response.data.title }])
                console.log("Add To List=>");
                console.log(showData);

                $(".showBucketList").css("display", "block");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const deleteRow = (id) => {

        console.log(id)
        const updatedBucket = [...showData].filter((item) => item.id !== id);

        setShowData(updatedBucket);
    }

    return (
        <React.Fragment>
            <div className="container-fluid" >
                <div className="container-fluid">
                    <div class="page-title-box d-flex align-items-center justify-content-between">
                    </div>

                    <Row>
                        <Col className="col-12">
                            <Card>

                                <CardBody>
                                    <div style={{ marginBottom: 10 }}>
                                        <h1 className="h1">
                                            <img style={{ width: 100, height: 100 }} src={"../icons/lovebirds.svg"} alt="lovebirds" />
                                            Product List
                                        </h1><br />
                                    </div>
                                    <MDBTable striped bordered condensed hover paging={true}>
                                        <thead>
                                            <th></th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Description</th>
                                            <th>Image</th>
                                            <th>Action</th>
                                        </thead>
                                        <MDBTableBody>
                                            {inputData.map(function (x, i) {
                                                return <tr>
                                                    <td>{i + 1}</td>
                                                    <td>{x.title}</td>
                                                    <td>{x.price}</td>
                                                    <td>{x.description}</td>
                                                    <td><img src={x.image} alt="Sample Image" height="100" /></td>
                                                    <td>
                                                        <button className="bucket-button" onClick={() => onHandleSubmit(x.id)}>Add</button></td>
                                                </tr>
                                            })}
                                        </MDBTableBody>
                                    </MDBTable><br />
                                    <div style={{ marginBottom: 10 }}>
                                        <h1 className="h1">
                                            <img style={{ width: 100, height: 100 }} src={"../icons/lovebirds.svg"} alt="lovebirds" />
                                            My Registry
                                        </h1>
                                    </div>
                                    <div className="showBucketList" style={{ display: 'none' }} id="showbucket">
                                        {showData.map(function (x) {
                                            return <div>

                                                {

                                                    (x.title) ? <h4 style={{ textalign: 'left' }}>{x.title}&nbsp;&nbsp; <span onClick={() => deleteRow(x.id)}> 🗑️ </span></h4> : null
                                                }

                                            </div>
                                        })}

                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductList;
