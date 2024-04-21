import { Box, Button, Checkbox, FormControl } from '@chakra-ui/react';
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
        <Box p="4px" bg="white" w="225px" shadow="10px" borderRadius="lg" mt="20px">
            <FormControl w="100px" mt="10px" mb="10px" ml="10px">
                <Button onClick={toggleGrades} w="200px" fontSize="14px" h="30px" fontWeight="700">
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
