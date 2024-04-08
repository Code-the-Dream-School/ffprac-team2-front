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
    image: yup.string(),
    // yup
    //     .mixed()
    //     .test(
    //         'fileTypeAndSize',
    //         'Please upload an image in .jpeg or .png format and no large than 10Mb',
    //         (value) => {
    //             try {
    //                 if (!(value instanceof File)) {
    //                     return false;
    //                 }
    //                 if (!['image/jpeg', 'image/png'].includes(value.type)) {
    //                     return false;
    //                 }
    //                 if (value.size > 1024 * 1024 * 10) {
    //                     return false;
    //                 }
    //                 return true;
    //                 // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //             } catch (error: any) {
    //                 return error.message;
    //             }
    //         }
    //     ),
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
        .oneOf([yup.ref('password'), undefined], 'Passwords must match')
        .required('Confirmation of password is required'),

    role: yup.string().required('Please select a role'),
});

export const connectSchema = yup.object().shape({
    studentId: yup.string().required('Please select a student'),
    subject: yup.string().required('Please select a subject'),
    availability: yup
        .string()
        .oneOf(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
        .required('Please select a day'),
});
export const tutorValidationSchema = yup.object().shape({
    about: yup.string(),
    grades: yup.array(
        yup.string().oneOf(['K', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'])
    ),
    availability: yup.array(
        yup
            .string()
            .oneOf(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
    ),
    education: yup.string(),
    yearsOfExperience: yup.number().min(1).max(50),

    avatar: yup.string(),
    MathSubject: yup.array(
        yup
            .string()
            .oneOf([
                'Math',
                'Algebra',
                'Geometry',
                'Trigonometry',
                'Calculus',
                'Statistics',
                'Pre-Calculus',
                'SAT Math Test Prep',
                'ACT Math Test Prep',
            ])
    ),
    ForeignLanguages: yup.array(
        yup.string().oneOf(['Spanish', 'French', 'Chineese', 'German', 'Latin'])
    ),
    English: yup.array(
        yup
            .string()
            .oneOf([
                'Writing',
                'Reading',
                'ESL',
                'Poetry',
                'Literacy',
                'ACT English Test Prep',
                'ACT Reading Test Prep',
                'ACT Writing Test Prep',
            ])
    ),
    SocialStudies: yup.array(
        yup
            .string()
            .oneOf([
                'World History',
                'Psychology',
                'US Government',
                'Social Science',
                'US History',
                'Political Science',
                'Geography',
                'European History',
            ])
    ),
    Science: yup.array(
        yup
            .string()
            .oneOf([
                'Biology',
                'Chemistry',
                'Earth Science',
                'Physics',
                'Science',
                'ACT Science Test Prep',
            ])
    ),
});

export const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Invalid email address')
        .required('Please enter the email address you provided during registration'),
    password: yup.string().required('Password is required'),
});
