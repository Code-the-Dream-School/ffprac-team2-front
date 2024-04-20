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
            //padding="4"
            position="sticky"
            top="0"
            zIndex="banner"
            w="full"
        >
            <NavLink to="/">
                <Flex
                    align="center"
                    justifyContent={{ base: 'center', md: 'flex-start' }}
                    gap={{ base: '4rem', sm: '2rem' }}
                    width={{ md: 'auto', base: '100%' }}
                >
                    <Image
                        src={logo}
                        alt="GetYourTutor"
                        boxSize={{ base: '50px', xl: '60px' }}
                        mr={{ base: '1rem', sm: '2rem' }}
                        ml={{ base: '1rem', md: '20px' }}
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
