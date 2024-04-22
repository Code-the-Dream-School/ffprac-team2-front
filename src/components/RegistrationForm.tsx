import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Stack,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Radio,
    RadioGroup,
    Button,
    FormErrorMessage,
    Tooltip,
    useBreakpointValue,
    useToast,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { RegistrationFormData } from '../models/interfaces';
import { registrationValidationSchema } from '../validationSchemas';
import { useGlobal } from '../context/useGlobal';

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
    const { dispatch } = useGlobal();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

    const initialValues: RegistrationFormData = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: '',
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    const toast = useToast();

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={registrationValidationSchema}
            onSubmit={async (values, { setSubmitting, setStatus }) => {
                setIsLoading(true);
                try {
                    const requestData = {
                        firstName: values.firstName,
                        lastName: values.lastName,
                        email: values.email,
                        password: values.password,
                        role: values.role,
                    };
                    const response = await axios.post(
                        `${import.meta.env.VITE_REACT_URL}auth/register`,
                        requestData
                    );

                    const { firstName, lastName, email, role } = response.data.user;
                    const token = response.data.token;
                    localStorage.setItem('token', token);
                    const userData = { firstName, lastName, email, role };
                    localStorage.setItem('userData', JSON.stringify(userData));

                    const globalUser = {
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        role: role,
                        token: response.data.token,
                    };
                    dispatch({ type: 'SET_USER', payload: globalUser });
                    dispatch({ type: 'SET_IS_LOGGED_IN', payload: true });

                    if (role === 'parent') {
                        navigate('/parent-dashboard');
                    } else {
                        navigate('/tutor-profile');
                    }
                    // eslint-disable-next-line
                } catch (error: any) {
                    if (error?.response?.data?.msg) {
                        console.error(error);
                        toast({
                            title: 'Registration Error',
                            description: error.response.data.msg,
                            status: 'error',
                            isClosable: true,
                            position: 'top',
                        });
                    } else {
                        toast({
                            title: 'Registration Error',
                            description: 'Registration failed. Please try again.',
                            status: 'error',
                            isClosable: true,
                            position: 'top',
                        });
                    }
                    setStatus('failed');
                } finally {
                    setSubmitting(false);
                    setIsLoading(false);
                }
            }}
        >
            {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                    <Stack spacing={4} style={{ width: fieldLength }}>
                        <FormControl
                            isRequired
                            isInvalid={!!(formik.errors.firstName && formik.touched.firstName)}
                        >
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
                            {formik.errors.firstName && formik.touched.firstName && (
                                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl
                            isRequired
                            isInvalid={!!(formik.errors.lastName && formik.touched.lastName)}
                        >
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
                            {formik.errors.lastName && formik.touched.lastName && (
                                <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
                            )}
                        </FormControl>
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
                            <InputGroup>
                                <Field
                                    as={Input}
                                    pr="4.5rem"
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    style={inputStyle}
                                />
                                <InputRightElement width="4.5rem">
                                    <Button
                                        h="1.75rem"
                                        size="sm"
                                        fontSize="20px"
                                        onClick={togglePasswordVisibility}
                                        style={{ backgroundColor: 'transparent' }}
                                    >
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            {formik.errors.password && formik.touched.password && (
                                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl
                            isRequired
                            isInvalid={
                                !!(formik.errors.confirmPassword && formik.touched.confirmPassword)
                            }
                        >
                            <FormLabel htmlFor="confirmPassword" style={labelStyle}>
                                Confirm Password
                            </FormLabel>
                            <InputGroup>
                                <Field
                                    as={Input}
                                    pr="4.5rem"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    style={inputStyle}
                                />
                                <InputRightElement width="4.5rem">
                                    <Button
                                        h="1.75rem"
                                        size="sm"
                                        fontSize="20px"
                                        onClick={toggleConfirmPasswordVisibility}
                                        style={{ backgroundColor: 'transparent' }}
                                    >
                                        {showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                                <FormErrorMessage>{formik.errors.confirmPassword}</FormErrorMessage>
                            )}
                        </FormControl>
                        <RadioGroup
                            id="role"
                            name="role"
                            style={{ width: fieldLength }}
                            value={formik.values.role}
                            onChange={(value) => formik.setFieldValue('role', value)}
                        >
                            <Stack direction="row" display="flex" alignItems="center">
                                <Radio value="parent" flex="1" bg="white" size="md" marginLeft={2}>
                                    <span style={radioLabelStyle}>Parent</span>
                                </Radio>
                                <Radio value="tutor" flex="1" bg="white" size="md" marginLeft={4}>
                                    <span style={radioLabelStyle}>Tutor</span>
                                </Radio>
                            </Stack>
                        </RadioGroup>
                        <Stack
                            direction="row"
                            spacing={4}
                            display="flex"
                            alignItems="center"
                            marginTop={4}
                            marginBottom={4}
                        >
                            <Tooltip
                                label="Please fill out all fields and choose 'Parent' or 'Tutor' to complete registration."
                                openDelay={300}
                                hasArrow
                                isDisabled={formik.dirty && formik.isValid}
                                {...tooltipStyle}
                            >
                                <Button
                                    type="submit"
                                    style={{
                                        ...buttonStyle,
                                        width: buttonLength,
                                        backgroundColor: '#F4CD76',
                                        color: 'black',
                                    }}
                                    flex="1"
                                    isDisabled={!formik.dirty || !formik.isValid}
                                    isLoading={isLoading}
                                    loadingText="Registering..."
                                >
                                    Register
                                </Button>
                            </Tooltip>

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
                    </Stack>
                </Form>
            )}
        </Formik>
    );
};

export default RegistrationForm;
