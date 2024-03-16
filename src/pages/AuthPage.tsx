import React from 'react';
import {
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Flex,
    Box,
} from '@chakra-ui/react';

import RegistrationForm from '../components/RegistrationForm';
import LoginForm from '../components/LoginForm';


const AuthPage: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Some logic will come here.
    };

    return (
        <Flex align="center" justify="center">
            <Box>
                <Tabs variant="unstyled" defaultIndex={1}>
                    <TabList
                        bg="#D9D9D9" // Set background color to #D9D9D9
                        width="350px"
                        height="60px"
                        borderRadius="20px"
                        display="flex"
                        justifyContent="center"
                        margin="0 15px"
                    >
                        <Tab _selected={{ backgroundColor: 'white' }} flex="1" borderRadius="20px" textAlign="center">
                            Register
                        </Tab>
                        <Tab _selected={{ backgroundColor: 'white' }} flex="1" borderRadius="20px" textAlign="center">
                            Login
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Flex align="center" justify="center" direction="column">
                                <RegistrationForm />
                            </Flex>
                        </TabPanel>
                        <TabPanel>
                            <Flex align="center" justify="center" direction="column">
                                <LoginForm />
                            </Flex>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Flex >
    );
};

export default AuthPage;