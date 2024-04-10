import { Box, FormLabel, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

import React from 'react';
import { Search2Icon } from '@chakra-ui/icons';
import { TableSearchProps } from '../models/interfaces';
import { theme } from '../util/theme';

const TableSearch: React.FC<TableSearchProps> = ({
    studentQuery,
    setStudentQuery,
    parentQuery,
    setParentQuery,
    subjectQuery,
    setSubjectQuery,
}) => {
    const handleStudentQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStudentQuery(event.target.value);
    };

    const handleParentQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParentQuery(event.target.value);
    };

    const handleSubjectQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubjectQuery(event.target.value);
    };

    return (
        <Box mt="50px" bg="#F5E0B1" p="4" borderRadius="md" width="100%">
            <form>
                <Box mb="2">
                    <FormLabel fontSize={theme.dashboardButtons.fontSize}>Student search</FormLabel>
                    <InputGroup>
                        <Input
                            bg={theme.colors.customWhite}
                            fontSize={theme.dashboardButtons.fontSize}
                            placeholder="Search by student"
                            value={studentQuery}
                            onChange={handleStudentQueryChange}
                        />
                        <InputRightElement>
                            <Search2Icon color="gray.300" />
                        </InputRightElement>
                    </InputGroup>
                </Box>
                <Box mb="4">
                    <FormLabel fontSize={theme.dashboardButtons.fontSize}>Parent search</FormLabel>
                    <InputGroup>
                        <Input
                            bg={theme.colors.customWhite}
                            placeholder="Search by parent"
                            fontSize={theme.dashboardButtons.fontSize}
                            value={parentQuery}
                            onChange={handleParentQueryChange}
                        />
                        <InputRightElement>
                            <Search2Icon color="gray.300" />
                        </InputRightElement>
                    </InputGroup>
                </Box>
                <Box mb="4">
                    <FormLabel fontSize={theme.dashboardButtons.fontSize}>Subject search</FormLabel>
                    <InputGroup>
                        <Input
                            bg={theme.colors.customWhite}
                            placeholder="Search by subject"
                            fontSize={theme.dashboardButtons.fontSize}
                            value={subjectQuery}
                            onChange={handleSubjectQueryChange}
                        />
                        <InputRightElement>
                            <Search2Icon color="gray.300" />
                        </InputRightElement>
                    </InputGroup>
                </Box>
            </form>
        </Box>
    );
};

export default TableSearch;
