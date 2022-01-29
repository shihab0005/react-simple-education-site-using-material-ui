import { Card, CardActionArea, CardContent, CardMedia, Rating, Typography } from '@mui/material';
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import courses from './FakeCourseData'


const CourseDetails = (props) => {
    const { courseId } = useParams();

    const course = courses.filter(course => course.id.toString() === courseId)[0]

    return (
        <div>
            <h1>Course Details {course.name}</h1>
            <Card sx={{
                maxWidth: 345,
                margin: '30px',
                textAlign:'center'
            }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={course.image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {course.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span>
                                Name :<h2>{course.instructor}</h2>
                                Price :<h3>{course.price}</h3>
                                Discount : <h1>{course.discount}</h1>
                                SeatAvailable:<h5>{course.SeatAvailable}</h5>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    <Rating name="read-only" value={course.rating} readOnly />
                                    <NavLink to='/courses'>Back</NavLink>
                                </div>
                            </span>

                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default CourseDetails;