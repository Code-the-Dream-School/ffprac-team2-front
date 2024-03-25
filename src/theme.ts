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