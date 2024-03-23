import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#E7E0D6',
        color: '#000000',
        fontSize: '11px', 
      },
    },
  },
  colors: {
    customWhite: '#FFFFFF', 
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'normal', 
      },
      sizes: {
         // landingButtons size as a custom size for buttons
        landing: {
            h: '75px', 
            minW: '350px', 
            fontSize: '24px',
          },
        // dashboardButtons size as a custom size for buttons
        dashboard: {
          h: '35px', 
          fontSize: '12px', 
          fontWeight: '700', 
        },
      },
      variants: {
        // button variants. (dashboardButtons styles as variants)
        buttonYellow: {
          bg: '#F4CD76',
          _hover: {
            bg: 'grey.400',
          },
        },
        buttonTeal: {
          bg: '#59D3C8',
          _hover: {
            bg: 'grey.400',
          },
        },
      },
    },
  },
});

/*
import { extendTheme } from '@chakra-ui/react';

// example theme
export const theme = extendTheme({
    styles: {
        global: {
            // styles for the `body`
            body: {
                bg: '#E7E0D6',
                color: '#000000',
                fontSize: '11px',
            },
        },
    },
    //styles for Dashboard
    colors: {
        customWhite: '#FFFFFF',
    },
    dashboardButtons: {
        buttonYellow: {
            bg: '#F4CD76',
            _hover: {
                bg: 'grey.400',
            },
        },
        buttonTeal: {
            bg: '#59D3C8',
            _hover: {
                bg: 'grey.400',
            },
        },
        height: '35px',
        fontSize: '12px',
        fontWeight: '700',
    },
});
*/
// Default braikpoints for informational purposes
// const breakpoints = {
//     base: "0em", // 0px
//     sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
//     md: "48em", // ~768px
//     lg: "62em", // ~992px
//     xl: "80em", // ~1280px
//     "2xl": "96em", // ~1536px
//   };
