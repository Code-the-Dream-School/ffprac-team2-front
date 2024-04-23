import React, { useState, useEffect } from 'react';
import { Formik, Field, FieldProps } from 'formik';
import { tutorValidationSchema } from '../validationSchemas';
import {
    Box,
    Button,
    SimpleGrid,
    HStack,
    Spacer,
    Grid,
    Input,
    VStack,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Textarea,
    useToast,
    useDisclosure,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    Modal,
} from '@chakra-ui/react';
import { MultiSelect, Option, useMultiSelect } from 'chakra-multiselect';
import { TutorRequest } from '../models/interfaces.ts';
import axios, { AxiosError } from 'axios';
import { theme } from '../util/theme.ts';
import { getHeaders } from '../util';
import UploadImage from '../components/UploadImage.tsx';
import { useGlobal } from '../context/useGlobal.tsx';
import { useNavigate } from 'react-router-dom';
const TutorProfilePage: React.FC = () => {
    const { firstName, lastName, email } = JSON.parse(localStorage.getItem('userData') ?? '{}');
    const [selectedImage, setSelectedImage] = useState<Blob | null>(null);
    const { tutor, dispatch } = useGlobal();
    const [isEditing, setIsEditing] = useState(tutor ? false : true);
    const [isLoading, setIsLoading] = useState(false);
    const [ModalActionMessage, setModalActionMessage] = useState('Loading data');
    const toast = useToast();
    const Overlay = () => (
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) hue-rotate(90deg)" />
    );

    const { isOpen, onOpen, onClose } = useDisclosure();

    const navigate = useNavigate();

    const [initialValues, setInitialValues] = useState<TutorRequest>({
        grades: tutor?.grades || [],
        about: tutor?.about || '',
        education: tutor?.education || '',
        avatar: tutor?.avatar || '',
        availability: tutor?.availability || [],
        MathSubject: tutor?.MathSubject || [],
        ForeignLanguages: tutor?.ForeignLanguages || [],
        English: tutor?.English || [],
        SocialStudies: tutor?.SocialStudies || [],
        Science: tutor?.Science || [],
        yearsOfExperience: tutor?.yearsOfExperience || 1,
    });
    const tutorData: TutorRequest = {
        //MOCK DATA FOR A MEANWHILE//
        availability: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
        ],
        about: '',
        grades: ['K', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        avatar: '',
        education: '',
        yearsOfExperience: 1,
        MathSubject: [
            'Math',
            'Algebra',
            'Geometry',
            'Trigonometry',
            'Calculus',
            'Statistics',
            'Pre-Calculus',
            'SAT Math Test Prep',
            'ACT Math Test Prep',
        ],
        ForeignLanguages: ['Spanish', 'French', 'Chinese', 'German', 'Latin'],
        English: [
            'Writing',
            'Reading',
            'ESL',
            'Poetry',
            'Literacy',
            'ACT English Test Prep',
            'ACT Reading Test Prep',
            'ACT Writing Test Prep',
        ],
        SocialStudies: [
            'World History',
            'Psychology',
            'US Government',
            'Social Science',
            'US History',
            'Political Science',
            'Geography',
            'European History',
        ],
        Science: [
            'Biology',
            'Chemistry',
            'Earth Science',
            'Physics',
            'Science',
            'ACT Science Test Prep',
        ],
    };
    //populating mathSubjectOptions for using in Multiselect Component
    const mathSubjectInitialOptions = tutorData.MathSubject.map((el) => {
        return { label: el, value: el };
    });
    const { options: mathSubjectOptions } = useMultiSelect({
        options: mathSubjectInitialOptions,
    });
    //populating GradesOptions for using in Multiselect Component
    const gradesInitialOptions = tutorData.grades.map((el) => {
        return { label: el, value: el };
    });
    const { options: gradesOptions } = useMultiSelect({
        options: gradesInitialOptions,
    });
    //populating ForeignLanguagesOptions for using in Multiselect Component
    const ForeignLanguagesInitialOptions = tutorData.ForeignLanguages.map((el) => {
        return { label: el, value: el };
    });
    const { options: ForeignLanguagesOptions } = useMultiSelect({
        options: ForeignLanguagesInitialOptions,
    });
    //populating ForeignLanguagesOptions for using in Multiselect Component
    const EnglishInitialOptions = tutorData.English.map((el) => {
        return { label: el, value: el };
    });
    const { options: EnglishOptions } = useMultiSelect({
        options: EnglishInitialOptions,
    });
    //populating SocialStudiesOptions for using in Multiselect Component
    const SocialStudiesInitialOptions = tutorData.SocialStudies.map((el) => {
        return { label: el, value: el };
    });
    const { options: SocialStudiesOptions } = useMultiSelect({
        options: SocialStudiesInitialOptions,
    });
    //populating ScienceInitialOptions for using in Multiselect Component
    const ScienceInitialOptions = tutorData.Science.map((el) => {
        return { label: el, value: el };
    });
    const { options: ScienceOptions } = useMultiSelect({
        options: ScienceInitialOptions,
    });
    //populating AvailabilityInitialOptions for using in Multiselect Component
    const AvailabilityInitialOptions = tutorData.availability.map((el) => {
        return { label: el, value: el };
    });
    const { options: AvailabilityOptions } = useMultiSelect({
        options: AvailabilityInitialOptions,
    });
    //populating ExperienceInitialOptions for using in Select Component
    const yearsOfExperienceInitialOptions = Array(50)
        .fill(null)
        .map((_, i) => ({
            label: `${i + 1}`,
            value: `${i + 1}`,
        }));
    const { options: yearsOfExperienceOptions } = useMultiSelect({
        options: yearsOfExperienceInitialOptions,
    });

    //FETCHING TUTOR DATA FOR AN UPDATE

    useEffect(() => {
        const fetchTutor = async () => {
            if (!tutor) {
                try {
                    setIsLoading(true);
                    setModalActionMessage('Please wait, data is loading...');
                    // opens modal
                    onOpen();
                    const response = await axios.get(
                        `${import.meta.env.VITE_REACT_URL}tutors/my-profile`,
                        //getting headers for get request to be authorized
                        { headers: getHeaders() }
                    );
                    const { data, status } = response;
                    if (status === 200) {
                        setInitialValues(data.tutor);
                        dispatch({ type: 'SET_TUTOR', payload: data.tutor });
                        setIsLoading(false);
                        // setMessage(response?.data.message);
                    } else {
                        throw new Error('Tutor update failed');
                    }
                } catch (error) {
                    if (error instanceof AxiosError) {
                        setIsLoading(false);
                        if (error?.response?.data.error.includes('no tutor')) {
                            //this IF When accompanied with toast id prevents duplicate
                            if (!toast.isActive('fillForm-toast')) {
                                toast({
                                    title: 'Please fill the form',
                                    status: 'success',
                                    isClosable: true,
                                    position: 'top',
                                    id: 'fillForm-toast',
                                });
                            }
                        } else {
                            toast({
                                title: 'Error getting tutor data',
                                status: 'error',
                                isClosable: true,
                                position: 'top',
                                id: 2,
                            });
                        }
                        return;
                    }
                }
            }
        };
        fetchTutor();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = async (values: TutorRequest) => {
        let imageUrl;

        if (selectedImage) {
            const formData = new FormData();
            formData.append('image', selectedImage);
            try {
                setIsLoading(true);
                setModalActionMessage('Please wait, data is loading...');
                // opens modal
                onOpen();
                imageUrl = await axios.post(`${import.meta.env.VITE_REACT_URL}uploads`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                setIsLoading(false);
            } catch (error) {
                if (error instanceof Error) {
                    toast({
                        title: 'Error uploading tutor image',
                        status: 'error',
                        isClosable: true,
                        position: 'top',
                    });
                }
            }
        }

        const tutorFormData: TutorRequest = {
            grades: values.grades,
            about: values.about,
            education: values.education,
            avatar: imageUrl?.data.src,
            availability: values.availability,
            yearsOfExperience: values.yearsOfExperience,
            MathSubject: values.MathSubject,
            ForeignLanguages: values.ForeignLanguages,
            English: values.English,
            SocialStudies: values.SocialStudies,
            Science: values.Science,
        };

        if (tutor) {
            const updateTutor = async () => {
                try {
                    setIsLoading(true);
                    setModalActionMessage('Please wait, data is loading...');
                    // opens modal
                    onOpen();
                    const response = await axios.patch(
                        `${import.meta.env.VITE_REACT_URL}tutors/${tutor._id}`,
                        tutorFormData,
                        { headers: getHeaders() }
                    );
                    const { data, status } = response;
                    if (status === 200) {
                        setSelectedImage(null);
                        dispatch({ type: 'SET_TUTOR', payload: data.tutor });
                        setIsLoading(false);
                        setIsEditing(false);
                        toast({
                            title: 'Tutor data was updated successfully',
                            status: 'success',
                            isClosable: true,
                            position: 'top',
                        });
                    }
                    if (status !== 200) {
                        throw new Error('Tutor update failed');
                    }
                } catch (error) {
                    if (error instanceof Error) {
                        setIsLoading(false);
                        toast({
                            title: 'Error updating profile',
                            status: 'error',
                            isClosable: true,
                            position: 'top',
                        });
                    }
                    setIsLoading(false);
                    return;
                }
            };
            updateTutor();
        } else {
            const createTutor = async () => {
                try {
                    setIsLoading(true);
                    setModalActionMessage('Please wait, saving data...');
                    // opens modal
                    onOpen();
                    const response = await axios.post(
                        `${import.meta.env.VITE_REACT_URL}tutors`,
                        tutorFormData,
                        { headers: getHeaders() }
                    );
                    const { data, status } = response;
                    if (status === 201) {
                        toast({
                            title: 'Profile created successfully',
                            status: 'success',
                            isClosable: true,
                            position: 'top',
                            id: 3,
                        });
                        setSelectedImage(null);
                        dispatch({ type: 'SET_TUTOR', payload: data.tutor });
                        setIsEditing(false);
                        onClose();
                        return;
                    }
                    throw new Error('Tutor creation failed');
                } catch (error) {
                    setIsLoading(false);
                    if (error instanceof Error) {
                        toast({
                            title: 'Error creating profile',
                            status: 'error',
                            isClosable: true,
                            position: 'top',
                        });
                    }
                    return;
                }
            };
            createTutor();
        }
    };
    return (
        <Grid display="flex" justifyContent="center" w="full" mb="25px">
            <Formik
                enableReinitialize
                onSubmit={handleSubmit}
                validationSchema={tutorValidationSchema}
                initialValues={initialValues}
            >
                {(formik) => (
                    <Grid width="90%" mt={7}>
                        <form onSubmit={formik.handleSubmit}>
                            {/* UPPER GRID */}
                            <SimpleGrid minChildWidth="16rem" spacing="2.5rem">
                                <SimpleGrid minChildWidth="10rem" spacing="20px" alignItems="start">
                                    <UploadImage
                                        selectedImage={selectedImage}
                                        setSelectedImage={setSelectedImage}
                                        profileImage={tutor?.avatar}
                                        disabled={!isEditing}
                                    />
                                    <VStack
                                        sx={{
                                            height: '100%',
                                            display: 'flex',
                                            justifyContent: 'space-around',
                                        }}
                                        spacing={3}
                                    >
                                        <Input
                                            pointerEvents="none"
                                            boxShadow="md"
                                            p="15px"
                                            placeholder={`${firstName} ${lastName}`}
                                            sx={{
                                                _placeholder: {
                                                    color: 'black',
                                                    opacity: '100',
                                                },
                                            }}
                                            fontWeight={400}
                                            size="lg"
                                            variant={'disable'}
                                            bgColor={theme.styles.global.body.bg}
                                        />
                                        <Input
                                            pointerEvents="none"
                                            boxShadow="md"
                                            p="15px"
                                            placeholder={`${email}`}
                                            sx={{
                                                _placeholder: {
                                                    color: 'black',
                                                    opacity: '100',
                                                },
                                            }}
                                            fontWeight={400}
                                            size="lg"
                                            variant={'disable'}
                                            bgColor={theme.styles.global.body.bg}
                                        />
                                    </VStack>
                                    {/* <Spacer /> */}
                                </SimpleGrid>
                                <VStack>
                                    <FormControl
                                        isInvalid={!!(formik.errors.about && formik.touched.about)}
                                    >
                                        <FormLabel>About</FormLabel>
                                        <Field
                                            as={Textarea}
                                            backgroundColor="white"
                                            name="about"
                                            textColor="black"
                                            h="200px"
                                            // placeholder={`${tutorData.about}`}
                                            disabled={!isEditing}
                                        />
                                        {formik.errors.about && formik.touched.about && (
                                            <FormErrorMessage>
                                                {formik.errors.about}
                                            </FormErrorMessage>
                                        )}
                                    </FormControl>
                                    <Spacer />
                                </VStack>
                            </SimpleGrid>
                            {/* MULTiSELECTS GRID */}
                            <SimpleGrid minChildWidth="250px" spacing="40px">
                                <Box>
                                    <FormControl
                                        isInvalid={
                                            !!(formik.errors.education && formik.touched.education)
                                        }
                                    >
                                        <FormLabel>Education</FormLabel>
                                        <Field
                                            as={Input}
                                            backgroundColor="white"
                                            name="education"
                                            h="40px"
                                            textColor="black.400"
                                            placeholder={`e.g. MS Berkley`}
                                            disabled={!isEditing}
                                        />
                                    </FormControl>
                                    {/* GRADES*/}
                                    <FormControl>
                                        <Field name="grades">
                                            {({ field, form }: FieldProps) => (
                                                <MultiSelect
                                                    {...field}
                                                    options={gradesOptions}
                                                    value={form.values.grades.map(
                                                        (item: Option) => {
                                                            return {
                                                                label: item,
                                                                value: item,
                                                            };
                                                        }
                                                    )} //for displaying selected values
                                                    label="Grades"
                                                    onChange={(
                                                        selectedOption: Option[] | Option
                                                    ) => {
                                                        if (Array.isArray(selectedOption)) {
                                                            form.setFieldValue(
                                                                field.name,
                                                                selectedOption.map(
                                                                    (item: Option) => item.value
                                                                )
                                                            ); //updates selected options in tutorRequest
                                                        }
                                                    }}
                                                    disabled={!isEditing}
                                                />
                                            )}
                                        </Field>
                                    </FormControl>

                                    {/* SCIENCE */}

                                    <Box pb="3px">
                                        <FormControl>
                                            <Field name="Science">
                                                {({ field, form }: FieldProps) => (
                                                    <MultiSelect
                                                        {...field}
                                                        options={ScienceOptions}
                                                        value={form.values.Science.map(
                                                            (item: Option) => {
                                                                return {
                                                                    label: item,
                                                                    value: item,
                                                                };
                                                            }
                                                        )}
                                                        label="Science"
                                                        onChange={(
                                                            selectedOption: Option[] | Option
                                                        ) => {
                                                            if (Array.isArray(selectedOption)) {
                                                                form.setFieldValue(
                                                                    field.name,
                                                                    selectedOption.map(
                                                                        (item: Option) => item.value
                                                                    )
                                                                ); //updates selected options in tutorRequest
                                                            }
                                                        }}
                                                        disabled={!isEditing}
                                                    />
                                                )}
                                            </Field>
                                        </FormControl>
                                    </Box>
                                    <FormControl>
                                        {/* MATH*/}
                                        <Field name="MathSubject">
                                            {({ field, form }: FieldProps) => (
                                                <MultiSelect
                                                    {...field}
                                                    options={mathSubjectOptions}
                                                    value={form.values.MathSubject.map(
                                                        (item: Option) => {
                                                            return {
                                                                label: item,
                                                                value: item,
                                                            };
                                                        }
                                                    )}
                                                    label="Math"
                                                    onChange={(
                                                        selectedOption: Option[] | Option
                                                    ) => {
                                                        if (Array.isArray(selectedOption)) {
                                                            form.setFieldValue(
                                                                field.name,
                                                                selectedOption.map(
                                                                    (item: Option) => item.value
                                                                )
                                                            ); //updates selected options in tutorRequest
                                                        }
                                                    }}
                                                    disabled={!isEditing}
                                                />
                                            )}
                                        </Field>
                                    </FormControl>
                                </Box>

                                <Box>
                                    <Box>
                                        {/* Experience*/}
                                        <FormControl>
                                            <Field name="yearsOfExperience">
                                                {({ field, form }: FieldProps) => (
                                                    <MultiSelect
                                                        {...field}
                                                        options={yearsOfExperienceOptions}
                                                        value={{
                                                            label: form.values.yearsOfExperience,
                                                            value: form.values.yearsOfExperience,
                                                        }} //for displaying selected values
                                                        label="Experience (in years)"
                                                        single
                                                        onChange={(selectedOption) => {
                                                            form.setFieldValue(
                                                                field.name,
                                                                selectedOption
                                                            ); //updates selected options in tutorRequest
                                                        }}
                                                        disabled={!isEditing}
                                                    />
                                                )}
                                            </Field>
                                        </FormControl>
                                    </Box>
                                    {/* FOREIGN LANGUAGES */}

                                    <FormControl>
                                        <Field name="ForeignLanguages">
                                            {({ field, form }: FieldProps) => (
                                                <MultiSelect
                                                    {...field}
                                                    options={ForeignLanguagesOptions}
                                                    value={form.values.ForeignLanguages.map(
                                                        (item: Option) => {
                                                            return {
                                                                label: item,
                                                                value: item,
                                                            };
                                                        }
                                                    )}
                                                    label="Foreign Languages"
                                                    onChange={(
                                                        selectedOption: Option[] | Option
                                                    ) => {
                                                        if (Array.isArray(selectedOption)) {
                                                            form.setFieldValue(
                                                                field.name,
                                                                selectedOption.map(
                                                                    (item: Option) => item.value
                                                                )
                                                            ); //updates selected options in tutorRequest
                                                        }
                                                    }}
                                                    disabled={!isEditing}
                                                />
                                            )}
                                        </Field>
                                    </FormControl>
                                    <FormControl>
                                        <Field name="English">
                                            {({ field, form }: FieldProps) => (
                                                <MultiSelect
                                                    {...field}
                                                    options={EnglishOptions}
                                                    value={form.values.English.map(
                                                        (item: Option) => {
                                                            return {
                                                                label: item,
                                                                value: item,
                                                            };
                                                        }
                                                    )}
                                                    label="English"
                                                    onChange={(
                                                        selectedOption: Option[] | Option
                                                    ) => {
                                                        if (Array.isArray(selectedOption)) {
                                                            form.setFieldValue(
                                                                field.name,
                                                                selectedOption.map(
                                                                    (item: Option) => item.value
                                                                )
                                                            ); //updates selected options in tutorRequest
                                                        }
                                                    }}
                                                    disabled={!isEditing}
                                                />
                                            )}
                                        </Field>
                                    </FormControl>
                                    <Box id="SocialStudies">
                                        <FormControl>
                                            <Field name="SocialStudies">
                                                {({ field, form }: FieldProps) => (
                                                    <MultiSelect
                                                        {...field}
                                                        options={SocialStudiesOptions}
                                                        value={form.values.SocialStudies.map(
                                                            (item: Option) => {
                                                                return {
                                                                    label: item,
                                                                    value: item,
                                                                };
                                                            }
                                                        )}
                                                        label="Social Studies"
                                                        onChange={(
                                                            selectedOption: Option[] | Option
                                                        ) => {
                                                            if (Array.isArray(selectedOption)) {
                                                                form.setFieldValue(
                                                                    field.name,
                                                                    selectedOption.map(
                                                                        (item: Option) => item.value
                                                                    )
                                                                ); //updates selected options in tutorRequest
                                                            }
                                                        }}
                                                        disabled={!isEditing}
                                                    />
                                                )}
                                            </Field>
                                        </FormControl>
                                    </Box>
                                </Box>
                            </SimpleGrid>
                            {/* BOTTOM GRID */}
                            <SimpleGrid spacing="40px">
                                {/* AVAILABILITY */}
                                <Box>
                                    <FormControl>
                                        <Field name="availability">
                                            {({ field, form }: FieldProps) => (
                                                <MultiSelect
                                                    {...field}
                                                    options={AvailabilityOptions}
                                                    value={form.values.availability.map(
                                                        (item: Option) => {
                                                            return {
                                                                label: item,
                                                                value: item,
                                                            };
                                                        }
                                                    )}
                                                    label="Availability"
                                                    onChange={(
                                                        selectedOption: Option[] | Option
                                                    ) => {
                                                        if (Array.isArray(selectedOption)) {
                                                            form.setFieldValue(
                                                                field.name,
                                                                selectedOption.map(
                                                                    (item: Option) => item.value
                                                                )
                                                            ); //updates selected options in tutorRequest
                                                        }
                                                    }}
                                                    disabled={!isEditing}
                                                />
                                            )}
                                        </Field>
                                    </FormControl>
                                </Box>
                                <Spacer />
                            </SimpleGrid>
                            <SimpleGrid minChildWidth="250px" spacing="40px">
                                <HStack
                                    display="flex"
                                    justifyContent="flex-end"
                                    spacing={10}
                                    mt="30px"
                                >
                                    {!isEditing ? (
                                        <Button
                                            variant="buttonTeal"
                                            size="lg"
                                            fontWeight="bold"
                                            width="175px"
                                            onClick={() => setIsEditing(true)}
                                        >
                                            Edit
                                        </Button>
                                    ) : (
                                        <>
                                            <Button
                                                type="submit"
                                                variant="buttonYellow"
                                                size="lg"
                                                fontWeight="bold"
                                                width="175px"
                                            >
                                                Save
                                            </Button>
                                            <Button
                                                type="button"
                                                variant="buttonTeal"
                                                size="lg"
                                                fontWeight="bold"
                                                width="175px"
                                                onClick={() => {
                                                    if (tutor) {
                                                        setIsEditing(false);
                                                    } else {
                                                        navigate('/tutor-dashboard');
                                                    }
                                                }}
                                            >
                                                Cancel
                                            </Button>
                                        </>
                                    )}
                                </HStack>
                            </SimpleGrid>
                        </form>
                    </Grid>
                )}
            </Formik>
            {isLoading ? (
                <Modal
                    isCentered
                    isOpen={isOpen}
                    onClose={onClose}
                    closeOnEsc={false}
                    closeOnOverlayClick={false}
                >
                    {<Overlay />}
                    <ModalContent>
                        <ModalHeader>{ModalActionMessage}</ModalHeader>
                        <ModalBody>
                            <Text>TutorUp</Text>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            ) : (
                <></>
            )}
        </Grid>
    );
};

export default TutorProfilePage;
