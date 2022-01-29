import { Button } from '@mui/material';
import React from 'react';
import image2 from '../Home/asset 5.jpeg';
import AddIcon from '@mui/icons-material/Add';
import './Home.css'
import About from '../About/About';
import Courses from '../Courses/Courses';
const Home = () => {
    return (
        <>
            <div className='home_container'>
                <div className='image'>
                    <img src={image2} alt="" />
                </div>
                <div className="heading_container">
                    <h1>The Next Big <br />
                        Thing In Learning</h1>
                    <small> Voluptatibus voluptas nemo excepturi vero harum quidem.<br />
                        Incidunt ipsam ullam fuga odio molestiae.</small>
                    <br /><br />
                    <Button variant="contained"><AddIcon /> Enroll Now</Button>
                </div>
            </div >
            <About></About>
            <Courses></Courses>
        </>

    );

};

export default Home;
