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


interface AuthPageProps {
    activeTab: 'register' | 'login';
}

const AuthPage: React.FC<AuthPageProps> = ({ activeTab }) => {
    const defaultIndex = activeTab === 'register' ? 0 : 1; // Set the defaultIndex based on activeTab prop

return (
    <Flex align="center" justify="center">
        <Box>
            <Tabs variant="unstyled" defaultIndex={defaultIndex}>
                <TabList
                    bg="#D9D9D9" // Set background color to #D9D9D9
                    width="350px"
                    height="60px"
                    borderRadius="20px"
                    display="flex"
                    justifyContent="center"
                    margin="0 15px"
                    

                >
                    <Tab _selected={{ backgroundColor: 'white' }} flex="1" borderRadius="20px" textAlign="center" fontWeight="bold">
                        Register
                    </Tab>
                    <Tab _selected={{ backgroundColor: 'white' }} flex="1" borderRadius="20px" textAlign="center" fontWeight="bold">
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