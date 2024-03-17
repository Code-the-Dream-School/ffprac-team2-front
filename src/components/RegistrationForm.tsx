import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Stack,
    FormControl,
    FormLabel,
    Input,
    Radio,
    RadioGroup,
    Button
} from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';



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
const radioLabelStyle = {
    fontWeight: 'bold',
};


const RegistrationForm: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Registration logic
        //For testing purpose:
        navigate('/parent-dashboard');
    };
    const handleCancel = () => {
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={4} >
                <FormControl>
                    <FormLabel htmlFor="firstName" style={labelStyle}>First Name</FormLabel>
                    <Input type="text" id="firstName" name="firstName" style={inputStyle} />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="lastName" style={labelStyle}>Last Name</FormLabel>
                    <Input type="text" id="lastName" name="lastName" style={inputStyle} />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="password" style={labelStyle}>Password</FormLabel>
                    <Input id="password" name="password" type="password" style={inputStyle} />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="confirmPassword" style={labelStyle}>Confirm Password</FormLabel>
                    <Input id="confirmPassword" name="confirmPassword" type="password" style={inputStyle} />
                </FormControl>
                <RadioGroup id="role" name="role" width='22em'>
                    <Stack direction="row" display="flex" alignItems="center">
                        <Radio value="parent" flex="1" bg="white" size='md'>
                           <span style={radioLabelStyle}>Parent</span>
                            </Radio>
                        <Radio value="tutor" flex="1" bg="white" size='md'>
                           <span style={radioLabelStyle}>Tutor</span>
                            </Radio>
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
                        onClick={handleCancel}

                    >
                        Cancel
                    </Button>
                </Stack>
            </Stack>
        </form>
    );
};

export default RegistrationForm;