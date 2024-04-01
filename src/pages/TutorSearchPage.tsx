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
        const fetchTutors = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_REACT_URL}tutors`);
                const response = await res.data;
                // console.log(response);
                setTutors(response.tutors);
                setLoading(false);
            } catch (error) {
                console.error(error);
                // setErrMsg('Something went wrong. Please try again later.');
            }
        };
        fetchTutors();
    }, []);

    const handleSearch = async (query: string) => {
        setLoading(true);
        try {
            const res = await axios.get(
                `${import.meta.env.VITE_REACT_URL}tutors/search?subject=${query}`
            );
            setTutors(res.data.tutors);
            setLoading(false);
        } catch (error) {
            console.error(error);

            setLoading(false);
        }
    };
    return (
        <Box p="4">
            <Flex justify="flex-end" mt={4}>
                <TutorSearchForm onSearch={handleSearch} />
            </Flex>
            <Grid
                gap={10}
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                }}
                justifyItems="center"
            >
                {/* OM: Still debating on the layout. Pls, don't remove.
                <Grid
                gap={10}
                templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
                justifyItems="center"
            > */}
                {loading ? (
                    <div>Loading...</div>
                ) : tutors && tutors.length > 0 ? (
                    tutors.map((tutor) => <TutorCard key={tutor._id} tutor={tutor} />)
                ) : (
                    <div>No tutors found</div>
                )}
            </Grid>
        </Box>
    );
};

export default TutorSearchPage;
