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
    useToast,
} from '@chakra-ui/react';
import { Field, Formik, FormikHelpers } from 'formik';
import React, { useState } from 'react';
import { Student, StudentRequest } from '../models/interfaces';
import axios from 'axios';
import { studentSchema } from '../validationSchemas';
import { getHeaders } from '../util';
import AlertPopUp from './AlertPopUp';
import UploadImage from './UploadImage';
import AppLoader from './AppLoader';
import { useGlobal } from '../context/useGlobal';
import { theme } from '../util/theme';

interface StudentFormProps {
    isOpenForm: boolean;
    onCloseForm: () => void;
    title: string;
    student: Student | null;
    setNeedUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

const StudentForm: React.FC<StudentFormProps> = ({
    isOpenForm,
    onCloseForm,
    title,
    student,
    setNeedUpdate,
}) => {
    const initialValues: StudentRequest = {
        name: student?.name || '',
        grade: student?.grade || '',
        image: student?.image || '',
    };
    const [selectedImage, setSelectedImage] = useState<Blob | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();
    const { dispatch } = useGlobal();

    const handleSubmit = async (values: StudentRequest, actions: FormikHelpers<StudentRequest>) => {
        let imageUrl;
        if (selectedImage) {
            const formData = new FormData();
            formData.append('image', selectedImage);
            try {
                setIsLoading(true);
                imageUrl = await axios.post(`${import.meta.env.VITE_REACT_URL}uploads`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                setIsLoading(false);
            } catch (error) {
                if (error instanceof Error) {
                    setIsLoading(false);
                    toast({
                        title: error.message,
                        status: 'error',
                        duration: 3000,
                        isClosable: true,
                        position: 'top',
                    });
                }
            }
        }

        const newStudent: StudentRequest = {
            name: values.name,
            grade: values.grade,
            image: imageUrl?.data.src,
        };
        try {
            let response;
            if (title === 'Add Student') {
                setIsLoading(true);
                response = await axios.post(
                    `${import.meta.env.VITE_REACT_URL}students`,
                    newStudent,
                    { headers: getHeaders() }
                );
                dispatch({ type: 'SET_STUDENTS', payload: response.data.student });
            } else {
                setIsLoading(true);
                response = await axios.patch(
                    `${import.meta.env.VITE_REACT_URL}students/${student?._id}`,
                    newStudent,
                    { headers: getHeaders() }
                );
                dispatch({ type: 'UPDATE_STUDENTS', payload: response.data.student });
            }
            actions.resetForm();
            onCloseForm();
            setSelectedImage(null);
            setIsLoading(false);

            toast({
                title: response?.data.msg,
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'top',
            });
            setNeedUpdate(true);
        } catch (error) {
            if (error instanceof Error) {
                setIsLoading(false);
                toast({
                    title: error.message,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    position: 'top',
                });
            }
        }
    };

    const deleteStudent = async () => {
        try {
            setIsLoading(true);
            const response = await axios.delete(
                `${import.meta.env.VITE_REACT_URL}students/${student?._id}`,
                { headers: getHeaders() }
            );

            onCloseForm();
            toast({
                title: response?.data.msg,
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'top',
            });
            setNeedUpdate(true);
            setIsLoading(false);
        } catch (error) {
            if (error instanceof Error) {
                setIsLoading(false);
                toast({
                    title: error.message,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    position: 'top',
                });
            }
        }
    };

    return (
        <>
            {isOpenForm && (
                <Modal
                    isOpen={isOpenForm}
                    onClose={() => {
                        setSelectedImage(null);
                        onCloseForm();
                    }}
                    size="lg"
                    isCentered
                >
                    <ModalOverlay />
                    <Formik
                        onSubmit={handleSubmit}
                        validationSchema={studentSchema}
                        initialValues={initialValues}
                    >
                        {(formik) => (
                            <ModalContent backgroundColor="#E7E0D6">
                                <form onSubmit={formik.handleSubmit}>
                                    <ModalHeader>{title}</ModalHeader>
                                    {isLoading && <AppLoader />}
                                    <ModalCloseButton />
                                    <ModalBody pb={6}>
                                        <UploadImage
                                            selectedImage={selectedImage}
                                            setSelectedImage={setSelectedImage}
                                            profileImage={student?.image}
                                        />
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
                                        <Button
                                            bg={theme.dashboardButtons.buttonYellow.bg}
                                            fontSize={theme.dashboardButtons.fontSize}
                                            fontWeight={theme.dashboardButtons.fontWeight}
                                            mr={3}
                                            type="submit"
                                            isDisabled={
                                                title === 'Add Student'
                                                    ? !formik.dirty || !formik.isValid || isLoading
                                                    : !selectedImage || !formik.isValid || isLoading
                                            }
                                        >
                                            Save
                                        </Button>
                                        <Button
                                            fontSize={theme.dashboardButtons.fontSize}
                                            fontWeight={theme.dashboardButtons.fontWeight}
                                            bg={theme.dashboardButtons.buttonTeal.bg}
                                            mr={3}
                                            onClick={() => {
                                                setSelectedImage(null);
                                                onCloseForm();
                                            }}
                                        >
                                            Cancel
                                        </Button>
                                        {student && (
                                            <AlertPopUp
                                                title="Delete Student"
                                                bgColor="#E7E0D6"
                                                onClick={deleteStudent}
                                            />
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
