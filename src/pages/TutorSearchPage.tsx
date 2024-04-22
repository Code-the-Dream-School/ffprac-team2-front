import { Box, Button, Flex, Grid, useBreakpointValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import GradesFilter from '../components/GradesFilter';
import { Spinner } from '@chakra-ui/react';
import SubjectsFilter from '../components/SubjectsFilter';
import { Tutor } from '../models/interfaces';
import TutorCard from '../components/TutorCard';
import axios from 'axios';
import { theme } from '../util/theme';

// import TutorSearchForm from '../components/TutorSearchForm';

const TutorSearchPage: React.FC = () => {
    const [tutorsData, setTutorsData] = useState<{ tutors: Tutor[] }>({ tutors: [] });
    const [loading, setLoading] = useState(true);
    const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
    const [searchReset, setSearchReset] = useState<boolean>(false);
    const displayFiltersOnLeft = useBreakpointValue({ base: false, md: true });
    const resetSearch = async () => {
        setLoading(true);
        setSearchReset(true);
        setSelectedGrades([]);
        setSelectedSubjects([]);

        try {
            const res = await axios.get(`${import.meta.env.VITE_REACT_URL}tutors`);
            const response = await res.data;
            setTutorsData(response);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (searchReset) {
            console.log('Search reset!');
            setSearchReset(false);
        }
    }, [searchReset]);
    useEffect(() => {
        fetchTutors();
    }, []);

    const fetchTutors = async (selectedSubjects?: string[], selectedGrades?: string[]) => {
        setLoading(true);
        try {
            let queryString = '';
            if (selectedSubjects) {
                queryString += `?subjects=${selectedSubjects.join(',')}`;
            }
            if (selectedGrades) {
                queryString += `${queryString ? '&' : '?'}grades=${selectedGrades.join(',')}`;
            }
            console.log(queryString);
            const res = await axios.get(`${import.meta.env.VITE_REACT_URL}tutors${queryString}`);
            const response = await res.data;
            setTutorsData(response);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const handleSelectSubjects = (subjects: string[]) => {
        console.log(subjects);
        setSelectedSubjects(subjects);
        fetchTutors(subjects, selectedGrades);
    };

    const handleSelectGrades = (grades: string[]) => {
        console.log(grades);
        setSelectedGrades(grades);
        fetchTutors(selectedSubjects, grades);
    };

    // useEffect(() => {
    //     const fetchTutors = async () => {
    //         try {
    //             const res = await axios.get(`${import.meta.env.VITE_REACT_URL}tutors`);
    //             const response = await res.data;
    //             setTutorsData(response);
    //             setLoading(false);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //     fetchTutors();
    // }, []);

    // const handleSearch = async (query: string) => {
    //     setLoading(true);
    //     try {
    //         const res = await axios.get(
    //             `${import.meta.env.VITE_REACT_URL}tutors/search?subject=${query}`
    //         );
    //         setTutorsData(res.data);
    //         setLoading(false);
    //     } catch (error) {
    //         console.error(error);
    //         setLoading(false);
    //     }
    // };

    // const handlePageChange = async (page: number) => {
    //     setLoading(true);
    //     try {
    //         const res = await axios.get(`${import.meta.env.VITE_REACT_URL}tutors?page=${page}`);
    //         setTutorsData(res.data);
    //         setLoading(false);
    //     } catch (error) {
    //         console.error(error);
    //         setLoading(false);
    //     }
    // };

    return (
        <Box  mt="20px" w="full">
            <Grid
                templateColumns={{ base: '1fr', md: '1fr 3fr', xl: '1fr 3fr' }}
                gap={{ base: 1, md: 2 }}
                fontSize={{ base: '10px', md: '12px' }}
            >
                <Flex direction={displayFiltersOnLeft ? 'column' : 'column'}>
                    <SubjectsFilter onSelectSubjects={handleSelectSubjects} />
                    <GradesFilter onSelectGrades={handleSelectGrades} />
                </Flex>
                {/* <Flex direction="column">
                    <Flex justify="flex-end" mt={4}>
                        <TutorSearchForm onSearch={handleSearch} />
                    </Flex> */}
                {/* {/* <Grid 
                
                        gap={10}
                        templateColumns={{
                            base: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)',
                        }}
                        justifyItems="center"
                    > */}
                {/* /* OM: Still debating on the layout. Pls, don't remove. */}
                <Grid
                    gap="40px"
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(3, 1fr)',
                    }}
                    justifyItems="flex-start"
                >
                    {loading ? (
                        <Spinner
                            thickness="4px"
                            speed="0.65s"
                            emptyColor="gray.200"
                            color="blue.500"
                            size="xl"
                        />
                    ) : tutorsData.tutors.length > 0 ? (
                        tutorsData.tutors.map((tutor) => (
                            <TutorCard key={tutor._id} tutor={tutor} />
                        ))
                    ) : (
                        <Box>
                            <Grid
                                templateColumns="1fr"
                                gap="4"
                                alignItems="center"
                                textAlign="center"
                            >
                                <Box mt="20px" fontSize="14px">
                                    It looks like we don't have tutors that match your search
                                    criteria. Change your search using the selection menu or clear
                                    the search using the button below.
                                </Box>
                                <Box>
                                    <Button
                                        justifyContent="center"
                                        variant="solid"
                                        bg={theme.dashboardButtons.buttonTeal.bg}
                                        height={theme.dashboardButtons.height}
                                        fontSize={theme.dashboardButtons.fontSize}
                                        fontWeight={theme.dashboardButtons.fontWeight}
                                        onClick={resetSearch}
                                    >
                                        Reset search
                                    </Button>
                                </Box>
                            </Grid>
                        </Box>
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default TutorSearchPage;
