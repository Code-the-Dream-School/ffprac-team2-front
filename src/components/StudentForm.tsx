import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
} from '@chakra-ui/react';
import { Field, Formik, FormikHelpers } from 'formik';
import React from 'react';
import { Student, StudentRequest } from '../models/interfaces';
import axios from 'axios';
import { studentSchema } from '../validationSchemas';
import { headers } from '../util';
import { DeleteIcon } from '@chakra-ui/icons';

interface StudentFormProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    student: Student | null;
    setNeedUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

const StudentForm: React.FC<StudentFormProps> = ({
    isOpen,
    onClose,
    title,
    student,
    setNeedUpdate,
}) => {
    const handleSubmit = async (values: StudentRequest, actions: FormikHelpers<StudentRequest>) => {
        const newStudent: StudentRequest = {
            name: values.name,
            grade: values.grade,
        };
        try {
            let response;
            if (title === 'Add Student') {
                response = await axios.post(
                    `${import.meta.env.VITE_REACT_URL}students`,
                    newStudent,
                    { headers }
                );
            } else {
                response = await axios.patch(
                    `${import.meta.env.VITE_REACT_URL}students/${student?._id}`,
                    newStudent,
                    { headers }
                );
            }
            const studentData = response?.data;
            console.log(studentData);
            actions.resetForm();
            onClose();
            setNeedUpdate(true);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const deleteStudent = async () => {
        try {
            await axios.delete(`${import.meta.env.VITE_REACT_URL}students/${student?._id}`, {
                headers,
            });
            onClose();
            setNeedUpdate(true);
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <>
            {isOpen && (
                <Modal isOpen={isOpen} onClose={onClose} size="lg">
                    <ModalOverlay />
                    <Formik
                        onSubmit={handleSubmit}
                        validationSchema={studentSchema}
                        initialValues={{
                            name: student?.name || '',
                            grade: student?.grade || '',
                        }}
                    >
                        {(formik) => (
                            <ModalContent backgroundColor="#E7E0D6">
                                <form onSubmit={formik.handleSubmit}>
                                    <ModalHeader>{title}</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody pb={6}>
                                        <FormControl
                                            isRequired
                                            isInvalid={
                                                !!(formik.errors.name && formik.touched.name)
                                            }
                                        >
                                            <FormLabel>Name</FormLabel>
                                            <Field
                                                as={Input}
                                                placeholder="Name"
                                                backgroundColor="white"
                                                name="name"
                                            />
                                            {formik.errors.name && formik.touched.name && (
                                                <FormErrorMessage>
                                                    {formik.errors.name}
                                                </FormErrorMessage>
                                            )}
                                        </FormControl>

                                        <FormControl
                                            mt={4}
                                            isRequired
                                            isInvalid={
                                                !!(formik.errors.grade && formik.touched.grade)
                                            }
                                        >
                                            <FormLabel>Grade</FormLabel>
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
                                    </ModalBody>

                                    <ModalFooter>
                                        <Button colorScheme="yellow" mr={3} type="submit">
                                            Save
                                        </Button>
                                        <Button backgroundColor="#59D3C8" mr={3} onClick={onClose}>
                                            Cancel
                                        </Button>
                                        {student && (
                                            <Button
                                                // backgroundColor="#59D3C8"
                                                onClick={deleteStudent}
                                            >
                                                <DeleteIcon />
                                            </Button>
                                        )}
                                    </ModalFooter>
                                </form>
                            </ModalContent>
                        )}
                    </Formik>
                </Modal>
            )}
        </>
    );
};

export default StudentForm;
