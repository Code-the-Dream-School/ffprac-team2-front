import { Flex, Spinner } from '@chakra-ui/react';
import React from 'react';

const AppLoader: React.FC = () => {
    return (
        <Flex justifyContent="center" alignItems="center">
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="#59D3C8"
                size="xl"
            />
        </Flex>
    );
};

export default AppLoader;
