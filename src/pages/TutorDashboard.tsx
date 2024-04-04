// @ts-nocheck

import { Box, Button, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { BsChevronDown } from 'react-icons/bs';
import TableSearch from '../components/TableSearch';
import TutorTable from '../components/TutorTable';
import axios from 'axios';
import { theme } from '../util/theme';

function TutorDashboard() {
    const [showSearch, setShowSearch] = useState(false);
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudents = async () => {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            try {
                const res = await axios
                    .get(`${import.meta.env.VITE_REACT_URL}students/my-students`, config)
                    .then((res) => {
                        setStudents(res.data.students);
                        setLoading(false);
                        console.log('Students:', res.data.students);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                console.log(res);
            } catch (error) {
                console.error(error);
            }
        };
        fetchStudents();
    }, []);

    return (
        <Flex direction="column">
            <Box display={{ base: 'block', md: 'none' }} width="100%" mt="50px">
                <Button
                    bg={theme.colors.customYellow}
                    rightIcon={<BsChevronDown />}
                    onClick={() => setShowSearch(!showSearch)}
                    width="100%"
                >
                    Search
                </Button>
                {showSearch && <TableSearch />}
            </Box>
            <Flex direction={{ base: 'column', md: 'row' }}>
                <Box
                    display={{ base: 'none', md: 'block' }}
                    width={{ base: '100%', md: 'auto' }}
                    mr="20px"
                >
                    <TableSearch />
                </Box>
                <Box
                    flex="1"
                    overflowX={{ base: 'auto', md: 'unset' }}
                    overflowY="hidden"
                    mt={{ base: '0', md: '0' }}
                >
                    <TutorTable students={students} />
                </Box>
            </Flex>
        </Flex>
    );
}

export default TutorDashboard;
