import React, { useState } from 'react';
import { Student } from '../models/interfaces';
import {
    Heading,
    Text,
    Button,
    Flex,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Avatar,
    Card,
    CardBody,
    CardFooter,
    Stack,
    useDisclosure,
    Spinner,
} from '@chakra-ui/react';
import avatar from '../assets/avatar.jpg';
import { EditIcon, CalendarIcon, EmailIcon } from '@chakra-ui/icons';
import StudentForm from './StudentForm';
import { headers } from '../util';
import axios from 'axios';
import AlertPopUp from './AlertPopUp';

interface StudentCardProps {
    student: Student;
    setNeedUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}
const StudentCard: React.FC<StudentCardProps> = ({ student, setNeedUpdate }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const studentImage = student.image ? student.image : avatar;
    const [isLoading, setIsLoading] = useState(false);

    const handleDeleteTutor = async (tutorId: string, subject: string) => {
        try {
            setIsLoading(true);
            const response = await axios.patch(
                `${import.meta.env.VITE_REACT_URL}students/${student?._id}`,
                { tutorToRemove: { tutorId, subject } },
                { headers }
            );
            setNeedUpdate(true);
            setIsLoading(false);
            console.log(response);
        } catch (error) {
            setIsLoading(false);
            console.error(error);
        }
    };

    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
            display={'flex'}
            m={'1rem 0'}
        >
            <Stack
                direction={{ base: 'row', sm: 'column', md: 'row' }}
                m={{ base: 'auto' }}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                w={{ base: '100%', sm: '30%' }}
            >
                <Avatar size={{ base: 'xl', md: '2xl' }} name={student.name} src={studentImage} />
                <Stack direction={{ base: 'row', sm: 'column' }}>
                    <Heading as="h4" size="md">
                        {student.name}
                    </Heading>
                    <Text fontSize="md">Grade {student.grade}</Text>
                </Stack>
            </Stack>

            <Stack
                w={{ base: '100%', sm: '75%' }}
                display={'flex'}
                justifyContent={'flex-end'}
                alignItems={'flex-end'}
            >
                <CardBody w={{ base: '100%', md: '80%' }}>
                    <Table variant="unstyled" size="lg">
                        <Thead>
                            <Tr>
                                <Th>Tutor</Th>
                                <Th>Subject</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        {isLoading && (
                            <Flex justifyContent="center" alignItems="center">
                                <Spinner
                                    thickness="4px"
                                    speed="0.65s"
                                    emptyColor="gray.200"
                                    color="#59D3C8"
                                    size="xl"
                                />
                            </Flex>
                        )}
                        <Tbody>
                            {student.tutorInfo &&
                                student.tutorInfo?.length > 0 &&
                                student.tutorInfo?.map((element) => (
                                    <Tr key={element.tutorId + element.subject}>
                                        <Td fontSize="md" p="0">
                                            {element.tutorName}
                                        </Td>
                                        <Td fontSize="md" p="0">
                                            {element.subject}
                                        </Td>
                                        <Td p="0">
                                            <Flex gap="4">
                                                <Button backgroundColor="white">
                                                    <CalendarIcon w="15px" h="15px" />
                                                </Button>
                                                <Button backgroundColor="white">
                                                    <EmailIcon w="18px" h="18px" />
                                                </Button>

                                                {student && (
                                                    <AlertPopUp
                                                        title="Remove subject from student"
                                                        bgColor="white"
                                                        onClick={() =>
                                                            handleDeleteTutor(
                                                                element.tutorId,
                                                                element.subject
                                                            )
                                                        }
                                                    />
                                                )}
                                            </Flex>
                                        </Td>
                                    </Tr>
                                ))}
                        </Tbody>
                    </Table>
                </CardBody>

                <CardFooter display={'flex'} alignItems={'flex-end'} justifyContent={'flex-end'}>
                    <Button
                        leftIcon={<EditIcon />}
                        backgroundColor="#59D3C8"
                        size="lg"
                        variant="solid"
                        color="black"
                        onClick={onOpen}
                    >
                        Edit Student
                    </Button>
                    <StudentForm
                        isOpenForm={isOpen}
                        onCloseForm={onClose}
                        title="Edit Student"
                        student={student}
                        setNeedUpdate={setNeedUpdate}
                    />
                </CardFooter>
            </Stack>
        </Card>
    );
};
export default StudentCard;
