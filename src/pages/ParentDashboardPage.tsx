import React, { useEffect, useState } from 'react';
import { Button, Flex, Heading, Stack, useDisclosure } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { Student } from '../models/interfaces';
import StudentCard from '../components/StudentCard';
import StudentForm from '../components/StudentForm';
import { useGlobal } from '../context/useGlobal';
import { getHeaders } from '../util';
import AppLoader from '../components/AppLoader';
import axios from 'axios';

const ParentDashboardPage: React.FC = () => {
    const [errMsg, setErrMsg] = useState<string | null>(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [needUpdate, setNeedUpdate] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { students, dispatch } = useGlobal();

    useEffect(() => {
        const fetchStudent = async () => {
            if (students?.length <= 0 || needUpdate || isLoading) {
                try {
                    const res = await axios.get(`${import.meta.env.VITE_REACT_URL}students`, {
                        headers: getHeaders(),
                    });
                    const data = await res.data;
                    dispatch({ type: 'SET_STUDENTS', payload: data.students });
                    setNeedUpdate(false);
                    setIsLoading(false);
                } catch (error) {
                    console.error(error);
                    setErrMsg('Something went wrong. Please try again later.');
                    setIsLoading(false);
                }
            }
        };
        fetchStudent();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [needUpdate]);
    return (
        <Flex direction="column" justify="flex-end" w="full" my="20px">
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
            {isLoading && <AppLoader />}
            {students && students.length > 0 ? (
                <Stack direction="column">
                    {students.map((student: Student) => (
                        <StudentCard
                            key={student._id}
                            student={student}
                            setNeedUpdate={setNeedUpdate}
                        />
                    ))}
                </Stack>
            ) : (
                <Flex justifyContent="center" alignItems="center">
                    {!errMsg && students !== null && students.length <= 0 ? (
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
