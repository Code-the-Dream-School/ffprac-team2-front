import React, { useEffect, useRef } from 'react';
import {
    Avatar,
    Box,
    Flex,
    Button,
    Link,
    IconButton,
    useDisclosure,
    VStack,
    Portal,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoLogOutSharp } from 'react-icons/io5';

const Navigation: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const cancelRef = useRef(); // Ref for the drawer

    // Parse the userData string into an object
    const userDataString = localStorage.getItem('userData');
    const userData = userDataString ? JSON.parse(userDataString) : null;
    const isLoggedIn = !!userData;
    const role = userData?.role;
    // user data - firstName and lastName
    const initials = userData ? `${userData.firstName[0]}${userData.lastName[0]}` : 'NN';
    console.log(initials);

    const handleLogout = () => {
        localStorage.clear(); // To remove all local storage items
        navigate('/');
    };

    // Close drawer on outside click
    useEffect(() => {
        const closeOnOutsideClick = (event: any) => {
            if (isOpen && cancelRef.current && !cancelRef.current.contains(event.target)) {
                onClose();
            }
        };

        // Attach click listener
        document.addEventListener('mousedown', closeOnOutsideClick);

        return () => {
            // Clean up the listener
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

        // Attach scroll listener
        window.addEventListener('scroll', closeOnScroll, { passive: true });

        return () => {
            // Clean up the listener
            window.removeEventListener('scroll', closeOnScroll);
        };
    }, [isOpen, onClose]);

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
            >
                {/* Mobile Menu Icon */}
                <IconButton
                    icon={<HamburgerIcon />}
                    onClick={onOpen}
                    display={{ base: 'flex', md: 'none' }}
                    aria-label="Open Menu"
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
                    <Link
                        as={NavLink}
                        to="/"
                        fontSize="20px"
                        _hover={{ textDecoration: 'none', color: 'yellow.950' }}
                    >
                        Home
                    </Link>

                    {isLoggedIn && role === 'tutor' && (
                        <>
                            <Button
                                as={NavLink}
                                to="/tutordashboard"
                                fontSize="20px"
                                _hover={{ textDecoration: 'none', color: 'yellow.950' }}
                                bg="#E7E0D6"
                            >
                                My Dashboard
                            </Button>
                        </>
                    )}

                    {isLoggedIn && role === 'parent' && (
                        <Button
                            as={NavLink}
                            to="/parent-dashboard"
                            fontSize="20px"
                            _hover={{ textDecoration: 'none', color: 'yellow.950' }}
                            bg="#E7E0D6"
                        >
                            My Dashboard
                        </Button>
                    )}

                    <Button
                        as={NavLink}
                        to="/tutorsearch"
                        fontSize="20px"
                        bg="#F4CD76"
                        _hover={{ bg: '#F4CD76' }}
                        size="navigation"
                    >
                        Browse Tutors
                    </Button>

                    {isLoggedIn && role === 'tutor' && (
                        <>
                            <Avatar
                                as={NavLink}
                                to="/tutor-profile"
                                bg="#D9D9D9"
                                color="black"
                                name={initials}
                                src={userData.avatar}
                            />
                        </>
                    )}

                    {isLoggedIn && (
                        <IconButton
                            icon={<IoLogOutSharp />}
                            onClick={handleLogout}
                            fontSize="20px"
                            variant="unstyled"
                            aria-label="Logout"
                        />
                    )}

                    {!isLoggedIn && (
                        <Button
                            as={NavLink}
                            to="/auth"
                            fontSize="20px"
                            bg="#59D3C8"
                            _hover={{ bg: '#59D3C8' }}
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
                        top="80px"
                        left="0"
                        right="0"
                        zIndex="overlay"
                    >
                        <VStack spacing={4} bg="#E7E0D6" p={4} onClick={onClose}>
                            <Link as={NavLink} to="/" onClick={onClose}>
                                Home
                            </Link>

                            {isLoggedIn && role === 'tutor' && (
                                <Link as={NavLink} to="/tutordashboard" onClick={onClose}>
                                    My Dashboard
                                </Link>
                            )}

                            {isLoggedIn && role === 'parent' && (
                                <Link as={NavLink} to="/parent-dashboard" onClick={onClose}>
                                    My Dashboard
                                </Link>
                            )}
                            <Link as={NavLink} to="/tutorsearch" onClick={onClose}>
                                Browse Tutors
                            </Link>
                            {isLoggedIn && role === 'tutor' && (
                                <>
                                    <Avatar
                                        as={NavLink}
                                        to="/tutor-profile"
                                        onClick={onClose}
                                        bg="#D9D9D9"
                                        name={initials}
                                        src={userData.avatar}
                                    />
                                </>
                            )}
                            {isLoggedIn ? (
                                <IconButton
                                    icon={<IoLogOutSharp />}
                                    onClick={handleLogout}
                                    size="20px"
                                    variant="unstyled"
                                    aria-label="Logout"
                                />
                            ) : (
                                <Link as={NavLink} to="/auth" onClick={onClose}>
                                    Login
                                </Link>
                            )}
                        </VStack>
                    </Box>
                </Portal>
            )}
        </>
    );
};

export default Navigation;
