import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <>
            <h1>Header</h1>
            <NavLink to={'/tutorsearch'}>to tutor search</NavLink>
        </>
    );
};

export default Header;
