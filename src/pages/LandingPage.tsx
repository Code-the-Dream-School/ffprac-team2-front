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
        h="90vh"
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
          //bg: 'white',
          opacity: '0.5', // transparency
        }}
      />

      {/* Content */}
      <VStack spacing={8} align="stretch" w="full" maxW="container.md" mx="auto" zIndex="1">
        <Heading 
          as="h1" 
          size="2xl" 
          textAlign="center"
          mb="1rem"
          sx={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'
          }}>
          Empower Your Learning Journey
        </Heading>

        <Text
          fontSize="2xl"
          textAlign="center"
          fontWeight="bold"
          mb="4rem"
          sx={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'
          }}
        >
          Find your perfect tutor today
        </Text>
        <Box width="350" gap="2rem" margin="0 auto" display="flex" alignItems="center" flexDirection="column" justifyContent="center">

          <Button size="landing" variant="buttonTeal" fontWeight="bold" onClick={toRegistration}>
            {parentButtonText}
          </Button>
          <Button size="landing" variant="buttonYellow" fontWeight="bold" onClick={toRegistration}>
            {tutorButtonText}
          </Button>
        </Box>

      </VStack>
    </Flex>
  );
};

export default LandingPage;
