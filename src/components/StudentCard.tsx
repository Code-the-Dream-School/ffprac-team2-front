import React from 'react';
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
} from '@chakra-ui/react';
import avatar from '../assets/avatar.jpg';
import { EditIcon, CalendarIcon, EmailIcon, DeleteIcon } from '@chakra-ui/icons';
import StudentForm from './StudentForm';
import { headers } from '../util';
import axios from 'axios';

interface StudentCardProps {
    student: Student;
    setNeedUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}
const StudentCard: React.FC<StudentCardProps> = ({ student, setNeedUpdate }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const studentImage = student.image ? student.image : avatar;

    const handleDeleteTutor = async (tutorId: string, subject: string) => {
        try {
            const response = await axios.patch(
                `${import.meta.env.VITE_REACT_URL}students/${student?._id}`,
                { tutorToRemove: { tutorId, subject } },
                { headers }
            );
            setNeedUpdate(true);
            console.log(response);
        } catch (error) {
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
                        <Tbody>
                            {student.tutorInfo &&
                                student.tutorInfo?.length > 0 &&
                                student.tutorInfo?.map((element) => (
                                    <Tr key={element.tutorId}>
                                        <Td p="0">{element.tutorName}</Td>
                                        <Td p="0">{element.subject}</Td>
                                        <Td p="0">
                                            <Flex gap="4">
                                                <CalendarIcon />
                                                <EmailIcon />
                                                <DeleteIcon
                                                    onClick={() =>
                                                        handleDeleteTutor(
                                                            element.tutorId,
                                                            element.subject
                                                        )
                                                    }
                                                />
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
