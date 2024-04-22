import { Box, Button, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { BsChevronDown } from 'react-icons/bs';
import React from 'react';
import { Spinner } from '@chakra-ui/react';
import TableSearch from '../components/TableSearch';
import { TutorStudents } from '../models/interfaces';
import TutorTable from '../components/TutorTable';
import axios from 'axios';
import { getHeaders } from '../util';
import { theme } from '../util/theme';

const TutorDashboard: React.FC = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [students, setStudents] = useState<TutorStudents[]>([]);
    const [loading, setLoading] = useState(true);

    const [studentQuery, setStudentQuery] = useState<string>('');
    const [parentQuery, setParentQuery] = useState<string>('');
    const [subjectQuery, setSubjectQuery] = useState<string>('');

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_REACT_URL}students/my-students`,
                    { headers: getHeaders() }
                );
                setStudents(res.data.students);
                setLoading(false);
                console.log('Students:', res.data.students);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchStudents();
    }, []);

    return (
        <Flex w="full" direction="column">
            <Box display={{ base: 'block', md: 'none' }} width="100%" mt="50px">
                <Button
                    bg={theme.colors.customYellow}
                    rightIcon={<BsChevronDown />}
                    onClick={() => setShowSearch(!showSearch)}
                    width="100%"
                >
                    Search
                </Button>
                {showSearch && (
                    <TableSearch
                        studentQuery={studentQuery}
                        setStudentQuery={setStudentQuery}
                        parentQuery={parentQuery}
                        setParentQuery={setParentQuery}
                        subjectQuery={subjectQuery}
                        setSubjectQuery={setSubjectQuery}
                    />
                )}
            </Box>
            <Flex direction={{ base: 'column', md: 'row' }}>
                <Box
                    display={{ base: 'none', md: 'block' }}
                    width={{ base: '100%', md: 'auto' }}
                    mr="20px"
                >
                    <TableSearch
                        studentQuery={studentQuery}
                        setStudentQuery={setStudentQuery}
                        parentQuery={parentQuery}
                        setParentQuery={setParentQuery}
                        subjectQuery={subjectQuery}
                        setSubjectQuery={setSubjectQuery}
                    />
                </Box>
                <Box
                    flex="1"
                    overflowX={{ base: 'auto', md: 'unset' }}
                    overflowY="hidden"
                    mt={{ base: '0', md: '0' }}
                >
                    {loading ? (
                        <Spinner
                            thickness="4px"
                            speed="0.65s"
                            emptyColor="gray.200"
                            color="blue.500"
                            size="xl"
                        />
                    ) : (
                        <>
                            {students.length === 0 ? (
                                <Box textAlign="center" mt="20px" fontSize="18px">
                                    No students found. Please make sure your profile is fully
                                    complete to be appeared in search results and enable parents to
                                    connect with you.
                                </Box>
                            ) : (
                                <TutorTable
                                    students={students}
                                    studentQuery={studentQuery}
                                    parentQuery={parentQuery}
                                    subjectQuery={subjectQuery}
                                />
                            )}
                        </>
                    )}
                </Box>
            </Flex>
        </Flex>
    );
};
export default TutorDashboard;
