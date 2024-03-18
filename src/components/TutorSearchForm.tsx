import { Flex, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React, { useState } from 'react';

import { SearchIcon } from '@chakra-ui/icons';

interface SearchFormProps {
    onSearch: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <Flex justifyContent="flex-end" w="350px" mt="20px">
            <InputGroup>
                <Input
                    variant="outline"
                    bg="white"
                    placeholder="Enter your subject to find tutor"
                    value={query}
                    maxLength={50}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <InputRightElement>
                    <IconButton
                        aria-label="Search"
                        icon={<SearchIcon />}
                        onClick={handleSearch}
                        colorScheme="teal"
                    />
                </InputRightElement>
            </InputGroup>
        </Flex>
    );
};

export default SearchForm;
