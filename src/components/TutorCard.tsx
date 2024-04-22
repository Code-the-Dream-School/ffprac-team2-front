import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    Flex,
    Grid,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react';

import ConnectForm from './ConnectForm';
import React from 'react';
import { Tutor } from '../models/interfaces';
import iconEducation from '../assets/experience.png';
import iconExperience from '../assets/education.png';
import { theme } from '../util/theme';

const customAvatarStyle = {
    width: '90px',
    height: '90px',
};

export interface TutorCardProps {
    tutor: Tutor;
}

const TutorCard: React.FC<TutorCardProps> = ({ tutor }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleSendEmail = () => {
        const recipientEmail = tutor.userId?.email;
        const subject = encodeURIComponent('Tutoring inquiry');
        const body = encodeURIComponent('');

        window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    };

    const getButtonColor = (day: string) => {
        return tutor.availability.includes(day) ? 'green.400' : 'red.500';
    };

    return (
        <Box w="100%">
            {/* <Box borderWidth='0px' borderRadius='md' boxShadow='md' ml='70'> */}
            <Card maxW={{ base: '90%', md: '380px' }} bg={theme.colors.customWhite}>
                <Flex justify="flex-end" mb="1" mt="15px">
                    <ButtonGroup
                        gap={{ base: '5px', md: '10px' }}
                        display={{ base: 'grid', sm: 'grid', md: 'grid' }}
                        gridTemplateColumns={{ base: '1fr', md: 'auto auto' }}
                    >
                        {/* <IconButton
                            variant="outline"
                            h="35px"
                            colorScheme="teal"
                            aria-label="Send email"
                            icon={<EmailIcon />}
                        /> */}
                        <Button
                            variant="solid"
                            bg={theme.dashboardButtons.buttonYellow.bg}
                            mt={{ base: '10px', md: '0' }}
                            mx={{ base: '10px', md: '0', sm: '10px' }}
                            px={{ base: '30px', md: '20px', sm: '10px' }}
                            size={useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' })}
                            height={theme.dashboardButtons.height}
                            fontSize={theme.dashboardButtons.fontSize}
                            fontWeight={theme.dashboardButtons.fontWeight}
                            onClick={handleSendEmail}
                        >
                            Send email
                        </Button>
                        <Button
                            variant="solid"
                            bg={theme.dashboardButtons.buttonTeal.bg}
                            mt={{ base: '10px', md: '0' }}
                            mx={{ base: '30px', md: '20px', sm: '10px' }}
                            size={useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' })}
                            height={theme.dashboardButtons.height}
                            fontSize={theme.dashboardButtons.fontSize}
                            fontWeight={theme.dashboardButtons.fontWeight}
                            onClick={onOpen}
                        >
                            Connect with me
                        </Button>
                        <ConnectForm isOpen={isOpen} onClose={onClose} tutor={tutor} />
                    </ButtonGroup>
                </Flex>
                <CardBody>
                    <Stack spacing="2" textAlign="center">
                        <Heading
                            size="xs"
                            mb="2px"
                        >{`${tutor.userId.firstName} ${tutor.userId.lastName}`}</Heading>

                        <Box display="flex" alignItems="center">
                            <Avatar
                                borderRadius="full"
                                boxSize="100px"
                                style={customAvatarStyle}
                                src={tutor.avatar}
                            />
                            <Box ml="3">
                                <Flex direction="column">
                                    <Flex align="center">
                                        <Image
                                            src={iconEducation}
                                            alt="Education"
                                            w="20px"
                                            h="20px"
                                            mr="2"
                                        />
                                        <Text fontSize={theme.styles.global.body.fontSize}>
                                            {tutor.education}
                                        </Text>
                                    </Flex>
                                    <Flex align="center">
                                        <Image
                                            src={iconExperience}
                                            alt="Experience"
                                            w="20px"
                                            h="20px"
                                            mr="2"
                                        />
                                        <Text fontSize={theme.styles.global.body.fontSize} mr="5">
                                            {tutor.yearsOfExperience} years of teaching
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Box>
                        </Box>
                    </Stack>
                    <Text mt="4" w="100%" h="65px" fontSize={theme.dashboardButtons.fontSize}>
                        {tutor.about}
                    </Text>
                    <Box position="relative" mt="4" mb="4">
                        <Box borderBottom="1px solid gray" />
                        <Box
                            position="absolute"
                            left="50%"
                            transform="translateX(-50%)"
                            bottom="-5px"
                            width="40px"
                            height="5px"
                            bg="gray"
                            borderRadius="9999px"
                        />
                        <CardBody>
                            <Stack spacing="2" align="flex-start">
                                <Stack spacing="2" align="flex-start">
                                    {/* <Flex justify="flex-start">
                                        <Image
                                            src={iconExperience}
                                            alt="Experience"
                                            w="20px"
                                            h="20px"
                                            mr="5"
                                        />
                                        <Text fontSize={theme.styles.global.body.fontSize}>
                                            {tutor.education}
                                        </Text>
                                    </Flex>
                                    <Flex align="start">
                                        <Image
                                            src={iconEducation}
                                            alt="Education"
                                            w="20px"
                                            h="20px"
                                            mr="5"
                                        />
                                        <Text fontSize={theme.styles.global.body.fontSize}>
                                            {tutor.yearsOfExperience} years of teaching
                                        </Text>
                                    </Flex> */}
                                    <Text
                                        fontWeight={theme.dashboardButtons.fontWeight}
                                        fontSize={theme.styles.global.body.fontSize}
                                        color="#206A64"
                                    >
                                        Teaching skills
                                    </Text>
                                    <Text h="65px">
                                        {[
                                            ...tutor.MathSubject,
                                            ...tutor.ForeignLanguages,
                                            ...tutor.Science,
                                            ...tutor.English,
                                            ...tutor.SocialStudies,
                                        ]
                                            .filter((subject) => subject && subject.length > 0)
                                            .join(', ')}
                                    </Text>

                                    <Text
                                        fontWeight={theme.dashboardButtons.fontWeight}
                                        fontSize={theme.styles.global.body.fontSize}
                                        color="#206A64"
                                    >
                                        Grades
                                    </Text>
                                    <Text h="15px">{tutor.grades.join(', ')}</Text>
                                </Stack>
                                <Stack spacing="4" align="flex-start">
                                    {/* <Flex align="start">
                                        <CalendarIcon w="15px" h="15px" />
                                    </Flex> */}
                                    <Grid
                                        mt="5px"
                                        templateColumns={{
                                            base: 'repeat(2, 1fr)',
                                            sm: 'repeat(4, 1fr)',
                                            md: 'repeat(7, 1fr)',
                                        }}
                                        gap={1}
                                        justifyItems="center"
                                    >
                                        {[
                                            'Monday',
                                            'Tuesday',
                                            'Wednesday',
                                            'Thursday',
                                            'Friday',
                                            'Saturday',
                                            'Sunday',
                                        ].map((day, index) => (
                                            <Button
                                                key={index}
                                                variant="solid"
                                                bg={getButtonColor(day)}
                                                m="0"
                                                w="50%"
                                                h="20px"
                                                _hover={{ bg: getButtonColor(day) }}
                                            >
                                                <Text
                                                    color="white"
                                                    fontSize={theme.styles.global.body.fontSize}
                                                >
                                                    {day.slice(0, 3)}
                                                </Text>
                                            </Button>
                                        ))}
                                    </Grid>
                                </Stack>
                            </Stack>
                        </CardBody>
                    </Box>
                </CardBody>
            </Card>
        </Box>
    );
};

export default TutorCard;
