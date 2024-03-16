import React from 'react';
import {
    Stack,
    FormControl,
    FormLabel,
    Input,
    Radio,
    RadioGroup,
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

const RegistrationForm: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Registration logic
    };

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={4} >
                <FormControl>
                    <FormLabel htmlFor="firstName">First Name</FormLabel>
                    <Input type="text" id="firstName" name="firstName" style={inputStyle} />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="lastName">Last Name</FormLabel>
                    <Input type="text" id="lastName" name="lastName" style={inputStyle} />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input id="password" name="password" type="password" style={inputStyle} />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
                    <Input id="confirmPassword" name="confirmPassword" type="password" style={inputStyle} />
                </FormControl>
                <RadioGroup id="role" name="role" width='350px'>
                    <Stack direction="row" display="flex" alignItems="center">
                        <Radio value="parent" flex="1">Parent</Radio>
                        <Radio value="tutor" flex="1">Tutor</Radio>
                    </Stack>
                </RadioGroup>
                <Stack direction="row" spacing={4} display="flex" alignItems="center">
                    <Button
                        type="submit"
                        style={{ ...buttonStyle, backgroundColor: '#F4CD76', color: 'black' }}
                        flex="1"

                    >
                        Register
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

export default RegistrationForm;