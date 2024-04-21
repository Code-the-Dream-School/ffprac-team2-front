import { Box, Button, Checkbox, FormControl, Icon } from '@chakra-ui/react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import React, { useState } from 'react';

interface GradesFilterProps {
    onSelectGrades: (grades: string[]) => void;
}

const GradesFilter: React.FC<GradesFilterProps> = ({ onSelectGrades }) => {
    const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
    const [showGrades, setShowGrades] = useState<boolean>(false);

    const toggleGrades = () => {
        setShowGrades((prevState) => !prevState);
    };

    const handleGradeChange = (grade: string) => {
        const updatedGrades = selectedGrades.includes(grade)
            ? selectedGrades.filter((g) => g !== grade)
            : [...selectedGrades, grade];
        setSelectedGrades(updatedGrades);
        onSelectGrades(updatedGrades);
    };

    return (
        <Box p="1px" bg="white" w="170px" shadow="10px" borderRadius="md" mt="10px">
            <FormControl w="100px" mt="10px" mb="10px" ml="10px">
                <Button
                    onClick={toggleGrades}
                    w="150px"
                    fontSize="14px"
                    h="30px"
                    fontWeight="700"
                    rightIcon={
                        showGrades? <Icon as={FiChevronUp} /> : <Icon as={FiChevronDown} />
                    }
                >
                    Grades
                </Button>
            </FormControl>
            {showGrades && (
                <Box mt="10px" ml="10px">
                    {['K', ...Array.from({ length: 12 }, (_, i) => i + 1)].map((grade) => (
                        <FormControl key={grade} mb="5px">
                            <Checkbox
                                value={grade.toString()}
                                isChecked={selectedGrades.includes(grade.toString())}
                                onChange={() => handleGradeChange(grade.toString())}
                            >
                                {grade}
                            </Checkbox>
                        </FormControl>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default GradesFilter;
