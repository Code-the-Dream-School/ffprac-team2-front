import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Stack,
    FormControl,
    FormLabel,
    Input,
    Button
} from '@chakra-ui/react';

const inputStyle = {
    width: '350px',
    height: '50px',
    backgroundColor: 'white',
};

const buttonStyle = {
    width: '150px',
    height: '50px',
};

const labelStyle = {
    fontSize: '14px', 
    fontWeight: 'normal', 
};

const LoginForm: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Login logic
        //After successful login, navigate to another page,   
        navigate('/parent-dashboard');
    };

    const handleCancel = () => {
        // Redirect to main page on cancel
        navigate('/');
    };

    
    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
                <FormControl>
                    <FormLabel htmlFor="email" style={labelStyle}>Email</FormLabel>
                    <Input type="email" id="email" name="email" style={inputStyle} />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="password" style={labelStyle}>Password</FormLabel>
                    <Input type="password" id="password" name="password" style={inputStyle} />
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