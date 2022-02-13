import React from 'react';
import { Button, FormGroup, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import './Login.css'
import GoogleIcon from '@mui/icons-material/Google';

import useAuth from '../Hooks/useAuth';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
const Login = () => {

    const { signInWithGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    return (
        <div className='login_container'>
            <div className='login_form'>
                <h2>Please Login</h2>
                <FormGroup>
                    <TextField id="standard-basic" label="Enter Email" variant="standard" />
                    <TextField id="standard-basic" label="Enter Password" variant="standard" />
                    <br />
                    <Button variant='contained'> Login</Button>
                </FormGroup>
                <p>New In Elarn ? <Link to='/register'>Register</Link></p>
                <div>-----------------or----------------</div>
                <Button
                    variant='outlined'
                    onClick={handleGoogleSignIn}
                    color='secondary'

                ><GoogleIcon sx={{ marginRight: '5px' }} />
                    Sign in With Google
                </Button>
            </div>

        </div >
    );
};

export default Login;