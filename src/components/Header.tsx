import React from 'react';
import { NavLink } from 'react-router-dom';

type HeaderProps = {
    sizeHeader: {
        maxWidth: string;
        margin: string;
        display: string;
    };
};

const Header: React.FC<HeaderProps> = ({ sizeHeader }) => {
    return (
        <header style={sizeHeader}>
            <h1>Header</h1>
            <NavLink to={'/tutorsearch'}>to tutor search</NavLink>
        </header>
    );
};

export default Header;
