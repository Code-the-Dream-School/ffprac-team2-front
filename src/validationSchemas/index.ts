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
