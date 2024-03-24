import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack, FormControl, FormLabel, Input, Radio, RadioGroup, Button, Box, Spinner, FormErrorMessage } from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { RegistrationFormData } from '../models/interfaces';

const inputStyle = {
    width: '350px',
    height: '60px',
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
const radioLabelStyle = {
    fontWeight: 'bold',
};

const RegistrationForm: React.FC = () => {
    const navigate = useNavigate();
    const initialValues: RegistrationFormData = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: '',
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
                firstName: Yup.string().required('First name is required'),
                lastName: Yup.string().required('Last name is required'),
                email: Yup.string().email('Invalid email address').required('Email is required'),
                password: Yup.string()
                    .min(8, 'Password must be at least 8 characters')
                    .required('Password is required'),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    .required('Confirmation of password is required'),

            })}
            onSubmit={async (values, { setSubmitting, setStatus, setFieldError }) => {
                setStatus('Processing')
                try {
                    const requestData = {
                        firstName: values.firstName,
                        lastName: values.lastName,
                        email: values.email,
                        password: values.password,
                        role: values.role
                    };
                    //console.log('Request Data:', requestData);
                    const response = await axios.post("https://ffprac-team2-back.onrender.com/api/v1/auth/register", requestData);
                    const { firstName, lastName, email, role, token } = response.data.user;

                    console.log(response.data.user);
                    localStorage.setItem('token', token);
                    const userData = { firstName, lastName, email, role };
                    localStorage.setItem('userData', JSON.stringify(userData));
                    navigate('/');
                } catch (error) {
                    console.error('Registration failed:', error);
                    setStatus('failed');
                    setFieldError('email', 'Registration failed. Please try again.');
                } finally {
                    setSubmitting(false);
                }
            }}
        >
            {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                    <Stack spacing={4}>
                        <FormControl isRequired isInvalid={!!(formik.errors.firstName && formik.touched.firstName)}>
                            <FormLabel htmlFor="firstName" style={labelStyle}>
                                First Name
                            </FormLabel>
                            <Field
                                as={Input}
                                type="text"
                                id="firstName"
                                name="firstName"
                                style={inputStyle}
                            />
                            {(formik.errors.firstName && formik.touched.firstName) && (
                                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl isRequired isInvalid={!!(formik.errors.lastName && formik.touched.lastName)}>
                            <FormLabel htmlFor="lastName" style={labelStyle}>
                                Last Name
                            </FormLabel>
                            <Field
                                as={Input}
                                type="text"
                                id="lastName"
                                name="lastName"
                                style={inputStyle}
                            />
                            {(formik.errors.lastName && formik.touched.lastName) && (
                                <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
                            )}
                        </FormControl>
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
                        <FormControl isRequired isInvalid={!!(formik.errors.confirmPassword && formik.touched.confirmPassword)}>
                            <FormLabel htmlFor="confirmPassword" style={labelStyle}>
                                Confirm Password
                            </FormLabel>
                            <Field
                                as={Input}
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                style={inputStyle}
                            />
                            {(formik.errors.confirmPassword && formik.touched.confirmPassword) && (
                                <FormErrorMessage>{formik.errors.confirmPassword}</FormErrorMessage>
                            )}
                        </FormControl>
                        <RadioGroup id="role" name="role" width="350px" value={formik.values.role} onChange={(value) => formik.setFieldValue('role', value)}>
                            <Stack direction="row" display="flex" alignItems="center">
                                <Radio value="parent" flex="1" bg="white" size="md">
                                    <span style={radioLabelStyle}>Parent</span>
                                </Radio>
                                <Radio value="tutor" flex="1" bg="white" size="md">
                                    <span style={radioLabelStyle}>Tutor</span>
                                </Radio>
                            </Stack>
                        </RadioGroup>
                        <Stack direction="row" spacing={4} display="flex" alignItems="center">
                            <Button
                                type="submit"
                                style={{ ...buttonStyle, backgroundColor: '#F4CD76', color: 'black' }}
                                flex="1"
                                disabled={formik.isSubmitting}
                            >
                                Register
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
                        {formik.isSubmitting && (
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


export default RegistrationForm;

