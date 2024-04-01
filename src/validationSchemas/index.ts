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
    image: yup
        .mixed()
        .test(
            'fileTypeAndSize',
            'Please upload an image in .jpeg or .png format and no large than 10Mb',
            (value) => {
                try {
                    if (!(value instanceof File)) {
                        return false;
                    }
                    if (!['image/jpeg', 'image/png'].includes(value.type)) {
                        return false;
                    }
                    if (value.size > 1024 * 1024 * 10) {
                        return false;
                    }
                    return true;
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } catch (error: any) {
                    return error.message;
                }
            }
        )
        .required('Please upload an image'),
});

export const connectSchema = yup.object().shape({
    studentId: yup.string().required('Please select a student'),
    subject: yup.string().required('Please select a subject'),
    availability: yup
        .string()
        .oneOf(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
        .required('Please select a day'),
});
