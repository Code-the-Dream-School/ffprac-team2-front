import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import { MultiSelect, useMultiSelect } from 'chakra-multiselect';

interface SubjectMultiselectsProps {
    name: string;
    email: string;
    education: string;
    about: string;
    experience: string;
}

const SubjectMultiselects: React.FC<SubjectMultiselectsProps> = (props) => {
    const { value, options, onChange } = useMultiSelect({
        value: ['Geometry'],
        options: [
            { label: 'math', value: 'math' },
            { label: 'algebra', value: 'algebra' },
            { label: 'Geometry', value: 'Geometry' },
        ],
    });
    return (
        <SimpleGrid minChildWidth="250px" spacing="40px">
            <Box>
                <Box maxW="250px" p="3px">
                    <MultiSelect
                        options={options}
                        value={value}
                        label="Grades"
                        onChange={onChange}
                    />
                </Box>
                <Box maxW="150px" p="3px">
                    <MultiSelect
                        name="Science"
                        options={options}
                        value={value}
                        label="Science"
                        onChange={onChange}
                    />
                </Box>
                <Box maxW="150px" p="3px">
                    <MultiSelect options={options} value={value} label="Math" onChange={onChange} />
                </Box>
            </Box>

            <Box>
                <Box maxW="150px" p="3px">
                    <MultiSelect
                        options={options}
                        value={value}
                        label="English"
                        onChange={onChange}
                    />
                </Box>

                <Box maxW="150px" p="3px">
                    <MultiSelect
                        options={options}
                        value={value}
                        label="Foreign Language"
                        onChange={onChange}
                    />
                </Box>
                <Box maxW="150px" p="3px">
                    <MultiSelect
                        options={options}
                        value={value}
                        label="Social Studies"
                        onChange={onChange}
                    />
                </Box>
            </Box>
        </SimpleGrid>
    );
};

export default SubjectMultiselects;
