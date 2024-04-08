import React from 'react';
import { NavLink } from 'react-router-dom';
import { Flex, Image, Text } from '@chakra-ui/react';
import Navigation from './Navigation'; 
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  return (
    <Flex as="header" align="center" justify="space-between" wrap="wrap" padding="4" position="sticky" top="0" zIndex="banner">
      <NavLink to="/">
        <Flex align="center" gap={{ base: "3rem", sm: '2rem' }}>
          <Image src={logo} alt="GetYourTutor" boxSize={{ base: '60px', lg: '80px' }} />
          <Text fontSize={{ base: '29px', sm: '25g' }}  ml={2}>GetYourTutor</Text>
        </Flex>
      </NavLink>

      {/* Navigation Links - tutor/parent role and login logic */}
      <Navigation />
    </Flex>
  );

};

export default Header;
