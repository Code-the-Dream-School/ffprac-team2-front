import {
    Button,
    Flex,
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
    Spinner,
} from '@chakra-ui/react';
import { Field, Formik, FormikHelpers } from 'formik';
import React, { useState } from 'react';
import { Student, StudentRequest } from '../models/interfaces';
import axios from 'axios';
import { studentSchema } from '../validationSchemas';
import { headers } from '../util';
import AlertPopUp from './AlertPopUp';
import UploadImage from './UploadImage';

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

    const handleSubmit = async (values: StudentRequest, actions: FormikHelpers<StudentRequest>) => {
        setIsLoading(true);
        let imageUrl;
        if (selectedImage) {
            const formData = new FormData();
            formData.append('image', selectedImage);
            imageUrl = await axios.post(`${import.meta.env.VITE_REACT_URL}uploads`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        }

        console.log(imageUrl);
        const newStudent: StudentRequest = {
            name: values.name,
            grade: values.grade,
            image: imageUrl?.data.src,
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
            onCloseForm();
            setSelectedImage(null);
            setIsLoading(false);
            setNeedUpdate(true);
        } catch (error) {
            setIsLoading(false);
            console.error('Error submitting form:', error);
        }
    };

    const deleteStudent = async () => {
        try {
            setIsLoading(true);
            await axios.delete(`${import.meta.env.VITE_REACT_URL}students/${student?._id}`, {
                headers,
            });
            onCloseForm();
            setNeedUpdate(true);
            setIsLoading(false);
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <>
            {isOpenForm && (
                <Modal isOpen={isOpenForm} onClose={onCloseForm} size="lg" isCentered>
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
                                    {isLoading && (
                                        <Flex justifyContent="center" alignItems="center">
                                            <Spinner
                                                thickness="4px"
                                                speed="0.65s"
                                                emptyColor="gray.200"
                                                color="#59D3C8"
                                                size="xl"
                                            />
                                        </Flex>
                                    )}
                                    <ModalCloseButton />
                                    <ModalBody pb={6}>
                                        <UploadImage
                                            selectedImage={selectedImage}
                                            setSelectedImage={setSelectedImage}
                                            studentImage={student?.image}
                                        />
                                        {/* <FormControl
                                            mt={4}
                                            isRequired
                                            isInvalid={
                                                !!(formik.errors.image && formik.touched.image)
                                            }
                                        >
                                            <FormLabel>Image</FormLabel>
                                            <Input
                                                type="file"
                                                onChange={(event) => {
                                                    const file =
                                                        event.target.files && event.target.files[0];
                                                    if (file) {
                                                        formik.setFieldValue('image', file);
                                                        console.log(file);
                                                    }
                                                }}
                                            />
                                            {formik.errors.image && formik.touched.image && (
                                                <FormErrorMessage>
                                                    {formik.errors.image}
                                                </FormErrorMessage>
                                            )}
                                        </FormControl> */}
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
                                        <Button
                                            backgroundColor="#59D3C8"
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
