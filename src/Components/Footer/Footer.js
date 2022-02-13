import React from 'react';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import './Footer.css'
import HomeIcon from '@mui/icons-material/Home';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
const Footer = () => {
    return (
        <div className='footer_container'>
            <div>
                <h3>Quick links</h3>
                <NavLink className='nav_link2' to='/home'>Home</NavLink><br />
                <NavLink className='nav_link2' to='/about'>About</NavLink><br />
                <NavLink className='nav_link2' to='/courses'>Course</NavLink><br />
                {/* <NavLink className='nav_link2' to='/coursesDetails'>Course Details</NavLink><br /> */}
                <NavLink className='nav_link2' to='/contact'>Contact</NavLink>
            </div>
            <div>
                <h3>Service</h3>
                <p>FQA</p>
                <p>Terms & Condition</p>
                <p>Helps anytime</p>
            </div>
            <div>
                <Box><h3>Learn-Online</h3> </Box>

                <h5 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <HomeIcon />
                    <span style={{ margin: '5px' }}>3/B, 4th Floor, Plot, Rd 16/A, Dhaka 1212</span>
                </h5>

                <h5 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <AttachEmailIcon />
                    <span style={{ margin: '5px' }}>e-learning@gmail.com,
                        e-learning@edu.bd</span>
                </h5>


                <h5 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <PhoneInTalkIcon />
                    <span style={{ margin: '5px' }}> +012-01293949,
                        +880-01849749873</span>
                </h5>




            </div>
        </div>
    );
};

export default Footer;