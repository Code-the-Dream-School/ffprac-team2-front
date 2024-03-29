/* eslint-disable indent */
import React from 'react';
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Text,
} from '@chakra-ui/react';
import { Field, Formik, FormikHelpers } from 'formik';
import { Tutor, TutorConnectionRequest } from '../models/interfaces';
import { connectSchema } from '../validationSchemas';
import axios from 'axios';
import { headers } from '../util';
import useStateContext from '../context/GlobalStateContext ';

interface ConnectFormProps {
    isOpen: boolean;
    onClose: () => void;
    tutor: Tutor;
}

interface InitialValues {
    studentId: string;
    grade: string;
    subjects: {
        math: string;
        english: string;
        science: string;
        socialStudies: string;
        foringLanguage: string;
    };
}

const initialValues: InitialValues = {
    studentId: '',
    subjects: {
        math: '',
        english: '',
        science: '',
        socialStudies: '',
        foringLanguage: '',
    },
    grade: '',
};

const ConnectForm: React.FC<ConnectFormProps> = ({ isOpen, onClose, tutor }) => {
    const { students } = useStateContext();
    console.log(students);

    const fieldsToDisplay: (keyof Tutor)[] = [
        'MathSubject',
        'ForeignLanguages',
        'English',
        'SocialStudies',
        'Science',
    ];

    const handleSubmit = async (
        values: TutorConnectionRequest,
        actions: FormikHelpers<TutorConnectionRequest>
    ) => {
        const connectionData = {
            studentId: values.studentId,
            tutorId: tutor._id,
            subjects: values.subjects,
            grade: values.grade,
        };
        console.log(connectionData);

        try {
            const response = await axios.patch(
                `${import.meta.env.VITE_REACT_URL}students/${values.studentId}`,
                connectionData,
                { headers }
            );
            const studentData = response?.data;
            console.log(values);
            console.log(studentData);
            actions.resetForm();
            onClose();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <Formik
                    onSubmit={handleSubmit}
                    validationSchema={connectSchema}
                    initialValues={initialValues}
                >
                    {(formik) => (
                        <ModalContent backgroundColor="#E7E0D6">
                            <form onSubmit={formik.handleSubmit}>
                                <ModalHeader></ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6}>
                                    <FormControl
                                        mt={4}
                                        isRequired
                                        isInvalid={
                                            !!(formik.errors.studentId && formik.touched.studentId)
                                        }
                                    >
                                        <FormLabel>Which student needs help?</FormLabel>
                                        <Field
                                            as={Select}
                                            placeholder="Select option"
                                            backgroundColor="white"
                                            name="studentId"
                                        >
                                            {students.map((student) => {
                                                <option value={student._id}>{student.name}</option>;
                                            })}
                                        </Field>
                                        {formik.errors.studentId && formik.touched.studentId && (
                                            <FormErrorMessage>
                                                {formik.errors.studentId}
                                            </FormErrorMessage>
                                        )}
                                    </FormControl>
                                    <Text fontSize="16px" fontWeight="500" mt="2rem">
                                        In wihich subject do you need tutoring?
                                    </Text>
                                    <FormControl
                                        mt={4}
                                        isRequired
                                        isInvalid={!!(formik.errors.grade && formik.touched.grade)}
                                    >
                                        <FormLabel fontSize="14px" fontWeight="400">
                                            Grade
                                        </FormLabel>
                                        <Field
                                            as={Select}
                                            placeholder="Select option"
                                            backgroundColor="white"
                                            name="grade"
                                        >
                                            <option value="K">K</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </Field>
                                        {formik.errors.grade && formik.touched.grade && (
                                            <FormErrorMessage>
                                                {formik.errors.grade}
                                            </FormErrorMessage>
                                        )}
                                    </FormControl>
                                    {fieldsToDisplay.map((field) => {
                                        const fieldValue = tutor[field];
                                        if (Array.isArray(fieldValue) && fieldValue.length > 0) {
                                            return (
                                                <FormControl key={field} mt={4}>
                                                    <FormLabel fontSize="14px" fontWeight="400">
                                                        {field}
                                                    </FormLabel>
                                                    <Field
                                                        as={Select}
                                                        placeholder={`Select ${field}`}
                                                        backgroundColor="white"
                                                        name={`subjects.${field}`}
                                                    >
                                                        {fieldValue.map((option: string) => (
                                                            <option key={option} value={option}>
                                                                {option}
                                                            </option>
                                                        ))}
                                                    </Field>
                                                </FormControl>
                                            );
                                        }
                                        return null;
                                    })}
                                </ModalBody>

                                <ModalFooter>
                                    <Button type="submit" colorScheme="blue" mr={3}>
                                        Connect
                                    </Button>
                                    <Button onClick={onClose}>Cancel</Button>
                                </ModalFooter>
                            </form>
                        </ModalContent>
                    )}
                </Formik>
            </Modal>
        </>
    );
};

export default ConnectForm;
