import { Box, Flex, Grid } from '@chakra-ui/react';

import React from 'react';
import SearchBar from '../components/TutorSearchForm';
import TutorCard from '../components/TutorCard';

const TutorSearchPage: React.FC = () => {
    return (
        <Box p="4">
            <Flex justify="flex-end" mt={4}>
                <SearchBar
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
                <TutorCard />
                <TutorCard />
                <TutorCard />
                <TutorCard />
                <TutorCard />
                <TutorCard />
            </Grid>
        </Box>
    );
};

export default TutorSearchPage;
