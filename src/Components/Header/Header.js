import React from 'react';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import logo from '../Header/star.png'
import './Header.css'

import { Button } from '@mui/material';
import useAuth from '../Hooks/useAuth';
const Header = () => {

    const { user, logOut } = useAuth();
    return (
        <div className='header_container'>
            <Box >
                <img style={{
                    width: '50px',

                }} src={logo} alt=""
                />
                <span style={{
                    fontWeight: 'bold',
                    color: '#213EFA'
                }}>Learn From Home</span>
            </Box>

            <Box >

                <NavLink className='nav_link1' to='/home'>Home</NavLink>
                <NavLink className='nav_link1' to='/about'>About</NavLink>
                <NavLink className='nav_link1' to='/courses'>Course</NavLink>
                <NavLink className='nav_link1' to='/instructor'>Instructor</NavLink>
                <NavLink className='nav_link1' to='/contact'>Contact</NavLink>
                {user.email && <small>Hello,{user.displayName}</small>}
                {user.email ?
                    <Button variant="contained" color="error" onClick={logOut}>Logout</Button>
                    :
                    <NavLink className='nav_link1' to='/login'>Login</NavLink>
                }


            </Box>
        </div>
    );
};

export default Header;