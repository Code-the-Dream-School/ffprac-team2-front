import { Box, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

import { theme } from '../util/theme';

// import React from 'react';

function TutorDashboard() {
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
    ];

    return (
        <Box overflowX="auto" overflowY="scroll" mt="50px" height="400px">
            <Table
                variant="simple"
                width="100%"
                bg={theme.colors.customWhite}
                borderRadius="md"
                boxShadow="md"
            >
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
    );
}

export default TutorDashboard;
