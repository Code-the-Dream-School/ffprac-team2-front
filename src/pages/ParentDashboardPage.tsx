import React, { useEffect, useState } from 'react';
import { Button, Flex, Stack } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { Student } from '../models/interfaces';
import StudentCard from '../components/StudentCard';
import { getAllData } from '../util';
const ParentDashboardPage: React.FC = () => {
    const [students, setStudents] = useState<Student[] | []>([]);
    const [errMsg, setErrMsg] = useState<string | null>(null);

    const token = localStorage.getItem('token');

    const headers = {
        Authorization: `Bearer ${token}`,
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getAllData(`${import.meta.env.VITE_REACT_URL}students`, headers);
                console.log(data);
                setStudents(data.students);
            } catch (error) {
                console.error(error);
                setErrMsg('Something went wrong. Please try again later.');
            }
        };
        fetchProduct();
    }, []);
    return (
        <Flex direction="column" justify="flex-end" w="full">
            <Stack spacing={4} direction="row" align="center" justify="end" w="full" display="flex">
                <Button leftIcon={<AddIcon />} colorScheme="yellow" size="lg" variant="solid">
                    Add Student
                </Button>
            </Stack>
            {/* <StudentCard student={{ name: 'Ira', grade: '6', _id: 'fgskjg' }} /> */}
            {students && students.length > 0 ? (
                <Stack direction="column" spacing="8">
                    {students.map((student) => (
                        <StudentCard key={student._id} student={student} />
                    ))}
                </Stack>
            ) : (
                <p>{errMsg}</p>
            )}
        </Flex>
    );
};
export default ParentDashboardPage;
