import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div style={{
            textAlign: 'center'
        }}>
            <h1>404</h1>
            <h2>-_- Page Not Found -_-</h2>
            <Link to='/home'>
                Go To Home
            </Link>
        </div>
    );
};

export default NotFound;