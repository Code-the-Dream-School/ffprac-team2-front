import React from 'react';
import {
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Flex,
    Box,
    useBreakpointValue,
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

import RegistrationForm from '../components/RegistrationForm';
import LoginForm from '../components/LoginForm';

const AuthPage: React.FC = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const activeTab = searchParams.get('activeTab') || 'login';

    const defaultIndex = activeTab === 'register' ? 0 : 1;
    const tabLength = useBreakpointValue({ base: '300px', md: '350px' });
    const tabHeight = useBreakpointValue({ base: '50px', md: '60px' });
    return (
        <Flex align="center" justify="center">
            <Box>
                <Tabs
                    variant="unstyled"
                    defaultIndex={defaultIndex}
                    marginTop={14}
                    marginBottom={4}
                    isLazy
                >
                    <TabList
                        bg="#D9D9D9"
                        borderRadius="20px"
                        display="flex"
                        justifyContent="center"
                        margin="0 15px"
                        style={{ width: tabLength, height: tabHeight }}
                    >
                        <Tab
                            _selected={{ backgroundColor: 'white' }}
                            flex="1"
                            borderRadius="20px"
                            textAlign="center"
                            fontWeight="bold"
                        >
                            Register
                        </Tab>
                        <Tab
                            _selected={{ backgroundColor: 'white' }}
                            flex="1"
                            borderRadius="20px"
                            textAlign="center"
                            fontWeight="bold"
                        >
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
        </Flex>
    );
};

export default AuthPage;
