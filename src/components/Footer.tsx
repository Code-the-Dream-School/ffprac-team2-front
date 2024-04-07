import React from 'react';

type FooterProps = {
    sizeHeader: {
        maxWidth: string;
        margin: string;
        display: string;
    };
};

const Footer: React.FC<FooterProps> = ({ sizeHeader }) => {
    return <footer style={sizeHeader}>Footer</footer>;
};

export default Footer;
