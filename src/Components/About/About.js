import React from 'react';
import accessAvailabale from '../About/accessible.svg'
import certificate from '../About/certificate.svg'
import img1 from '../About/asset 29.jpeg'
import img2 from '../About/asset 24.jpeg'
import img3 from '../About/asset 21.jpeg'
import img4 from '../About/asset 18.jpeg'
import './About.css'
const About = () => {
    return (
        <div className='about_container'>
            <div className='offer_container'>
                <h1>We Offer You a <br />
                    Brighter Future</h1>
                <div className='offer'>
                    <img style={{
                        width: '40px',
                        marginRight: '20px'
                    }} src={accessAvailabale} alt="" />
                    <span>
                        <h4>Life time access</h4>
                        <small> It can helps you in future for those reason we provide Full Time
                            access(Life Time Access)</small>
                    </span>

                </div>
                <div className='offer'>
                    <img style={{
                        width: '40px',
                        marginRight: '20px'
                    }} src={certificate} alt="" />
                    <span>
                        <h4>Certification</h4>
                        <small>After complete our online courses, you get certificate which helped
                            you to get qualityfull job.</small>

                    </span>

                </div>
                <div className='offer'>
                    <img style={{
                        width: '40px',
                        marginRight: '20px'
                    }} src={accessAvailabale} alt="" />
                    <span>
                        <h4>Download Permission</h4>
                        <small>Always get to download access if you want. It could be helped you
                            after finish our courses.
                        </small>
                    </span>

                </div>


            </div>
            <div className='image_container'>
                <table>
                    <tr>
                        <th><img style={{
                            width: '300px',
                            margin: '3px'
                        }} src={img1} alt="" /></th>
                        <td><img style={{
                            width: '300px',
                            marginLeft: '3px'
                        }} src={img3} alt="" /></td>
                    </tr>
                    <tr>
                        <th rowspan="2"><img style={{
                            width: '300px',
                            margin: '3px'
                        }} src={img4} alt="" /></th>
                        <td></td>
                    </tr>
                    <tr>
                        <td><img style={{
                            width: '300px',
                            margin: '3px'
                        }} src={img2} alt="" /></td>
                    </tr>
                </table>

            </div>
        </div>
    );
};

export default About;