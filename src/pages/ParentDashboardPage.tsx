import React, { useEffect, useState } from 'react';
import { Button, Flex, Stack, useDisclosure } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { Student } from '../models/interfaces';
import StudentCard from '../components/StudentCard';
import { getAllData } from '../util';
import StudentForm from '../components/StudentForm';
const ParentDashboardPage: React.FC = () => {
    const [students, setStudents] = useState<Student[] | []>([]);
    const [errMsg, setErrMsg] = useState<string | null>(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const data = await getAllData(`${import.meta.env.VITE_REACT_URL}students`);
                console.log(data);
                setStudents(data.students);
            } catch (error) {
                console.error(error);
                setErrMsg('Something went wrong. Please try again later.');
            }
        };
        fetchStudent();
    }, []);
    return (
        <Flex direction="column" justify="flex-end" w="full">
            <Stack spacing={4} direction="row" align="center" justify="end" w="full" display="flex">
                <Button
                    leftIcon={<AddIcon />}
                    colorScheme="yellow"
                    size="lg"
                    variant="solid"
                    onClick={onOpen}
                >
                    Add Student
                </Button>
                <StudentForm isOpen={isOpen} onClose={onClose} title="Add Student" />
            </Stack>
            {/* <StudentCard student={{ name: 'Ira', grade: '6', _id: 'fgskjg' }} /> */}
            {students && students.length > 0 ? (
                <Stack direction="column">
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
