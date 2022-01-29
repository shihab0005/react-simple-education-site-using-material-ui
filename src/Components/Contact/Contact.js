import React from 'react';
import { FormGroup, TextField, MenuItem, Button } from '@mui/material';
import './Contact.css'
import SendIcon from '@mui/icons-material/Send';
const Contact = () => {
    const currencies = [
        {
            value: 'Javascript',
            label: 'javascript',
        },
        {
            value: 'ReactJs',
            label: 'ReactJs',
        },
        {
            value: 'Sql',
            label: 'SQL',
        },
        {
            value: 'C#',
            label: 'C#',
        },
        {
            value: 'Python',
            label: 'Python',
        },
        {
            value: 'Django',
            label: 'Django',
        },
        {
            value: 'Java',
            label: 'Java',
        },
    ];

    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <div>
            <h1 style={{
                textAlign: 'center',
                color: '#FA6621 '
            }}>Get In Tuch</h1>
            <FormGroup className="input_Container">
                <TextField
                    className="input_field"
                    id="outlined-basic"
                    label="Enter your Name"
                    variant="outlined"
                    fullWidth='false'
                    color='secondary'
                    size="small"
                />
                <TextField
                    className="input_field"
                    id="outlined-basic"
                    label="Enter your Email"
                    variant="outlined"
                    fullWidth='false'
                    color='secondary'
                    size="small"
                />
                <TextField
                    className="input_field"
                    id="outlined-basic"
                    label="Enter your Phone Number"
                    variant="outlined"
                    fullWidth='false'
                    color='secondary'
                    size="small"
                />
                <TextField
                    className="input_field"
                    id="outlined-basic"
                    label="Enter your Address"
                    variant="outlined"
                    fullWidth='false'
                    color='secondary'
                    size="small"
                />
                <TextField
                    className="input_field"
                    id="outlined-textarea"
                    label="Description"
                    placeholder="Placeholder"
                    multiline
                    size="small"
                />

                <TextField
                    className="input_field"
                    id="outlined-select-currency"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChange}
                    helperText="Please select Your Favourite Courses"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <Button variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
            </FormGroup>

        </div>
    );
};

export default Contact;