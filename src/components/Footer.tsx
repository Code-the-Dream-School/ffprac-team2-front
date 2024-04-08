import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Text, useBreakpointValue } from '@chakra-ui/react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const fontSize = useBreakpointValue({ base: '16px', md: '20px' });
    const linkStyle = {
        fontSize: fontSize,
        marginRight: '20px',
        fontWeight: 'bold',
    };

    return (
        <Box as="footer" className="footer">
            <Flex
                justifyContent="space-between"
                alignItems="center"
                direction={{ base: 'column-reverse', md: 'row' }}
                padding={3}
            >
                <Text
                    fontSize="sm"
                    marginLeft={'10px'}
                >{`@ ${currentYear} All Rights Reserved`}</Text>
                <Flex marginBottom={{ base: '4px', md: '0' }}>
                    <Link to="/about" style={linkStyle}>
                        About
                    </Link>
                    <Link to="/team" style={linkStyle}>
                        Our Team
                    </Link>
                    <Link to="/api-docs" style={linkStyle}>
                        API Documentation
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Footer;
