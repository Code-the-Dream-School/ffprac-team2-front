import React from 'react';
import {
    Button,
    Container,
    FormControl,
    FormLabel,
    Input,
    Radio,
    RadioGroup,
    Stack,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Flex,
    Box,
} from '@chakra-ui/react';

const inputStyle = {
    width: '350px',
    height: '50px',
    backgroundColor: 'white',
};

const buttonStyle = {
    width: '150px',
    height: '50px',
};


const AuthPage: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Some logic will come here.
    };

    return (
        <Flex align="center" justify="center">
            <Box style={{ backgroundColor: '#E7E0D6' }}>
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
                            Log In
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Flex align="center" justify="center" direction="column">
                                <form onSubmit={handleSubmit}>
                                    <Stack spacing={4} >
                                        <FormControl>
                                            <FormLabel htmlFor="firstName">First Name</FormLabel>
                                            <Input type="text" id="firstName" name="firstName" style={inputStyle} />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel htmlFor="lastName">Last Name</FormLabel>
                                            <Input type="text" id="lastName" name="lastName" style={inputStyle} />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel htmlFor="password">Password</FormLabel>
                                            <Input id="password" name="password" type="password" style={inputStyle} />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
                                            <Input id="confirmPassword" name="confirmPassword" type="password" style={inputStyle} />
                                        </FormControl>
                                        <RadioGroup id="role" name="role" width='350px'>
                                            <Stack direction="row" display="flex" alignItems="center">
                                                <Radio value="parent" flex="1">Parent</Radio>
                                                <Radio value="tutor" flex="1">Tutor</Radio>
                                            </Stack>
                                        </RadioGroup>
                                        <Stack direction="row" spacing={4} display="flex" alignItems="center">
                                            <Button
                                                type="submit"
                                                style={{ ...buttonStyle, backgroundColor: '#F4CD76', color: 'black' }}
                                                flex="1"

                                            >
                                                Register
                                            </Button>
                                            <Button
                                                type="button"
                                                style={{ ...buttonStyle, backgroundColor: '#59D3C8', color: 'black' }}
                                                flex="1"

                                            >
                                                Cancel
                                            </Button>
                                        </Stack>
                                    </Stack>
                                </form>
                            </Flex>
                        </TabPanel>
                        <TabPanel>
                            <Flex align="center" justify="center" direction="column">
                                <form onSubmit={handleSubmit}>
                                    <Stack spacing={4}>
                                        <FormControl>
                                            <FormLabel htmlFor="email">Email</FormLabel>
                                            <Input type="email" id="email" name="email" style={inputStyle} />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel htmlFor="password">Password</FormLabel>
                                            <Input type="password" id="password" name="password" style={inputStyle} />
                                        </FormControl>
                                        <Stack direction="row" spacing={4} display="flex" alignItems="center">
                                            <Button
                                                type="submit"
                                                style={{ ...buttonStyle, backgroundColor: '#F4CD76', color: 'black' }}
                                                flex="1"

                                            >
                                                Login
                                            </Button>
                                            <Button
                                                type="button"
                                                style={{ ...buttonStyle, backgroundColor: '#59D3C8', color: 'black' }}
                                                flex="1"
                                            >
                                                Cancel
                                            </Button>
                                        </Stack>
                                    </Stack>
                                </form>
                            </Flex>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Flex >
    );
};

export default AuthPage;