import React, { Fragment,useState } from 'react';
import { Container, Row, Col, Card, Alert, Form,ButtonToolbar,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { PulseLoader } from 'react-spinners';


export default function Login() {
    const [data] = useState({ });
    const [credentials, setCredentials] = useState({ username: null, password: null });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prevState => (
            { ...prevState, [name]: value }
        ))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        login();
          
    }

    

      async function login(){
        const response = await fetch("https://smarttech-live-track.herokuapp.com/api/v1/auth/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'       
        },
            body:data
          })
          console.log(response.headers);
          console.log(response.json);
      }

    return (
        <Fragment>
            <div className="login ">
                <Container fluid >
                    <Row className="min-vh-100">
                        <Col lg="6" className="login__left p-3 d-none d-lg-block">
                            <div className="d-flex flex-column justify-content-center align-items-center h-100">
                            </div>
                        </Col>
                        <Col lg="6" className="login__right custom-container py-5 px-2 d-flex flex-column justify-content-center align-items-center">
                            {/* <div className="mb-5">
                            <div className="d-flex align-items-center justify-content-center">
                                <Image src={AfrintelDarkLogo} className="login__right--logo" />
                            </div>
                        </div> */}
                            <Card className="w-75">
                                <Card.Body>
                                    <div className="d-flex flex-column px-3">
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="pt-1 pb-2 text-center">
                                                <Form.Text className="text-primary h3">
                                                    Live tracker
                                     </Form.Text>
                                            </Form.Group>
                                            <Alert />
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control type="email" name='username' placeholder="Email address" value={data.username} onChange={handleInputChange} required />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Control type="password" name='secret' placeholder="Password" value={data.password} onChange={handleInputChange} required />
                                            </Form.Group>
                                            <ButtonToolbar className="justify-content-center my-3">
                                                <Button variant="primary" type="submit"  block>
                                                    {/* {authentication.isLoggingIn ? <PulseLoader loading={authentication.isLoggingIn} size="12" color={'white'} /> : <span> */}
                                                        Sign in
                                                        
                                                        {/* </span>} */}
                                                </Button>
                                            </ButtonToolbar>
                                            <Form.Group>
                                                <Form.Text className="sm-text">
                                                    Don't have an account? <Link to="/register">Sign up here </Link>
                                                </Form.Text>
                                            </Form.Group>
                                        </Form>
                                    </div>
                                </Card.Body>

                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>

        </Fragment>
    )
}