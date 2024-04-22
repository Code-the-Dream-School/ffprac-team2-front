import { Avatar, Box, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

import React from 'react';
import { TutorStudents } from '../models/interfaces';
import { theme } from '../util/theme';

type TutorTableProps = {
    students: TutorStudents[];
    studentQuery: string;
    parentQuery: string;
    subjectQuery: string;
};

const TutorTable: React.FC<TutorTableProps> = ({
    students,
    studentQuery,
    parentQuery,
    subjectQuery,
}) => {
    const filteredStudents = students.filter(
        (student) =>
            student.name.toLowerCase().includes(studentQuery.toLowerCase()) &&
            student.parent.toLowerCase().includes(parentQuery.toLowerCase()) &&
            student.subject.toLowerCase().includes(subjectQuery.toLowerCase())
    );

    return (
        <Box>
            <Box overflowX="auto" overflowY="hidden" mt="20px" borderRadius="md" width="100%">
                <Table variant="striped" bg={theme.colors.customWhite}>
                    <Thead>
                        <Tr
                            bg={theme.dashboardButtons.buttonTeal.bg}
                            fontWeight={theme.dashboardButtons.fontWeight}
                            color="black"
                            borderRadius="md"
                        >
                            <Th>Parent</Th>
                            <Th>Student</Th>
                            <Th>Avatar</Th>
                            <Th>Email</Th>
                            <Th>Subject</Th>
                            <Th>Schedule</Th>
                        </Tr>
                    </Thead>
                    <Tbody fontSize="13px">
                        {filteredStudents.map((student, index) => (
                            <Tr key={index}>
                                <Td>{student.parent}</Td>
                                <Td>{student.name}</Td>
                                <Td>
                                    <Avatar src={student.image} />
                                </Td>
                                <Td>
                                    <a href={`mailto:${student.email}`}>{student.email}</a>
                                </Td>
                                <Td>{student.subject}</Td>
                                <Td>{student.availability}</Td>
                            </Tr>
                        ))}
                        {filteredStudents.length === 0 && (
                            <Tr>
                                <Td colSpan={5} textAlign="center">
                                    No matching results found, try again
                                </Td>
                            </Tr>
                        )}
                    </Tbody>
                </Table>
            </Box>
        </Box>
    );
};

export default TutorTable;
