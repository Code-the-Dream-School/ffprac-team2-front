import React, { useEffect, useState } from 'react';
import { Button, Stack, Flex, Spacer } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { Student } from '../models/interfaces';
import StudentCard from '../components/StudentCard';

const ParentDashboardPage: React.FC = () => {
  const [students, setStudents] = useState<Student[] | []>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_URL}students`);
        setStudents(response.data.students);
      } catch (error) {
        console.error('Error fetching products:', error);
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
      <Stack spacing="8">
        {students.map((student) => (
          <StudentCard key={student._id} student={student} />
        ))}
      </Stack>
    </>
  );
};

export default ParentDashboardPage;
