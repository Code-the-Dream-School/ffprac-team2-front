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
    components: {
        Button: {
          baseStyle: {
            fontWeight: 'normal', // Base font weight
          },
          sizes: {
            landing: {
              h: '70px',
              minW: '350px',
              fontSize: '24px',
            },
          },
          variants: {
            parent: {
              bg: '#59D3C8',
              color: 'black',
              _hover: {
                bg: '#47b3ab',
              },
            },
            tutor: {
              bg: '#F4CD76',
              color: 'black',
              _hover: {
                bg: '#d3b564',
              },
            },
          },
        },
      },    
});
