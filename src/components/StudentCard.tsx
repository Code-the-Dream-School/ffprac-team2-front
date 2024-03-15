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
} from '@chakra-ui/react';
import avatar from '../assets/avatar.jpg';
import { EditIcon, CalendarIcon, EmailIcon, DeleteIcon } from '@chakra-ui/icons';
interface StudentCardProps {
    student: Student;
}
const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
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
                <Avatar size={{ base: 'xl', md: '2xl' }} name={student.name} src={avatar} />
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
                            <Tr>
                                <Td p="0">Patrick Hill</Td>
                                <Td p="0">Geometry</Td>
                                <Td p="0">
                                    <Flex gap="4">
                                        <CalendarIcon />
                                        <EmailIcon />
                                        <DeleteIcon />
                                    </Flex>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td p="0">Melissa Dragone</Td>
                                <Td p="0">French</Td>
                                <Td p="0">
                                    <Flex gap="4">
                                        <CalendarIcon />
                                        <EmailIcon />
                                        <DeleteIcon />
                                    </Flex>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td p="0">Roberta Simon</Td>
                                <Td p="0">English writing</Td>
                                <Td p="0">
                                    <Flex gap="4">
                                        <CalendarIcon />
                                        <EmailIcon />
                                        <DeleteIcon />
                                    </Flex>
                                </Td>
                            </Tr>
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
                    >
                        Edit Student
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    );
};
export default StudentCard;
