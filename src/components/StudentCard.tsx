import React from 'react';
import { Student } from '../models/interfaces';
import {
  Image,
  Box,
  Heading,
  Text,
  Button,
  HStack,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
  Spacer,
} from '@chakra-ui/react';
import girl from '../assets/girl.jpg';
import { EditIcon, CalendarIcon, EmailIcon, DeleteIcon } from '@chakra-ui/icons';

interface StudentCardProps {
  student: Student;
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  return (
    <Box boxShadow="md" p="6" rounded="md" bg="white" w="90%" m="1rem auto">
      <Flex gap="8">
        <HStack spacing="24px">
          <Image borderRadius="full" boxSize="250px" alt={student.name} src={girl} />
          <Box>
            <Heading as="h4" size="md">
              {student.name}
            </Heading>
            <Text fontSize="md">Grade {student.grade}</Text>
          </Box>
        </HStack>
        <Spacer />
        <VStack w="xl" position="relative">
          <TableContainer width="full">
            <Table variant="unstyled" size="lg">
              <Thead>
                <Tr>
                  <Th>Tutor</Th>
                  <Th>Subject</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td p="0">Patrick Hill</Td>
                  <Td p="0">Geometry</Td>
                  <Td p="0">
                    <CalendarIcon /> <EmailIcon /> <DeleteIcon />
                  </Td>
                </Tr>
                <Tr>
                  <Td p="0">Melissa Dragone</Td>
                  <Td p="0">French</Td>
                  <Td p="0">
                    <CalendarIcon /> <EmailIcon /> <DeleteIcon />
                  </Td>
                </Tr>
                <Tr>
                  <Td p="0">Roberta Simon</Td>
                  <Td p="0">English writing</Td>
                  <Td p="0">
                    <CalendarIcon /> <EmailIcon /> <DeleteIcon />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Button
            position="absolute"
            bottom="1rem"
            right="2rem"
            leftIcon={<EditIcon />}
            colorScheme="teal"
            size="lg"
            variant="solid"
          >
            Edit Student
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default StudentCard;
