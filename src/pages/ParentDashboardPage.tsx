import React, { useEffect, useState } from 'react';
import { Button, Flex, Heading, Spinner, Stack, useDisclosure } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { Student } from '../models/interfaces';
import StudentCard from '../components/StudentCard';
import { getAllData } from '../util';
import StudentForm from '../components/StudentForm';
const ParentDashboardPage: React.FC = () => {
    const [students, setStudents] = useState<Student[] | []>([]);
    const [errMsg, setErrMsg] = useState<string | null>(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [needUpdate, setNeedUpdate] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const data = await getAllData(`${import.meta.env.VITE_REACT_URL}students`);
                console.log(data);
                setStudents(data.students);
                setNeedUpdate(false);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setErrMsg('Something went wrong. Please try again later.');
                setIsLoading(false);
            }
        };
        fetchStudent();
    }, [needUpdate]);
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
                <StudentForm
                    isOpenForm={isOpen}
                    onCloseForm={onClose}
                    title="Add Student"
                    student={null}
                    setNeedUpdate={setNeedUpdate}
                />
            </Stack>
            {/* <StudentCard student={{ name: 'Ira', grade: '6', _id: 'fgskjg' }} /> */}
            {isLoading && (
                <Flex justifyContent="center" alignItems="center">
                    <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="#59D3C8"
                        size="xl"
                    />
                </Flex>
            )}
            {students && students.length > 0 ? (
                <Stack direction="column">
                    {students.map((student) => (
                        <StudentCard
                            key={student._id}
                            student={student}
                            setNeedUpdate={setNeedUpdate}
                        />
                    ))}
                </Stack>
            ) : (
                <Flex justifyContent="center" alignItems="center">
                    {!errMsg && students.length === 0 ? (
                        <Heading size="md">You haven't add student yet.</Heading>
                    ) : (
                        <Heading size="md">{errMsg}</Heading>
                    )}
                </Flex>
            )}
        </Flex>
    );
};
export default ParentDashboardPage;
