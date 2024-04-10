import React from 'react';
import { Button, ButtonGroup, Flex, VStack, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    const toRegistration = () => {
        navigate(`/auth`);
    };

    return (
        <Flex direction="column" align="center" justify="center" w="full" h="100vh">
            <VStack spacing={8} align="stretch" w="full" maxW="container.md" mx="auto" zIndex="1">
                <Heading
                    as="h1"
                    size={{ base: 'xl', lg: '2xl' }}
                    textAlign="center"
                    sx={{
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
                    }}
                >
                    Empower Your Learning Journey
                </Heading>

                <Text
                    fontSize={{ base: 'lg', lg: '2xl', sm: 'mg' }}
                    textAlign="center"
                    fontWeight="bold"
                    mt={{ base: '1rem', sm: '0.5rem' }}
                    mb={{ base: '5rem', sm: '1rem' }}
                    sx={{
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
                    }}
                >
                    Find your perfect tutor today
                </Text>
                <ButtonGroup
                    gap={{ base: '4rem', sm: '2rem' }}
                    margin="0 auto"
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                    justifyContent="center"
                >
                    <Button
                        size="landing"
                        variant="buttonTeal"
                        width={{ base: '90%', sm: '50%', lg: '350px' }}
                        fontWeight="bold"
                        onClick={toRegistration}
                    >
                        I'm a parent
                    </Button>
                    <Button
                        size="landing"
                        variant="buttonYellow"
                        width={{ base: '90%', sm: '50%', lg: '350px' }}
                        fontWeight="bold"
                        onClick={toRegistration}
                    >
                        I'm a tutor
                    </Button>
                </ButtonGroup>
            </VStack>
            {/* <Box position="absolute" bottom="4" left="4">
                <Link
                    href="http://www.freepik.com/free-photo/-together-university-device-book-reading_1235750.htm"
                    color="white"
                    fontSize="10px"
                    isExternal
                >
                    Image by mindandi
                </Link>
            </Box> */}
        </Flex>
    );
};

export default LandingPage;
