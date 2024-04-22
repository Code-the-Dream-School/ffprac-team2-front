import React from 'react';
import { NavLink } from 'react-router-dom';
import { Flex, Image, Text } from '@chakra-ui/react';
import Navigation from './Navigation';
import logo from '../assets/logo.png';

type HeaderProps = {
    sizeHeader: {
        maxWidth: string;
        margin: string;
    };
};

const Header: React.FC<HeaderProps> = ({ sizeHeader }) => {
    const headerStyles = {
        maxWidth: sizeHeader.maxWidth,
        margin: sizeHeader.margin,
    };

    return (
        <Flex
            as="header"
            {...headerStyles}
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="3px"
            position="sticky"
            top="0"
            zIndex="banner"
            w="full"
        >
            <NavLink to="/">
                <Flex
                    align="center"
                    justifyContent={{ base: 'center', md: 'flex-start' }}
                    w="full"
                    gap={{ base: '1rem', sm: '5px' }}
                    width={{ md: 'auto', base: '100%' }}
                >
                    <Image
                        src={logo}
                        alt="GetYourTutor"
                        boxSize={{ base: '50px', xl: '55px' }}
                        mr={{ base: '1rem', sm: '10px' }}
                        ml={{ base: '1rem', sm: '10px' }}
                    />
                    <Text
                        fontSize={{ base: '14px' }}
                        fontWeight="bold"
                        fontFamily="'Inter', sans-serif"
                    >
                        GetYourTutor
                    </Text>
                </Flex>
            </NavLink>

            {/* Navigation Links - depend on tutor/parent role and login logic */}
            <Navigation />
        </Flex>
    );
};

export default Header;
