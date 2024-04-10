import React, { useState, useEffect } from 'react';
import { Formik, FormikHelpers, Field, FieldProps } from 'formik';

import { tutorValidationSchema } from '../validationSchemas';
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
    Textarea,
} from '@chakra-ui/react';

import { MultiSelect, Option, useMultiSelect } from 'chakra-multiselect';
import { AddIcon } from '@chakra-ui/icons';
import avatar from '../assets/avatar.jpg';
import { TutorRequest } from '../models/interfaces.ts';
import axios from 'axios';
import { theme } from '../util/theme.ts';
import { headers } from '../util';

const TutorProfilePage: React.FC = () => {
    const { firstName, lastName, email } = JSON.parse(localStorage.getItem('userData') ?? '{}');
    const [selectedImage, setSelectedImage] = useState<Blob | null>(null);
    const [initialValues, setInitialValues] = useState<TutorRequest>({
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
        yearsOfExperience: 1,
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
    };

    //FETCHING TUTOR DATA FOR AN UPDATE
    useEffect(() => {
        const fetchTutor = async () => {
            try {
                console.log(`from logged in user fetching tutor data${headers.Authorization}`);
                const response = await axios.get(
                    `${import.meta.env.VITE_REACT_URL}tutors/my-profile`,
                    {
                        headers,
                    }
                );
                const { data, status } = response;
                console.log(`after fetching data of tutor response from server: ${data.response}`);
                if (status === 200) {
                    console.log('got tutor data');
                    const { tutor } = data;
                    console.log(tutor);
                    console.log('call setInitialValues');
                    setInitialValues(tutor);
                    localStorage.setItem('tutorId', tutor._id);
                    console.log('call setInitialValues done');
                } else {
                    throw new Error('Tutor update failed');
                }
            } catch (error) {
                console.error('Error getting tutor profile:', error);
                return;
            }
        };
        fetchTutor();
    }, []);

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

    const handleSubmit = async (values: TutorRequest, actions: FormikHelpers<TutorRequest>) => {
        console.log(`Logger:inside handleSubmit `);

        const tutorId = localStorage.getItem('tutorId');
        if (tutorId) {
            const updateTutor = async () => {
                try {
                    const response = await axios.patch(
                        `${import.meta.env.VITE_REACT_URL}tutors/${tutorId}`,
                        {
                            grades: values.grades,
                            about: values.about,
                            education: values.education,
                            avatar: values.avatar,
                            availability: values.availability,
                            yearsOfExperience: values.yearsOfExperience,
                            MathSubject: values.MathSubject,
                            ForeignLanguages: values.ForeignLanguages,
                            English: values.English,
                            SocialStudies: values.SocialStudies,
                            Science: values.Science,
                        },
                        { headers }
                    );
                    const { data, status } = response;
                    console.log(data);
                    if (status === 200) console.log('Tutor was updated successfully');
                    if (status !== 200) {
                        throw new Error('Tutor update failed');
                    }
                } catch (error) {
                    console.error('Error update tutor profile:', error);
                    return;
                }
            };
            updateTutor();
        } else {
            const createTutor = async () => {
                try {
                    const response = await axios.post(
                        `${import.meta.env.VITE_REACT_URL}tutors`,
                        {
                            grades: values.grades,
                            about: values.about,
                            education: values.education,
                            avatar: values.avatar,
                            availability: values.availability,
                            yearsOfExperience: values.yearsOfExperience,
                            MathSubject: values.MathSubject,
                            ForeignLanguages: values.ForeignLanguages,
                            English: values.English,
                            SocialStudies: values.SocialStudies,
                            Science: values.Science,
                        },
                        { headers }
                    );
                    const { data, status } = response;
                    console.log(data);
                    if (status === 201) {
                        console.log('Tutor was created successfully');
                        actions.resetForm();
                        return;
                    }

                    throw new Error('Tutor creation failed');
                } catch (error) {
                    console.error('Error create tutor profile:', error);
                    return;
                }
            };
            createTutor();
        }
    };
    console.log('rendering initialValues', initialValues);
    return (
        <Grid display="flex" justifyContent="center" w="full">
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
                            <SimpleGrid minChildWidth="250px" spacing="40px">
                                <SimpleGrid minChildWidth="150px" spacing="20px">
                                    <WrapItem alignItems="center" justifyContent="center">
                                        <Avatar
                                            sx={{
                                                width: '200px',
                                                height: '200px',
                                            }}
                                            src={
                                                selectedImage
                                                    ? URL.createObjectURL(selectedImage)
                                                    : avatar
                                            }
                                            name="avatar"
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
                                                <Button
                                                    onClick={() => {
                                                        document
                                                            .getElementById('fileInput')
                                                            ?.click();
                                                    }}
                                                    style={{
                                                        backgroundColor: 'transparent',
                                                        border: 'none',
                                                        padding: 0,
                                                    }}
                                                >
                                                    <AddIcon
                                                        sx={{
                                                            width: '70%',
                                                            height: '70%',
                                                            color: '#E7E0D6',
                                                        }}
                                                    />
                                                    <Input
                                                        id="fileInput"
                                                        type="file"
                                                        accept="image/*"
                                                        hidden
                                                        onChange={(
                                                            event: React.ChangeEvent<HTMLInputElement>
                                                        ) => {
                                                            const selectedFile =
                                                                event.target.files?.[0];
                                                            if (!selectedFile) {
                                                                return; // Handle no file selected case (optional: display a message)
                                                            }

                                                            if (
                                                                !selectedFile.type.match('image/*')
                                                            ) {
                                                                console.error(
                                                                    'Invalid file type selected'
                                                                );
                                                                return;
                                                            }

                                                            const reader = new FileReader();

                                                            reader.onload = (
                                                                event: ProgressEvent<FileReader>
                                                            ) => {
                                                                if (event.target?.result) {
                                                                    const blob = new Blob(
                                                                        [
                                                                            event.target
                                                                                .result as ArrayBuffer,
                                                                        ],
                                                                        { type: selectedFile.type }
                                                                    );
                                                                    // Use the blob
                                                                    setSelectedImage(blob);
                                                                }
                                                            };

                                                            reader.readAsArrayBuffer(selectedFile);

                                                            // formik.setFieldValue();

                                                            setSelectedImage(selectedFile);
                                                        }}
                                                    />
                                                </Button>
                                            </AvatarBadge>
                                        </Avatar>
                                    </WrapItem>
                                    <VStack spacing={3}>
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
                                        <Spacer />
                                        <FormControl
                                            isInvalid={
                                                !!(
                                                    formik.errors.education &&
                                                    formik.touched.education
                                                )
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
                                            />
                                        </FormControl>
                                    </VStack>
                                    <Spacer />
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
                                            w="90%"
                                            h="200px"
                                            // placeholder={`${tutorData.about}`}
                                        />
                                        {formik.errors.about && formik.touched.about && (
                                            <FormErrorMessage>
                                                {formik.errors.about}
                                            </FormErrorMessage>
                                        )}
                                    </FormControl>
                                    <Spacer />

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
                                </VStack>
                            </SimpleGrid>
                            {/* MULTiSELECTS GRID */}
                            <SimpleGrid minChildWidth="250px" spacing="40px">
                                <Box>
                                    {/* ENGLISH*/}
                                    <Box maxW="35em" p="3px">
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
                                                    />
                                                )}
                                            </Field>
                                        </FormControl>
                                    </Box>
                                    <Box maxW="35em" p="3px">
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
                                                    />
                                                )}
                                            </Field>
                                        </FormControl>
                                    </Box>

                                    {/* SCIENCE */}

                                    <Box maxW="35em" p="3px">
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
                                                    />
                                                )}
                                            </Field>
                                        </FormControl>
                                    </Box>
                                    {/* FOREIGN LANGUAGES */}
                                    <Box maxW="35em" p="3px">
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
                                                    />
                                                )}
                                            </Field>
                                        </FormControl>
                                    </Box>
                                    {/* GRADES*/}
                                    <Box maxW="35em" p="3px">
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
                                    >
                                        Cancel
                                    </Button>
                                </HStack>
                            </SimpleGrid>
                        </form>
                    </Grid>
                )}
            </Formik>
        </Grid>
    );
};

export default TutorProfilePage;
