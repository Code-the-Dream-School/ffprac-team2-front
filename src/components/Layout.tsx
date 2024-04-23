import { Box, Flex } from '@chakra-ui/react';
import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { useLocation } from 'react-router-dom';
import backgroundImage from '../assets/new_bg.jpg';

const Layout: React.FC = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const notFoundPage = location.pathname === '/notFound';
    const sizeHeader = { maxWidth: '1440px', margin: '0 auto' };
    const contentStyle = {
        maxWidth: isHomePage || notFoundPage ? 'full' : '1440px',
        margin: isHomePage || notFoundPage ? '0 auto' : '0 auto',
        width: 'full',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <Flex w="full" direction="column" className="layout">
            <Header sizeHeader={sizeHeader} />
            <Flex direction="column" w="full" className="main-content" position="relative">
                {isHomePage && (
                    <Box
                        w="full"
                        h="full"
                        bgImage={`url(${backgroundImage})`}
                        bgSize="cover"
                        bgPos="center"
                        bgRepeat="no-repeat"
                        position="absolute"
                        zIndex="-1"
                        left={0}
                        right={0}
                        top={0}
                        bottom={0}
                        _after={{
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            bg: 'white',
                            opacity: '0.4',
                        }}
                    />
                )}
                <Flex sx={contentStyle}>
                    <Outlet />
                </Flex>
            </Flex>
            <Footer sizeHeader={sizeHeader} />
        </Flex>
    );
};
export default Layout;
