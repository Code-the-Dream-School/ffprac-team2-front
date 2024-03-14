import { Avatar, Box, Button, ButtonGroup, Card, CardBody, Flex, Grid, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react';

import React from 'react';
import iconCalendar from '../assets/calendar.png';
import iconEducation from '../assets/experience.png'
import iconExperience from '../assets/education.png';
import { theme } from '../util/theme';

const customAvatarStyle = {
  width: "90px",
  height: "90px",
};

// const TutorCard: React.FC<TutorCardProps> = ({ tutor }) => { 
const TutorCard: React.FC = () => {

  

  return (
<Box borderWidth='1px' borderRadius='md' boxShadow='md' ml='70'>
  <Card maxW={{ base: '90%', md: '500px' }} bg={theme.colors.customWhite}>
    <Flex justify="flex-end" mb="4" mt='20px'>
  <ButtonGroup
    gap={{ base: '10px', md: '20px' }}
    display={{ base: "grid", md: "flex" }} 
            gridTemplateColumns={{ base: "1fr", md: "auto auto" }}       
  >
    <Button
      variant='solid'
      bg={theme.dashboardButtons.buttonYellow.bg}
      mt={{ base: '15px', md: '0' }} 
      mx={{ base: '15px', md: '0' }} 
      px={{ base: '30px', md: '20px', sm: '10px' }}
      size={useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' })}
      height={theme.dashboardButtons.height}
      fontSize={theme.dashboardButtons.fontSize}
      fontWeight={theme.dashboardButtons.fontWeight}   
    >
      Send email
    </Button>
    <Button
      variant='solid'
      bg={theme.dashboardButtons.buttonTeal.bg}
      mt={{ base: '15px', md: '0' }} 
      mx={{ base: '30px', md: '20px', sm: '10px' }}
      size={useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' })}
      height={theme.dashboardButtons.height}
      fontSize={theme.dashboardButtons.fontSize}
      fontWeight={theme.dashboardButtons.fontWeight}
    >
      Connect with me
    </Button>
  </ButtonGroup>
</Flex>
    <CardBody>
      <Stack spacing='2' textAlign='center'>
        <Heading size='xs'>Patrick Hill</Heading>
        <Avatar
          // src='../assets/patrick.jpg'
          borderRadius='full'
          boxSize='100px'
          mx='auto'
          style={customAvatarStyle}
        />
      </Stack>
          <Text mt='4'
            fontSize={theme.dashboardButtons.fontSize}>
            Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunnim ad minim veniam, quis nost
            quip ex ea commodo consequat
          </Text>
    </CardBody>
    <CardBody>
      <Stack spacing='2' align='flex-start'>
        <Stack spacing='2' align='flex-start'>
          <Flex justify="flex-start">
            <Image src={iconExperience} alt='Experience' w='20px' h='20px' mr='5' />
            <Text fontSize={theme.styles.global.body.fontSize}>Master of Art at  Loyola University</Text>
          </Flex>
          <Flex align="start">
            <Image src={iconEducation} alt='Education' w='20px' h='20px' mr='5' />
                <Text fontSize={theme.styles.global.body.fontSize}>
                  5 years of teaching
                </Text>
          </Flex>
              <Text fontWeight={theme.dashboardButtons.fontWeight}
                    fontSize={theme.styles.global.body.fontSize} >
                Subjects
              </Text>
              <Text >Algebra, Geometry, Calculus</Text>
              <Text fontWeight={theme.dashboardButtons.fontWeight}
                fontSize={theme.styles.global.body.fontSize} >Grades
              </Text>
              <Text >8, 9, 10, 11</Text>
        </Stack>
        <Stack spacing='4' align='flex-start'>
          <Flex align="start">
            <Image src={iconCalendar} alt='Calendar' w='20px' h='20px' mr='2' />
          </Flex>
        <Grid
              templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(7, 1fr)' }}
              gap="1"
              justifyItems="center"
        >
            <Button variant='solid' bg="green.400" m="0" w="80%" _hover={{ bg: "green.400" }}>
              <Text color="white" pointer-events="none" fontSize={theme.styles.global.body.fontSize}>Mon</Text>
            </Button>
            <Button variant="solid" bg="green.400" m="0" w="80%" _hover={{ bg: "green.400" }}>
              <Text color="white" fontSize={theme.styles.global.body.fontSize} >Tue</Text>
            </Button>
            <Button variant="solid" bg="green.400" m="0" w="80%" _hover={{ bg: "green.400" }}>
              <Text color="white" fontSize={theme.styles.global.body.fontSize}>Wed</Text>
            </Button>
            <Button variant="solid" bg="green.400" m="0" w="80%" _hover={{ bg: "green.400" }}>
              <Text color="white" fontSize={theme.styles.global.body.fontSize}>Thu</Text>
            </Button>
            <Button variant="solid" bg="red.500" m="0" w="80%" _hover={{ bg: "red.500" }}>
              <Text color="white" fontSize={theme.styles.global.body.fontSize}>Fri</Text>
            </Button>
            <Button variant="solid" bg="red.500" m="0" w="80%" _hover={{ bg: "red.500" }}>
              <Text color="white" fontSize={theme.styles.global.body.fontSize}>Sat</Text>
            </Button>
            <Button variant="solid" bg="red.500" m="0" w="80%" _hover={{ bg: "red.500" }}>
              <Text color="white" fontSize={theme.styles.global.body.fontSize}>Sun</Text>
            </Button>
        </Grid>
        </Stack>
      </Stack>
    </CardBody>
  </Card>
</Box>
  );
};

export default TutorCard;
