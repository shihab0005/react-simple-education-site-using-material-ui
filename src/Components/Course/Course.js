import { Button, Card, CardActions, CardContent, CardMedia, Rating, Typography } from '@mui/material';
import React from 'react';
import './Course.css'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

import { NavLink } from 'react-router-dom';

const Course = (props) => {
    const { id, name, image, rating } = props.course;
    const url = `/course/${id}`;
    return (
        <div className='course_container'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                    <Rating name="read-only" value={rating} readOnly />
                </CardContent>
                <CardActions>
                    <NavLink to='/enrollCourse'>
                        <Button
                            sx={{
                                marginRight: '100px',
                            }}
                            variant="outlined"
                            size="small"

                        >
                            <LocalGroceryStoreIcon />
                            Enroll</Button>

                    </NavLink>

                    <NavLink to={url}>
                        Course Details
                    </NavLink>


                </CardActions>
            </Card>

        </div>
    );
};

export default Course;