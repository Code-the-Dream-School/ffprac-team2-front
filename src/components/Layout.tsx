import { Box, Flex } from '@chakra-ui/react';
import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { useLocation } from 'react-router-dom';
import backgroundImage from '../assets/new_bg.jpg';

const Layout: React.FC = () => {
    const location = useLocation();
    let bgLayout, sizeHeader, showBackground;
    if (location.pathname === '/') {
        bgLayout = {
            maxWidth: '100',
        };
        sizeHeader = {
            maxWidth: '1440px',
            margin: '0 auto',
        };
        showBackground = true;
    } else {
        bgLayout = {
            maxWidth: '1440px',
        };
        sizeHeader = {
            maxWidth: 'inherit',
            margin: '0 auto',
        };
        showBackground = false;
    }

    return (
        <Flex w="full" direction="column" className="layout" style={bgLayout}>
            <Header sizeHeader={sizeHeader} />
            <Flex direction="column" w="full" className="main-content" position="relative">
                {showBackground && (
                    <Box
                        w="full"
                        h="full"
                        bgImage={`url(${backgroundImage})`}
                        bgSize="cover"
                        bgPos="center"
                        bgRepeat="no-repeat"
                        position="absolute"
                        zIndex="-1"
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
                <Outlet />
            </Flex>
            <Footer sizeHeader={sizeHeader} />
        </Flex>
    );
};
export default Layout;
