import {
    Avatar,
    Box,
    Button,
    Flex,
    IconButton,
    Portal,
    VStack,
    useDisclosure,
} from '@chakra-ui/react';
import { IoCloseCircleOutline, IoLogOutSharp } from 'react-icons/io5';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';

import { HamburgerIcon } from '@chakra-ui/icons';
import { useGlobal } from '../context/useGlobal';

const Navigation: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const cancelRef = useRef<HTMLDivElement>(null);
    const { dispatch, tutor } = useGlobal();
    const location = useLocation();
    const [highlightedLink, setHighlightedLink] = useState<string>('');

    // Parse the userData
    const userDataString = localStorage.getItem('userData');
    const userData = userDataString ? JSON.parse(userDataString) : null;
    const isLoggedIn = !!userData;
    const role = userData?.role;
    const initials = userData ? `${userData.firstName[0]} ${userData.lastName[0]}` : 'NN';

    const handleLogout = () => {
        localStorage.clear();
        dispatch({ type: 'SET_USER', payload: null });
        dispatch({ type: 'SET_IS_LOGGED_IN', payload: false });
        dispatch({ type: 'SET_STUDENTS', payload: [] });
        dispatch({ type: 'SET_TUTOR', payload: null });
        navigate('/');
    };

    // Close drawer on outside click
    useEffect(() => {
        const closeOnOutsideClick = (event: MouseEvent) => {
            if (isOpen && cancelRef.current && !cancelRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', closeOnOutsideClick);
        return () => {
            document.removeEventListener('mousedown', closeOnOutsideClick);
        };
    }, [isOpen, onClose]);

    // Close drawer on scroll
    useEffect(() => {
        const closeOnScroll = () => {
            if (isOpen) {
                onClose();
            }
        };

        // scroll listener
        window.addEventListener('scroll', closeOnScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', closeOnScroll);
        };
    }, [isOpen, onClose]);

    useEffect(() => {
        if (location.pathname === '/tutordashboard') {
            setHighlightedLink('tutordashboard');
        } else if (location.pathname === '/parentdashboard') {
            setHighlightedLink('parentdashboard');
        } else {
            setHighlightedLink('');
        }
    }, [location.pathname]);
    return (
        <>
            {/* Header Section */}
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                padding="4"
                bg="#E7E0D6"
                _hover={{ bg: '#E7E0D6' }}
            >
                {/* Mobile Menu Icon */}
                <IconButton
                    icon={
                        isOpen ? (
                            <IoCloseCircleOutline size="24px" />
                        ) : (
                            <HamburgerIcon h="20px" w="20px" />
                        )
                    }
                    onClick={isOpen ? onClose : onOpen}
                    display={{ base: 'flex', md: 'none' }}
                    aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
                    bg="#E7E0D6"
                    _hover={{ bg: '#E7E0D6' }}
                    color="black"
                />

                {/* Menu for Larger Screens */}
                <Flex
                    align="center"
                    justify="flex-end"
                    gap={{ base: '4rem', sm: '2rem' }}
                    display={{ base: 'none', md: 'flex' }}
                    width="auto"
                    flexGrow={1}
                >
                    <Button
                        as={NavLink}
                        to="/"
                        fontSize="12px"
                        fontWeight="bold"
                        height="30px"
                        _hover={{ bg: '#FFFFFF' }}
                        bg="#E7E0D6"
                    >
                        Home
                    </Button>

                    {isLoggedIn && role === 'tutor' && (
                        <>
                            <Button
                                as={NavLink}
                                to="/tutordashboard"
                                fontSize="12px"
                                fontWeight="bold"
                                height="30px"
                                _hover={{ bg: '#FFFFFF' }}
                                bg={highlightedLink === 'tutordashboard' ? '#FFFFFF' : '#E7E0D6'}
                                color={highlightedLink === 'tutordashboard' ? 'black' : 'inherit'}
                            >
                                My Dashboard
                            </Button>
                        </>
                    )}

                    {isLoggedIn && role === 'parent' && (
                        <Button
                            as={NavLink}
                            to="/parentdashboard"
                            fontSize="12px"
                            fontWeight="bold"
                            height="30px"
                            _hover={{ bg: '#FFFFFF' }}
                            bg={highlightedLink === 'parentdashboard' ? '#FFFFFF' : '#E7E0D6'}
                            color={highlightedLink === 'parentdashboard' ? 'black' : 'inherit'}
                        >
                            My Dashboard
                        </Button>
                    )}

                    <Button
                        as={NavLink}
                        to="/tutorsearch"
                        fontSize="12px"
                        fontWeight="bold"
                        bg="#F4CD76"
                        _hover={{ bg: '#FFFFFF' }}
                        h="30px"
                        w="120px"
                    >
                        Browse Tutors
                    </Button>

                    {isLoggedIn && role === 'tutor' && (
                        <>
                            <Avatar
                                as={NavLink}
                                size="sm"
                                to="/tutorprofile"
                                bg="#FFFFFF"
                                color="black"
                                name={initials}
                                src={tutor?.avatar}
                                boxSize="40px"
                            />
                        </>
                    )}

                    {isLoggedIn && (
                        <IconButton
                            icon={<IoLogOutSharp size="25px" />}
                            onClick={handleLogout}
                            fontSize="12px"
                            fontWeight="bold"
                            variant="unstyled"
                            aria-label="Logout"
                            _hover={{ transform: 'scale(1.2)' }}
                            transition="transform 0.2s ease"
                        />
                    )}

                    {!isLoggedIn && (
                        <Button
                            as={NavLink}
                            to="/auth?activeTab=login"
                            fontSize="12px"
                            fontWeight="bold"
                            bg="#59D3C8"
                            _hover={{ bg: '#FFFFFF' }}
                            size="navigation"
                        >
                            Login
                        </Button>
                    )}
                </Flex>
            </Flex>

            {/* Mobile Menu */}
            {isOpen && (
                <Portal>
                    <Box
                        ref={cancelRef}
                        position="fixed"
                        top="65px"
                        left="0"
                        right="0"
                        zIndex="overlay"
                        shadow="md"
                        bg="#E7E0D6"
                        p={4}
                        onClick={onClose}
                    >
                        <VStack spacing={4} p={4} onClick={onClose}>
                            <Button
                                as={NavLink}
                                fontSize="12px"
                                fontWeight="bold"
                                height="30px"
                                bg="#E7E0D6"
                                _hover={{ bg: '#FFFFFF' }}
                                to="/"
                                onClick={onClose}
                            >
                                Home
                            </Button>

                            {isLoggedIn && role === 'tutor' && (
                                <Button
                                    as={NavLink}
                                    fontSize="12px"
                                    fontWeight="bold"
                                    bg="#E7E0D6"
                                    _hover={{ bg: '#FFFFFF' }}
                                    to="/tutordashboard"
                                    onClick={onClose}
                                >
                                    My Dashboard
                                </Button>
                            )}

                            {isLoggedIn && role === 'parent' && (
                                <Button
                                    as={NavLink}
                                    fontSize="12px"
                                    fontWeight="bold"
                                    bg="#E7E0D6"
                                    _hover={{ bg: '#FFFFFF' }}
                                    to="/parentdashboard"
                                    onClick={onClose}
                                >
                                    My Dashboard
                                </Button>
                            )}
                            <Button
                                as={NavLink}
                                to="/tutorsearch"
                                fontSize="12px"
                                fontWeight="bold"
                                bg="#F4CD76"
                                height="30px"
                                width="150px"
                                _hover={{ bg: '#FFFFFF' }}
                                onClick={onClose}
                            >
                                Browse Tutors
                            </Button>
                            {isLoggedIn && role === 'tutor' && (
                                <>
                                    <Avatar
                                        as={NavLink}
                                        size="sm"
                                        to="/tutorprofile"
                                        onClick={onClose}
                                        bg="#D9D9D9"
                                        color="black"
                                        boxSize="40px"
                                        name={initials}
                                        src={tutor?.avatar}
                                    />
                                </>
                            )}
                            {isLoggedIn ? (
                                <Flex align="center" justify="center" ml="15px">
                                    <IconButton
                                        icon={<IoLogOutSharp size="25px" />}
                                        onClick={handleLogout}
                                        variant="unstyled"
                                        aria-label="Logout"
                                        _hover={{ transform: 'scale(1.2)' }}
                                        transition="transform 0.2s ease"
                                    />
                                </Flex>
                            ) : (
                                <Button
                                    as={NavLink}
                                    to="/auth?activeTab=login"
                                    bg="#59D3C8"
                                    fontSize="12px"
                                    fontWeight="bold"
                                    height="30px"
                                    width="150px"
                                    _hover={{ bg: '#FFFFFF' }}
                                    onClick={onClose}
                                >
                                    Login
                                </Button>
                            )}
                        </VStack>
                    </Box>
                </Portal>
            )}
        </>
    );
};

export default Navigation;
