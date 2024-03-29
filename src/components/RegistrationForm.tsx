import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack, FormControl, FormLabel, Input, Radio, RadioGroup, Button, Box, Spinner, FormErrorMessage, Tooltip, useBreakpointValue } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { RegistrationFormData } from '../models/interfaces';




const labelStyle = {
    fontSize: '14px',
    fontWeight: 'normal',
};
const radioLabelStyle = {
    fontWeight: 'bold',
};
const tooltipStyle = {
    bg: 'white',
    color: 'red.500',
    borderColor: 'red.500',
    borderWidth: '2px',
};

const RegistrationForm: React.FC = () => {
    const navigate = useNavigate();
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

    }

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
                firstName: Yup.string()
                    .required('Please provide your first name')
                    .min(2, 'First name must be at least 2 characters')
                    .max(20, 'First name should not be more than 20 characters'),

                lastName: Yup.string()
                    .required('Please provide your last name')
                    .max(20, 'Last name should not be more than 20 characters'),
                email: Yup.string()
                    .email('Please provide a valid email address')
                    .required('Please provide your email'),
                password: Yup.string()
                    .min(6, 'Password must be at least 6 characters')
                    .required('Please provide password')
                    .matches(
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/,
                        'Password must contain at least one lowercase letter, uppercase letter, number, and special character'
                    ),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    .required('Confirmation of password is required'),
                role: Yup.string().required('Please select a role'),

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
                    localStorage.setItem('token', token);
                    const userData = { firstName, lastName, email, role };
                    console.log(userData);
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
                <Form onSubmit={formik.handleSubmit} >
                    <Stack spacing={4} style={{width: fieldLength, height: fieldHeight}} >
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
                                <FormErrorMessage >{formik.errors.email}</FormErrorMessage>
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
                                <Radio value="parent" flex="1" bg="white" size="md" marginLeft={2}>
                                    <span style={radioLabelStyle}>Parent</span>
                                </Radio>
                                <Radio value="tutor" flex="1" bg="white" size="md" marginLeft={4}>
                                    <span style={radioLabelStyle}>Tutor</span>
                                </Radio>
                            </Stack>
                        </RadioGroup>
                        <Stack direction="row" spacing={4} display="flex" alignItems="center" marginTop={4} marginBottom={4}>

                            <Tooltip
                                label="Please fill out all fields and choose 'Parent' or 'Tutor' to complete registration."
                                openDelay={300}
                                hasArrow
                                isDisabled={formik.dirty && formik.isValid}

                                {...tooltipStyle}>
                                <Button
                                    type="submit"
                                    style={{ ...buttonStyle, width: buttonLength, backgroundColor: '#F4CD76', color: 'black' }}
                                    flex="1"
                                    isDisabled={!formik.dirty || !formik.isValid}
                                >
                                    Register
                                </Button>
                            </Tooltip>

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

