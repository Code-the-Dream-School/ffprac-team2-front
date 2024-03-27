import React from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    VStack,
    Heading,
    Text,
    useBreakpointValue,
    Link,
} from '@chakra-ui/react';
import backgroundImage from '../assets/new_bg.jpg';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    const toRegistration = () => {
        navigate(`/auth`);
    };

    const bgSize = useBreakpointValue({ base: '100% 100%', sm: 'cover' });

    return (
        <Flex
            direction="column"
            align="center"
            justify="center"
            w="full"
            h="100vh"
            position="relative"
        >
            {/* Background Image */}
            <Box
                w="full"
                h="full"
                bgImage={`url(${backgroundImage})`}
                bgSize={bgSize}
                bgPos="center"
                bgRepeat="no-repeat"
                position="absolute"
                zIndex="-1"
                _after={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    bg: 'white',
                    opacity: '0.4', // transparency
                }}
            />
            {/* Content */}
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
            <Box position="absolute" bottom="4" left="4" fontSize="sm">
                <Link href="https://www.freepik.com/free-photo/bonding-together-university-device-book-reading_1235750.htm#fromView=search&page=2&position=41&uuid=bca06273-6a4d-4be6-b816-8e3504991bb8" color="white" fontSize="sm" isExternal>
                    Image by mindandi
                </Link>
            </Box>
        </Flex>
    );
};

export default LandingPage;
