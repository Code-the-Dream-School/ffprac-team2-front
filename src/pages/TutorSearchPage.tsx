import { Box, Button, Flex, Grid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { Spinner } from '@chakra-ui/react';
import { Tutor } from '../models/interfaces';
import TutorCard from '../components/TutorCard';
import TutorSearchForm from '../components/TutorSearchForm';
import axios from 'axios';

const TutorSearchPage: React.FC = () => {
    const [tutorsData, setTutorsData] = useState<{
        tutors: Tutor[];
        tutorCount: number;
        currentPage: number;
        tutorsPerPage: number;
    }>({
        tutors: [],
        tutorCount: 0,
        currentPage: 1,
        tutorsPerPage: 3,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTutors = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_REACT_URL}tutors`);
                const response = await res.data;
                setTutorsData(response);
                setLoading(false);
            } catch (error) {
                console.error(error);
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
            setTutorsData(res.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const handlePageChange = async (page: number) => {
        setLoading(true);
        try {
            const res = await axios.get(`${import.meta.env.VITE_REACT_URL}tutors?page=${page}`);
            setTutorsData(res.data);
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
                    <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.500"
                        size="xl"
                    />
                ) : tutorsData.tutors.length > 0 ? (
                    tutorsData.tutors.map((tutor) => <TutorCard key={tutor._id} tutor={tutor} />)
                ) : (
                    <div>No tutors found</div>
                )}
            </Grid>
            {tutorsData.tutorCount > 0 && (
                <Flex justify="center" mt={4}>
                    <Button
                        onClick={() => handlePageChange(tutorsData.currentPage - 1)}
                        disabled={tutorsData.currentPage === 1}
                        mr={3}
                    >
                        Previous
                    </Button>
                    {[
                        ...Array(
                            Math.ceil(tutorsData.tutorCount / tutorsData.tutorsPerPage)
                        ).keys(),
                    ].map((page) => (
                        <Button
                            key={page + 1}
                            onClick={() => handlePageChange(page + 1)}
                            variant={tutorsData.currentPage === page + 1 ? 'solid' : 'outline'}
                            mr={3}
                        >
                            {page + 1}
                        </Button>
                    ))}
                    <Button
                        onClick={() => handlePageChange(tutorsData.currentPage + 1)}
                        disabled={
                            tutorsData.currentPage ===
                            Math.ceil(tutorsData.tutorCount / tutorsData.tutorsPerPage)
                        }
                    >
                        Next
                    </Button>
                </Flex>
            )}
        </Box>
    );
};

export default TutorSearchPage;
