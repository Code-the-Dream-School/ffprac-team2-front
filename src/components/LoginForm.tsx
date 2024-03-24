import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
    Stack, FormControl, FormLabel, Input, Button, FormErrorMessage, Flex, Box, Spinner
} from '@chakra-ui/react';
import { LoginData } from '../models/interfaces';

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
    const initialValues: LoginData = { email: '', password: '' };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Email is required'),
                password: Yup.string().required('Password is required'),
            })}

            onSubmit={async (values, { setSubmitting, setStatus, setFieldError }) => {
                setStatus('Submitting')

                try {

                    // Submit the form data
                    const response = await axios.post('https://ffprac-team2-back.onrender.com/api/v1/auth/login', values);
                    const { role, token } = response.data.user;
                    console.log(response.data.user);
                    localStorage.setItem('token', token);
                    localStorage.setItem('role', role);
                    navigate('/');
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
                    <Stack spacing={4}>
                        <FormControl isRequired isInvalid={!!(formik.errors.email && formik.touched.email)}>
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
                            {(formik.errors.email && formik.touched.email) && (
                                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl isRequired isInvalid={!!(formik.errors.password && formik.touched.password)}>
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
                            {(formik.errors.password && formik.touched.password) && (
                                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                            )}
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
        </Formik >
    );
};


export default LoginForm;
