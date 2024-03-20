import { Flex } from '@chakra-ui/react';
import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import React from 'react';
const Layout: React.FC = () => {
    return (
        <Flex w="full" direction="column" className="layout">
            <Header />
            <Flex direction="column" w="full" className="main-content">
                <Outlet />
            </Flex>
            <Footer />
        </Flex>
    );
};
export default Layout;
