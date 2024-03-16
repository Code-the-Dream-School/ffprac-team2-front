import React from 'react';
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
const LoginForm: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Login logic
    };

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
                <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input type="email" id="email" name="email" style={inputStyle} />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="password">Password</FormLabel>
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
                    >
                        Cancel
                    </Button>
                </Stack>

            </Stack>
        </form>
    );
};

export default LoginForm;