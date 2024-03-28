import { Box, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

import { theme } from '../util/theme';

// import React from 'react';

function TutorTable() {
    const data = [
        {
            parent: 'Alicia Morgan',
            student: 'Oliver',
            email: 'alicia@gmail.com',
            subject: 'Algebra',
            schedule: 'Tuesday',
        },
        {
            parent: 'Alicia Morgan',
            student: 'Kate',
            email: 'alicia@gmail.com',
            subject: 'Geometry',
            schedule: 'Monday',
        },
        {
            parent: 'Susanna Doe',
            student: 'Patrick',
            email: 'susanna@gmail.com',
            subject: 'Trigonometry',
            schedule: 'Wednesday',
        },
        {
            parent: 'Alexa Sater',
            student: 'Elizabeth',
            email: 'alexa@gmail.com',
            subject: 'Math',
            schedule: 'Thursday',
        },
        {
            parent: 'Alicia Morgan',
            student: 'Oliver',
            email: 'alicia@gmail.com',
            subject: 'Algebra',
            schedule: 'Tuesday',
        },
        {
            parent: 'Donna Kratz',
            student: 'Dominique',
            email: 'donna@gmail.com',
            subject: 'Geometry',
            schedule: 'Monday',
        },
        {
            parent: 'Bruce Williams',
            student: 'Maria',
            email: 'bruce@gmail.com',
            subject: 'Trigonometry',
            schedule: 'Monday',
        },
        {
            parent: 'Bruce Williams',
            student: 'Elizabeth',
            email: 'bruce@gmail.com',
            subject: 'Math',
            schedule: 'Thursday',
        },
    ];

    return (
        <Box>
            <Box overflowX="auto" overflowY="hidden" mt="50px" borderRadius="md" width="100%">
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
                            <Th>Email</Th>
                            <Th>Subject</Th>
                            <Th>Schedule</Th>
                        </Tr>
                    </Thead>
                    <Tbody fontSize="13px">
                        {data.map((row, index) => (
                            <Tr key={index}>
                                <Td>{row.parent}</Td>
                                <Td>{row.student}</Td>
                                <Td>
                                    <a href={`mailto:${row.email}`}>{row.email}</a>
                                </Td>
                                <Td>{row.subject}</Td>
                                <Td>{row.schedule}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </Box>
    );
}

export default TutorTable;
