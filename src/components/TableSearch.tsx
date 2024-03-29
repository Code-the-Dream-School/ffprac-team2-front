import { Box, FormLabel, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

import { Search2Icon } from '@chakra-ui/icons';
import { theme } from '../util/theme';

// import React from 'react';

function TableSearch() {
    return (
        <Box mt="50px" bg="#F5E0B1" p="4" borderRadius="md" width="100%" >
            <form>
                <Box mb="2">
                    <FormLabel fontSize={theme.dashboardButtons.fontSize}>Student search</FormLabel>
                    <InputGroup>
                        <Input
                            bg={theme.colors.customWhite}
                            fontSize={theme.dashboardButtons.fontSize}
                            placeholder="Search by student"
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
                        />
                        <InputRightElement>
                            <Search2Icon color="gray.300" />
                        </InputRightElement>
                    </InputGroup>
                </Box>
            </form>
        </Box>
    );
}

export default TableSearch;
