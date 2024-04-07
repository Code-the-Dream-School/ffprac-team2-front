import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import {
    Stack,
    FormControl,
    FormLabel,
    Input,
    Button,
    FormErrorMessage,
    Box,
    Spinner,
    useBreakpointValue,
} from '@chakra-ui/react';
import { LoginData } from '../models/interfaces';
import { loginValidationSchema } from '../validationSchemas';
import { useGlobal } from '../context/useGlobal';

const labelStyle = {
    fontSize: '14px',
    fontWeight: 'normal',
};

const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    const { dispatch } = useGlobal();
    const fieldLength = useBreakpointValue({ base: '300px', md: '350px' });
    const fieldHeight = useBreakpointValue({ base: '40px', md: '50px' });
    const inputStyle = {
        width: fieldLength,
        height: fieldHeight,
        backgroundColor: 'white',
    };

    const buttonLength = useBreakpointValue({ base: '120px', md: '150px' });
    const buttonHeight = useBreakpointValue({ base: '40px', md: '50px' });
    const buttonStyle = {
        width: buttonLength,
        height: buttonHeight,
        fontWeight: 'bold',
    };

    const initialValues: LoginData = { email: '', password: '' };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={loginValidationSchema}
            onSubmit={async (values, { setSubmitting, setStatus, setFieldError }) => {
                setStatus('Submitting');

                try {
                    const response = await axios.post(
                        `${import.meta.env.VITE_REACT_URL}auth/login`,
                        values
                    );
                    const token = response.data.token;
                    localStorage.setItem('token', token);
                    const { firstName, lastName, email, role } = response.data.user;
                    const userData = { firstName, lastName, email, role };
                    localStorage.setItem('userData', JSON.stringify(userData));

                    const globalUser = {
                        firstName: response.data.user.firstName,
                        lastName: response.data.user.lastName,
                        email: response.data.user.email,
                        role: response.data.user.role,
                        token: response.data.token,
                    };
                    dispatch({ type: 'SET_USER', payload: globalUser });
                    dispatch({ type: 'SET_IS_LOGGED_IN', payload: true });

                    if (role === 'parent') {
                        navigate('/parent-dashboard');
                    } else {
                        navigate('/tutorsearch');
                    }
                } catch (error) {
                    console.error('Login failed:', error);
                    setStatus('failed');
                    setFieldError('password', 'Invalid email or password. Please try again.');
                }
                setSubmitting(false);
            }}
        >
            {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                    <Stack spacing={4} style={{ width: fieldLength }}>
                        <FormControl
                            isRequired
                            isInvalid={!!(formik.errors.email && formik.touched.email)}
                        >
                            <FormLabel htmlFor="email" style={labelStyle}>
                                Email
                            </FormLabel>
                            <Field
                                as={Input}
                                type="email"
                                id="email"
                                name="email"
                                style={inputStyle}
                            />
                            {formik.errors.email && formik.touched.email && (
                                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl
                            isRequired
                            isInvalid={!!(formik.errors.password && formik.touched.password)}
                        >
                            <FormLabel htmlFor="password" style={labelStyle}>
                                Password
                            </FormLabel>
                            <Field
                                as={Input}
                                type="password"
                                id="password"
                                name="password"
                                style={inputStyle}
                            />
                            {formik.errors.password && formik.touched.password && (
                                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                            )}
                        </FormControl>
                        <Stack
                            direction="row"
                            spacing={4}
                            display="flex"
                            alignItems="center"
                            marginTop={4}
                            marginBottom={4}
                        >
                            <Button
                                type="submit"
                                style={{
                                    ...buttonStyle,
                                    backgroundColor: '#F4CD76',
                                    color: 'black',
                                }}
                                flex="1"
                            >
                                Login
                            </Button>
                            <Button
                                type="button"
                                style={{
                                    ...buttonStyle,
                                    backgroundColor: '#59D3C8',
                                    color: 'black',
                                }}
                                flex="1"
                                onClick={() => navigate('/')}
                            >
                                Cancel
                            </Button>
                        </Stack>
                        {formik.status === 'Submitting' && (
                            <Box textAlign="center">
                                <Spinner size="sm" />
                            </Box>
                        )}
                    </Stack>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;
