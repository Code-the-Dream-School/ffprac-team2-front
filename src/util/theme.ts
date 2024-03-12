import { extendTheme } from '@chakra-ui/react';

// example theme
export const theme = extendTheme({
    styles: {
        global: {
            // styles for the `body`
            body: {
                bg: '#E7E0D6',
                color: '#000000',
            },
        },
    },
});

// Default braikpoints for informational purposes
// const breakpoints = {
//     base: "0em", // 0px
//     sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
//     md: "48em", // ~768px
//     lg: "62em", // ~992px
//     xl: "80em", // ~1280px
//     "2xl": "96em", // ~1536px
//   };
