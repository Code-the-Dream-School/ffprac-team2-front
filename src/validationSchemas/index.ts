import * as yup from 'yup';

export const studentSchema = yup.object().shape({
    name: yup
        .string()
        .min(3, 'Username must be at least 3 characters long')
        .max(50, 'Username cannot exceed 50 characters')
        .required('Required'),
    grade: yup
        .string()
        .oneOf(['K', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'])
        .required('Please select a grade'),
});

export const registrationValidationSchema = yup.object().shape({
    firstName: yup
        .string()
        .required('Please provide your first name')
        .min(2, 'First name must be at least 2 characters')
        .max(20, 'First name should not be more than 20 characters'),

    lastName: yup
        .string()
        .required('Please provide your last name')
        .max(20, 'Last name should not be more than 20 characters'),

    email: yup
        .string()
        .email('Please provide a valid email address')
        .required('Please provide your email'),

    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .required('Please provide password')
        .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/,
            'Password must contain at least one lowercase letter, uppercase letter, number, and special character'
        ),

    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirmation of password is required'),

    role: yup.string().required('Please select a role'),
});
