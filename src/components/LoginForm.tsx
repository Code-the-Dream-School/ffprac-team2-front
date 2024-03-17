import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Stack, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { LoginData } from '../models/interfaces';

const inputStyle = {
    width: '22em',
    height: '3em',
    backgroundColor: 'white',
};

const buttonStyle = {
    width: '9em',
    height: '3em',
};

const labelStyle = {
    fontSize: '14px',
    fontWeight: 'normal',
};

const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<LoginData>({ email: '', password: '' });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/login', formData);
            // Handle successful login
            console.log('Login successful', response);
            navigate('/parent-dashboard'); // this is just for test
        } catch (error) {
            // Handle login error
            console.error('Login failed:', error);
        }
    };

    const handleCancel = () => {
        // Redirect to main page on cancel
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
                <FormControl isRequired>
                    <FormLabel htmlFor="email" style={labelStyle}>
                        Email
                    </FormLabel>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        style={inputStyle}
                        value={formData.email}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor="password" style={labelStyle}>
                        Password
                    </FormLabel>
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        style={inputStyle}
                        value={formData.password}
                        onChange={handleChange}
                    />
                </FormControl>
                <Stack direction="row" spacing={4} display="flex" alignItems="center">
                    <Button
                        type="submit"
                        style={{ ...buttonStyle, backgroundColor: '#F4CD76', color: 'black' }}
                        flex="1"
                    >
                        Login
                    </Button>
                    <Button
                        type="button"
                        style={{ ...buttonStyle, backgroundColor: '#59D3C8', color: 'black' }}
                        flex="1"
                        onClick={handleCancel}
                    >
                        Cancel
                    </Button>
                </Stack>
            </Stack>
        </form>
    );
};

export default LoginForm;
