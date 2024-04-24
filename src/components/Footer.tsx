import { Box, Button, Flex, Text, useBreakpointValue } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import React from 'react';

type FooterProps = {
    sizeHeader: {
        maxWidth: string;
        margin: string;
    };
};

const Footer: React.FC<FooterProps> = ({ sizeHeader }) => {
    const currentYear = new Date().getFullYear();
    const fontSize = useBreakpointValue({ base: '12px', md: '14px' });
    const copyrightFontSize = useBreakpointValue({ base: '10px', md: '12px' });
    const headerStyles = {
        maxWidth: sizeHeader.maxWidth,
        margin: sizeHeader.margin,
    };
    const linkStyle = {
        fontSize: fontSize,
        marginRight: '20px',
        fontWeight: 'bold',
    };

    return (
        <Box as="footer" className="footer" {...headerStyles} width={'full'}>
            <Flex
                justifyContent="space-between"
                alignItems={{ base: 'left', sm: 'center' }}
                direction={{ base: 'column-reverse', md: 'row' }}
                padding={3}
            >
                <Text
                    fontSize={copyrightFontSize}
                    marginLeft={{ base: '0px', sm: '10px' }}
                >{`@ ${currentYear} All Rights Reserved`}</Text>
                <Flex
                    marginBottom={{ base: '4px', md: '0' }}
                    direction={{ base: 'column', sm: 'row' }}
                >
                    <Link to="/about">
                        <Button
                            style={linkStyle}
                            fontSize="12px"
                            fontWeight="bold"
                            height="30px"
                            _hover={{ bg: '#FFFFFF' }}
                            bg="#E7E0D6"
                        >
                            About
                        </Button>
                    </Link>
                    <Link to="/team">
                        <Button
                            style={linkStyle}
                            fontSize="12px"
                            fontWeight="bold"
                            height="30px"
                            _hover={{ bg: '#FFFFFF' }}
                            bg="#E7E0D6"
                        >
                            Our Team
                        </Button>
                    </Link>
                    <Button
                        as="a"
                        href="https://ffprac-team2-back.onrender.com/docs"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyle}
                        fontSize={fontSize}
                        fontWeight="bold"
                        height="30px"
                        _hover={{ bg: '#FFFFFF' }}
                        bg="#E7E0D6"
                    >
                        API Documentation
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Footer;
