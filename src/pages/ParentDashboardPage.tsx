import React, { useEffect, useState } from 'react';
import { Button, Stack, Flex, Spacer } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { Student } from '../models/interfaces';
import StudentCard from '../components/StudentCard';
import { getAllData } from '../util';

const ParentDashboardPage: React.FC = () => {
    const [students, setStudents] = useState<Student[] | []>([]);
    const [errMsg, setErrMsg] = useState<string | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getAllData(`${import.meta.env.VITE_REACT_URL}students`);
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
        <>
            <Flex>
                <Spacer />
                <Stack direction="row" spacing={4}>
                    <Button leftIcon={<AddIcon />} colorScheme="yellow" size="lg" variant="solid">
                        Add Student
                    </Button>
                </Stack>
            </Flex>
            {students && students.length > 0 ? (
                <Stack spacing="8">
                    {students.map((student) => (
                        <StudentCard key={student._id} student={student} />
                    ))}
                </Stack>
            ) : (
                <p>{errMsg}</p>
            )}
        </>
    );
};

export default ParentDashboardPage;
