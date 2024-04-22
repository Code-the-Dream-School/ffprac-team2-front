import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Text, useBreakpointValue } from '@chakra-ui/react';

type FooterProps = {
    sizeHeader: {
        maxWidth: string;
        margin: string;
    };
};

const Footer: React.FC<FooterProps> = ({ sizeHeader }) => {
    const currentYear = new Date().getFullYear();
    const fontSize = useBreakpointValue({ base: '12px', md: '14px' });
    const copyrightFontSize = useBreakpointValue({ base: 'xs', md: 'sm' });
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
                    <Link to="/about" style={linkStyle}>
                        About
                    </Link>
                    <Link to="/team" style={linkStyle}>
                        Our Team
                    </Link>
                    <Link
                        to="https://ffprac-team2-back.onrender.com/docs"
                        style={linkStyle}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        API Documentation
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Footer;
