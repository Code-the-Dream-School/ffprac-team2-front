import React from 'react';

import { Box, Button, SimpleGrid, HStack, Spacer, Grid } from '@chakra-ui/react';

interface TutorProfilePageProps {}

import ProfileForTutor from '../components/ProfileForTutor';
import SubjectMultiselects from '../components/SubjectMultiselects';
import { MultiSelect, useMultiSelect } from 'chakra-multiselect';
const TutorProfilePage: React.FC<TutorProfilePageProps> = () => {
    const { value, options, onChange } = useMultiSelect({
        value: ['Geometry'],
        options: [
            { label: 'math', value: 'math' },
            { label: 'algebra', value: 'algebra' },
            { label: 'Geometry', value: 'Geometry' },
        ],
    });
    const buttonStyle = {
        width: '5em',
        height: '3em',
        p: '50em',
    };
    return (
        <Grid>
            <ProfileForTutor
                name="Fany Kreminski"
                email="kremifany@gmail.com"
                education=""
                about=""
                experience=""
            />

            <SubjectMultiselects
                name="Fany Kreminski"
                email="kremifany@gmail.com"
                education=""
                about=""
                experience=""
            ></SubjectMultiselects>

            <SimpleGrid minChildWidth="250px" spacing="40px">
                <Box maxW="150px" p="3px">
                    <MultiSelect
                        options={options}
                        value={value}
                        label="Schedule"
                        onChange={onChange}
                    />
                </Box>
                <Spacer />
                <HStack direction="row" spacing={7} display="flex" mt="30px">
                    <Button
                        type="submit"
                        style={{ ...buttonStyle, backgroundColor: '#F4CD76', color: 'black' }}
                        flex="1"
                    >
                        Submit
                    </Button>
                    <Button
                        type="button"
                        style={{ ...buttonStyle, backgroundColor: '#59D3C8', color: 'black' }}
                        flex="1"
                    >
                        Cancel
                    </Button>
                </HStack>
            </SimpleGrid>
        </Grid>
    );
};

export default TutorProfilePage;
