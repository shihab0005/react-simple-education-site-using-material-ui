import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Instractor = () => {

    const [instructiors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('./FakeInstractorData.json')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    return (
        <>
            <h1 style={{
                textAlign: 'center',
                color: '#FA6621 '
            }}>Our Honorable Instructor Team Member</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3,1fr)',
                margin: '40px 30px',
            }}>

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
                        </CardContent>
                        <CardActions>

                        </CardActions>
                    </Card>
                )
                }
            </div >
        </>
    );
};

export default Instractor;
