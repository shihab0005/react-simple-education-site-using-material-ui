import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Instractor.css'
const Instractor = () => {

    const [instructiors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('./FakeInstractorData.json')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    return (
        <div className='main_card'>
            <div>
                <h1 style={{
                    textAlign: 'center',
                    color: '#FA6621 '
                }}>Our Honorable Instructor Team Member</h1>
                <div className='instructor_card'>

                    {instructiors.map(instructor =>
                        <Card sx={{
                            maxWidth: 345,
                            padding: '15px',

                        }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="200"
                                image={instructor.image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {instructor.instructor}<br />
                                    <strong>Expert : </strong> {instructor.name}

                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <strong>UserName : </strong>  {instructor.username}<br />
                                    <strong>Email : </strong>  {instructor.email}<br />
                                    <strong>Phome : </strong> {instructor.phone}<br />
                                    <strong>Website : </strong> {instructor.website}<br />
                                    <strong>City : </strong> {instructor.address.city}<br />
                                    <strong>Company : </strong> {instructor.company.name}

                                </Typography>
                                <Button><EmailIcon /></Button>
                                <Button><FacebookIcon /></Button>
                                <Button><GitHubIcon /></Button>
                            </CardContent>
                            <CardActions>

                            </CardActions>
                        </Card>
                    )
                    }
                </div >
            </div>

        </div>
    );
};

export default Instractor;
