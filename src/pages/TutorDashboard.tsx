import { Box, Button, Flex } from '@chakra-ui/react';

import { BsChevronDown } from 'react-icons/bs';
import TableSearch from '../components/TableSearch';
import TutorTable from '../components/TutorTable';
import { theme } from '../util/theme';
import { useState } from 'react';

function TutorDashboard() {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <Flex direction="column">
            <Box display={{ base: 'block', md: 'none' }} width="100%" mt="50px">
                <Button
                    bg={theme.colors.customYellow}
                    rightIcon={<BsChevronDown />}
                    onClick={() => setShowSearch(!showSearch)}
                    width="100%"
                >
                    Search
                </Button>
                {showSearch && <TableSearch />}
            </Box>
            <Flex direction={{ base: 'column', md: 'row' }}>
                <Box
                    display={{ base: 'none', md: 'block' }}
                    width={{ base: '100%', md: 'auto' }}
                    mr="20px"
                >
                    <TableSearch />
                </Box>
                <Box
                    flex="1"
                    overflowX={{ base: 'auto', md: 'unset' }}
                    overflowY="hidden"
                    mt={{ base: '0', md: '0' }}
                >
                    <TutorTable />
                </Box>
            </Flex>
        </Flex>
    );
}

export default TutorDashboard;
