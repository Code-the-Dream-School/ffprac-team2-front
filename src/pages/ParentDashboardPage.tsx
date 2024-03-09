import React from 'react';
import { Button, Stack, Flex, Spacer } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const ParentDashboardPage: React.FC = () => {
  return (
    <Flex>
      <Spacer />
      <Stack direction="row" spacing={4}>
        <Button leftIcon={<AddIcon />} colorScheme="yellow" size="lg" variant="solid">
          Add Student
        </Button>
      </Stack>
    </Flex>
  );
};

export default ParentDashboardPage;
