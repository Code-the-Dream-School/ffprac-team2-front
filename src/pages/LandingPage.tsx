import React from 'react';
import { Box, Button, ButtonGroup, Flex, VStack, Heading, Text } from '@chakra-ui/react';
import backgroundImage from '../assets/background_photo.png';
import { useNavigate } from 'react-router-dom';

interface LandingPage {
  parentButtonText: string;
  tutorButtonText: string;
}

const LandingPage: React.FC<LandingPage> = ({ parentButtonText, tutorButtonText }) => {

  const navigate = useNavigate();

  const toRegistration = () => {
    navigate(`/auth`);
  };

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      w="full"
      h="100vh"
      position="relative"
    >
      {/* Background Image */}
      <Box
        w="full"
        h={{ base: "90vh", md: "80vh" }}
        bgImage={`url(${backgroundImage})`}
        bgSize="cover"
        bgPos="center"
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
          size={{ base: "xl", md: "2xl" }}
          textAlign="center"
          sx={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)'
          }}>
          Empower Your Learning Journey
        </Heading>

        <Text
          as="h3"
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
          textAlign="center"
          fontWeight="bold"
          mt="1rem"
          mb="5rem"
          sx={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)'
          }}
        >
          Find your perfect tutor today
        </Text>
        <ButtonGroup
          gap={{ base: "4rem", sm: "3rem" }}
          margin="0 auto"
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center">

          <Button
            size="landing"
            variant="buttonTeal"
            width={{ base: "90%", sm: "80%", lg: "350px" }}
            fontWeight="bold"
            onClick={toRegistration}>
            {parentButtonText}
          </Button>
          <Button
            size="landing"
            variant="buttonYellow"
            width={{ base: "90%", sm: "80%", lg: "350px" }}
            fontWeight="bold"
            onClick={toRegistration}>
            {tutorButtonText}
          </Button>
        </ButtonGroup>

      </VStack>
    </Flex>
  );
};

export default LandingPage;

