import React,{Fragment,useState} from 'react';
import { Container, Row, Col, Card, Alert, Form,ButtonToolbar,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default function Signup(){

    const [data, setData] = useState({ });
    const [step,setStep] = useState(1);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData(prevState => (
            { ...prevState, [name]: value }
        ))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return(
        <Fragment>
        <div className="login ">
            <Container fluid >
                <Row className="min-vh-100">
                    <Col lg="6" className="login__left p-3 d-none d-lg-block">
                        <div className="d-flex flex-column justify-content-center align-items-center h-100">
                        </div>
                    </Col>
                    <Col lg="6" className="login__right custom-container py-5 px-2 d-flex flex-column justify-content-center align-items-center">
                    <h2 className="text-primary  text-center py-5">
                                                Sign up to Live tracker
                                 </h2>
                        <Card className="w-75">
                            <Card.Body>
                                <div className="d-flex flex-column px-3">
                                    {step ==1 &&   <Form onSubmit={()=>setStep(2)}>
                                        <div className="pt-1 text-center">
                                           
                                 <span className="text-primary h6">
                                                Personal Information
                                 </span>
                                        </div>
                                        <Alert />
                                        <Form.Group controlId="formBasicFirstname">
                                            <Form.Control type="text" name='firstname' placeholder="Firstname" onChange={handleInputChange} value={data.firstname} required />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicMiddlename">
                                            <Form.Control type="text" name='middlename' placeholder="Middlename" value={data.middlename} onChange={handleInputChange} required />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicLastname">
                                            <Form.Control type="text" name='lastname' placeholder="Lastname" value={data.lastname} onChange={handleInputChange} required />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Control type="password" name='password' placeholder="Password" value={data.password} onChange={handleInputChange} required />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="email" name='email' placeholder="Email address" value={data.email} onChange={handleInputChange} required />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicTel">
                                            <Form.Control type="text" name='tel' placeholder="Phone number" value={data.tel} onChange={handleInputChange} required />
                                        </Form.Group>
                                        <ButtonToolbar className="justify-content-center my-3">
                                            <Button variant="primary" type="submit"  block>
                                                   Next
                                            </Button>
                                        </ButtonToolbar>
                                    </Form>}
                                
                                  {step == 2 &&  <Form onSubmit={handleSubmit}>
                                        <Form.Group className="pt-1 text-center">
                                            <Form.Text className="text-primary h6">
                                                Emergency Contact Information
                                 </Form.Text>
                                        </Form.Group>
                                        <Alert />
                                        <Form.Group controlId="formBasicFirstname">
                                            <Form.Control type="text" name='firstname' placeholder="Firstname" onChange={handleInputChange} required />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicLastname">
                                            <Form.Control type="text" name='lastname' placeholder="Lastname" onChange={handleInputChange} required />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="email" name='email' placeholder="Email address" onChange={handleInputChange} required />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicTel1">
                                            <Form.Control type="text" name='tel1' placeholder="Phone number 1" onChange={handleInputChange} required />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicTel2">
                                            <Form.Control type="text" name='tel2' placeholder="Phone number 2" onChange={handleInputChange} required />
                                        </Form.Group>
                                        <ButtonToolbar className="justify-content-between my-4 mb-5">
                                            <Button variant="outline-primary"  onClick={()=>{setStep(1)}}> &#8592; Previous </Button>
                                            <Button variant="primary" type="submit">
                                                {/* {authentication.isLoggingIn ? <PulseLoader loading={authentication.isLoggingIn} size="12" color={'white'} /> : <span> */}
                                                   Submit
        
                                                    {/* </span>} */}
                                            </Button>
                                        </ButtonToolbar>
                                    </Form>}
                                    <span className="sm-text">Already have an account? <Link to="/login">Log in here </Link></span>
                                   
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