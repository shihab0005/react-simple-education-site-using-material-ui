import { Button, FormGroup, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
const Register = () => {
    return (
        <div className='login_container'>
            <div className='login_form'>
                <h2>Please Register</h2>
                <FormGroup>
                    <TextField id="standard-basic" label="Enter Email" variant="standard" />
                    <TextField id="standard-basic" label="Enter Password" variant="standard" />
                    <TextField id="standard-basic" label="Re Enter Password" variant="standard" />
                    <br />
                    <Button variant='contained'> Register</Button>
                </FormGroup>
                <p>Already Have an Account ? <Link to='/login'>Login</Link></p>
                <div>-----------------or----------------</div>
                <Button variant='contained'>Sign in With Google</Button>
            </div>

        </div>
    );
};

export default Register;