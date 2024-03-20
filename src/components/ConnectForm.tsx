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
    useDisclosure,
} from '@chakra-ui/react';
import { Field, Formik, FormikHelpers } from 'formik';
import { TutorConnectionRequest } from '../models/interfaces';
import { connectSchema } from '../validationSchemas';

const ConnectForm: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleSubmit = async (
        values: TutorConnectionRequest,
        actions: FormikHelpers<TutorConnectionRequest>
    ) => {
        const connectionData = {
            studentId: values.studentId,
            // tutorId: values.tutorId,
            subjects: values.subjects,
            grade: values.grade,
        };

        try {
            console.log(values);
            console.log(connectionData);
            actions.resetForm();
            onClose();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <>
            <Button onClick={onOpen}>Connect with me</Button>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <Formik
                    onSubmit={handleSubmit}
                    validationSchema={connectSchema}
                    initialValues={{
                        studentId: '',
                        subjects: {
                            math: '',
                            english: '',
                            science: '',
                            socialStudies: '',
                            foringLanguage: '',
                        },
                        grade: '',
                    }}
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
                                            <option value="Child1">Child1</option>
                                            <option value="Child2">Child2</option>
                                            <option value="Child3">Child3</option>
                                        </Field>
                                        {formik.errors.studentId && formik.touched.studentId && (
                                            <FormErrorMessage>
                                                {formik.errors.studentId}
                                            </FormErrorMessage>
                                        )}
                                    </FormControl>
                                    <Text fontWeight="600" mt="2rem">
                                        In wihich subject do you need tutoring?
                                    </Text>
                                    <FormControl
                                        mt={4}
                                        isRequired
                                        isInvalid={!!(formik.errors.grade && formik.touched.grade)}
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
                                    <FormControl
                                        mt={4}
                                        isRequired
                                        isInvalid={
                                            !!(formik.errors.subjects && formik.touched.subjects)
                                        }
                                    >
                                        <FormLabel>Select Math</FormLabel>
                                        <Field
                                            as={Select}
                                            placeholder="Select option"
                                            backgroundColor="white"
                                            name="subjects.math"
                                        >
                                            <option value="Math">Math</option>
                                            <option value="Algebra">Algebra</option>
                                            <option value="Geometry">Geometry</option>
                                            <option value="Trigonometry">Trigonometry</option>
                                            <option value="Calculus">Calculus</option>
                                            <option value="Statistics">Statistics</option>
                                            <option value="Pre-Calculus">Pre-Calculus</option>
                                            <option value="SAT Math Test Prep">
                                                SAT Math Test Prep
                                            </option>
                                        </Field>
                                    </FormControl>
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
