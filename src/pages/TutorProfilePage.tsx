import React from 'react';
import { Form, Formik, FormikHelpers, FormikValues, Field } from 'formik';

import * as yup from 'yup';
import {
    Box,
    Button,
    SimpleGrid,
    HStack,
    Spacer,
    Grid,
    Avatar,
    AvatarBadge,
    Input,
    VStack,
    WrapItem,
    FormControl,
    FormErrorMessage,
    FormLabel,
} from '@chakra-ui/react';

interface TutorProfilePageProps {}
import { MultiSelect, useMultiSelect } from 'chakra-multiselect';
import { AddIcon } from '@chakra-ui/icons';
import avatar from '../assets/avatar.jpg';
import { Tutor, TutorRequest } from '../models/interfaces.ts';
import axios from 'axios';
import { theme } from '../util/theme.ts';

const TutorProfilePage: React.FC<TutorProfilePageProps> = () => {
    const tutorValidationSchema = yup.object({
        about: yup.string(),
        // grades: yup.array(yup.string()),
        // availability: yup.array(yup.string()),
        // education: yup.string(),
        // experience: yup.number(),
        // avatar: yup.string(),
    });
    const tutorData: Tutor = {
        availability: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
        ],
        userId: {
            _id: '123456',
            firstName: 'Fany',
            lastName: 'Kreminski',
            email: 'frk@gmail.com',
        },
        about: '',
        grades: ['K', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        avatar: '',
        education: '',
        yearsOfExperience: 0,
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
        ForeignLanguages: ['Spanish', 'French', 'Chineese', 'German', 'Latin'],
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
        _id: '12345',
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
    const ScienceInitialOptions = tutorData.SocialStudies.map((el) => {
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

    const buttonStyle = {
        width: '5em',
        height: '3em',
        p: '50em',
    };

    const initialValues: TutorRequest = {
        grades: [],
        about: '',
        education: '',
        avatar: '',
        availability: [],
        MathSubject: [],
        ForeignLanguages: [],
        English: [],
        SocialStudies: [],
        Science: [],
        yearsOfExperience: 0,
    };

    const handleSubmit = async (values: TutorRequest, actions: FormikHelpers<TutorRequest>) => {
        const updateTutor = async () => {
            try {
                const response = await axios.patch(
                    `https://ffprac-team2-back.onrender.com/api/v1/tutors/${tutorData._id}`,
                    {
                        grades: values.grades[0],
                        about: values.about,
                        education: values.education,
                        avatar: values.avatar,
                        availability: values.availability,
                        yearsOfExperience: values.yearsOfExperience,
                    }
                );
                const { data, status } = response;
                console.log(data);
                actions.resetForm();

                if (status !== 201) {
                    throw new Error('Tutor Update failed');
                }
            } catch (error) {
                console.error('Error update tutor profile:', error);
                return;
            }
        };
        updateTutor();
    };

    return (
        <Grid>
            <Formik
                onSubmit={handleSubmit}
                validationSchema={tutorValidationSchema}
                initialValues={initialValues}
            >
                {(formik) => (
                    <>
                        <form onSubmit={formik.handleSubmit}>
                            {/* UPPER GRID */}
                            <SimpleGrid minChildWidth="250px" spacing="40px">
                                <SimpleGrid minChildWidth="150px" spacing="20px">
                                    <WrapItem>
                                        <Avatar
                                            sx={{
                                                width: '200px',
                                                height: '200px',
                                            }}
                                            src={avatar}
                                        >
                                            <AvatarBadge
                                                sx={{
                                                    border: 'none',
                                                    backgroundColor: 'black',
                                                    width: '50px',
                                                    height: '50px',
                                                    marginBottom: 3,
                                                    cursor: 'pointer',
                                                }}
                                                boxSize="0.9em"
                                            >
                                                <AddIcon
                                                    sx={{
                                                        width: '65%',
                                                        height: '65%',
                                                        color: theme.styles.global.body.bg,
                                                    }}
                                                />
                                            </AvatarBadge>
                                        </Avatar>
                                    </WrapItem>
                                    <VStack spacing={3}>
                                        <Input
                                            isDisabled
                                            boxShadow="dark-lg"
                                            p="5px"
                                            placeholder={`${tutorData.userId.firstName} ${tutorData.userId.lastName}`}
                                            fontWeight={400}
                                            size="lg"
                                            textColor="Black.600"
                                        />
                                        <Input
                                            textColor="black.600"
                                            isDisabled
                                            boxShadow="dark-lg"
                                            p="15px"
                                            placeholder={`${tutorData.userId.email}`}
                                            size="lg"
                                        />
                                        <Spacer />
                                        <Input
                                            color="black.500"
                                            placeholder={`${tutorData.education}`}
                                            size="lg"
                                            bgColor="white"
                                        />
                                    </VStack>
                                </SimpleGrid>
                                <VStack>
                                    <FormControl
                                        isInvalid={!!(formik.errors.about && formik.touched.about)}
                                    >
                                        <FormLabel>About</FormLabel>
                                        <Field
                                            as={Input}
                                            backgroundColor="white"
                                            name="about"
                                            textColor="black"
                                            h="200px"
                                            placeholder={`${tutorData.about}`}
                                        />
                                        {formik.errors.about && formik.touched.about && (
                                            <FormErrorMessage>
                                                {formik.errors.about}
                                            </FormErrorMessage>
                                        )}
                                    </FormControl>
                                    <Spacer />
                                    <Input
                                        textColor="black.400"
                                        placeholder={`${tutorData.yearsOfExperience}`}
                                        size="lg"
                                        bgColor="white"
                                    />
                                </VStack>
                            </SimpleGrid>
                            {/* MULTiSELECTS GRID */}
                            <SimpleGrid minChildWidth="250px" spacing="40px">
                                <Box>
                                    {/* ENGLISH*/}
                                    <Box maxW="35em" p="3px">
                                        <FormControl>
                                            <Field name="English">
                                                {({ field, form }) => (
                                                    <MultiSelect
                                                        {...field}
                                                        options={EnglishOptions}
                                                        value={form.values.English} //for displaying selected values
                                                        label="English"
                                                        onChange={(selectedOption) => {
                                                            console.log(field.name, selectedOption);
                                                            console.log(form);
                                                            form.setFieldValue(
                                                                field.name,
                                                                selectedOption
                                                            ); //updates selected options in tutorRequest
                                                        }}
                                                    />
                                                )}
                                            </Field>
                                        </FormControl>
                                    </Box>
                                    <Box maxW="35em" p="3px">
                                        <FormControl>
                                            <Field name="SocialStudies">
                                                {({ field, form }) => (
                                                    <MultiSelect
                                                        {...field}
                                                        options={SocialStudiesOptions}
                                                        value={form.values.SocialStudies} //for displaying selected values
                                                        label="Social Studies"
                                                        onChange={(selectedOption) => {
                                                            console.log(field.name, selectedOption);
                                                            console.log(form);
                                                            form.setFieldValue(
                                                                field.name,
                                                                selectedOption
                                                            ); //updates selected options in tutorRequest
                                                        }}
                                                    />
                                                )}
                                            </Field>
                                        </FormControl>
                                    </Box>

                                    {/* SCIENCE */}

                                    <Box maxW="35em" p="3px">
                                        <FormControl>
                                            <Field name="Science">
                                                {({ field, form }) => (
                                                    <MultiSelect
                                                        {...field}
                                                        options={ScienceOptions}
                                                        value={form.values.Science} //for displaying selected values
                                                        label="Science"
                                                        onChange={(selectedOption) => {
                                                            console.log(field.name, selectedOption);
                                                            console.log(form);
                                                            form.setFieldValue(
                                                                field.name,
                                                                selectedOption
                                                            ); //updates selected options in tutorRequest
                                                        }}
                                                    />
                                                )}
                                            </Field>
                                        </FormControl>
                                    </Box>
                                </Box>

                                <Box>
                                    {/* MATH*/}
                                    <Box maxW="35em" p="3px">
                                        <FormControl>
                                            <Field name="MathSubject">
                                                {({ field, form }) => (
                                                    <MultiSelect
                                                        {...field}
                                                        options={mathSubjectOptions}
                                                        value={form.values.MathSubject} //for displaying selected values
                                                        label="Math"
                                                        onChange={(selectedOption) => {
                                                            console.log(field.name, selectedOption);
                                                            console.log(form);
                                                            form.setFieldValue(
                                                                field.name,
                                                                selectedOption
                                                            ); //updates selected options in tutorRequest
                                                        }}
                                                    />
                                                )}
                                            </Field>
                                        </FormControl>
                                    </Box>
                                    {/* GRADES*/}
                                    <Box maxW="35em" p="3px">
                                        <FormControl>
                                            <Field name="grades">
                                                {({ field, form }) => (
                                                    <MultiSelect
                                                        {...field}
                                                        options={gradesOptions}
                                                        value={form.values.grades} //for displaying selected values
                                                        label="Grades"
                                                        onChange={(selectedOption) => {
                                                            console.log(field.name, selectedOption);
                                                            console.log(form);
                                                            form.setFieldValue(
                                                                field.name,
                                                                selectedOption
                                                            ); //updates selected options in tutorRequest
                                                        }}
                                                    />
                                                )}
                                            </Field>
                                        </FormControl>
                                    </Box>
                                    {/* FOREIGN LANGUAGES */}
                                    <Box maxW="35em" p="3px">
                                        <FormControl>
                                            <Field name="ForeignLanguages">
                                                {({ field, form }) => (
                                                    <MultiSelect
                                                        {...field}
                                                        options={ForeignLanguagesOptions}
                                                        value={form.values.ForeignLanguages} //for displaying selected values
                                                        label="Foreign Languages"
                                                        onChange={(selectedOption) => {
                                                            console.log(field.name, selectedOption);
                                                            console.log(form);
                                                            form.setFieldValue(
                                                                field.name,
                                                                selectedOption
                                                            ); //updates selected options in tutorRequest
                                                        }}
                                                    />
                                                )}
                                            </Field>
                                        </FormControl>
                                    </Box>
                                </Box>
                            </SimpleGrid>
                            {/* BOTTOM GRID */}
                            <SimpleGrid minChildWidth="250px" spacing="40px">
                                {/* AVAILABILITY */}
                                <Box maxW="35em" p="3px">
                                    <FormControl>
                                        <Field name="Availability">
                                            {({ field, form }) => (
                                                <MultiSelect
                                                    {...field}
                                                    options={AvailabilityOptions}
                                                    value={form.values.availability} //for displaying selected values
                                                    label="Availability"
                                                    onChange={(selectedOption) => {
                                                        console.log(field.name, selectedOption);
                                                        console.log(form);
                                                        form.setFieldValue(
                                                            field.name,
                                                            selectedOption
                                                        ); //updates selected options in tutorRequest
                                                    }}
                                                />
                                            )}
                                        </Field>
                                    </FormControl>
                                </Box>
                                <Spacer />
                                <HStack direction="row" spacing={7} display="flex" mt="30px">
                                    <Button
                                        type="submit"
                                        style={{
                                            ...buttonStyle,
                                            backgroundColor: '#F4CD76',
                                            color: 'black',
                                        }}
                                        flex="1"
                                    >
                                        Submit
                                    </Button>
                                    <Button
                                        type="button"
                                        style={{
                                            ...buttonStyle,
                                            backgroundColor: '#59D3C8',
                                            color: 'black',
                                        }}
                                        flex="1"
                                    >
                                        Cancel
                                    </Button>
                                </HStack>
                            </SimpleGrid>
                        </form>
                    </>
                )}
            </Formik>
        </Grid>
    );
};

export default TutorProfilePage;
