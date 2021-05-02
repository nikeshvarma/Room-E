import React from 'react';
import {useForm} from 'react-hook-form';
import {Col, Container, Form, Row} from "react-bootstrap";
import {Button, MenuItem, Select, InputLabel, FormControl, TextField} from '@material-ui/core';


function AddProperty() {

    const {register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <div className="jumbotron">
                <h1 style={{fontFamily: 'Ubuntu', fontSize: '3.5em'}}>List Property</h1>
            </div>

            <Container className="mt-3">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col md={4}>
                            <Form.Group>
                                <TextField label="Flat Size" name="size" variant="outlined" inputRef={register} fullWidth/>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <TextField label="Number of Rooms" name="rooms" variant="outlined" inputRef={register} fullWidth/>
                            </Form.Group>
                        </Col>
                        <Col md={4} className="mb-3 mb-md-0">
                            <Form.Group>
                                <FormControl variant="outlined" className="form-control">
                                    <InputLabel id="avail-for">Available For</InputLabel>
                                    <Select labelId="avail-for" name="available_for" label="Available For" inputRef={register}>
                                        <MenuItem value="boys">Boys</MenuItem>
                                        <MenuItem value="girls">Girls</MenuItem>
                                        <MenuItem value="family">Family</MenuItem>
                                    </Select>
                                </FormControl>
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group>
                                <TextField label="Rent" name="rent" variant="outlined" inputRef={register} fullWidth/>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <TextField label="Security Deposit" name="security_deposite" variant="outlined" inputRef={register} fullWidth/>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={8}>
                            <Form.Group>
                                <TextField label="Address" name="address" variant="outlined" inputRef={register} fullWidth/>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <TextField label="Locality" name="locality" variant="outlined" inputRef={register} fullWidth/>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <Form.Group>
                                <TextField label="City" name="city" variant="outlined" inputRef={register} fullWidth/>
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group>
                                <TextField label="State" name="state" variant="outlined" inputRef={register} fullWidth/>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <TextField label="Pincode" name="pincode" variant="outlined" inputRef={register} fullWidth/>
                            </Form.Group>
                        </Col>

                        <Col sm={12}>
                            <Form.Group>
                                <TextField label="Description" name="description" variant="outlined" inputRef={register} fullWidth multiline rows={5}/>
                            </Form.Group>
                        </Col>

                        <Col sm={12}>
                            <Form.Group>
                                <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    )
}

export default AddProperty;