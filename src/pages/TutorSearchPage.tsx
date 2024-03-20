import { Box, Flex, Grid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { Tutor } from '../models/interfaces';
import TutorCard from '../components/TutorCard';
import TutorSearchForm from '../components/TutorSearchForm';
import axios from 'axios';

const TutorSearchPage: React.FC = () => {
    const [tutors, setTutors] = useState<Tutor[] | []>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTutor = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_REACT_URL}tutors`);
                const response = await res.data;
                console.log(response);
                setTutors(response.tutors);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchTutor();
    }, []);

    const handleSearch = (query: string) => {
        console.log('Search query:', query);
    };

    return (
        <Box p="4">
            <Flex justify="flex-end" mt={4}>
                <TutorSearchForm
                    onSearch={function (query: string): void {
                        throw new Error('Function not implemented.');
                    }}
                />
            </Flex>
            <Grid
                gap={10}
                templateColumns={{
                    base: 'repeat(2, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(2, 1fr)',
                }}
                justifyItems="center"
            >
                {tutors && tutors.length > 0
                    ? tutors.map((tutor) => <TutorCard key={tutor._id} tutor={tutor} />)
                    : null}
            </Grid>
        </Box>
    );
};

export default TutorSearchPage;
